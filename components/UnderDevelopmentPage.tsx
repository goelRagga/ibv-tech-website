'use client';

import { motion, useAnimationControls, AnimatePresence } from 'framer-motion';
import { useEffect, useRef } from 'react';
import Link from 'next/link';

const TITLE_LINE1 = 'UNDER';
const TITLE_LINE2 = 'DEVELOPMENT';
const TICKER_ITEMS = [
  'COMING SOON',
  '·',
  'IBV TECHNOLOGIES',
  '·',
  'UNDER DEVELOPMENT',
  '·',
  'STAY TUNED',
  '·',
  'SOMETHING GREAT IS BREWING',
  '·',
];

const letterVariants = {
  hidden: { opacity: 0, y: 60, rotateX: -90 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    rotateX: 0,
    transition: {
      delay: i * 0.04,
      duration: 0.6,
      ease: [0.22, 1, 0.36, 1],
    },
  }),
};

const pulseRing = {
  animate: {
    scale: [1, 1.6, 1],
    opacity: [0.15, 0, 0.15],
    transition: { duration: 3, repeat: Infinity, ease: 'easeInOut' },
  },
};

const pulseRing2 = {
  animate: {
    scale: [1, 2, 1],
    opacity: [0.08, 0, 0.08],
    transition: { duration: 3, repeat: Infinity, ease: 'easeInOut', delay: 1 },
  },
};

