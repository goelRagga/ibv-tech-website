"use client";

// components/sections/ProcessStepsSection.tsx
import { motion } from "framer-motion";

const steps = [
  {
    number: "01",
    title: "Discovery",
    description:
      "We begin with a detailed discovery phase where we listen, learn, and understand your business, goals, and challenges. This helps us define what success looks like from your perspective. By gaining clarity early, we ensure that every decision is aligned with your expectations. This stage builds a strong foundation for everything that follows.",
  },
  {
    number: "02",
    title: "Strategy & Planning",
    description:
      "Once we understand your requirements, we move into structured strategy and planning. We define the approach, outline key actions, and establish timelines and deliverables. This ensures that there is a clear and practical roadmap in place. It helps reduce uncertainty and gives your team a well-defined direction to move forward.",
  },
  {
    number: "03",
    title: "Execution",
    description:
      "Our teams execute the plan with accuracy while working closely with you throughout the process. We ensure consistent progress, clear communication, and alignment at every stage. This collaborative approach helps avoid gaps and keeps everything on track. It also ensures that outcomes remain relevant to your real business needs.",
  },
  {
    number: "04",
    title: "Final Delivery",
    description:
      "Before delivery, we review, refine, and polish every output to ensure quality and effectiveness. We focus on aligning results with the defined goals and making improvements where needed. This ensures that the final outcome is not just complete, but ready for implementation. The entire process remains simple, transparent, and focused on results that matter.",
  },
];

export function ProcessStepsSection() {
  return (
    <section className="bg-white px-2 py-6 md:py-8">
      <div className="mx-4 md:mx-6">

        {/* Header row */}
        <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between gap-6 md:gap-8 mb-8 md:mb-10">
          <div className="flex flex-col gap-3 md:gap-4">
            <div className="flex items-center gap-1.5">
              <span className="text-[#cc1f1f] text-[13px]">↳</span>
              <span className="font-hanken text-[11px] font-bold tracking-[0.12em] text-[#111112]">
                OUR <span className="text-[#cc1f1f]">APPROACH</span>
              </span>
            </div>
            <h2 className="font-hanken text-[24px] md:text-[32px] font-bold leading-tight text-[#111112] max-w-[460px]">
              A simple, transparent process focused on results.
            </h2>
          </div>

          {/* Image top right */}
          <div className="rounded-2xl overflow-hidden w-full lg:w-[280px] h-[180px] md:h-[190px] flex-shrink-0">
            <img
              src="https://images.unsplash.com/photo-1552664730-d307ca884978?w=600&q=80"
              alt="Team working"
              className="w-full h-full object-cover"
            />
          </div>
        </div>

        {/* Steps */}
        <div className="flex flex-col">
          {steps.map((step, index) => (
            <motion.div
              key={step.number}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.5, delay: index * 0.1, ease: "easeOut" }}
              className="grid grid-cols-[40px_1fr] md:grid-cols-[64px_1fr_1fr] gap-x-4 gap-y-2 md:gap-8 py-4 border-t border-[#ddd] last:border-b"
            >
              {/* Number */}
              <span className="font-inter font-bold text-[16px] md:text-[20px] text-[#111112] pt-0.5">
                {step.number}
              </span>

              {/* Title */}
              <h3 className="font-inter text-[18px] md:text-[26px] font-bold text-[#111112] leading-tight">
                {step.title}
              </h3>

              {/* Description */}
              <p className="font-inter text-[13px] md:text-[14px] leading-relaxed text-[#555] col-start-2 md:col-start-auto">
                {step.description}
              </p>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}