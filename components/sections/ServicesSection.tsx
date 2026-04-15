'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import Link from 'next/link';
import { AnimateOnScroll } from '@/components/ui/AnimateOnScroll';

const serviceCategories = [
  {
    label: 'Consulting & Strategy',
    href: '/services/consulting-strategy',
    layout: 'left' as const,
    fillDir: 'ltr' as const, // row 1 → left to right
    images: [
      'https://images.unsplash.com/photo-1600880292203-757bb62b4baf?w=300&q=80',
    ],
  },
  {
    label: 'Digital Solutions',
    href: '/services/digital-solutions',
    layout: 'both-sides' as const,
    fillDir: 'rtl' as const, // row 2 → right to left
    images: [
      'https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=300&q=80',
      'https://images.unsplash.com/photo-1517694712202-14dd9538aa97?w=300&q=80',
    ],
  },
  {
    label: 'Research & Analysis',
    href: '/services/research-analysis',
    layout: 'center' as const,
    fillDir: 'ltr' as const, // row 3 → left to right
    images: [
      'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=300&q=80',
    ],
  },
  {
    label: 'Content & Growth',
    href: '/services/content-growth',
    layout: 'right-pair' as const,
    fillDir: 'rtl' as const, // row 4 → right to left
    images: [
      'https://images.unsplash.com/photo-1504868584819-f8e8b4b6d7e3?w=300&q=80',
      'https://images.unsplash.com/photo-1533750516457-a7f992034fec?w=300&q=80',
    ],
  },
];

const whyChooseUs = [
  {
    number: '01',
    title: 'End-to-end business solutions',
    desc: 'From strategy and research to development and execution, we bring everything together under one roof to ensure consistency, speed, and better results.',
  },
  {
    number: '02',
    title: 'Tailored for your business',
    desc: 'Every solution is built around your goals, challenges, and market. We focus on what works for you, not one-size-fits-all approaches.',
  },
  {
    number: '03',
    title: 'Strategy backed by research',
    desc: 'Our decisions are guided by market insights, data, and analysis, helping you move forward with clarity and confidence.',
  },
  {
    number: '04',
    title: 'Built for long-term growth',
    desc: 'We create solutions that are not just effective today but designed to scale and support your business as it evolves.',
  },
];

const IMG_W = 148;
const IMG_H = 92;
const EASE = [0.4, 0, 0.2, 1] as const;

/* ── Image thumbnail ─────────────────────────────────────────────────────── */
function Img({ src, hovered, delay = 0 }: { src: string; hovered: boolean; delay?: number }) {
  return (
    <motion.div
      animate={{ opacity: hovered ? 1 : 0, scale: hovered ? 1 : 0.88 }}
      transition={{ duration: 0.38, ease: EASE, delay: hovered ? delay : 0 }}
      style={{ width: IMG_W, height: IMG_H, borderRadius: 8, overflow: 'hidden', flexShrink: 0 }}
    >
      <img src={src} alt="" style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block' }} />
    </motion.div>
  );
}

/* ── Service label text ──────────────────────────────────────────────────── */
function Label({ hovered, children }: { hovered: boolean; children: React.ReactNode }) {
  return (
    <motion.span
      animate={{ color: hovered ? '#ffffff' : 'rgba(255,255,255,0.52)' }}
      transition={{ duration: 0.32, ease: EASE }}
      style={{
        fontFamily: "'Playfair Display', 'Source Serif 4', Georgia, serif",
        fontSize: 'clamp(22px, 5vw, 76px)',
        fontWeight: 700,
        letterSpacing: '-0.02em',
        lineHeight: 1,
        whiteSpace: 'nowrap',
        position: 'relative',
        zIndex: 3,
      }}
    >
      {children}
    </motion.span>
  );
}

/* ── Directional fill overlay ────────────────────────────────────────────────
   fillDir='ltr' → red expands from left edge to right
   fillDir='rtl' → red expands from right edge to left
   Uses scaleX + transformOrigin so it's GPU-accelerated and perfectly smooth.
────────────────────────────────────────────────────────────────────────────── */
function DirectionalFill({ hovered, fillDir }: { hovered: boolean; fillDir: 'ltr' | 'rtl' }) {
  return (
    <motion.div
      animate={{ scaleX: hovered ? 1 : 0 }}
      transition={{ duration: 0.48, ease: EASE }}
      style={{
        position: 'absolute',
        inset: 0,
        background: '#E30A13',
        transformOrigin: fillDir === 'ltr' ? 'left center' : 'right center',
        zIndex: 1,
        pointerEvents: 'none',
      }}
    />
  );
}

