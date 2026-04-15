'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';

interface ServiceWhyUsSectionProps {
  heading: string;
  /** Array of paragraph strings displayed under the heading */
  paragraphs: string[];
  /** Optional image from /public — shows a dark placeholder when omitted */
  imageSrc?: string;
  imageAlt?: string;
}

const fadeUp = {
  hidden: { opacity: 0, y: 28 },
  visible: (delay = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.65, delay, ease: [0.22, 1, 0.36, 1] },
  }),
};

export function ServiceWhyUsSection({
  heading,
  paragraphs,
  imageSrc,
  imageAlt = '',
}: ServiceWhyUsSectionProps) {
  return (
    <section className="py-20 lg:py-28 bg-[#111112] relative overflow-hidden">
      {/* Red radial glow — right side */}
      <div
        className="absolute inset-0 pointer-events-none opacity-[0.13]"
        style={{
          background:
            'radial-gradient(ellipse 60% 80% at 92% 50%, #E30A13 0%, transparent 60%)',
        }}
      />

      <div className="max-w-[1344px] mx-auto px-6 lg:px-12 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">

          {/* Text */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-60px' }}
            variants={fadeUp}
          >
            <span className="inline-flex items-center gap-2 text-[11px] font-semibold uppercase tracking-[0.16em] text-white/30 mb-5">
              <span className="w-4 h-px bg-white/20" />
              Why Choose Us
            </span>

            <h2
              className="text-white font-bold leading-tight mt-2 mb-6 tracking-tight"
              style={{ fontSize: 'clamp(28px, 3.5vw, 40px)' }}
            >
              {heading}
            </h2>

            <div className="space-y-4">
              {paragraphs.map((p, i) => (
                <p key={i} className="text-white/55 text-[14px] leading-relaxed">
                  {p}
                </p>
              ))}
            </div>
          </motion.div>

          {/* Image / placeholder */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-60px' }}
            transition={{ duration: 0.7, delay: 0.15, ease: [0.22, 1, 0.36, 1] }}
          >
            <div className="aspect-[4/3] rounded-2xl bg-[#1c1c1e] border border-white/10 overflow-hidden relative">
              {imageSrc ? (
                <Image src={imageSrc} alt={imageAlt} fill className="object-cover" />
              ) : (
                <>
                  <div
                    className="absolute inset-0"
                    style={{
                      background:
                        'linear-gradient(135deg, #1a1208 0%, #2d2010 50%, #1a1a1a 100%)',
                    }}
                  />
                  {/* Subtle warm radial */}
                  <div
                    className="absolute inset-0 opacity-25"
                    style={{
                      background:
                        'radial-gradient(ellipse 70% 60% at 40% 45%, rgba(180,120,50,0.55) 0%, transparent 70%)',
                    }}
                  />
                </>
              )}
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
