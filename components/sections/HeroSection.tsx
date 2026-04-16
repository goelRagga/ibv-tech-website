"use client";

import { useRef } from "react";
import {
  motion,
  useScroll,
  useTransform,
  useSpring,
  MotionValue,
} from "framer-motion";
import { Navbar } from "../layout/Navbar";
import { MissionSection } from "./MissionSection";

const WORD = "Businesses.";
const LETTERS = WORD.split("");

// ─── Scroll timeline (0→1 over the 600vh container) ──────────────────────────
//
//  0.00 → 0.06   navbar + tagline fade out
//  0.06 → 0.55   letters fly up one-by-one
//  0.55 → 0.63   all letters hold at top
//  0.63 → 0.72   all letters fade out together
//  0.72 → 1.00   MissionSection slides up from below over frozen hero
//
const NAVBAR_FADE_END = 0.06;
const LETTERS_START = 0.06;
const LETTERS_END = 0.55;
const LETTERS_FADE_START = 0.58;
const LETTERS_FADE_END = 0.68;
const MISSION_SLIDE_START = 0.72;
const MISSION_SLIDE_END = 1.0;

const SPRING = { stiffness: 55, damping: 22, mass: 1.3 };

function letterRange(i: number, total: number): [number, number] {
  const band = LETTERS_END - LETTERS_START;
  const slot = band / total;
  const start = LETTERS_START + slot * i;
  const end = start + slot;
  return [start, Math.min(end, LETTERS_END)];
}

function FlyingLetter({
  letter,
  index,
  total,
  scrollYProgress,
  letterBaselineY,
  allOpacity,
}: {
  letter: string;
  index: number;
  total: number;
  scrollYProgress: MotionValue<number>;
  letterBaselineY: number;
  allOpacity: MotionValue<number>;
}) {
  const [start, end] = letterRange(index, total);
  const targetY = -(letterBaselineY - 90);
  const rawY = useTransform(scrollYProgress, [start, end], [0, targetY]);
  const translateY = useSpring(rawY, SPRING);

  return (
    <motion.span
      className="font-serif"
      style={{
        fontSize: "clamp(40px, 14vw, 220px)",
        fontWeight: 900,
        color: "white",
        letterSpacing: "-0.025em",
        display: "inline-block",
        lineHeight: 1,
        translateY,
        opacity: allOpacity,
        willChange: "transform, opacity",
      }}
    >
      {letter === " " ? "\u00A0" : letter}
    </motion.span>
  );
}

