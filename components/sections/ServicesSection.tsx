'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Link from 'next/link';

const serviceCategories = [
  {
    label: 'Consulting & Strategy',
    href: '/services/consulting-strategy',
    layout: 'left' as const,
    images: [
      'https://images.unsplash.com/photo-1600880292203-757bb62b4baf?w=300&q=80',
    ],
  },
  {
    label: 'Digital Solutions',
    href: '/services/digital-solutions',
    layout: 'both-sides' as const,
    images: [
      'https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=300&q=80',
      'https://images.unsplash.com/photo-1517694712202-14dd9538aa97?w=300&q=80',
    ],
  },
  {
    label: 'Research & Analysis',
    href: '/services/research-analysis',
    layout: 'center' as const,
    images: [
      'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=300&q=80',
    ],
  },
  {
    label: 'Content & Growth',
    href: '/services/content-growth',
    layout: 'right-pair' as const,
    images: [
      'https://images.unsplash.com/photo-1504868584819-f8e8b4b6d7e3?w=300&q=80',
      'https://images.unsplash.com/photo-1533750516457-a7f992034fec?w=300&q=80',
    ],
  },
];

const IMG_W = 148;
const IMG_H = 92;
const EASE = [0.4, 0, 0.2, 1] as const;

/* ── Image thumbnail ─────────────────────────────────────────────────────── */
function Img({ src, hovered, delay = 0 }: { src: string; hovered: boolean; delay?: number }) {
  return (
    <motion.div
      animate={{ width: hovered ? IMG_W : 0 }}
      transition={{ duration: 0.55, ease: EASE, delay: hovered ? delay : 0 }}
      style={{ height: IMG_H, overflow: 'hidden', flexShrink: 0, position: 'relative' }}
    >
      {/* Full-size image anchored to the center of the growing wrapper.
          width 0→IMG_W reveals center first then sides; collapse hides sides first. */}
      <div
        className="absolute left-1/2 top-0 -translate-x-1/2 rounded-lg overflow-hidden"
        style={{ width: IMG_W, height: IMG_H }}
      >
        <img
          src={src}
          alt=""
          className="w-full h-full object-cover block"
        />
      </div>
    </motion.div>
  );
}

/* ── Service label text ──────────────────────────────────────────────────── */
function Label({ hovered, children }: { hovered: boolean; children: React.ReactNode }) {
  return (
    <motion.span
      animate={{ color: hovered ? '#ffffff' : 'rgba(255,255,255,0.52)' }}
      transition={{ duration: 0.32, ease: EASE }}
      className="font-serif font-bold tracking-tight leading-none whitespace-nowrap relative z-[3]"
      style={{
        fontSize: 'clamp(32px, 8vw, 90px)',
      }}
    >
      {children}
    </motion.span>
  );
}

/* ── Bottom-to-top fill, top-to-bottom exit ──────────────────────────────── */
function DirectionalFill({ hovered }: { hovered: boolean }) {
  return (
    <AnimatePresence>
      {hovered && (
        <motion.div
          initial={{ clipPath: 'inset(100% 0% 0% 0%)' }}
          animate={{ clipPath: 'inset(0% 0% 0% 0%)' }}
          exit={{ clipPath: 'inset(100% 0% 0% 0%)' }}
          transition={{ duration: 0.65, ease: EASE }}
          className="absolute inset-0 bg-rainbow-red z-[1] pointer-events-none"
        />
      )}
    </AnimatePresence>
  );
}

