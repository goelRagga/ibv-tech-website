'use client';

import { motion } from 'framer-motion';

export interface WhyUsItem {
  heading: string;
  body: string;
}

interface ServiceWhyUsSectionProps {
  heading: string;
  paragraphs?: string[];
  imageSrc?: string;
  imageAlt?: string;
  /** Label words — last word becomes red. Default: 'Why Choose Us' */
  eyebrow?: string;
  /** When provided, replaces the image with a list of heading/body items */
  items?: WhyUsItem[];
}

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  visible: (delay = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, delay, ease: [0.22, 1, 0.36, 1] },
  }),
};

export function ServiceWhyUsSection({
  heading,
  paragraphs = [],
  imageSrc,
  imageAlt = '',
  eyebrow = 'Why Choose Us',
  items,
}: ServiceWhyUsSectionProps) {
  // Split eyebrow — last word is red
  const words = eyebrow.trim().split(' ');
  const redWord = words.pop();
  const plainWords = words.join(' ');

  return (
    <section
      className="bg-[#F6F6F8]"
      style={{ padding: 'clamp(32px, 4vw, 56px) 0' }}
    >
      <div className="max-w-[1344px] mx-auto px-4 lg:px-0">
        <div
          className="grid grid-cols-1 lg:grid-cols-2"
          style={{ gap: '12px', alignItems: 'stretch' }}
        >

          {/* ── LEFT: black card ── */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-60px' }}
            variants={fadeUp}
            className="min-h-[360px] md:min-h-[440px] lg:min-h-[clamp(440px,52vw,560px)]"
            style={{
              background: '#0E0E0F',
              borderRadius: '16px',
              padding: 'clamp(24px, 4vw, 48px)',
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'space-between',
            }}
          >
            {/* Top: eyebrow + heading */}
            <div>
              {/* Eyebrow */}
              <div className="flex items-center gap-2 mb-6">
                <svg width="18" height="14" viewBox="0 0 18 14" fill="none">
                  <path
                    d="M1 7H17M11 1L17 7L11 13"
                    stroke="white"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
                <span
                  className="font-bold uppercase"
                  style={{ fontSize: '11px', letterSpacing: '0.15em', color: 'white' }}
                >
                  {plainWords}{' '}
                  <span style={{ color: '#E30A13' }}>{redWord}</span>
                </span>
              </div>

              {/* Heading */}
              <h2
                className="text-white font-semibold leading-tight"
                style={{
                  fontSize: 'clamp(26px, 2.6vw, 44px)',
                  letterSpacing: '-0.025em',
                  maxWidth: '420px',
                  fontFamily: 'var(--font-serif)',
                }}
              >
                {heading}
              </h2>
            </div>

            {/* Bottom: paragraphs */}
            <div style={{ display: 'flex', flexDirection: 'column', gap: '14px' }}>
              {paragraphs.map((p, i) => (
                <p
                  key={i}
                  style={{
                    fontSize: 'clamp(12px, 1.1vw, 14px)',
                    color: 'rgba(255,255,255,0.55)',
                    lineHeight: 1.75,
                    margin: 0,
                  }}
                >
                  {p}
                </p>
              ))}
            </div>
          </motion.div>

          {/* ── RIGHT: items list or photo ── */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-60px' }}
            transition={{ duration: 0.75, delay: 0.12, ease: [0.22, 1, 0.36, 1] }}
            className="min-h-[280px] md:min-h-[440px] lg:min-h-[clamp(440px,52vw,560px)]"
            style={{
              borderRadius: '16px',
              overflow: 'hidden',
              background: items ? '#F6F6F8' : '#1a1a1a',
            }}
          >
            {items ? (
              <div style={{ padding: 'clamp(24px, 3vw, 40px)', display: 'flex', flexDirection: 'column', height: '100%' }}>
                {items.map((item, i) => (
                  <div
                    key={i}
                    style={{
                      padding: 'clamp(16px, 2vw, 24px) 0',
                      borderBottom: i < items.length - 1 ? '1px solid #E0E0E4' : 'none',
                    }}
                  >
                    <h3
                      style={{
                        fontSize: 'clamp(13px, 1.2vw, 15px)',
                        fontWeight: 600,
                        color: '#111112',
                        marginBottom: '8px',
                        fontFamily: 'var(--font-serif)',
                      }}
                    >
                      {item.heading}
                    </h3>
                    <p
                      style={{
                        fontSize: 'clamp(11px, 0.95vw, 13px)',
                        color: '#76767F',
                        lineHeight: 1.75,
                        margin: 0,
                      }}
                    >
                      {item.body}
                    </p>
                  </div>
                ))}
              </div>
            ) : imageSrc ? (
              <img
                src={imageSrc}
                alt={imageAlt}
                style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block' }}
              />
            ) : (
              <div
                style={{
                  width: '100%',
                  height: '100%',
                  background: 'linear-gradient(135deg, #1a1208 0%, #2d2010 50%, #1a1a1a 100%)',
                }}
              />
            )}
          </motion.div>

        </div>
      </div>
    </section>
  );
}