/* ── Single service row ──────────────────────────────────────────────────── */
function ServiceRow({ service }: { service: (typeof serviceCategories)[0] }) {
  const [hovered, setHovered] = useState(false);
  const { label, href, layout, fillDir, images } = service;

  // For 'center' layout split the label around the image
  const words = label.split(' ');
  const mid = Math.floor(words.length / 2);
  const leftWords = words.slice(0, mid).join(' ');
  const rightWords = words.slice(mid).join(' ');

  return (
    <Link href={href} style={{ display: 'block', textDecoration: 'none' }}>
      <motion.div
        onHoverStart={() => setHovered(true)}
        onHoverEnd={() => setHovered(false)}
        className="px-4 md:px-12 py-3.5"
        style={{
          position: 'relative',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          overflow: 'hidden',
          cursor: 'pointer',
          borderBottom: '1px solid rgba(255,255,255,0.12)',
          minHeight: '80px',
        }}
      >
        {/* Directional red fill */}
        <DirectionalFill hovered={hovered} fillDir={fillDir} />

        {/* ── Row layouts ── */}

        {/* Row 1: image left, full label */}
        {layout === 'left' && (
          <div style={{ display: 'flex', alignItems: 'center', gap: 24, width: '100%', position: 'relative', zIndex: 3 }}>
            <div className="hidden md:block flex-shrink-0"><Img src={images[0]} hovered={hovered} /></div>
            <Label hovered={hovered}>{label}</Label>
          </div>
        )}

        {/* Row 2: image | label | image */}
        {layout === 'both-sides' && (
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', width: '100%', position: 'relative', zIndex: 3 }}>
            <div className="hidden md:block flex-shrink-0"><Img src={images[0]} hovered={hovered} /></div>
            <Label hovered={hovered}>{label}</Label>
            <div className="hidden md:block flex-shrink-0"><Img src={images[1]} hovered={hovered} delay={0.06} /></div>
          </div>
        )}

        {/* Row 3: leftWords | image | rightWords */}
        {layout === 'center' && (
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 20, width: '100%', position: 'relative', zIndex: 3 }}>
            <Label hovered={hovered}>{leftWords}</Label>
            <div className="hidden md:block flex-shrink-0"><Img src={images[0]} hovered={hovered} /></div>
            <Label hovered={hovered}>{rightWords}</Label>
          </div>
        )}

        {/* Row 4: label | image image */}
        {layout === 'right-pair' && (
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', width: '100%', position: 'relative', zIndex: 3 }}>
            <Label hovered={hovered}>{label}</Label>
            <div className="hidden md:flex gap-4 flex-shrink-0">
              <Img src={images[0]} hovered={hovered} />
              <Img src={images[1]} hovered={hovered} delay={0.06} />
            </div>
          </div>
        )}
      </motion.div>
    </Link>
  );
}