export default function UnderDevelopmentPage() {
  const tickerControls = useAnimationControls();
  const tickerRef = useRef<HTMLDivElement>(null);

  // Seamless infinite ticker
  useEffect(() => {
    const run = async () => {
      if (!tickerRef.current) return;
      const width = tickerRef.current.scrollWidth / 2;
      await tickerControls.start({
        x: [-0, -width],
        transition: {
          duration: 30,
          ease: 'linear',
          repeat: Infinity,
          repeatType: 'loop',
        },
      });
    };
    run();
  }, [tickerControls]);

  const tickerContent = [...TICKER_ITEMS, ...TICKER_ITEMS, ...TICKER_ITEMS, ...TICKER_ITEMS];

  return (
    <div
      className="relative min-h-screen w-full overflow-hidden flex flex-col items-center justify-center"
      style={{ background: '#111112', fontFamily: 'var(--font-primary)' }}
    >
      {/* Animated ambient blobs */}
      <motion.div
        className="absolute rounded-full pointer-events-none"
        style={{
          width: 700,
          height: 700,
          background: 'radial-gradient(circle, rgba(227,10,19,0.18) 0%, transparent 70%)',
          top: '50%',
          left: '50%',
          x: '-50%',
          y: '-50%',
        }}
        animate={{ scale: [1, 1.15, 1], opacity: [0.7, 1, 0.7] }}
        transition={{ duration: 6, repeat: Infinity, ease: 'easeInOut' }}
      />
      <motion.div
        className="absolute rounded-full pointer-events-none"
        style={{
          width: 400,
          height: 400,
          background: 'radial-gradient(circle, rgba(229,76,115,0.12) 0%, transparent 70%)',
          top: '20%',
          left: '15%',
        }}
        animate={{ x: [0, 40, 0], y: [0, -30, 0], opacity: [0.5, 0.9, 0.5] }}
        transition={{ duration: 9, repeat: Infinity, ease: 'easeInOut' }}
      />
      <motion.div
        className="absolute rounded-full pointer-events-none"
        style={{
          width: 300,
          height: 300,
          background: 'radial-gradient(circle, rgba(152,23,39,0.15) 0%, transparent 70%)',
          bottom: '15%',
          right: '10%',
        }}
        animate={{ x: [0, -30, 0], y: [0, 30, 0], opacity: [0.4, 0.8, 0.4] }}
        transition={{ duration: 7, repeat: Infinity, ease: 'easeInOut', delay: 2 }}
      />

      {/* Pulse rings */}
      <motion.div
        className="absolute rounded-full border pointer-events-none"
        style={{
          width: 500,
          height: 500,
          borderColor: 'rgba(227,10,19,0.15)',
          top: '50%',
          left: '50%',
          x: '-50%',
          y: '-50%',
        }}
        variants={pulseRing}
        animate="animate"
      />
      <motion.div
        className="absolute rounded-full border pointer-events-none"
        style={{
          width: 500,
          height: 500,
          borderColor: 'rgba(227,10,19,0.08)',
          top: '50%',
          left: '50%',
          x: '-50%',
          y: '-50%',
        }}
        variants={pulseRing2}
        animate="animate"
      />

      {/* Grid overlay */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          backgroundImage:
            'linear-gradient(rgba(255,255,255,0.02) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.02) 1px, transparent 1px)',
          backgroundSize: '80px 80px',
        }}
      />

      {/* Center content */}
      <div className="relative z-10 flex flex-col items-center text-center px-6">
        {/* Main title — line 1 */}
        <div
          className="overflow-hidden"
          style={{ perspective: '1000px' }}
          aria-label="UNDER DEVELOPMENT"
        >
          <div className="flex justify-center flex-wrap">
            {TITLE_LINE1.split('').map((char, i) => (
              <motion.span
                key={`l1-${i}`}
                custom={i}
                variants={letterVariants}
                initial="hidden"
                animate="visible"
                className="inline-block"
                style={{
                  fontSize: 'clamp(56px, 10vw, 130px)',
                  fontWeight: 800,
                  lineHeight: 1,
                  letterSpacing: '-0.03em',
                  color: '#FFFFFF',
                  fontFamily: 'var(--font-primary)',
                  textTransform: 'uppercase',
                  marginRight: char === ' ' ? '0.25em' : '0',
                }}
              >
                {char === ' ' ? '\u00A0' : char}
              </motion.span>
            ))}
          </div>

          {/* Line 2 — gradient red */}
          <div className="flex justify-center flex-wrap mt-1">
            {TITLE_LINE2.split('').map((char, i) => (
              <motion.span
                key={`l2-${i}`}
                custom={TITLE_LINE1.length + i}
                variants={letterVariants}
                initial="hidden"
                animate="visible"
                className="inline-block"
                style={{
                  fontSize: 'clamp(56px, 10vw, 130px)',
                  fontWeight: 800,
                  lineHeight: 1,
                  letterSpacing: '-0.03em',
                  background: 'linear-gradient(135deg, #E30A13 0%, #E54C73 60%, #981727 100%)',
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                  backgroundClip: 'text',
                  fontFamily: 'var(--font-primary)',
                  textTransform: 'uppercase',
                }}
              >
                {char}
              </motion.span>
            ))}
          </div>
        </div>

        {/* Subtitle */}
        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.9, duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          style={{
            fontSize: 'clamp(16px, 2.5vw, 22px)',
            color: 'rgba(255,255,255,0.45)',
            fontFamily: 'var(--font-primary)',
            fontWeight: 400,
            marginTop: '24px',
            letterSpacing: '0.01em',
          }}
        >
          We&apos;re crafting something extraordinary. Check back soon.
        </motion.p>

        {/* Back home button */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.1, duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          className="mt-8"
        >
          <Link
            href="/"
            className="inline-flex items-center gap-2 px-5 py-2 rounded-full font-medium transition-all duration-300"
            style={{
              background: 'rgba(255,255,255,0.06)',
              border: '1px solid rgba(255,255,255,0.12)',
              color: '#FFFFFF',
              fontSize: '13px',
              fontFamily: 'var(--font-primary)',
              letterSpacing: '0.01em',
              textDecoration: 'none',
            }}
            onMouseEnter={e => {
              (e.currentTarget as HTMLElement).style.background = '#E30A13';
              (e.currentTarget as HTMLElement).style.borderColor = '#E30A13';
            }}
            onMouseLeave={e => {
              (e.currentTarget as HTMLElement).style.background = 'rgba(255,255,255,0.06)';
              (e.currentTarget as HTMLElement).style.borderColor = 'rgba(255,255,255,0.12)';
            }}
          >
            <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
              <path d="M10 12L6 8L10 4" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
            Back to Homepage
          </Link>
        </motion.div>
      </div>

      {/* Bottom ticker strip */}
      <motion.div
        className="absolute bottom-0 left-0 right-0 overflow-hidden"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.6, duration: 0.5 }}
        style={{
          borderTop: '1px solid rgba(227,10,19,0.2)',
          background: 'rgba(227,10,19,0.05)',
          padding: '12px 0',
        }}
      >
        <motion.div
          ref={tickerRef}
          className="flex whitespace-nowrap"
          animate={tickerControls}
        >
          {tickerContent.map((item, i) => (
            <span
              key={i}
              className="inline-block"
              style={{
                fontSize: '11px',
                fontWeight: 600,
                letterSpacing: '0.18em',
                textTransform: 'uppercase',
                color: item === '·' ? '#E30A13' : 'rgba(255,255,255,0.35)',
                fontFamily: 'var(--font-mono)',
                padding: '0 20px',
              }}
            >
              {item}
            </span>
          ))}
        </motion.div>
      </motion.div>

      {/* IBV logo top-left */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.3, duration: 0.6 }}
        className="absolute top-8 left-8"
        style={{
          fontSize: '13px',
          fontWeight: 700,
          letterSpacing: '0.12em',
          color: 'rgba(255,255,255,0.5)',
          fontFamily: 'var(--font-primary)',
          textTransform: 'uppercase',
        }}
      >
        IBV Technologies
      </motion.div>
    </div>
  );
}
