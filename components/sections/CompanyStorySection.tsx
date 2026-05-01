"use client";

// components/sections/WhoWeAreSection.tsx

import { useRef, useEffect, useState } from "react";
import { useInView } from "framer-motion";
import { Pin } from "lucide-react";

import { motion } from "framer-motion";
import Link from "next/link";

export function CompanyStorySection() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  // ─── Animation variants ───────────────────────────────────────────────────────
  const fadeUp = (delay = 0) => ({
    initial: { opacity: 0, y: 24 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.7, delay, ease: [0.22, 1, 0.36, 1] as const },
  });

  return (
    <section className="bg-white px-4 py-8">
      <motion.div {...fadeUp(0.32)} className="mx-auto max-w-[1200px]">
        {/* Row 1: breadcrumb left, headline right */}
        <div className="flex flex-col lg:flex-row gap-8 lg:justify-between lg:items-start mb-6">
          <div className="flex items-center gap-1.5 pt-1 min-w-[180px]">
            <span className="text-[#cc1f1f] text-[16px]">↳</span>
            <span className="font-hanken text-[16px] font-bold tracking-[0.12em] text-[#111112]">
              WHO <span className="text-[#cc1f1f]">WE ARE</span>
            </span>
          </div>
          <h2 className="font-hanken text-[36px] lg:text-[32px] font-semibold leading-tight text-[#111112] max-w-[780px]">
            Since 2021, we're an experienced team helping businesses solve
            complex challenges, improve performance, and build for long-term
            growth.
          </h2>
        </div>

        {/* Row 2: 3 columns — text | image | card */}
        <div className="grid grid-cols-1 lg:grid-cols-[1.5fr_1.5fr_0.7fr] gap-8 items-start">
          {/* Col 1: description + counter */}
          <div className="flex flex-col justify-between h-full gap-16">
            <p className="font-inter text-[15px] leading-relaxed text-[#444]">
              At IBV Technologies, we bring together experienced consultants,
              developers, researchers, analysts, and creative strategists to
              deliver solutions that are effective today and sustainable for the
              future. We combine industry experience with new technology to help
              businesses navigate complexity, improve performance, and move
              forward with clarity and confidence.
            </p>

            {/* Counter */}
            <div ref={ref} className="flex flex-col gap-1">
              <div className="flex items-center gap-2 mb-1">
                <div className="w-2.5 h-2.5 rounded-full bg-[#cc1f1f]" />
              </div>
              <div className="flex items-end gap-1 border-l-2 border-[#e2e2e2] pl-4">
                <SlotCounter target={1500} inView={inView} />
                <span className="font-hanken text-[64px] font-black text-[#111112] leading-none mb-1">
                  +
                </span>
              </div>
              <p className="font-hanken text-[14px] text-[#555] pl-4 mt-1">
                Businesses supported
                <br />
                across various industries
              </p>
            </div>
          </div>

          {/* Col 2: image */}
          <div className="rounded-2xl overflow-hidden aspect-[3/4] lg:aspect-auto lg:h-[420px]">
            <img
              src="https://res.cloudinary.com/dm8jtnzdi/image/upload/q_auto/f_auto/v1777663627/Rectangle_58_pqohvf.png"
              alt="Handshake meeting"
              className="w-full h-full object-cover"
            />
          </div>

          {/* Col 3: services card */}
          <div className="rounded-2xl bg-[#f5f5f5] px-2 py-4 flex flex-col gap-2 mt-24">
            <Pin size={22} className="text-[#cc1f1f] rotate-45" />
            <div className="flex flex-col gap-2">
              {[
                "Consulting & Strategy",
                "Digital Solutions",
                "Research & Analysis",
                "Content & Growth",
              ].map((item) => (
                <p
                  key={item}
                  className="font-hanken text-[13px] font-semibold text-[#111112]"
                >
                  {item}
                </p>
              ))}
            </div>
          </div>
        </div>
      </motion.div>
    </section>
  );
}

// ─── SLOT COUNTER ────────────────────────────────────────────────────────────

function SlotCounter({ target, inView }: { target: number; inView: boolean }) {
  const [display, setDisplay] = useState("0000");
  const started = useRef(false);

  useEffect(() => {
    if (!inView || started.current) return;
    started.current = true;

    const targetStr = target.toString();
    const digits = targetStr.length;
    const duration = 1800; // ms
    const interval = 40; // ms per frame
    const frames = duration / interval;
    let frame = 0;

    const timer = setInterval(() => {
      frame++;
      const progress = frame / frames;

      if (progress >= 1) {
        setDisplay(targetStr);
        clearInterval(timer);
        return;
      }

      // Random digits that gradually "lock in" from left to right
      const lockedCount = Math.floor(progress * digits * 1.2); // lock digits progressively
      let result = "";
      for (let i = 0; i < digits; i++) {
        if (i < lockedCount) {
          result += targetStr[i]; // locked
        } else {
          result += Math.floor(Math.random() * 10).toString(); // spinning
        }
      }
      setDisplay(result);
    }, interval);

    return () => clearInterval(timer);
  }, [inView, target]);

  return (
    <span className="font-hanken text-[64px] font-black text-[#111112] leading-none tabular-nums tracking-tight">
      {display}
    </span>
  );
}
