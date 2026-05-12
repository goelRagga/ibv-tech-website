"use client";

import { Navbar } from "@/components/layout/Navbar";
import { motion } from "framer-motion";
import Link from "next/link";
import { useMediaQuery } from "react-responsive";

// ─── Vertical rain lines ──────────────────────────────────────────────────────
const RAIN_LINES = [
  { delay: 0.0, duration: 2.8 },
  { delay: 1.4, duration: 3.2 },
  { delay: 0.7, duration: 2.5 },
  { delay: 2.1, duration: 3.0 },
  { delay: 0.4, duration: 2.7 },
];

function VerticalRainLines() {
  const count = RAIN_LINES.length;
  return (
    <div
      className="absolute inset-0 pointer-events-none"
      style={{ zIndex: 6 }}
      aria-hidden="true"
    >
      {RAIN_LINES.map((cfg, i) => {
        const pct = (i / (count - 1)) * 100;
        return (
          <div
            key={i}
            style={{
              position: "absolute",
              top: 0,
              bottom: 0,
              left: `${pct}%`,
              width: 1,
              background: "rgba(255,255,255,0.13)",
              overflow: "hidden",
            }}
          >
            <motion.div
              style={{
                position: "absolute",
                left: 0,
                width: "100%",
                height: "18vh",
                background:
                  "linear-gradient(to bottom, transparent 0%, rgba(220,38,38,0.0) 10%, rgba(220,38,38,0.85) 50%, rgba(220,38,38,0.4) 80%, transparent 100%)",
              }}
              animate={{ y: ["-18vh", "100vh"] }}
              transition={{
                duration: cfg.duration,
                delay: cfg.delay,
                repeat: Infinity,
                ease: "linear",
                repeatDelay: 0.4,
              }}
            />
          </div>
        );
      })}
    </div>
  );
}

// ─── Animation variants ───────────────────────────────────────────────────────
const fadeUp = (delay = 0) => ({
  initial: { opacity: 0, y: 24 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.7, delay, ease: [0.22, 1, 0.36, 1] as const },
});

const fadeIn = (delay = 0) => ({
  initial: { opacity: 0 },
  animate: { opacity: 1 },
  transition: { duration: 0.9, delay, ease: "easeOut" as const },
});

// ─── Props ────────────────────────────────────────────────────────────────────
interface HubPageHeroSectionProps {
  eyebrow?: string;
  tagline1?: string;
  tagline2?: string;
  headlineTitle: string;
  description: string;
  backgroundImage?: string;
  maxHeight?: string;
}

// ─── HubPageHeroSection ───────────────────────────────────────────────────────
export function HubPageHeroSection({
  tagline1,
  tagline2,
  headlineTitle,
  description,
  backgroundImage = "/HOMEPAGEBANNER.png",
  maxHeight="160px"
}: HubPageHeroSectionProps) {

    const isMobile = useMediaQuery({ maxWidth: 767 });
  return (
    <section
      className="relative overflow-hidden bg-refresh-black min-h-[560px] h-[80vh]"
    >
      {/* ── Background image ── */}
      <motion.div
        {...fadeIn(0)}
        className="absolute inset-0 pointer-events-none"
        style={{
          backgroundImage: `url("${backgroundImage}")`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
        }}
      />

      {/* ── Dark overlay ── */}
      <div className="absolute inset-0 bg-black/10 pointer-events-none" />

      {/* ── Red radial glow — bottom-left ── */}
      <div
        className="absolute bottom-0 left-0 pointer-events-none"
        style={{
          width: "55vw",
          height: "50vh",
          background:
            "radial-gradient(ellipse at bottom left, rgba(227,10,19,0.26) 0%, transparent 70%)",
        }}
      />

      <VerticalRainLines />

      {/* ── Content wrapper ── */}
      <div className="relative z-10 flex flex-col h-full">
        {/* Navbar */}
        <motion.div {...fadeIn(0.05)} className="relative z-30">
          <Navbar />
        </motion.div>

        {/* Hero body */}
        <div className="flex-1 flex flex-col justify-center px-4 md:px-8 max-w-[95vw] mx-auto w-full pt-10 pb-24 md:pb-32">



          {/* Taglines */}
          {(tagline1 || tagline2) && (
            <motion.div {...fadeUp(0.22)} className="mb-5 ml-0 md:ml-[60%]">
              {tagline1 && (
                <p
                  className="text-white font-bold uppercase leading-tight"
                  style={{ fontSize: "clamp(11px, 1.05vw, 14px)", letterSpacing: "0.01em" }}
                >
                  {tagline1}
                </p>
              )}
              {tagline2 && (
                <p
                  className="text-white font-bold uppercase leading-tight"
                  style={{ fontSize: "clamp(11px, 1.05vw, 14px)", letterSpacing: "0.01em" }}
                >
                  {tagline2}
                </p>
              )}
            </motion.div>
          )}

              {/* Description */}
          <motion.p
            {...fadeUp(0.42)}
            className="text-white leading-tight mb-10 max-w-[450px] ml-0 md:ml-[60%] font-semibold"
            style={{ fontSize: "clamp(14px, 1.05vw, 16px)" }}
          >
            {description}
          </motion.p>

          {/* Main headline */}
          <motion.h1
            {...fadeUp(0.32)}
            className="text-white font-bold leading-tight absolute left-0 right-0 w-[100%] tracking-tight flex justify-center px-4 md:px-0 text-center md:text-left"
            style={{ fontSize: `clamp(35px, 9vw, ${maxHeight})`, letterSpacing: "-0.025em", fontFamily: "var(--font-serif)", alignSelf: "end", justifySelf: "end", bottom: isMobile ? "-5px":"-34px" }}
          >
            {headlineTitle}
          </motion.h1>



        </div>

   
      </div>
    </section>
  );
}