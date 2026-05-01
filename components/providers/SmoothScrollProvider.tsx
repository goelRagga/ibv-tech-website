"use client";

import { ReactLenis } from "lenis/react";
import "lenis/dist/lenis.css";
import ScrollToTop from "@/components/ScrollToTop";

export function SmoothScrollProvider({ children }: { children: React.ReactNode }) {
  return (
    <ReactLenis
      root
      options={{
        lerp: 0.08,
        smoothWheel: true,
        wheelMultiplier: 0.85,
        touchMultiplier: 1.5,
      }}
    >
      <ScrollToTop />
      {children}
    </ReactLenis>
  );
}
