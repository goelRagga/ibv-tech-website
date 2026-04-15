'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Plus, Minus } from 'lucide-react';

export interface FAQItem {
  q: string;
  a: string;
}

interface ServiceFAQSectionProps {
  heading?: string;
  faqs: FAQItem[];
}

// ── Single accordion row ──────────────────────────────────────────────────────
function FAQRow({ faq, defaultOpen }: { faq: FAQItem; defaultOpen?: boolean }) {
  const [open, setOpen] = useState(defaultOpen ?? false);

  return (
    <div className="border-b border-[#E5E5E9]">
      <button
        className="w-full flex items-center justify-between py-5 text-left gap-4 group"
        onClick={() => setOpen((v) => !v)}
        aria-expanded={open}
      >
        <span className="text-sm font-semibold text-[#111112] group-hover:text-[#E30A13] transition-colors duration-200">
          {faq.q}
        </span>
        <span
          className={`flex-shrink-0 w-7 h-7 rounded-full border flex items-center justify-center transition-all duration-200 ${
            open
              ? 'bg-[#E30A13] border-[#E30A13] text-white'
              : 'border-[#E5E5E9] text-[#555556]'
          }`}
        >
          {open ? <Minus size={12} /> : <Plus size={12} />}
        </span>
      </button>

      <AnimatePresence initial={false}>
        {open && (
          <motion.div
            key="body"
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.28, ease: [0.4, 0, 0.2, 1] }}
            className="overflow-hidden"
          >
            <p className="pb-5 text-sm text-[#555556] leading-relaxed">{faq.a}</p>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

// ── Section ───────────────────────────────────────────────────────────────────
const fadeUp = {
  hidden: { opacity: 0, y: 28 },
  visible: (delay = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.65, delay, ease: [0.22, 1, 0.36, 1] },
  }),
};

export function ServiceFAQSection({
  heading = 'Answering few of your questions',
  faqs,
}: ServiceFAQSectionProps) {
  return (
    <section className="py-20 lg:py-28 bg-[#F6F6F8]">
      <div className="max-w-[1344px] mx-auto px-6 lg:px-12">

        {/* Header */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-60px' }}
          variants={fadeUp}
          className="text-center mb-12"
        >
          <span className="inline-flex items-center justify-center gap-2 text-[11px] font-semibold uppercase tracking-[0.16em] text-[#E30A13] mb-4">
            FAQs
          </span>
          <h2 className="text-[28px] lg:text-[36px] font-bold text-[#111112] mt-2 tracking-tight">
            {heading}
          </h2>
        </motion.div>

        {/* Accordion */}
        <div className="max-w-3xl mx-auto border-t border-[#E5E5E9]">
          {faqs.map((faq, i) => (
            <FAQRow key={i} faq={faq} defaultOpen={i === 0} />
          ))}
        </div>

      </div>
    </section>
  );
}
