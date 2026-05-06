'use client';

import { useRef, useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import Link from 'next/link';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';

// ─── Types ────────────────────────────────────────────────────────────────────
export interface ProcessStep {
  number: string;   // e.g. '01'
  title: string;
  desc: string;
}

export interface HowWeWorkSectionProps {
  bannerImage?: string;              // full-width top image
  eyebrowLabel?: string;             // label before red word, e.g. 'HOW WE'
  eyebrowHighlight?: string;         // red word, e.g. 'WORK'
  heading: string;                   // bold white left heading
  ctaLabel?: string;                 // defaults to 'Get In Touch'
  ctaHref?: string;                  // defaults to '/contact'
  sideImage?: string;                // bottom-left square photo
  steps: ProcessStep[];
  defaultOpenStep?: string;          // which step is open by default e.g. '02'
}

// ─── useInView ────────────────────────────────────────────────────────────────
function useInView(ref: React.RefObject<Element>, threshold = 0.15) {
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

// ─── HowWeWorkSection ─────────────────────────────────────────────────────────
export function HowWeWorkSection({
  bannerImage = 'https://images.unsplash.com/photo-1521737711867-e3b97375f902?w=1400&q=80',
  eyebrowLabel = 'HOW WE',
  eyebrowHighlight = 'WORK',
  heading = 'We focus on building clarity and direction before execution begins.',
  ctaLabel = 'Get In Touch',
  ctaHref = '/contact',
  sideImage = 'https://images.unsplash.com/photo-1552664730-d307ca884978?w=600&q=80',
  steps,
  defaultOpenStep,
}: HowWeWorkSectionProps) {
  const sectionRef = useRef<HTMLDivElement>(null);
  const inView = useInView(sectionRef as React.RefObject<Element>);
  const EASE = [0.22, 1, 0.36, 1] as const;

  // Default open: first step if not specified
  const defaultValue = defaultOpenStep
    ? `step-${defaultOpenStep}`
    : steps[0]
    ? `step-${steps[0].number}`
    : undefined;

  return (
    <div>
      {/* ── Full-width banner image ── */}
      <div className="w-full overflow-hidden" style={{ height: 'clamp(180px, 25vw, 350px)' }}>
        <img
          src={bannerImage}
          alt=""
          className="w-full h-full object-cover block"
        />
      </div>

      {/* ── Main dark section ── */}
      <section
        ref={sectionRef}
        className="bg-[#0E0E0F] relative overflow-hidden"
        style={{ padding: 'clamp(32px, 6vw, 80px) 0', paddingBottom: "0" }}
      >
        <div className="container-ibv">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 md:gap-10 lg:gap-16 items-start">

            {/* ── LEFT COLUMN ── */}
            <motion.div
              initial={{ opacity: 0, y: 24 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, ease: EASE }}
              className="lg:col-span-5 flex flex-col"
            >
              {/* Eyebrow */}
              <div className="flex items-center gap-2 mb-5">
                <svg width="18" height="14" viewBox="0 0 18 14" fill="none">
                  <path d="M1 7H17M11 1L17 7L11 13" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
                <span
                  className="font-bold uppercase tracking-[0.15em]"
                  style={{ fontSize: '11px', color: 'white' }}
                >
                  {eyebrowLabel}{' '}
                  <span style={{ color: '#E30A13' }}>{eyebrowHighlight}</span>
                </span>
              </div>

              {/* Heading */}
              <h2
                className="text-white font-bold leading-tight mb-4"
                style={{ fontSize: 'clamp(20px, 2.2vw, 30px)' }}
              >
                {heading}
              </h2>

              {/* CTA — outlined white pill */}
              <div className="mb-8">
                <Link
                  href={ctaHref}
                  className="inline-block font-semibold text-white transition-all hover:bg-white hover:text-[#111112]"
                  style={{
                    fontSize: '13px',
                    padding: '9px 22px',
                    border: '1.5px solid rgba(255,255,255,0.6)',
                    borderRadius: '999px',
                    background:"#fff",
                    color: '#E30A13',
                  }}
                >
                  {ctaLabel}
                </Link>
              </div>

              {/* Side image */}
              {sideImage && (
                <div
                  className="overflow-hidden rounded-xl"
                  style={{ width: '100%', maxWidth: '360px', aspectRatio: '1 / 1' }}
                >
                  <img
                    src={sideImage}
                    alt=""
                    className="w-full h-[250] object-cover block"
                  />
                </div>
              )}
            </motion.div>

            {/* ── RIGHT COLUMN: Accordion ── */}
            <motion.div
              initial={{ opacity: 0, y: 24 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, ease: EASE, delay: 0.12 }}
              className="lg:col-span-6"
            >
              <Accordion
                type="single"
                collapsible
                defaultValue={defaultValue}
                className="w-full"
              >
                {steps.map((step) => (
                  <AccordionItem
                    key={step.number}
                    value={`step-${step.number}`}
                    className="border-b-0"
                    style={{ borderTop: '1px solid rgba(255,255,255,0.08)' }}
                  >
                    <AccordionTrigger
                      className="hover:no-underline py-5 group"
                      // hide default chevron — we use our own arrow
                      style={{ '--radix-accordion-trigger-icon-display': 'none' } as React.CSSProperties}
                    >
                      <div className="flex items-center justify-between w-full gap-5">
                        {/* Number */}
                        <span
                          className="font-semibold flex-shrink-0 tabular-nums text-h6"
                          style={{  color: 'rgba(255,255,255,0.45)', minWidth: '28px' }}
                        >
                          {step.number}
                        </span>

                        {/* Title — bold + white when open, muted when closed */}
                        <span
                          className="flex-1 text-center font-semibold transition-colors duration-200 group-data-[state=open]:text-white group-data-[state=closed]:text-white/55"
                          style={{ fontSize: 'clamp(14px, 1.6vw, 22px)', fontFamily: 'var(--font-serif)' }}
                        >
                          {step.title}
                        </span>

                        {/* Arrow → */}
                        <svg
                          width="22" height="18" viewBox="0 0 18 14" fill="none"
                          className="flex-shrink-0 transition-colors duration-200 group-data-[state=open]:opacity-100 group-data-[state=closed]:opacity-30"
                        >
                          <path d="M1 7H17M11 1L17 7L11 13" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                        </svg>
                      </div>
                    </AccordionTrigger>

                    <AccordionContent
                      className="pb-0 overflow-hidden"
                    >
                      {/* Description with red bottom border */}
                      <div
                        style={{
                          paddingLeft: '33px',  // aligns under title (past number)
                          paddingBottom: '18px',
                          borderBottom: '2px solid #E30A13',
                          marginBottom: '0',
                        }}
                      >
                        <p
                          className="text-white/50 leading-relaxed"
                          style={{ fontSize: 'clamp(12px, 1.1vw, 14px)', maxWidth: '480px' }}
                        >
                          {step.desc}
                        </p>
                      </div>
                    </AccordionContent>
                  </AccordionItem>
                ))}

                {/* Bottom border on last item */}
                <div style={{ borderTop: '1px solid rgba(255,255,255,0.08)' }} />
              </Accordion>
            </motion.div>

          </div>
        </div>
      </section>
    </div>
  );
}