/* ── Marquee ─────────────────────────────────────────────────────────────── */
function MarqueeText() {
  return (
    <div style={{ padding: '14px 0', overflow: 'hidden', background: '#E30A13' }}>
      <motion.div
        style={{ display: 'flex', whiteSpace: 'nowrap' }}
        animate={{ x: ['0%', '-50%'] }}
        transition={{ duration: 18, ease: 'linear', repeat: Infinity }}
      >
        {Array.from({ length: 8 }).map((_, i) => (
          <span key={i} style={{ color: 'white', fontWeight: 700, fontSize: '13px', textTransform: 'uppercase', letterSpacing: '0.15em', paddingRight: '48px' }}>
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
    <div style={{ background: '#0a0a0a' }}>
      {/* Header */}
      <div className="grid grid-cols-1 md:grid-cols-[220px_1fr_220px] gap-5 md:gap-8 items-start px-4 py-10 md:px-12 md:py-14">
        <div style={{ display: 'flex', alignItems: 'center', gap: '8px', paddingTop: '4px' }}>
          <span style={{ color: 'rgba(255,255,255,0.45)', fontSize: '13px' }}>↳</span>
          <span style={{ fontSize: '11px', fontWeight: 500, letterSpacing: '0.18em', textTransform: 'uppercase' as const, color: 'rgba(255,255,255,0.45)' }}>
            What We <span style={{ color: '#E30A13', fontWeight: 700 }}>Offer</span>
          </span>
        </div>
        <p style={{ color: 'white', fontSize: 'clamp(17px, 1.9vw, 26px)', fontWeight: 600, lineHeight: 1.45, margin: 0, letterSpacing: '-0.01em', maxWidth: '640px' }}>
          From market insights to digital platforms and growth, we deliver everything your business needs—practical, focused, and outcome-driven.
        </p>
        <div style={{ display: 'flex', justifyContent: 'flex-end', paddingTop: '4px' }}>
          <Link href="/contact" style={{ display: 'inline-block', padding: '11px 22px', background: 'white', color: '#0a0a0a', fontSize: '13px', fontWeight: 600, borderRadius: '999px', textDecoration: 'none', letterSpacing: '0.02em', whiteSpace: 'nowrap' }}>
            Get In Touch
          </Link>
        </div>
      </div>

      {/* Scale label */}
      <div style={{ padding: '0 48px 18px', display: 'flex', justifyContent: 'center' }}>
        <span style={{ fontSize: '11px', fontWeight: 500, letterSpacing: '0.22em', textTransform: 'uppercase' as const, color: 'rgba(255,255,255,0.3)' }}>
          Scale Your <span style={{ color: '#E30A13' }}>Business</span>
        </span>
      </div>

      <div style={{ borderTop: '1px solid rgba(255,255,255,0.12)' }} />

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

      {/* Why Choose Us */}
      <section style={{ background: 'white', position: 'relative', zIndex: 20 }} className="px-4 py-16 md:px-12 md:py-24">
        <div style={{ maxWidth: '95vw', margin: '0 auto' }}>
          <div className="grid grid-cols-1 lg:grid-cols-[5fr_6fr] gap-12 lg:gap-20 items-start">
            <div>
              <AnimateOnScroll>
                <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '16px' }}>
                  <span style={{ color: 'rgba(0,0,0,0.4)', fontSize: '13px' }}>↳</span>
                  <span style={{ fontSize: '11px', fontWeight: 500, letterSpacing: '0.18em', textTransform: 'uppercase' as const, color: 'rgba(0,0,0,0.4)' }}>
                    What We <span style={{ color: '#E30A13', fontWeight: 700 }}>Offer</span>
                  </span>
                </div>
              </AnimateOnScroll>
              <AnimateOnScroll delay={0.1}>
                <p style={{ color: '#555556', fontSize: '15px', lineHeight: 1.7, marginTop: '24px', maxWidth: '420px' }}>
                  We craft strategic and data-driven approaches that increase visibility, generate quality leads, and drive sustainable business growth.
                </p>
              </AnimateOnScroll>
              <AnimateOnScroll delay={0.2}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginTop: '32px' }}>
                  <div style={{ width: '8px', height: '8px', borderRadius: '50%', background: '#E30A13', flexShrink: 0 }} />
                  <p style={{ fontSize: '14px', fontWeight: 500, color: '#555556', margin: 0 }}>Trusted by 50+ clients across the globe</p>
                </div>
                <div style={{ marginTop: '32px' }}>
                  <div style={{ color: '#E30A13', fontWeight: 700, fontSize: '52px', lineHeight: 1 }}>90%</div>
                  <div style={{ fontSize: '14px', color: '#555556', marginTop: '6px' }}>Projects Delivered</div>
                  <div style={{ fontSize: '12px', color: '#A8A8BC', marginTop: '6px', maxWidth: '340px', lineHeight: 1.6 }}>
                    Solutions designed to simplify complexity, align with your goals, and deliver real business outcomes.
                  </div>
                </div>
              </AnimateOnScroll>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 md:gap-10">
              {whyChooseUs.map((item, i) => (
                <AnimateOnScroll key={item.title} delay={i * 0.1}>
                  <div>
                    <div style={{ color: '#E30A13', fontSize: '12px', fontWeight: 600, marginBottom: '12px', letterSpacing: '0.05em' }}>{item.number}</div>
                    <h3 style={{ fontSize: '15px', fontWeight: 700, marginBottom: '10px', lineHeight: 1.3, color: '#111' }}>{item.title}</h3>
                    <p style={{ fontSize: '13px', color: '#555556', lineHeight: 1.7, margin: 0 }}>{item.desc}</p>
                  </div>
                </AnimateOnScroll>
              ))}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}