/* ── Single service row ──────────────────────────────────────────────────── */
function ServiceRow({ service }: { service: (typeof serviceCategories)[0] }) {
  const [hovered, setHovered] = useState(false);
  const { label, href, layout, images } = service;

  // Only used by the 'center' layout
  const words = label.split(' ');
  const mid = Math.floor(words.length / 2);
  const leftWords = words.slice(0, mid).join(' ');
  const rightWords = words.slice(mid).join(' ');

  return (
    <Link href={href} className="block no-underline">
      <motion.div
        onHoverStart={() => setHovered(true)}
        onHoverEnd={() => setHovered(false)}
        className="px-4 md:px-12 py-4 relative flex items-center justify-center overflow-hidden cursor-pointer border-b border-white/[0.12] min-h-[80px]"
      >
        <DirectionalFill hovered={hovered} />

        {/* Center layout: split label with image between; entire group stays centered */}
        {layout === 'center' ? (
          <div
            className="flex items-center gap-5 relative z-[3]"
          >
            <Label hovered={hovered}>{leftWords}</Label>
            <div className="hidden md:block">
              <Img src={images[0]} hovered={hovered} />
            </div>
            <Label hovered={hovered}>{rightWords}</Label>
          </div>
        ) : (
          /* All other layouts: label always stays centered in the row */
          <Label hovered={hovered}>{label}</Label>
        )}

        {/* Images float absolutely at their edge positions (hidden on mobile) */}

        {/* Row 1: single image at left edge */}
        {layout === 'left' && (
          <div
            className="hidden md:block absolute left-6 top-1/2 -translate-y-1/2 z-[3]"
          >
            <Img src={images[0]} hovered={hovered} />
          </div>
        )}

        {/* Row 2: one image at each edge */}
        {layout === 'both-sides' && (
          <>
            <div
              className="hidden md:block absolute left-6 top-1/2 -translate-y-1/2 z-[3]"
            >
              <Img src={images[0]} hovered={hovered} />
            </div>
            <div
              className="hidden md:block absolute right-6 top-1/2 -translate-y-1/2 z-[3]"
            >
              <Img src={images[1]} hovered={hovered} delay={0.06} />
            </div>
          </>
        )}

        {/* Row 4: two images at right edge */}
        {layout === 'right-pair' && (
          <div
            className="hidden md:flex gap-4 absolute right-6 top-1/2 -translate-y-1/2 z-[3]"
          >
            <Img src={images[0]} hovered={hovered} />
            <Img src={images[1]} hovered={hovered} delay={0.06} />
          </div>
        )}
      </motion.div>
    </Link>
  );
}

/* ── Marquee ─────────────────────────────────────────────────────────────── */
function MarqueeText() {
  return (
    <div className="overflow-hidden bg-rainbow-red py-[14px]">
      <motion.div
        className="flex whitespace-nowrap"
        animate={{ x: ['0%', '-50%'] }}
        transition={{ duration: 18, ease: 'linear', repeat: Infinity }}
      >
        {Array.from({ length: 8 }).map((_, i) => (
          <span
            key={i}
            className="text-white font-bold text-[13px] uppercase tracking-[0.15em] pr-6"
          >
            Scale Your Business ✦ Strategy ✦ Growth ✦ Innovation ✦
          </span>
        ))}
      </motion.div>
    </div>
  );
}

/* ── Service scroller ────────────────────────────────────────────────────── */
function ServiceScroller() {
  return (
    <div className="bg-[#0a0a0a]">
      {/* Header */}
      <div className="grid grid-cols-1 md:grid-cols-[220px_1fr_220px] gap-4 md:gap-8 items-start px-4 py-8 md:px-12 md:py-14">
        <div className="flex items-center gap-1 pt-[4px]">
          <span className="text-white/[0.45] text-[13px]">↳</span>
          <span
            className="text-[11px] font-medium tracking-[0.18em] uppercase text-white/[0.45]"
          >
            What We <span className="text-rainbow-red font-bold">Offer</span>
          </span>
        </div>
        <p
          className="text-white font-semibold m-0 max-w-[640px] tracking-[-0.01em] leading-[1.45]"
          style={{
            fontSize: 'clamp(16px, 1.9vw, 26px)',
          }}
        >
          From market insights to digital platforms and growth, we deliver everything your
          business needs—practical, focused, and outcome-driven.
        </p>
        <div className="flex justify-start md:justify-end pt-[4px]">
          <Link
            href="/contact"
            className="inline-block bg-white text-[#0a0a0a] text-[13px] font-semibold rounded-full no-underline tracking-[0.02em] whitespace-nowrap px-[22px] py-[11px]"
          >
            Get In Touch
          </Link>
        </div>
      </div>

      {/* Scale label */}
      <div className="flex justify-center pb-[18px] px-6">
        <span
          className="text-[11px] font-medium tracking-[0.22em] uppercase text-white/30"
        >
          Scale Your <span className="text-rainbow-red">Business</span>
        </span>
      </div>

      <div className="border-t border-white/[0.12]" />

      {serviceCategories.map((service) => (
        <ServiceRow key={service.label} service={service} />
      ))}
    </div>
  );
}

/* ── Main export ─────────────────────────────────────────────────────────── */
export function ServicesSection() {
  return (
    <>
      <MarqueeText />
      <ServiceScroller />
    </>
  );
}
