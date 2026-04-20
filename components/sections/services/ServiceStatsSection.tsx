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
  hidden: { opacity: 0, y: 20 },
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
    <section className="bg-white" style={{ borderTop: '1px solid #EBEBEB', borderBottom: '1px solid #EBEBEB' }}>
      <div className=" mx-auto py-4">
        <div className="flex flex-col lg:flex-row items-start min-h-[160px] px-3">

          {/* ── Stats: one column per stat, each separated by a divider ── */}
          {stats.map((stat, i) => (
            <motion.div
              key={stat.value}
              custom={i * 0.1}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: '-60px' }}
              variants={fadeUp}
              className="flex items-center"
            >
              {/* Divider before each stat (including first — acts as left edge visual) */}
              {i > 0 && (
                <div
                  className="self-stretch flex-shrink-0"
                  style={{ width: '1px', background: '#DCDCDC', margin: '0' }}
                />
              )}

              {/* Stat content */}
              <div
                className="flex flex-col justify-center py-8 lg:py-10"
                style={{ padding: '32px 40px 32px 40px', minWidth: '250px' }}
              >
                <p
                  className="font-bold text-[#111112] leading-none"
                  style={{ fontSize: 'clamp(48px, 5.5vw, 72px)', letterSpacing: '-0.03em', marginBottom: '14px' }}
                >
                  {stat.value}
                </p>
                <p
                  className="text-[#666]"
                  style={{ fontSize: '13px', lineHeight: '1.6', maxWidth: '250px' }}
                >
                  {stat.label}
                </p>
              </div>
            </motion.div>
          ))}

          {/* ── Vertical divider before description ── */}
          <div
            className="self-stretch flex-shrink-0 hidden lg:block"
            style={{ width: '1px', background: '#DCDCDC' }}
          />

          {/* ── Description ── */}
          <motion.div
            custom={0.2}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-60px' }}
            variants={fadeUp}
            className="flex items-center flex-1 py-8 lg:py-0"
            style={{ padding: '32px 40px' }}
          >
            <p
              className="text-[#444]"
              style={{ fontSize: '14px', lineHeight: '1.75', maxWidth: '340px' }}
            >
              {description}
            </p>
          </motion.div>

     
          {/* ── CTA ── */}
          <motion.div
            custom={0.28}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-60px' }}
            variants={fadeUp}
            className="flex items-center justify-center flex-shrink-0 py-8 lg:py-0"
            style={{ padding: '32px 40px' }}
          >
            <Link
              href={ctaHref}
              className="inline-flex items-center justify-center font-semibold text-white transition-colors duration-200 whitespace-nowrap"
              style={{
                background: '#E30A13',
                fontSize: '14px',
                padding: '6px 34px',
                borderRadius: '999px',
                letterSpacing: '0.01em',
              }}
              onMouseEnter={e => (e.currentTarget.style.background = '#c8000a')}
              onMouseLeave={e => (e.currentTarget.style.background = '#E30A13')}
            >
              {ctaText}
            </Link>
          </motion.div>

        </div>
      </div>
    </section>
  );
}