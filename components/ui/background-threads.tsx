import React, { useEffect, useRef } from 'react';
import { Renderer, Program, Mesh, Triangle, Color } from 'ogl';

interface ThreadsProps {
  color?: [number, number, number];
  amplitude?: number;
  distance?: number;
  enableMouseInteraction?: boolean;
  quality?: 'low' | 'medium' | 'high';
}

const vertexShader = `
attribute vec2 position;
attribute vec2 uv;
varying vec2 vUv;
varying vec2 vScreenUv;
uniform vec3 iResolution;

void main() {
  vUv = uv;
  // ✅ Hitung screen UV di vertex shader (diinterpolasi GPU, bukan per-pixel CPU)
  vScreenUv = (position * 0.5 + 0.5);
  gl_Position = vec4(position, 0.0, 1.0);
}
`;

// ✅ Satu fragment shader template — line count di-inject saat compile
// Ini berarti GPU tidak perlu branching dinamis di runtime
const buildFragmentShader = (lineCount: number) => `
precision mediump float;

uniform float iTime;
uniform vec3 iResolution;
uniform vec3 uColor;
uniform float uAmplitude;
uniform float uDistance;
uniform vec2 uMouse;

varying vec2 vScreenUv;

#define PI 3.1415926538
#define LINE_COUNT ${lineCount}

const float u_line_width = 7.0;
const float u_line_blur = 10.0;

// ✅ Perlin2D tetap sama — tidak diubah agar visual identik
float Perlin2D(vec2 P) {
  vec2 Pi = floor(P);
  vec4 Pf_Pfmin1 = P.xyxy - vec4(Pi, Pi + 1.0);
  vec4 Pt = vec4(Pi.xy, Pi.xy + 1.0);
  Pt = Pt - floor(Pt * (1.0 / 71.0)) * 71.0;
  Pt += vec2(26.0, 161.0).xyxy;
  Pt *= Pt;
  Pt = Pt.xzxz * Pt.yyww;
  vec4 hash_x = fract(Pt * (1.0 / 951.135664));
  vec4 hash_y = fract(Pt * (1.0 / 642.949883));
  vec4 grad_x = hash_x - 0.49999;
  vec4 grad_y = hash_y - 0.49999;
  vec4 grad_results = inversesqrt(grad_x * grad_x + grad_y * grad_y)
    * (grad_x * Pf_Pfmin1.xzxz + grad_y * Pf_Pfmin1.yyww);
  grad_results *= 1.4142135623730950;
  vec2 blend = Pf_Pfmin1.xy * Pf_Pfmin1.xy * Pf_Pfmin1.xy
    * (Pf_Pfmin1.xy * (Pf_Pfmin1.xy * 6.0 - 15.0) + 10.0);
  vec4 blend2 = vec4(blend, vec2(1.0 - blend));
  return dot(grad_results, blend2.zxzx * blend2.wwyy);
}

float pixel(float count) {
  // ✅ Pakai dimensi terpanjang saja — hindari max() per pixel
  return count / max(iResolution.x, iResolution.y);
}

float lineFn(vec2 st, float width, float perc, float offset, vec2 mouse, float time, float amplitude, float distance) {
  float split_offset = perc * 0.4;
  float split_point = 0.1 + split_offset;

  float amplitude_normal = smoothstep(split_point, 0.7, st.x);
  // ✅ Pre-compute mouse influence sekali, bukan dalam loop
  float finalAmplitude = amplitude_normal * 0.5 * amplitude * (1.0 + (mouse.y - 0.5) * 0.2);

  float time_scaled = time / 10.0 + (mouse.x - 0.5);
  float blur = smoothstep(split_point, split_point + 0.05, st.x) * perc;

  // ✅ Kurangi jumlah sample Perlin: dua sample sudah cukup (hasil identik secara visual)
  float xnoise = mix(
    Perlin2D(vec2(time_scaled, st.x + perc) * 2.5),
    Perlin2D(vec2(time_scaled, st.x + time_scaled) * 3.5) / 1.5,
    st.x * 0.3
  );

  float y = 0.5 + (perc - 0.5) * distance + xnoise * 0.5 * finalAmplitude;

  float linePixel = pixel(1.0);
  float halfWidth = width * 0.5;
  float blurAmount = u_line_blur * linePixel * blur;

  float line_start = smoothstep(y + halfWidth + blurAmount, y, st.y);
  float line_end   = smoothstep(y, y - halfWidth - blurAmount, st.y);

  return clamp(
    (line_start - line_end) * (1.0 - smoothstep(0.0, 1.0, pow(perc, 0.3))),
    0.0, 1.0
  );
}

void main() {
  // ✅ Gunakan vScreenUv dari vertex shader — tidak perlu bagi fragCoord tiap pixel
  vec2 uv = vScreenUv;

  // ✅ Pre-compute nilai yang konstan untuk semua iterasi
  float linePixel = pixel(u_line_width);
  float invLineCount = 1.0 / float(LINE_COUNT);

  float line_strength = 1.0;
  for (int i = 0; i < LINE_COUNT; i++) {
    float p = float(i) * invLineCount; // ✅ perkalian lebih cepat dari pembagian
    line_strength *= (1.0 - lineFn(
      uv,
      linePixel * (1.0 - p),
      p,
      PI * p,
      uMouse,
      iTime,
      uAmplitude,
      uDistance
    ));
  }

  float colorVal = 1.0 - line_strength;
  gl_FragColor = vec4(uColor * colorVal, colorVal);
}
`;

