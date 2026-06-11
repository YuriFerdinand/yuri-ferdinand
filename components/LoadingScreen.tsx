'use client';
import { useEffect, useState } from 'react';

interface LoadingScreenProps {
  onComplete: () => void;
}

export default function LoadingScreen({ onComplete }: LoadingScreenProps) {
  const [progress, setProgress] = useState(0);
  const [leaving, setLeaving] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      setProgress(prev => {
        if (prev >= 100) {
          clearInterval(interval);
          // Delay sebelum animasi keluar
          setTimeout(() => {
            setLeaving(true);
            setTimeout(onComplete, 800); // tunggu animasi selesai
          }, 300);
          return 100;
        }
        return Math.min(100, prev + Math.floor(Math.random() * 8) + 3);
      });
    }, 100);

    return () => clearInterval(interval);
  }, []);

  return (
    <div
      className="fixed inset-0 z-[9999] flex flex-col items-center justify-center gap-8 bg-[#0a0a0a]"
      style={{
        // Curtain — terbagi dua ke atas bawah
        clipPath: leaving
          ? 'inset(50% 0 50% 0)'
          : 'inset(0% 0 0% 0)',
        transition: leaving
          ? 'clip-path 0.8s cubic-bezier(0.76, 0, 0.24, 1)'
          : 'none',
      }}
    >
      {/* Eyebrow */}
      <span
        className="text-[10px] tracking-[0.14em] uppercase"
        style={{ color: '#555' }}
      >
        Portfolio
      </span>

      {/* Logo */}
      <h1
        className="text-2xl font-bold"
        style={{ color: '#e8e6e0', letterSpacing: '0.04em' }}
      >
        Yuri Ferdinand
      </h1>

      {/* Progress bar */}
      <div className="flex flex-col items-center gap-2">
        <div
          className="h-px bg-[#2a2a2a] overflow-hidden"
          style={{ width: '180px' }}
        >
          <div
            className="h-full bg-[#c9a96e] transition-all duration-150 ease-out"
            style={{ width: `${progress}%` }}
          />
        </div>
        <span
          className="text-[11px] font-mono"
          style={{ color: '#c9a96e' }}
        >
          {progress}%
        </span>
      </div>
    </div>
  );
}