"use client";

import { useRef, useEffect, useState } from "react";
import { useScroll, useTransform } from "framer-motion";

export function GrowthSection() {
  const containerRef = useRef<HTMLDivElement>(null);
  const overlayRef = useRef<HTMLDivElement>(null);
  const growthRef = useRef<HTMLSpanElement>(null);
  const basicsRef = useRef<HTMLSpanElement>(null);
  const [vw, setVw] = useState(1440);
  const [vh, setVh] = useState(900);

  useEffect(() => {
    setVw(window.innerWidth);
    setVh(window.innerHeight);
    const onResize = () => { setVw(window.innerWidth); setVh(window.innerHeight); };
    window.addEventListener("resize", onResize);
    return () => window.removeEventListener("resize", onResize);
  }, []);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"],
  });

  const maxRadius = Math.sqrt(vw * vw + vh * vh);

  const circleRadius = useTransform(scrollYProgress, [0, 0.7], [160, maxRadius]);

  useEffect(() => {
    const applyMask = (r: number) => {
      if (!overlayRef.current) return;
      const mask = `radial-gradient(circle ${r}px at 50% 50%, transparent 0px, transparent ${r}px, white ${r}px)`;
      overlayRef.current.style.maskImage = mask;
      (overlayRef.current.style as any).webkitMaskImage = mask;

      // Text color: red outside image, white once image covers them
      const color = r > 300 ? "white" : "#C8102E";
      if (growthRef.current) growthRef.current.style.color = color;
      if (basicsRef.current) basicsRef.current.style.color = color;
    };

    // Apply immediately on mount
    applyMask(circleRadius.get());

    const unsubscribe = circleRadius.on("change", applyMask);
    return unsubscribe;
  }, [circleRadius, vw, vh]);

  const wordStyle: React.CSSProperties = {
    fontSize: "clamp(14px, 4vw, 52px)",
    fontStyle: "normal",
    letterSpacing: "-0.01em",
    lineHeight: 1,
    whiteSpace: "nowrap",
    transition: "color 0.2s ease",
  };

  return (
    <section ref={containerRef} style={{ height: "200vh" }}>
      <div style={{ position: "sticky", top: 0, height: "100vh", overflow: "hidden" }}>

        {/* LAYER 1 — full background image, always visible */}
        <div style={{
          position: "absolute", inset: 0,
          backgroundImage: `url("/Growth_Image.png")`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          zIndex: 0,
        }} />

        {/* LAYER 2 — white overlay with circle hole punched in center */}
        <div
          ref={overlayRef}
          style={{
            position: "absolute", inset: 0,
            backgroundColor: "white",
            zIndex: 10,
          }}
        />

        {/* LAYER 3 — text, never moves */}
        <div style={{
          position: "absolute", inset: 0,
          display: "flex", alignItems: "center", justifyContent: "center",
          zIndex: 30, pointerEvents: "none",
        }}>
          <div style={{ display: "flex", alignItems: "center" }}>

            <span ref={growthRef} className="font-serif" style={{ ...wordStyle, color: "#C8102E", paddingRight: "clamp(6px, 1.5vw, 16px)" }}>
              Growth
            </span>

            {/* Spacer aligns Built/From over circle */}
            <div style={{
              width: "clamp(90px, 28vw, 320px)",
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
            }}>
              <span className="font-serif" style={{ ...wordStyle, color: "white", textShadow: "0 2px 12px rgba(0,0,0,0.3)" }}>
                Built
              </span>
              <span className="font-serif" style={{ ...wordStyle, color: "white", textShadow: "0 2px 12px rgba(0,0,0,0.3)" }}>
                From
              </span>
            </div>

            <span ref={basicsRef} className="font-serif" style={{ ...wordStyle, color: "#C8102E", paddingLeft: "clamp(10px, 2.5vw, 32px)" }}>
              Basics
            </span>

          </div>
        </div>

      </div>
    </section>
  );
}