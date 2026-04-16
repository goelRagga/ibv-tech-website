'use client';

import { useEffect, useRef, useState } from 'react';
import { motion } from 'framer-motion';

const whyChooseUs = [
  {
    number: '01',
    title: 'End-to-end business solutions',
    desc: 'From strategy and research to development and execution, we bring everything together under one roof to ensure consistency and speed.',
    image: 'https://res.cloudinary.com/dm8jtnzdi/image/upload/q_auto/f_auto/v1776361849/Business_SOLutions_uprnxg.png',
  },
  {
    number: '02',
    title: 'Tailored for your business',
    desc: 'Every solution is built around your goals, challenges, and market. We focus on what works for you, not one-size-fits-all approaches.',
    image: 'https://res.cloudinary.com/dm8jtnzdi/image/upload/q_auto/f_auto/v1776361849/Tailored_Business_yrsbjw.png',
  },
  {
    number: '03',
    title: 'Strategy backed by research',
    desc: 'Our decisions are guided by market insights, data, and analysis, helping you move forward with clarity and confidence.',
    image: 'https://res.cloudinary.com/dm8jtnzdi/image/upload/q_auto/f_auto/v1776361849/Reseach_gvq5tb.png',
  },
  {
    number: '04',
    title: 'Built for long-term growth',
    desc: 'We create solutions that are not just effective today but designed to scale and support your business as it evolves.',
    image: 'https://res.cloudinary.com/dm8jtnzdi/image/upload/q_auto/f_auto/v1776361848/Long_term_wxwksn.png',
  },
];

const clientAvatars = [
  'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=80&q=80',
  'https://images.unsplash.com/photo-1494790108755-2616b7b4d5c9?w=80&q=80',
  'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=80&q=80',
  'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=80&q=80',
];

