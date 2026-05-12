'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import { Navbar } from '@/components/layout/Navbar';

interface ServicePageHeroProps {
  /** e.g. "IBV Services / Consulting & Strategy" */
  breadcrumb: string;
  /** Large serif heading */
  title: string;
  /** Body-size subtitle */
  description: string;
  ctaText?: string;
  ctaHref?: string;
  /** Absolute path from /public, defaults to homepage banner */
  backgroundImage?: string;
}

// ─── Vertical rain lines ──────────────────────────────────────────────────────
const RAIN_LINES = [
  { delay: 0.0, duration: 2.8 },
  { delay: 1.4, duration: 3.2 },
  { delay: 0.7, duration: 2.5 },
  { delay: 2.1, duration: 3.0 },
  { delay: 0.4, duration: 2.7 },
];

function VerticalRainLines() {
  const count = RAIN_LINES.length;
  return (
    <div
      className="absolute inset-0 pointer-events-none"
      style={{ zIndex: 6 }}
      aria-hidden="true"
    >
      {RAIN_LINES.map((cfg, i) => {
        const pct = (i / (count - 1)) * 100;
        return (
          <div
            key={i}
            style={{
              position: 'absolute',
              top: 0,
              bottom: 0,
              left: `${pct}%`,
              width: 1,
              background: 'rgba(255,255,255,0.13)',
              overflow: 'hidden',
            }}
          >
            <motion.div
              style={{
                position: 'absolute',
                left: 0,
                width: '100%',
                height: '18vh',
                background:
                  'linear-gradient(to bottom, transparent 0%, rgba(220,38,38,0.0) 10%, rgba(220,38,38,0.85) 50%, rgba(220,38,38,0.4) 80%, transparent 100%)',
              }}
              animate={{ y: ['-18vh', '100vh'] }}
              transition={{
                duration: cfg.duration,
                delay: cfg.delay,
                repeat: Infinity,
                ease: 'linear',
                repeatDelay: 0.4,
              }}
            />
          </div>
        );
      })}
    </div>
  );
}

export function ServicePageHero({
  breadcrumb,
  title,
  description,
  ctaText = 'Get Started',
  ctaHref = '/contact',
  backgroundImage = '/HOMEPAGEBANNER.png',
}: ServicePageHeroProps) {
  return (
    <section className="relative min-h-screen bg-[#111112] overflow-hidden flex flex-col">
      {/* Background photo */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          backgroundImage: `url("${backgroundImage}")`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat',
        }}
      />

      {/* Dark veil */}
      <div className="absolute inset-0 bg-black/60 pointer-events-none" />

      {/* Red radial glow — bottom-left (matches homepage) */}
      <div
        className="absolute bottom-0 left-0 pointer-events-none"
        style={{
          width: '55vw',
          height: '50vh',
          background:
            'radial-gradient(ellipse at bottom left, rgba(227,10,19,0.30) 0%, transparent 65%)',
        }}
      />

      <VerticalRainLines />

      {/* Navbar sits at the top inside the hero, same pattern as homepage */}
      <div className="relative z-30">
        <Navbar />
      </div>

      {/* Content — pinned to bottom-left of viewport */}
      <div className="relative z-10 flex-1 flex flex-col justify-end max-w-[1344px] mx-auto w-full px-4 md:px-6 lg:px-12 pb-16 md:pb-20 lg:pb-28">
        {/* Breadcrumb */}
        <motion.p
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4 }}
          className="text-white/30 text-[11px] uppercase tracking-[0.18em] mb-4 md:mb-5"
        >
          {breadcrumb}
        </motion.p>

        {/* Title */}
        <motion.h1
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.06, ease: [0.22, 1, 0.36, 1] }}
          className="text-white font-bold leading-tight tracking-tight mb-4 md:mb-6"
          style={{
            fontSize: 'clamp(34px, 6vw, 84px)',
            fontFamily: "'Playfair Display', 'Georgia', serif",
          }}
        >
          {title}
        </motion.h1>

        {/* Subtitle */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.16 }}
          className="text-white/55 text-[14px] md:text-[15px] leading-relaxed max-w-[520px] mb-8 md:mb-10"
        >
          {description}
        </motion.p>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.26 }}
        >
          <Link
            href={ctaHref}
            className="inline-flex items-center bg-[#E30A13] hover:bg-[#c8000a] text-white text-sm font-semibold px-7 py-3.5 rounded-full transition-colors duration-200"
          >
            {ctaText}
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
