"use client";

import { motion } from "framer-motion";

export interface ApproachItem {
  title: string;
  description: string;
}

interface ServiceApproachSectionProps {
  sectionLabel?: string;
  overview: string;
  items: ApproachItem[];
}

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  visible: (delay = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, delay, ease: [0.22, 1, 0.36, 1] },
  }),
};

export function ServiceApproachSection({
  sectionLabel = "How We Think",
  overview,
  items,
}: ServiceApproachSectionProps) {
  // Split label into regular + red highlight (last word is red)
  const labelWords = sectionLabel.trim().split(" ");
  const labelRed = labelWords.pop();
  const labelPlain = labelWords.join(" ");

  return (
    <section
      className="bg-white"
      style={{ padding: "clamp(40px, 7vw, 100px) 0" }}
    >
      <div className="max-w-[1344px] mx-auto px-4 md:px-6 lg:px-12">
        {/* ── TOP: label left | large overview right ── */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-60px" }}
          variants={fadeUp}
          className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12"
          style={{ marginBottom: "clamp(40px, 6vw, 72px)" }}
        >
          {/* Left: eyebrow label */}
          <div className="lg:col-span-3 pt-1">
            <div className="flex items-center gap-2">
              <svg width="18" height="14" viewBox="0 0 18 14" fill="none">
                <path
                  d="M1 7H17M11 1L17 7L11 13"
                  stroke="#111112"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
              <span
                className="font-bold uppercase"
                style={{
                  fontSize: "11px",
                  letterSpacing: "0.15em",
                  color: "#111112",
                }}
              >
                {labelPlain}{" "}
                <span style={{ color: "#E30A13" }}>{labelRed}</span>
              </span>
            </div>
          </div>

          {/* Right: large bold overview */}
          <div className=" flex flex-col gap-6 lg:col-span-9">
            <p
              className="font-semibold text-[#111112] leading-tight"
              style={{
                fontSize: "clamp(22px, 2.8vw, 34px)",
                letterSpacing: "-0.02em",
              }}
            >
              {overview}
            </p>
            {/* ── ROWS: title left | description right ── */}
            <div style={{ borderTop: "1px solid #E8E8E8" }}>
              {items.map((item, i) => (
                <motion.div
                  key={item.title}
                  custom={i * 0.08}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true, margin: "-40px" }}
                  variants={fadeUp}
                  className="grid grid-cols-1 lg:grid-cols-12 gap-2 lg:gap-6"
                  style={{
                    padding: "clamp(20px, 3.5vw, 40px) 0",
                    borderBottom: "1px solid #E8E8E8",
                  }}
                >
                  {/* Title */}
                  <div className="lg:col-span-4 ">
                    <h3
                      className="font-semibold text-[#111112] leading-snug  "
                      style={{ fontSize: "clamp(14px, 1.4vw, 18px)",  fontFamily: "var(--font-serif)", }}
                    >
                      {item.title}
                    </h3>
                  </div>

                  {/* Description */}
                  <div className="lg:col-span-6 lg:col-start-6">
                    <p
                      className="text-[#76767F]"
                      style={{
                        fontSize: "clamp(12px, 1vw, 13px)",
                        lineHeight: 1.75,
                      }}
                    >
                      {item.description}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
