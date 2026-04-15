'use client';

import { motion } from 'framer-motion';
import type { ReactNode } from 'react';

export interface ServiceCardItem {
  title: string;
  description: string;
  icon: ReactNode;
}

interface ServiceCardGridProps {
  services: ServiceCardItem[];
}

const fadeUp = {
  hidden: { opacity: 0, y: 28 },
  visible: (delay = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.65, delay, ease: [0.22, 1, 0.36, 1] },
  }),
};

export function ServiceCardGrid({ services }: ServiceCardGridProps) {
  return (
    <section className="bg-[#111112]">
      <div className="max-w-[1344px] mx-auto px-0">
        <div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3
                     divide-y divide-white/[0.07]
                     md:divide-x md:divide-white/[0.07] md:divide-y-0"
        >
          {services.map((service, i) => (
            <motion.div
              key={service.title}
              custom={i * 0.07}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: '-40px' }}
              variants={fadeUp}
            >
              {/* Each cell gets a bottom border inside each row group so the
                  grid lines show on mobile; on md+ the divide-x handles it. */}
              <div className="p-8 lg:p-10 group hover:bg-[#1a1a1a] transition-colors duration-300 h-full border-b border-white/[0.07] md:border-b-0">
                {/* Icon */}
                <div className="w-10 h-10 rounded-lg bg-white/[0.06] flex items-center justify-center mb-5 text-white/30 group-hover:text-[#E30A13] group-hover:bg-[#E30A13]/10 transition-all duration-300">
                  {service.icon}
                </div>

                <h3 className="text-white font-semibold text-[14px] mb-3 leading-snug">
                  {service.title}
                </h3>
                <p className="text-white/35 text-[12px] leading-relaxed">
                  {service.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
