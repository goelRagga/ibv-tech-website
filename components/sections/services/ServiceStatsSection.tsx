'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';

export interface ServiceStat {
  value: string;
  label: string;
}

interface ServiceStatsSectionProps {
  stats: ServiceStat[];
  description: string;
  ctaText?: string;
  ctaHref?: string;
}

const fadeUp = {
  hidden: { opacity: 0, y: 28 },
  visible: (delay = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.65, delay, ease: [0.22, 1, 0.36, 1] },
  }),
};

export function ServiceStatsSection({
  stats,
  description,
  ctaText = 'Get Started',
  ctaHref = '/contact',
}: ServiceStatsSectionProps) {
  return (
    <section className="py-20 lg:py-24 bg-white">
      <div className="max-w-[1344px] mx-auto px-6 lg:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">

          {/* ── Stat cards ── */}
          <div className="lg:col-span-5">
            <div className="grid grid-cols-2 gap-5">
              {stats.map((stat, i) => (
                <motion.div
                  key={stat.value}
                  custom={i * 0.12}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true, margin: '-60px' }}
                  variants={fadeUp}
                >
                  <div className="bg-[#F6F6F8] rounded-2xl p-6 h-full">
                    <p className="text-[44px] font-bold text-[#E30A13] leading-none mb-3 tracking-tight">
                      {stat.value}
                    </p>
                    <p className="text-[12px] text-[#555556] leading-snug">{stat.label}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

          {/* ── Description + CTA ── */}
          <div className="lg:col-span-6 lg:col-start-7 flex flex-col justify-center gap-8">
            <motion.div
              custom={0.1}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: '-60px' }}
              variants={fadeUp}
            >
              <p className="text-[15px] text-[#555556] leading-relaxed mb-8">{description}</p>
              <Link
                href={ctaHref}
                className="inline-flex items-center bg-[#E30A13] hover:bg-[#c8000a] text-white text-sm font-semibold px-7 py-3.5 rounded-full transition-colors duration-200"
              >
                {ctaText}
              </Link>
            </motion.div>
          </div>

        </div>
      </div>
    </section>
  );
}