// Hook: returns true once the element enters viewport
function useInView(ref: React.RefObject<Element>, threshold = 0.3) {
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

// Renders text as word-spans that sweep from black → red progressively
function SweepText({
  text,
  redWordCount,
  triggered,
  className,
  style,
}: {
  text: string;
  redWordCount: number;
  triggered: boolean;
  className?: string;
  style?: React.CSSProperties;
}) {
  const words = text.split(' ');
  const SWEEP_DURATION_MS = 3200;
  const stepMs = SWEEP_DURATION_MS / Math.max(redWordCount, 1);

  return (
    <span className={className} style={style}>
      {words.map((word, i) => {
        const isRed = i < redWordCount;
        const delayMs = triggered && isRed ? i * stepMs : 0;
        return (
          <span
            key={i}
            style={{
              color: triggered && isRed ? '#E30A13' : '#111',
              transition: triggered && isRed ? `color 0.4s ease ${delayMs}ms` : 'none',
              display: 'inline',
            }}
          >
            {word}{i < words.length - 1 ? ' ' : ''}
          </span>
        );
      })}
    </span>
  );
}

export function WhyChooseUsSection() {
  const heroRef = useRef<HTMLDivElement>(null);
  const imgRef = useRef<HTMLDivElement>(null);
  const statsRef = useRef<HTMLDivElement>(null);
  const cardsRef = useRef<HTMLDivElement>(null);

  const heroInView = useInView(heroRef);
  const imgInView = useInView(imgRef, 0.2);
  const statsInView = useInView(statsRef);
  const cardsInView = useInView(cardsRef);

  const EASE = [0.22, 1, 0.36, 1] as const;

  const heroText =
    'We craft strategic and data-driven approaches that increase visibility, generate quality leads, and drive sustainable business growth.';
  const statText =
    'Solutions designed to simplify complexity, align with your goals, and deliver real business outcomes that matter.';

  const statWords = statText.split(' ').length;

  return (
    <section className="bg-white overflow-hidden">
      {/* ── TOP HERO: centered text + clients ── */}
      <motion.div
        ref={heroRef}
        initial={{ opacity: 0, y: 30 }}
        animate={heroInView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 2.5, ease: EASE }}
        className="text-center px-3 pt-[60px] pb-5"
      >
        <SweepText
          text={heroText}
          redWordCount={8} // "We craft" → red
          triggered={heroInView}
          style={{
            fontSize: 'clamp(22px, 3.5vw, 42px)',
            fontWeight: 700,
            lineHeight: 1.3,
            letterSpacing: '-0.02em',
            display: 'block',
            maxWidth: 700,
            margin: '0 auto 28px',
          }}
        />

        {/* Client avatars */}
        <div className="flex items-center justify-center gap-3">
          <div className="flex">
            {clientAvatars.map((src, i) => (
              <div
                key={i}
                className="rounded-full overflow-hidden shrink-0"
                style={{
                  width: 34, height: 34,
                  border: '2.5px solid white',
                  marginLeft: i === 0 ? 0 : -10,
                  boxShadow: '0 1px 6px rgba(0,0,0,0.14)',
                }}
              >
                <img src={src} alt="" className="w-full h-full object-cover" />
              </div>
            ))}
            {/* Red + badge */}
            <div
              className="rounded-full bg-rainbow-red text-white text-[18px] font-bold flex items-center justify-center shrink-0"
              style={{
                width: 34, height: 34,
                marginLeft: -10,
                border: '2.5px solid white',
              }}
            >
              +
            </div>
          </div>
          <div className="flex items-center gap-1">
            <div className="rounded-full bg-rainbow-red" style={{ width: 7, height: 7 }} />
            <span className="text-[13px] text-[#555] font-medium">
              Trusted by 50+ clients across the globe
            </span>
          </div>
        </div>
      </motion.div>

      {/* ── FULL WIDTH IMAGE ── */}
      <motion.div
        ref={imgRef}
        initial={{ opacity: 0, y: 20 }}
        animate={imgInView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 1.5, ease: EASE, delay: 0.1 }}
      >
        <img
          src="https://res.cloudinary.com/dm8jtnzdi/image/upload/q_auto/f_auto/v1776361851/BANNER_IMAGE_CHOOSe_US_uevvac.png"
          alt="Business collaboration"
          className="w-full object-cover block"
          style={{ height: 340 }}
        />
      </motion.div>

      {/* ── STATS ROW ── */}
      <motion.div
        ref={statsRef}
        initial={{ opacity: 0, y: 24 }}
        animate={statsInView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.8, ease: EASE }}
        className="grid grid-cols-2 border-t border-black/[0.08]"
      >
        <div className="py-4 px-3 border-r border-black/[0.08]">
          <div
            className="text-black font-extrabold leading-none"
            style={{ fontSize: 'clamp(48px,6vw,80px)' }}
          >
            90%
          </div>
          <div className="text-[18px] text-[#444] font-semibold mt-[6px]">
            Projects Delivered
          </div>
          <div className="text-body-sm text-[#888] mt-[4px] leading-[1.55]">
            Turning ideas into real, scalable<br />business outcomes.
          </div>
        </div>
        <div className="py-4 px-3 flex items-center">
          <SweepText
            text={statText}
            redWordCount={Math.ceil(statWords / 2)}
            triggered={statsInView}
            style={{
              fontSize: 'clamp(16px, 2vw, 22px)',
              fontWeight: 700,
              lineHeight: 1.4,
              display: 'block',
            }}
          />
        </div>
      </motion.div>

      {/* ── 4 CARDS ── */}
      <motion.div
        ref={cardsRef}
        initial={{ opacity: 0, y: 24 }}
        animate={cardsInView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.8, ease: EASE, delay: 0.1 }}
        className="grid grid-cols-4"
      >
        {whyChooseUs.map((item, i) => (
          <div
            key={item.title}
            className={`border-t border-black/[0.09] p-3${i > 0 ? ' border-l' : ''}`}
          >
            <div className="text-rainbow-red text-[11px] font-bold tracking-[0.06em] mb-[10px]">
              {item.number}
            </div>
            <div className="text-body-lg font-bold text-[#111] mb-[10px] leading-[1.35]">
              {item.title}
            </div>
            <p className="text-body-sm text-[#666] leading-[1.7] m-0">
              {item.desc}
            </p>
            <div className="rounded-lg overflow-hidden mt-2 h-[150px]">
              <img src={item.image} alt="" className="w-full h-full object-cover block" />
            </div>
          </div>
        ))}
      </motion.div>
    </section>
  );
}