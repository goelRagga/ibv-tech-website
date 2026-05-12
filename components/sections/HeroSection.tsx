"use client";

import { useRef } from "react";
import {
  motion,
  useScroll,
  useTransform,
  useSpring,
  MotionValue,
} from "framer-motion";
import { useMediaQuery } from "react-responsive";
import { Navbar } from "../layout/Navbar";
import { MissionSection } from "./MissionSection";

const WORD = "Businesses.";
const LETTERS = WORD.split("");

// ─── Scroll timeline (0→1 over the 600vh container) ──────────────────────────
//
//  0.00 → 0.06   navbar + tagline fade out
//  0.06 → 0.30   letters fly up fast
//  0.06 → 0.58   hero shrinks from all 4 sides
//  0.52 → 0.62   all letters fade out
//  0.68 → 1.00   MissionSection slides up
//
const NAVBAR_FADE_END = 0.06;
const LETTERS_START = 0.06;
const LETTERS_END = 0.30;
const LETTERS_FADE_START = 0.52;
const LETTERS_FADE_END = 0.62;
const SHRINK_START = 0.06;
const SHRINK_END = 0.58;
const MISSION_SLIDE_START = 0.68;
const MISSION_SLIDE_END = 1.0;

const SPRING = { stiffness: 120, damping: 22, mass: 1.0 };

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
        fontSize: "clamp(70px, 14vw, 220px)",
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
      {letter === " " ? " " : letter}
    </motion.span>
  );
}

// ─── Vertical rain lines overlay ─────────────────────────────────────────────
// Deterministic configs: no Math.random() to avoid hydration mismatch
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

// ─── HeroSection ──────────────────────────────────────────────────────────────
export function HeroSection() {
  const containerRef = useRef<HTMLDivElement>(null);
  const isMobile = useMediaQuery({ maxWidth: 767 });

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"],
  });

  const vh = typeof window !== "undefined" ? window.innerHeight : 900;
  const LETTER_BASELINE_Y = vh * 0.75;

  const navOpacity = useTransform(scrollYProgress, [0, NAVBAR_FADE_END], [1, 0]);
  const navY = useTransform(scrollYProgress, [0, NAVBAR_FADE_END], [0, -16]);
  const textOpacity = useTransform(scrollYProgress, [0, NAVBAR_FADE_END], [1, 0]);

  const allLettersOpacity = useTransform(
    scrollYProgress,
    [LETTERS_FADE_START, LETTERS_FADE_END],
    [1, 0],
  );

  // Hero shrinks from all 4 sides: scale 1 → 0.76 with rounded corners
  const rawHeroScale = useTransform(
    scrollYProgress,
    [SHRINK_START, SHRINK_END],
    [1, 0.88],
  );
  const heroScale = useSpring(rawHeroScale, { stiffness: 80, damping: 28 });

  const heroBorderRadius = useTransform(
    scrollYProgress,
    [SHRINK_START, SHRINK_END],
    [0, 28],
  );

  // MissionSection rises from below once letters have faded
  const missionY = useTransform(
    scrollYProgress,
    [0, MISSION_SLIDE_START, MISSION_SLIDE_END],
    ["100%", "100%", "0%"],
  );

  return (
    <>
      {/*
        600vh scroll container. Black background shows around the shrinking hero.
        Hero sticks at zIndex 0. MissionSection slides over it at zIndex 10.
      */}
      <div
        ref={containerRef}
        style={{ height: "600vh", position: "relative", background: "#fff" }}
      >
        {/* ── Sticky viewport shell: white bg shows around scaled hero ── */}
        <div
          style={{
            position: "sticky",
            top: 0,
            height: "100vh",
            zIndex: 0,
            background: "#fff",
          }}
        >
          {/*
            Inner hero: scales from all 4 sides and gains border-radius.
            overflow:hidden is needed so border-radius clips the background image.
          */}
          <motion.div
            style={{
              position: "absolute",
              inset: 0,
              overflow: "hidden",
              scale: heroScale,
              borderRadius: heroBorderRadius,
              transformOrigin: "center center",
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

            <VerticalRainLines />

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
              className="relative z-10 px-4 md:px-8 max-w-[95vw] mx-auto w-full pt-24 md:pt-[180px]"
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

            {/* Big word — bottom-aligned, flies up on scroll */}
            <div
              className="absolute left-0 right-0 pointer-events-none"
              style={{
                bottom: isMobile ? "10vh" : "1vh",
                overflow: "visible",
                zIndex: 20,
              }}
              aria-hidden="true"
            >
              <div className="max-w-[95vw] mx-auto px-3 md:px-8 flex items-end">
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
          </motion.div>
        </div>

        {/*
          ── MissionSection panel ──────────────────────────────────────────────
          Starts translateY:100% (fully below viewport), rises to 0% once
          letters have faded. zIndex:10 keeps it above the hero.
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
    </>
  );
}
