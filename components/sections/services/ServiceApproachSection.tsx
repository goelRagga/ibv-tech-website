'use client';

import { motion } from 'framer-motion';

export interface ApproachItem {
  title: string;
  description: string;
}

interface ServiceApproachSectionProps {
  /** Red label above the overview e.g. "How We Think" */
  sectionLabel?: string;
  /** Introductory paragraph below the label */
  overview: string;
  items: ApproachItem[];
}

const fadeUp = {
  hidden: { opacity: 0, y: 28 },
  visible: (delay = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.65, delay, ease: [0.22, 1, 0.36, 1] },
  }),
};

export function ServiceApproachSection({
  sectionLabel = 'How We Think',
  overview,
  items,
}: ServiceApproachSectionProps) {
  return (
    <section className="py-20 lg:py-28 bg-white">
      <div className="max-w-[1344px] mx-auto px-6 lg:px-12">

        {/* Header */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-60px' }}
          variants={fadeUp}
          className="mb-12"
        >
          <span className="inline-flex items-center gap-2 text-[11px] font-semibold uppercase tracking-[0.16em] text-[#E30A13] mb-4">
            <span className="w-4 h-px bg-[#E30A13]" />
            {sectionLabel}
          </span>
          <p className="text-[15px] text-[#555556] leading-relaxed mt-4 max-w-2xl">
            {overview}
          </p>
        </motion.div>

        {/* Row list */}
        <div className="border-t border-[#E5E5E9]">
          {items.map((item, i) => (
            <motion.div
              key={item.title}
              custom={i * 0.1}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: '-40px' }}
              variants={fadeUp}
            >
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 py-8 border-b border-[#E5E5E9]">
                <div className="lg:col-span-3">
                  <h3 className="text-[14px] font-bold text-[#111112]">{item.title}</h3>
                </div>
                <div className="lg:col-span-7 lg:col-start-5">
                  <p className="text-[14px] text-[#555556] leading-relaxed">{item.description}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
