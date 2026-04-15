'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Plus, Minus } from 'lucide-react';
import { AnimateOnScroll } from '@/components/ui/AnimateOnScroll';

const faqs = [
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
    a: 'Absolutely. Every solution we build is tailored to your specific goals, challenges, and market. We don\'t believe in one-size-fits-all approaches.',
  },
  {
    q: 'How do you measure success?',
    a: 'We define clear KPIs at the start of every engagement and measure success based on tangible outcomes — improved performance, better efficiency, measurable growth, and ROI.',
  },
];

function FAQItem({ faq, isOpen, onToggle }: { faq: typeof faqs[0]; isOpen: boolean; onToggle: () => void }) {
  return (
    <div className="border-b border-[#E5E5E9]">
      <button
        className="w-full flex items-center justify-between py-5 text-left gap-4 group"
        onClick={onToggle}
      >
        <span className="text-sm font-semibold leading-snug group-hover:text-[#E30A13] transition-colors">
          {faq.q}
        </span>
        <div className={`flex-shrink-0 w-7 h-7 rounded-full border flex items-center justify-center transition-all ${
          isOpen ? 'bg-[#E30A13] border-[#E30A13] text-white' : 'border-[#E5E5E9] text-[#555556]'
        }`}>
          {isOpen ? <Minus size={12} /> : <Plus size={12} />}
        </div>
      </button>
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
            className="overflow-hidden"
          >
            <p className="pb-5 text-sm text-[#555556] leading-relaxed">{faq.a}</p>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

export function FAQSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section className="section-padding bg-[#F6F6F8]">
      <div className="container-ibv">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16">
          {/* Left */}
          <div className="lg:col-span-4">
            <AnimateOnScroll>
              <span className="tag mb-4">FAQs</span>
            </AnimateOnScroll>
            <AnimateOnScroll delay={0.1}>
              <h2 className="text-3xl font-bold leading-tight tracking-tight mt-4">
                Answering few of your questions
              </h2>
            </AnimateOnScroll>
          </div>

          {/* Right */}
          <div className="lg:col-span-7 lg:col-start-6">
            <AnimateOnScroll delay={0.15}>
              <div className="border-t border-[#E5E5E9]">
                {faqs.map((faq, i) => (
                  <FAQItem
                    key={i}
                    faq={faq}
                    isOpen={openIndex === i}
                    onToggle={() => setOpenIndex(openIndex === i ? null : i)}
                  />
                ))}
              </div>
            </AnimateOnScroll>
          </div>
        </div>
      </div>
    </section>
  );
}
