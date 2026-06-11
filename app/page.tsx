"use client"
import About from "@/components/About";
import Projects from "@/components/Projects";
import Contact from "@/components/Contact";
import Threads from "@/components/ui/background-threads";
import { useState, useEffect, useRef } from "react";
import { useMediaQuery } from "@/components/hooks/useMediaQuery";

export default function HomePage() {
  const [ready, setReady] = useState(false);
  const isMobile = useMediaQuery('(max-width: 768px)');

  useEffect(() => {
    const t = setTimeout(() => setReady(true), 100);
    return () => clearTimeout(t);
  }, []);

  return (
    <main className="pt-25">
      <section
        id="home"
        className="relative flex -mt-24"
        style={{ height: '100svh', isolation: 'isolate' }}
      >
        <div
          className="absolute inset-0 z-0"
          style={{
            width: '100vw',
            left: '50%',
            transform: 'translateX(-50%)',
            height: '100%',
          }}
        >
          <div
            style={{
              position: 'absolute',
              inset: 0,
              width: '100%',
              height: '100%', 
              opacity: ready ? 1 : 0,
              transition: 'opacity 1.2s ease',
              willChange: 'opacity',
            }}
          >
            <Threads
              color={[0.788, 0.662, 0.431]}
              amplitude={1.2}
              distance={0.1}
              enableMouseInteraction={!isMobile}
              quality={isMobile ? 'low' : 'medium'} 
            />
          </div>
        </div>

        <div className="content-end mb-10 z-10 relative fadeRight">
          <span className="text-6xl italic font-heading text-[#e8e6e0]">
            Make a <span className="text-[#c9a96e] font-semibold">Minimalist</span> Solution <br />
            For a <span className="text-[#c9a96e] font-semibold">Complex</span> Problem.
          </span>
          <p className="text-sm md:text-lg lg:text-lg mt-2 text-[#c9a96e]">Start to make every ideas become real.</p>
        </div>

        <div className="absolute bottom-8 right-4 z-10 flex flex-col items-center gap-2 fadeIn">
          <span
            className="text-[8px] tracking-widest uppercase"
            style={{ color: '#c9a96e', writingMode: 'vertical-rl' }}
          >
            Scroll
          </span>
          <div
            className="w-px h-10 animate-scroll-line"
            style={{ background: 'linear-gradient(to bottom, transparent, #c9a96e)' }}
          />
        </div>
      </section>

      <section id="about" className="py-12 z-10 bg-[#202020] px-4 md:px-0 lg:px-0" style={{ width: '100vw', marginLeft: 'calc(50% - 50vw)' }}>
        <About />
      </section>

      <section id="projects" className="h-full relative z-10 py-12 px-4 md:px-0 lg:px-0">
        <div className="flex flex-col gap-2 pb-6" data-aos="fade-up">
          <h2 className="text-4xl font-bold text-center">Projects</h2>
          <p className="text-xs font-medium tracking-[0.22em] uppercase text-[#c9a96e] text-center">Something that i made</p>
        </div>
        <div className="">
          <Projects />
        </div>
      </section>

      <section id="contact" className="px-4 md:px-0 lg:px-0">
        <div className="relative bg-[#202020] h-0.5 left-1/2 right-1/2 -ml-[50vw] -mr-[50vw] w-screen"></div>
        <div className="flex flex-col gap-2 py-12">
          <div className="mb-6 flex flex-col gap-2" data-aos="fade-up">
            <h2 className="text-4xl font-bold text-center">Contact</h2>
            <p className="text-xs font-medium tracking-[0.22em] uppercase text-[#c9a96e] text-center">Get In Touch</p>
            <p className="text-center text-lg">Open collaboration, freelance projects, and new ideas.</p>
          </div>
          <Contact />
        </div>
      </section>
    </main>
  )
}