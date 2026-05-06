"use client";

// components/sections/ChipsDropSection.tsx

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { useMediaQuery } from "react-responsive";

const rows = [
  ["Business Consultation"],
  ["Content Writing", "Strategy"],
  ["Analysis", "Websites & Apps"],
  ["Marketing", "Social Media"],
  ["Long-term Support", "Decision Frameworks"],
];

export function ChipsDropSection() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });
  const isMobile = useMediaQuery({ maxWidth: 767 });

  return (
    <section className="bg-[#111112] px-4 md:px-8 py-6 md:py-0">
      <div className="mx-0 md:mx-2">
        <div className="flex flex-col lg:flex-row lg:justify-between lg:items-center gap-4 lg:gap-6">
          {/* Top bar */}
          <div className="flex items-center gap-3 ">
            <span className="font-hanken text-[14px] text-[#cc1f1f]">↳</span>
            <span className="font-hanken text-[14px] font-bold tracking-[0.12em] text-white">
              HOW WE <span className="text-[#cc1f1f]">WORK</span>
            </span>
          </div>

          {/* Headline */}
          <h2 className="mb-6 lg:mb-10 font-hanken text-[26px] md:text-[34px] lg:text-[42px] font-semibold leading-tight text-[#76767F] lg:text-right pt-2 lg:pt-6">
            One company for your Every Business Need.
          </h2>
        </div>

        {/* Card */}
        <div
          ref={ref}
          className="relative min-h-[390px] md:min-h-[420px] rounded-2xl bg-[#1c1c1c] p-4 md:p-6 overflow-hidden"
        >
          {/* Left: description */}
          <div className="max-w-[480px]">
            <p className="font-inter text-[14px] md:text-[15px] leading-relaxed text-[#fff]">
              We work closely with businesses to understand how they operate,
              identify key challenges, and bring clarity to complex situations.
              Our focus is on helping you move forward with structured thinking,
              better decisions, and a clear sense of direction.
            </p>
          </div>

          {/* Right: chips — all drop together like toffees into a jar */}
          <div className="absolute left-2 bottom-2 right-4 md:bottom-10 md:right-10 flex flex-wrap md:flex-col items-end gap-1.5 md:gap-2.5 max-w-[90%] md:max-w-none">
            {rows.map((row, rowIdx) => (
              <div key={rowIdx} className="flex gap-1.5 md:gap-2.5 flex-wrap justify-end">
                {row.map((chip, chipIdx) => {
                  // Each chip gets a tiny random-feeling offset so they
                  // don't all land at the exact same frame — like physical
                  // objects that hit the bottom at slightly different times.
                  // We use rowIdx + chipIdx to deterministically vary it.
                  const jitter = rowIdx * 0.04 + chipIdx * 0.04;

                  return (
                    <motion.div
                      key={chip}
                      initial={{
                        y: -320,
                        opacity: 0,
                        rotate: chipIdx % 2 === 0 ? -8 : 8,
                      }}
                      animate={inView ? { y: 0, opacity: 1, rotate: 0 } : {}}
                      transition={{
                        delay: jitter,
                        duration: 2.6,
                        type: "spring",
                        stiffness: 260,
                        damping: 14,
                        mass: 1.1,
                      }}
                      className="rounded-full border border-[#cc1f1f] bg-white px-1 md:px-2 py-1 font-hanken text-[10px] md:text-[13px] font-medium text-[#cc1f1f] whitespace-nowrap"
                    >
                      {chip}
                    </motion.div>
                  );
                })}
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}
