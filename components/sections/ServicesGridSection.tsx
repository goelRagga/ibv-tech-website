"use client";

import { motion } from "framer-motion";
import Link from "next/link";

// ─── Animation variants ───────────────────────────────────────────────────────
const fadeUp = (delay = 0) => ({
  initial: { opacity: 0, y: 24 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.7, delay, ease: [0.22, 1, 0.36, 1] as const },
});
    
export function ServicesGridSection() {
  const cards = [
    {
      title: "Business Strategy",
      description:
        "The idea behind IBV Technologies is simple yet powerful: every company should have access to the deepest expertise, modern technology, and data-driven thinking, no matter its size or stage. We help businesses find clarity in direction, set meaningful goals, and build structured strategies that support confident decisions and long-term growth.",
    },
    {
      title: "Integrated Solutions",
      description:
        "We are a highly integrated team of consultants, developers, researchers, analysts, and creative strategists, bringing together multiple disciplines into one solution. This allows us to provide a one-stop approach for businesses navigating the complexities of today's business environment.",
    },
    {
      title: "End-to-End Services",
      description:
        "IBV Technologies provides an elaborate range of services covering all key aspects of your business, from research and consultation to development and content. Each service is driven by professional expertise and customized to meet your needs precisely and purposefully.",
    },
    {
      title: "Growth and Transformation",
      description:
        "We cater to companies at all levels, from startups to growing businesses across industries. Whether you are starting out or looking to scale, IBV Technologies provides the know-how, resources, and support to help you move forward with clarity and confidence.",
    },
  ];

  return (
    <section className="bg-white px-6 py-8">
      <motion.div       {...fadeUp(0.32)} className="mx-auto max-w-[1200px]">
        {/* Header */}
        <p className="mb-2 text-center font-hanken text-[11px] font-bold tracking-[0.15em] text-[#cc1f1f]">
          WHAT WE DO
        </p>
        <h2 className="mb-4 text-center font-hanken text-[52px] font-semibold leading-tight text-[#111112]">
          Driving growth with strategic excellence
        </h2>

        {/* 2×2 Grid */}
        <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
          {cards.map((card) => (
            <div
              key={card.title}
              className="rounded-2xl bg-[#111112] p-4"
            >
              <h3 className="mb-5 font-hanken text-[22px] font-bold text-white">
                {card.title}
              </h3>
              <p className="font-inter text-[15px] leading-relaxed text-[#aaa]">
                {card.description}
              </p>
            </div>
          ))}
        </div>
      </motion.div>
    </section>
  );
}