// ─── HeroSection ──────────────────────────────────────────────────────────────
export function HeroSection() {
  const containerRef = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"],
  });

  const vh = typeof window !== "undefined" ? window.innerHeight : 900;
  const LETTER_BASELINE_Y = vh * 0.88;

  const navOpacity = useTransform(
    scrollYProgress,
    [0, NAVBAR_FADE_END],
    [1, 0],
  );
  const navY = useTransform(scrollYProgress, [0, NAVBAR_FADE_END], [0, -16]);
  const textOpacity = useTransform(
    scrollYProgress,
    [0, NAVBAR_FADE_END],
    [1, 0],
  );
  const allLettersOpacity = useTransform(
    scrollYProgress,
    [LETTERS_FADE_START, LETTERS_FADE_END],
    [1, 0],
  );

  const edgeVignetteOpacity = useTransform(
  scrollYProgress,
  [LETTERS_FADE_START, LETTERS_FADE_END],
  [0, 1],
);

  // MissionSection: locked below viewport until MISSION_SLIDE_START,
  // then smoothly rises to fully cover the hero by MISSION_SLIDE_END
  const missionY = useTransform(
    scrollYProgress,
    [0, MISSION_SLIDE_START, MISSION_SLIDE_END],
    ["100%", "100%", "0%"],
  );

  return (
    <>
      {/*
        600vh scroll container — all animation phases live here.
        Hero sticks at zIndex 0. MissionSection slides over it at zIndex 10.
        After this container, AboutSection etc. scroll normally in page.tsx.
      */}
      <div ref={containerRef} style={{ height: "600vh", position: "relative" }}>
        {/* ── Frozen hero background ── */}
        <div
          style={{
            position: "sticky",
            top: 0,
            height: "100vh",
            overflow: "hidden",
            zIndex: 0,
          }}
          className="bg-refresh-black flex flex-col"
        >
          <div
            className="absolute inset-0 pointer-events-none"
            style={{
              backgroundImage: `url("/HOMEPAGEBANNER.png")`,
              backgroundSize: "cover",
              backgroundPosition: "center",
              backgroundRepeat: "no-repeat",
            }}
          />
          <div className="absolute inset-0 bg-black/35 pointer-events-none" />
          <div
            className="absolute bottom-0 left-0 pointer-events-none"
            style={{
              width: "50vw",
              height: "45vh",
              background:
                "radial-gradient(ellipse at bottom left, rgba(227,10,19,0.28) 0%, transparent 70%)",
            }}
          />

          {/* Navbar */}
          <motion.div
            style={{ opacity: navOpacity, translateY: navY }}
            className="relative z-30"
          >
            <Navbar />
          </motion.div>

          {/* Tagline + headline */}
          <motion.div
            style={{ opacity: textOpacity }}
            className="relative z-10 px-8 max-w-[95vw] mx-auto w-full pt-24 md:pt-[180px]"
          >
            <div className="mb-5">
              <p
                className="text-white font-bold uppercase leading-tight tracking-[0.01em]"
                style={{ fontSize: "clamp(12px, 1.1vw, 15px)" }}
              >
                Build What&apos;s Next.
              </p>
              <p
                className="text-white font-bold uppercase leading-tight tracking-[0.01em]"
                style={{ fontSize: "clamp(12px, 1.1vw, 15px)" }}
              >
                Scale Without Limits.
              </p>
            </div>
            <p
              className="text-white font-semibold leading-snug mb-5 max-w-[820px] font-serif"
              style={{
                fontSize: "clamp(22px, 3vw, 44px)",
              }}
            >
              We are IBV Technologies, a smarter way to build and grow
            </p>
          </motion.div>

          {/* Big word */}
          <div
            className="absolute left-0 right-0 pointer-events-none"
            style={{ bottom: "-4vh", overflow: "visible", zIndex: 20 }}
            aria-hidden="true"
          >
            <div className="max-w-[95vw] mx-auto px-8 flex items-end">
              {LETTERS.map((letter, i) => (
                <FlyingLetter
                  key={i}
                  letter={letter}
                  index={i}
                  total={LETTERS.length}
                  scrollYProgress={scrollYProgress}
                  letterBaselineY={LETTER_BASELINE_Y}
                  allOpacity={allLettersOpacity}
                />
              ))}
            </div>
          </div>

             <motion.div
            className="absolute inset-0 pointer-events-none"
            style={{ opacity: edgeVignetteOpacity, zIndex: 25 }}
          >
            <div className="absolute top-0 left-0 right-0" style={{ height: "8vh", background: "linear-gradient(to bottom, black, transparent)" }} />
            <div className="absolute bottom-0 left-0 right-0" style={{ height: "8vh", background: "linear-gradient(to top, black, transparent)" }} />
            <div className="absolute top-0 bottom-0 left-0" style={{ width: "6vw", background: "linear-gradient(to right, black, transparent)" }} />
            <div className="absolute top-0 bottom-0 right-0" style={{ width: "6vw", background: "linear-gradient(to left, black, transparent)" }} />
          </motion.div>
        </div>

        {/*
          ── MissionSection panel ──────────────────────────────────────────────
          position:fixed so it floats over the frozen hero — hero never moves.
          Starts at translateY:100% (fully below viewport).
          Rises to translateY:0% once letters have faded (MISSION_SLIDE_START).
          zIndex:10 keeps it above the sticky hero (zIndex:0).

          This is INSIDE the 600vh container so its scroll is driven by
          scrollYProgress of this same container — no separate tracking needed.
        */}
        <motion.div
          style={{
            position: "sticky", 
            top: 0,
            left: 0,
            right: 0,
            height: "100vh",
            translateY: missionY,
            zIndex: 10,
            willChange: "transform",
          }}
        >
          <MissionSection />
        </motion.div>
      </div>
      {/*
        Everything after this point is normal page scroll.
        MissionSection is now fully covering the viewport.
        AboutSection, ServicesSection etc. scroll up naturally on top of it.
        Make sure each section has a solid background so it covers what's behind.
      */}
    </>
  );
}
