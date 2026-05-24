// components/AOSProvider.tsx
'use client';

import React, { useEffect, ReactNode } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';

interface AOSProviderProps {
  children: ReactNode;
}

export default function AOSProvider({ children }: AOSProviderProps) {
  useEffect(() => {
    AOS.init({
      duration: 1000, // Durasi animasi (milidetik)
      once: true,     // Animasi hanya berjalan sekali
      easing: 'ease-out-cubic',
    });
  }, []);

  return <>{children}</>;
}