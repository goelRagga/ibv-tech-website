'use client';

import { useRef, useState, useEffect } from 'react';
import { motion } from 'framer-motion';

export type PillarType = 'red' | 'image' | 'dark';

export interface Pillar {
  number: string;
  title: string;
  desc: string;
  type: PillarType;
  image?: string | null;
}

export interface ThreePillarsSectionProps {
  labelPrefix?: string;
  labelHighlight?: string;
  heading?: React.ReactNode;
  ctaText?: string;
  ctaHref?: string;
  paragraph?: React.ReactNode;
  pillars?: [Pillar, Pillar, Pillar];
}

function useInView(ref: React.RefObject<Element>, threshold = 0.2) {
  const [inView, setInView] = useState(false);
  useEffect(() => {
    if (!ref.current) return;
    const obs = new IntersectionObserver(
      ([e]) => { if (e.isIntersecting) { setInView(true); obs.disconnect(); } },
      { threshold }
    );
    obs.observe(ref.current);
    return () => obs.disconnect();
  }, [ref, threshold]);
  return inView;
}

export function ThreePillarsSection({
  labelPrefix = 'Our',
  labelHighlight = 'Direction',
  heading,
  ctaText,
  ctaHref,
  paragraph,
  pillars,
}: ThreePillarsSectionProps) {
  const sectionRef = useRef<HTMLDivElement>(null);
  const inView = useInView(sectionRef as React.RefObject<Element>);
  const EASE = [0.22, 1, 0.36, 1] as const;

  return (
    <section ref={sectionRef} className="bg-white overflow-hidden" style={{ paddingTop: '40px', paddingBottom: '0' }}>
      <div className="container-ibv">

        {/* ── TOP ROW: label left + paragraph right ── */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, ease: EASE }}
          className="grid grid-cols-1 md:grid-cols-12 gap-6 mb-10 md:mb-14 items-start"
        >
          {/* Left: label */}
          <div className="md:col-span-3 flex items-center gap-2 pt-1">
            <svg width="18" height="14" viewBox="0 0 18 14" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M1 7H17M11 1L17 7L11 13" stroke="#111112" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
            <span
              className="font-bold uppercase tracking-[0.15em]"
              style={{ fontSize: '11px', color: '#111' }}
            >
              {labelPrefix}{' '}
              <span style={{ color: '#E30A13' }}>{labelHighlight}</span>
            </span>
          </div>

          {/* Right: heading + cta + paragraph */}
          {(heading || paragraph) && (
            <div className="md:col-span-9 flex flex-col gap-4">
              {heading && (
                <h2
                  className="text-[#111112] font-bold leading-snug"
                  style={{ fontSize: 'clamp(22px, 2.6vw, 36px)', maxWidth: '880px', fontFamily: 'var(--font-inter)' }}
                >
                  {heading}
                </h2>
              )}
              {paragraph && (
                <p
                  className="text-[#111112] font-semibold leading-snug"
                  style={{ fontSize: 'clamp(14px, 1.4vw, 18px)', maxWidth: '680px',  fontFamily: 'var(--font-inter)' }}
                >
                  {paragraph}
                </p>
              )}
              {ctaText && ctaHref && (
                <a
                  href={ctaHref}
                  className="inline-flex items-center gap-2 bg-[#E30A13] text-white text-[13px] font-semibold px-6 py-2.5 rounded-full hover:bg-[#c50910] transition-colors self-start"
                >
                  {ctaText}
                </a>
              )}
            </div>
          )}
        </motion.div>

        {/* ── THREE CARDS ── */}
        {pillars &&<div className="grid grid-cols-1 md:grid-cols-3 gap-3 md:gap-2 auto-rows-[240px] md:auto-rows-[clamp(260px,32vw,380px)]">
          {pillars && pillars.map((p, i) => {
            const bgStyle: React.CSSProperties =
              p.type === 'red'
                ? { background: '#E30A13' }
                : p.type === 'dark'
                ? { background: '#0E0E0F' }
                : {
                    backgroundImage: `url("${p.image}")`,
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',
                  };

            const numberColor =
              p.type === 'red'
                ? 'rgba(255,255,255,0.55)'
                : p.type === 'dark'
                ? '#E30A13'
                : 'rgba(255,255,255,0.7)';

            const titleColor = 'white';
            const descColor =
              p.type === 'red' ? 'rgba(255,255,255,0.82)' : 'rgba(255,255,255,0.72)';

            return (
              <motion.div
                key={p.title}
                initial={{ opacity: 0, y: 30 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.8, ease: EASE, delay: 0.1 + i * 0.1 }}
                className="relative overflow-hidden h-full"
                style={{
                  ...bgStyle,
                  borderRadius: '12px',
                }}
              >
                {/* Dark overlay for image card */}
                {p.type === 'image' && (
                  <div
                    className="absolute inset-0"
                    style={{ background: 'linear-gradient(to bottom, rgba(0,0,0,0.18) 0%, rgba(0,0,0,0.62) 100%)' }}
                  />
                )}

                {/* Card content */}
                <div className="absolute inset-0 flex flex-col justify-between p-6 md:p-7">
                  <div
                    className="font-bold"
                    style={{ fontSize: '14px', color: numberColor, letterSpacing: '0.06em' }}
                  >
                    {p.number}
                  </div>

                  <div>
                    <h3
                      className="font-bold leading-tight mb-1"
                      style={{ fontSize: 'clamp(18px, 2vw, 26px)', color: titleColor, fontFamily: 'var(--font-serif)' }}
                    >
                      {p.title}
                    </h3>
                    <p
                      className="leading-relaxed"
                      style={{ fontSize: 'clamp(12px, 1.1vw, 14px)', color: descColor }}
                    >
                      {p.desc}
                    </p>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>}
      </div>
    </section>
  );
}
