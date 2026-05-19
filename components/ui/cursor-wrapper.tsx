// components/ui/cursor-wrapper.tsx
"use client";

import dynamic from "next/dynamic";

// The ssr: false option is perfectly valid here inside a Client Component
const SmoothFollower = dynamic(() => import("./smooth-cursor"), {
  ssr: false,
});

export default function CursorWrapper() {
  return <SmoothFollower />;
}
