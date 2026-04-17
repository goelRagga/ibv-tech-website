'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Plus, Minus } from 'lucide-react';
import { AnimateOnScroll } from '@/components/ui/AnimateOnScroll';

export interface FAQItem {
  q: string;
  a: string;
}

export interface FAQSectionProps {
  heading?: string;
  faqs?: FAQItem[];
}

const defaultFaqs: FAQItem[] = [
  {
    q: 'What services does IBV Technologies offer?',
    a: 'IBV Technologies provides end-to-end solutions across strategy, business consulting, web development, market research, content strategy, content writing, and data analytics to help businesses build and grow.',
  },
  {
    q: 'Who do you work with?',
    a: 'We work with startups, SMEs, and established enterprises across a wide range of industries including retail, healthcare, education, finance, real estate, and technology.',
  },
  {
    q: 'How do you approach a new project?',
    a: 'Every engagement starts with understanding your business, your market, and your goals. We then analyze gaps, define a strategy, plan execution, and refine continuously based on real-world feedback.',
  },
  {
    q: 'Do you offer customized solutions?',
    a: "Absolutely. Every solution we build is tailored to your specific goals, challenges, and market. We don't believe in one-size-fits-all approaches.",
  },
  {
    q: 'How do you measure success?',
    a: 'We define clear KPIs at the start of every engagement and measure success based on tangible outcomes — improved performance, better efficiency, measurable growth, and ROI.',
  },
];

function FAQItemRow({
  faq,
  isOpen,
  onToggle,
}: {
  faq: FAQItem;
  isOpen: boolean;
  onToggle: () => void;
}) {
  return (
    <div className="bg-[#222224] rounded-[10px] overflow-hidden">
      <button
        className="w-full flex items-start justify-between gap-4 px-2 py-[18px] text-left"
        onClick={onToggle}
      >
        <span className="text-[15px] font-semibold text-white leading-snug flex-1">
          {faq.q}
        </span>
        <span
          className={`flex-shrink-0 w-[30px] h-[30px] rounded-full border flex items-center justify-center transition-all duration-200 ${
            isOpen
              ? 'bg-[#555566] border-[#C3C3CB] text-white'
              : 'border-[#444455] text-[#C3C3CB]'
          }`}
        >
          {isOpen ? <Minus size={12} /> : <Plus size={12} />}
        </span>
      </button>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
            className="overflow-hidden"
          >
            <p className="px-2 pb-[18px] text-body-sm text-[#C3C3CB] leading-relaxed text-left">
              {faq.a}
            </p>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

export function FAQSection({
  heading = 'Answering few of your questions',
  faqs = defaultFaqs,
}: FAQSectionProps) {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section className="bg-white">
      <div className="max-w-[60vw] mx-auto px-6 pt-4 text-center">
        {/* Header */}
        <AnimateOnScroll>
          <span className="inline-block text-[12px] font-semibold tracking-[0.08em] uppercase text-rainbow-red mb-2">
            FAQs
          </span>
        </AnimateOnScroll>

        <AnimateOnScroll delay={0.1}>
          <h2 className="font-serif text-[clamp(32px,5vw,56px)] font-normal leading-[1.1] text-refresh-black mb-4">
            {heading}
          </h2>
        </AnimateOnScroll>

        {/* FAQ Card Container */}
        <AnimateOnScroll delay={0.15}>
          <div className="bg-[#000] rounded-2xl p-2 flex flex-col gap-[6px] mb-6">
            {faqs.map((faq, i) => (
              <FAQItemRow
                key={i}
                faq={faq}
                isOpen={openIndex === i}
                onToggle={() => setOpenIndex(openIndex === i ? null : i)}
              />
            ))}
          </div>
        </AnimateOnScroll>
      </div>
    </section>
  );
}
