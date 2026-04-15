"use client";

import { useEffect, useRef, useState } from "react";
import { motion, useInView } from "framer-motion";

const stats = [
  {
    number: 1500,
    suffix: "+",
    label: "Projects Delivered",
    desc: "Turning ideas into real, scalable business outcomes.",
    lineDelay: 0,       // line drop delay
    contentDelay: 0.6,  // content fade-in delay after line drops
  },
  {
    number: 5,
    suffix: "+",
    label: "Years of Experience",
    desc: "Supporting businesses through growth, change, and transformation.",
    lineDelay: 0.15,
    contentDelay: 0.75,
  },
  {
    number: 6,
    suffix: "+",
    label: "Core Services",
    desc: "Connected capabilities designed to drive end-to-end growth.",
    lineDelay: 0.3,
    contentDelay: 0.9,
  },
];

// ── Slot machine number counter ─────────────────────────────────────────────
function SlotNumber({
  target,
  suffix,
  started,
  delay,
}: {
  target: number;
  suffix: string;
  started: boolean;
  delay: number;
}) {
  const [display, setDisplay] = useState(0);
  const frameRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  useEffect(() => {
    if (!started) return;

    const startTimeout = setTimeout(() => {
      const duration = 1400; // total ms
      const fps = 36;
      const interval = 1000 / fps;
      const steps = Math.floor(duration / interval);
      let step = 0;

      const tick = () => {
        step++;
        const progress = step / steps;

        if (progress < 0.7) {
          // Fast random phase — slot machine chaos
          setDisplay(Math.floor(Math.random() * target * 1.5));
        } else {
          // Ease into real value
          const eased = 1 - Math.pow(1 - (progress - 0.7) / 0.3, 3);
          setDisplay(Math.round(eased * target));
        }

        if (step < steps) {
          frameRef.current = setTimeout(tick, interval);
        } else {
          setDisplay(target);
        }
      };

      frameRef.current = setTimeout(tick, interval);
    }, delay * 1000);

    return () => {
      clearTimeout(startTimeout);
      if (frameRef.current) clearTimeout(frameRef.current);
    };
  }, [started, target, delay]);

  return (
    <span style={{ fontVariantNumeric: "tabular-nums" }}>
      {display.toLocaleString()}{suffix}
    </span>
  );
}

// ── Dropping line + dot ─────────────────────────────────────────────────────
function DroppingLine({ started, delay }: { started: boolean; delay: number }) {
  return (
    <div style={{ position: "relative", marginBottom: "0px" }}>
      {/* Red dot */}
      <motion.div
        initial={{ scale: 0, opacity: 0 }}
        animate={started ? { scale: 1, opacity: 1 } : {}}
        transition={{ duration: 0.3, delay, ease: "backOut" }}
        style={{
          width: 10,
          height: 10,
          borderRadius: "50%",
          background: "#E30A13",
          marginBottom: 0,
        }}
      />
      {/* Vertical line that grows downward */}
      <motion.div
        initial={{ scaleY: 0 }}
        animate={started ? { scaleY: 1 } : {}}
        transition={{ duration: 0.55, delay: delay + 0.2, ease: [0.4, 0, 0.2, 1] }}
        style={{
          width: 1,
          height: 140,
          background: "rgba(0,0,0,0.12)",
          transformOrigin: "top center",
          marginLeft: 4.5,
        }}
      />
    </div>
  );
}

// ── Main section ────────────────────────────────────────────────────────────
export function MissionSection() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(sectionRef, { once: true, margin: "-10%" });

  return (
    <section
      ref={sectionRef}
      style={{
        background: "white",
        paddingTop: "56px",
        paddingBottom: "0",
        position: "relative",
        height:"100vh",
        zIndex: 20,
      }}
    >
      <div style={{ maxWidth: "95vw", margin: "0 auto", padding: "0 32px" }}>

        {/* ── Top row: eyebrow left, mission text right ── */}
        <div className="grid grid-cols-1 md:grid-cols-[240px_1fr] gap-6 md:gap-16 items-start mb-10 md:mb-16">
          {/* Eyebrow */}
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, ease: "easeOut" }}
            style={{ display: "flex", alignItems: "center", gap: "8px", paddingTop: "4px" }}
          >
            <span style={{ fontSize: "13px" }}>↳</span>
            <span
              style={{
                fontSize: "12px",
                fontWeight: 500,
                textTransform: "uppercase",
                letterSpacing: "0.15em",
              }}
            >
              Our{" "}
              <span style={{ color: "#E30A13", fontWeight: 600 }}>Mission</span>
            </span>
          </motion.div>

          {/* Mission statement */}
          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.15, ease: "easeOut" }}
            style={{
              fontSize: "clamp(18px, 2vw, 26px)",
              fontWeight: 500,
              lineHeight: 1.55,
              color: "#0a0a0a",
              margin: 0,
            }}
          >
            We help businesses build, launch, and grow through a combination of
            strategic thinking, digital execution, and data-driven decisions.
            Every solution is designed with clarity, backed by research, and
            executed with a focus on real outcomes.
          </motion.p>
        </div>

        {/* ── Stats row ── */}
        <div className="grid grid-cols-1 md:grid-cols-3 border-t border-black/[0.08]">
          {stats.map((stat, i) => (
            <div
              key={stat.label}
              className={[
                "pt-8 pb-12",
                i !== stats.length - 1 ? "border-b md:border-b-0 md:border-r border-black/[0.08]" : "",
                i !== 0 ? "md:pl-10" : "",
                i !== stats.length - 1 ? "md:pr-10" : "",
              ].join(" ")}
            >
              {/* Dot + dropping line */}
              <DroppingLine started={isInView} delay={stat.lineDelay} />

              {/* Content fades in after line drops */}
              <motion.div
                initial={{ opacity: 0, y: 12 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: stat.contentDelay, ease: "easeOut" }}
              >
                {/* Big number — slot machine */}
                <div
                  style={{
                    fontSize: "clamp(40px, 5vw, 68px)",
                    fontWeight: 700,
                    letterSpacing: "-0.02em",
                    lineHeight: 1,
                    color: "#0a0a0a",
                    marginBottom: "16px",
                    minWidth: "120px",
                  }}
                >
                  <SlotNumber
                    target={stat.number}
                    suffix={stat.suffix}
                    started={isInView}
                    delay={stat.contentDelay + 0.1}
                  />
                </div>

                {/* Label */}
                <div
                  style={{
                    fontSize: "clamp(14px, 1.2vw, 18px)",
                    fontWeight: 700,
                    color: "#0a0a0a",
                    marginBottom: "10px",
                  }}
                >
                  {stat.label}
                </div>

                {/* Desc */}
                <p
                  style={{
                    fontSize: "13px",
                    color: "#666",
                    lineHeight: 1.65,
                    margin: 0,
                    maxWidth: "220px",
                  }}
                >
                  {stat.desc}
                </p>
              </motion.div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}