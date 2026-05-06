'use client';

import { type ReactNode, useRef, useState, useEffect } from 'react';
import { motion } from 'framer-motion';

// ─── Types ────────────────────────────────────────────────────────────────────
export interface ServiceCardItem {
  title: string;
  description: string;
  icon: ReactNode;
}

export interface ServiceCardGridProps {
  services: ServiceCardItem[];
}

export interface ServiceFullWidthBandProps {
  imageSrc?: string;
  /** Alt text for the image */
  imageAlt?: string;
  /** Height of the image block, defaults to clamp(280px, 36vw, 460px) */
  imageHeight?: string;
}

// ─── useInView ────────────────────────────────────────────────────────────────
function useInView(ref: React.RefObject<Element>, threshold = 0.1) {
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

// ─── ServiceFullWidthBand ─────────────────────────────────────────────────────
export function ServiceFullWidthBand({
  imageSrc,
  imageAlt = '',
  imageHeight = 'clamp(220px, 36vw, 460px)',
}: ServiceFullWidthBandProps) {
  return (
    <div
      className="w-full"
      style={{ background: '#181818', padding: '0 0 0 0' }}
    >
      <div
        className="max-w-[1344px] mx-auto px-4 lg:px-0"
        style={{ paddingTop: '40px' }}
      >
        <div
          className="w-full overflow-hidden"
          style={{
            height: imageHeight,
            borderRadius: '16px',
            background: '#111',
          }}
        >
          {imageSrc ? (
            <img
              src={imageSrc}
              alt={imageAlt}
              className="w-full h-full object-cover block"
            />
          ) : (
            /* Fallback dark gradient if no image */
            <div
              className="w-full h-full"
              style={{
                background:
                  'linear-gradient(135deg, #1a1a1a 0%, #2a2a2a 50%, #1a1a1a 100%)',
              }}
            />
          )}
        </div>
      </div>
    </div>
  );
}

// ─── ServiceCardGrid ──────────────────────────────────────────────────────────
export function ServiceCardGrid({ services }: ServiceCardGridProps) {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref as React.RefObject<Element>);
  const EASE = [0.22, 1, 0.36, 1] as const;

  return (
    <div
      ref={ref}
      style={{ background: '#181818', padding: 'clamp(32px, 4vw, 56px) 0' }}
    >
      <div className="max-w-[1344px] mx-auto px-4 lg:px-0">
        {/* Row 1: small | small | wide (col-span pattern: 1fr 1fr 2fr) */}
        {/* Row 2: small | wide | small (col-span pattern: 1fr 2fr 1fr) */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-[10px]">
          {services.map((item, i) => {
            // Row 1: indices 0,1,2 → col-spans: 1, 1, 2
            // Row 2: indices 3,4,5 → col-spans: 1, 2, 1
            const colSpan =
              i === 2 ? 2  // row 1, last card — wide
            : i === 4 ? 2  // row 2, middle card — wide
            : 1;           // all others — small

            return (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 24 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.7, ease: EASE, delay: 0.05 + i * 0.07 }}
              className={colSpan === 2 ? 'lg:col-span-2' : ''}
              style={{
                background: '#242424',
                borderRadius: '14px',
                border: '1px solid rgba(255,255,255,0.06)',
                padding: 'clamp(20px, 3vw, 36px)',
                display: 'flex',
                flexDirection: 'column',
                gap: '0',
              }}
            >
              {/* Icon */}
              <div
                className="mb-6 md:mb-10"
                style={{
                  color: 'rgba(255,255,255,0.45)',
                  width: '36px',
                  height: '36px',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                }}
              >
                {item.icon}
              </div>

              {/* Title */}
              <h3
                className="font-bold text-white"
                style={{
                  fontSize: 'clamp(14px, 1.3vw, 17px)',
                  lineHeight: 1.3,
                  marginBottom: '10px',
                }}
              >
                {item.title}
              </h3>

              {/* Description */}
              <p
                style={{
                  fontSize: 'clamp(11px, 1vw, 13px)',
                  color: 'rgba(255,255,255,0.45)',
                  lineHeight: 1.65,
                  margin: 0,
                }}
              >
                {item.description}
              </p>
            </motion.div>
            );
          })}
        </div>
      </div>
    </div>
  );
}