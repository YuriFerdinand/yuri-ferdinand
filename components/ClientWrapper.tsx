// components/ClientWrapper.tsx — semua client logic di sini
'use client';
import { useState } from 'react';
import LoadingScreen from '@/components/LoadingScreen';
import Navbar from '@/components/Navbar';
import AOSProvider from './AOSProvider';
import CursorWrapper from './ui/cursor-wrapper';

export default function ClientWrapper({ children }: { children: React.ReactNode }) {
  const [loaded, setLoaded] = useState(false);

  return (
    <>
      {!loaded && <LoadingScreen onComplete={() => setLoaded(true)} />}
       <AOSProvider>
        <Navbar />
        <CursorWrapper />
        <div>
          {children}
        </div>
        <hr className="relative left-1/2 right-1/2 -ml-[50vw] -mr-[50vw] border-t-[#2a2a2a] border-t-2" />
        <footer className="text-center text-[#707070] h-13 flex justify-center items-center">
          @2026 Yuri Ferdinand - All Right Reserved
        </footer>
      </AOSProvider>
    </>
  );
}