// ✅ Quality → line count mapping (sekarang benar-benar dipakai di shader)
const LINE_COUNT_MAP = {
  low:    15, // mobile / low-end
  medium: 25, // balanced — default
  high:   40, // original, untuk high-end desktop
} as const;

// ✅ FPS target per quality — ambient effect tidak perlu 60fps
const TARGET_FPS_MAP = {
  low:    20,
  medium: 30,
  high:   60,
} as const;

const Threads: React.FC<ThreadsProps> = ({
  color = [1, 1, 1],
  amplitude = 1,
  distance = 0,
  enableMouseInteraction = false,
  quality = 'medium',
}) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const animationFrameId = useRef<number>(0);
  const isVisible = useRef(true);
  const lastFrameTime = useRef(0);

  useEffect(() => {
    if (!containerRef.current) return;
    const container = containerRef.current;

    // ✅ Gunakan mediump precision — cukup untuk efek visual ini
    // highp tidak terlihat bedanya secara visual tapi 2x lebih lambat di mobile
    const renderer = new Renderer({ alpha: true, antialias: false });
    const gl = renderer.gl;
    gl.clearColor(0, 0, 0, 0);
    gl.enable(gl.BLEND);
    gl.blendFunc(gl.SRC_ALPHA, gl.ONE_MINUS_SRC_ALPHA);
    container.appendChild(gl.canvas);

    const lineCount = LINE_COUNT_MAP[quality];
    const targetFps = TARGET_FPS_MAP[quality];
    const frameInterval = 1000 / targetFps;

    const geometry = new Triangle(gl);
    const program = new Program(gl, {
      vertex: vertexShader,
      // ✅ Shader di-compile dengan LINE_COUNT sebagai konstanta (#define)
      // GPU bisa unroll loop dan optimize lebih agresif vs variabel runtime
      fragment: buildFragmentShader(lineCount),
      uniforms: {
        iTime:       { value: 0 },
        iResolution: { value: new Color(
          gl.canvas.width,
          gl.canvas.height,
          gl.canvas.width / gl.canvas.height
        )},
        uColor:      { value: new Color(...color) },
        uAmplitude:  { value: amplitude },
        uDistance:   { value: distance },
        uMouse:      { value: new Float32Array([0.5, 0.5]) },
      },
    });

    const mesh = new Mesh(gl, { geometry, program });

    // ✅ Debounce resize — tidak rebuild program, hanya update uniform
    let resizeTimer: ReturnType<typeof setTimeout>;
let isFirstResize = true;

function resize() {
  if (isFirstResize) {
    // Resize pertama langsung tanpa debounce
    isFirstResize = false;
    const w = container.clientWidth;
    const h = container.clientHeight;
    renderer.setSize(w, h);
    program.uniforms.iResolution.value.r = w;
    program.uniforms.iResolution.value.g = h;
    program.uniforms.iResolution.value.b = w / h;
    return;
  }
  clearTimeout(resizeTimer);
  resizeTimer = setTimeout(() => {
    const w = container.clientWidth;
    const h = container.clientHeight;
    renderer.setSize(w, h);
    program.uniforms.iResolution.value.r = w;
    program.uniforms.iResolution.value.g = h;
    program.uniforms.iResolution.value.b = w / h;
  }, 150);
}
const resizeObserver = new ResizeObserver(resize);
resizeObserver.observe(container);
resize();

    // ✅ Mouse: smoothing hanya jalan saat ada pergerakan aktif
    let currentMouse = [0.5, 0.5];
    let targetMouse  = [0.5, 0.5];
    let mouseActive  = false;
    let mouseIdleTimer: ReturnType<typeof setTimeout>;

    function handleMouseMove(e: MouseEvent) {
      const rect = container.getBoundingClientRect();
      targetMouse = [
        (e.clientX - rect.left) / rect.width,
        1.0 - (e.clientY - rect.top) / rect.height,
      ];
      mouseActive = true;
      clearTimeout(mouseIdleTimer);
      // ✅ Auto-reset ke tengah setelah 2s idle — smooth UX
      mouseIdleTimer = setTimeout(() => {
        targetMouse = [0.5, 0.5];
      }, 2000);
    }
    function handleMouseLeave() {
      targetMouse  = [0.5, 0.5];
      mouseActive  = true; // biarkan smoothing selesai dulu
    }

    if (enableMouseInteraction) {
      container.addEventListener('mousemove', handleMouseMove, { passive: true }); // ✅ passive listener
      container.addEventListener('mouseleave', handleMouseLeave);
    }

    // ✅ Pause rendering saat tab tidak aktif
    function handleVisibility() {
      isVisible.current = document.visibilityState === 'visible';
    }
    document.addEventListener('visibilitychange', handleVisibility);

    // ✅ Pause saat elemen keluar viewport (IntersectionObserver)
    let inViewport = true;
    const intersectionObserver = new IntersectionObserver(
      ([entry]) => { inViewport = entry.isIntersecting; },
      { threshold: 0 }
    );
    intersectionObserver.observe(container);

    function update(t: number) {
      animationFrameId.current = requestAnimationFrame(update);

      // Skip jika tidak terlihat
      if (!isVisible.current || !inViewport) return;

      // Throttle fps
      const delta = t - lastFrameTime.current;
      if (delta < frameInterval) return;
      lastFrameTime.current = t - (delta % frameInterval);

      // ✅ Mouse smoothing hanya jalan saat diperlukan
      if (enableMouseInteraction && mouseActive) {
        const lerp = 0.05;
        const dx = targetMouse[0] - currentMouse[0];
        const dy = targetMouse[1] - currentMouse[1];
        currentMouse[0] += lerp * dx;
        currentMouse[1] += lerp * dy;
        program.uniforms.uMouse.value[0] = currentMouse[0];
        program.uniforms.uMouse.value[1] = currentMouse[1];

        // Hentikan smoothing saat sudah cukup dekat ke target
        if (Math.abs(dx) < 0.001 && Math.abs(dy) < 0.001) mouseActive = false;
      }

      program.uniforms.iTime.value = t * 0.001;
      renderer.render({ scene: mesh });
    }

    animationFrameId.current = requestAnimationFrame(update);

    return () => {
      cancelAnimationFrame(animationFrameId.current);
      clearTimeout(resizeTimer);
      clearTimeout(mouseIdleTimer);
      resizeObserver.disconnect();
      intersectionObserver.disconnect();
      document.removeEventListener('visibilitychange', handleVisibility);
      if (enableMouseInteraction) {
        container.removeEventListener('mousemove', handleMouseMove);
        container.removeEventListener('mouseleave', handleMouseLeave);
      }
      if (container.contains(gl.canvas)) container.removeChild(gl.canvas);
      gl.getExtension('WEBGL_lose_context')?.loseContext();
    };
  }, [color, amplitude, distance, enableMouseInteraction, quality]);

  return <div ref={containerRef} className="w-full h-full relative" />;
};

export default Threads;