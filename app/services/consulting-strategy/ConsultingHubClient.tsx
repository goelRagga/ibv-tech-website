'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import { AnimateOnScroll, StaggerContainer, staggerItem } from '@/components/ui/AnimateOnScroll';
import { FAQSection } from '@/components/sections/FAQSection';
import { BlogSection } from '@/components/sections/BlogSection';
import { TestimonialsSection } from '@/components/sections/TestimonialsSection';

const pillars = [
  {
    number: '01',
    title: 'Strategic Clarity',
    desc: 'Define direction with clear, structured planning aligned to your business goals.',
    highlight: true,
  },
  {
    number: '02',
    title: 'Operational Efficiency',
    desc: 'Identify gaps, optimize processes, and improve overall business performance.',
    highlight: false,
  },
  {
    number: '03',
    title: 'Sustainable Growth',
    desc: 'Build scalable strategies designed for long term success and adaptability.',
    highlight: false,
  },
];

const services = [
  {
    number: '01.',
    title: 'Business Consultation',
    desc: 'We help organizations identify gaps, improve efficiency, and unlock growth through structured, data backed strategies, bringing clarity to complex challenges and enabling confident, practical decision making.',
    tags: ['Strategy', 'Optimization', 'Growth', 'Revenue', 'Restructuring'],
    href: '/services/consulting-strategy/business-consultation',
  },
  {
    number: '02.',
    title: 'Startup Consultation',
    desc: 'We guide founders in turning ideas into scalable businesses through concept validation, business model development, and go to market planning, ensuring clarity, direction, and readiness for growth.',
    tags: ['Business Models', 'Go-To-Market', 'Pitch Decks', 'Financial Investment', 'Investor Readiness'],
    href: '/services/consulting-strategy/startup-consultation',
  },
];

const processSteps = [
  { number: '01', title: 'Understand the Business', desc: 'We start by deeply understanding your business model, goals, and operating environment.' },
  { number: '02', title: 'Analyse Gaps', desc: 'We evaluate performance, identify inefficiencies, and uncover opportunities for improvement.' },
  { number: '03', title: 'Define Strategy', desc: 'We develop a clear, structured strategy tailored to your specific business context.' },
  { number: '04', title: 'Plan Execution', desc: 'We translate strategy into actionable plans with clear timelines and ownership.' },
  { number: '05', title: 'Refine Continuously', desc: 'We monitor outcomes and refine the approach based on real-world feedback and results.' },
];

const consultingFaqs = [
  {
    q: 'What does your consulting process involve?',
    a: 'We start by understanding your business, identifying key challenges, and building structured strategies that are practical and aligned with your goals.',
  },
  { q: 'Who should use consulting services?', a: 'Any business looking to improve performance, enter new markets, overcome operational challenges, or scale sustainably can benefit from our consulting services.' },
  { q: 'Do you only provide strategy or also support execution?', a: 'We support both. Strategy without execution is just a plan. We stay involved through the execution phase to ensure strategies translate into real results.' },
  { q: 'How long does a consulting engagement typically take?', a: 'Engagements vary based on scope. Initial assessments can take 2-4 weeks, while full strategic programs can run 3-6 months or longer.' },
  { q: 'Can you help with both short term and long term planning?', a: 'Yes. We build both immediate action plans for quick wins and long-term roadmaps for sustainable growth.' },
];

export function ConsultingHubClient() {
  return (
    <>
      {/* HERO */}
      <section className="bg-[#111112] pt-32 pb-0 relative overflow-hidden">
        <div className="absolute top-0 left-0 w-1 h-full bg-[#E30A13]" />
        <div className="absolute inset-0 opacity-10 pointer-events-none"
          style={{ backgroundImage: 'radial-gradient(circle at 70% 30%, #E30A13 0%, transparent 55%)' }} />

        <div className="container-ibv relative z-10 pb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}
            className="flex items-center gap-3 mb-8"
          >
            <div className="w-6 h-[2px] bg-[#E30A13]" />
            <span className="text-white/40 text-xs uppercase tracking-[0.2em] font-medium">Our Direction</span>
          </motion.div>

          <motion.p
            initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, delay: 0.05 }}
            className="text-[#E30A13] text-sm font-semibold uppercase tracking-widest mb-4"
          >
            Clarity Before Action. Strategy Before Scale.
          </motion.p>

          <motion.h1
            initial={{ opacity: 0, y: 40 }} animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
            className="text-white font-bold leading-tight tracking-tight mb-6"
            style={{ fontSize: 'clamp(48px, 6vw, 96px)' }}
          >
            Consulting &amp; Strategy
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.2 }}
            className="text-white/60 text-base leading-relaxed max-w-2xl mb-10"
          >
            Every successful business starts with the right decisions. We help you define direction,
            solve challenges, and build strategies that drive measurable growth.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.3 }}
          >
            <Link href="/contact" className="btn-primary">Get In Touch</Link>
          </motion.div>
        </div>

        {/* Hero image band */}
        <div className="relative h-64 lg:h-80 overflow-hidden mt-8">
          <div className="absolute inset-0 bg-gradient-to-b from-[#111112] via-transparent to-transparent z-10" />
          <div className="w-full h-full bg-[#1a1a1a] flex items-center justify-center">
            <div className="text-white/5 font-bold text-[200px] leading-none select-none">CS</div>
          </div>
        </div>
      </section>

      {/* THREE PILLARS */}
      <section className="section-padding bg-white">
        <div className="container-ibv">
          <AnimateOnScroll className="mb-12">
            <p className="text-base font-medium text-center">
              In a fast-moving business environment, decisions need more than assumptions.{' '}
              <strong>IBV Technologies</strong> helps you understand your current position, identify
              opportunities, and build clear, scalable strategies aligned with long-term goals,
              so you can move forward with confidence.
            </p>
          </AnimateOnScroll>

          <StaggerContainer className="grid grid-cols-1 md:grid-cols-3 gap-6" staggerDelay={0.1}>
            {pillars.map((p) => (
              <motion.div key={p.title} variants={staggerItem}>
                <div className={`rounded-2xl p-8 h-full ${p.highlight ? 'bg-[#E30A13] text-white' : 'bg-[#F6F6F8]'}`}>
                  <div className={`text-xs font-semibold uppercase tracking-widest mb-4 ${p.highlight ? 'text-white/60' : 'text-[#E30A13]'}`}>
                    {p.number}
                  </div>
                  <h3 className={`text-lg font-bold mb-3 ${p.highlight ? 'text-white' : 'text-[#111112]'}`}>{p.title}</h3>
                  <p className={`text-sm leading-relaxed ${p.highlight ? 'text-white/80' : 'text-[#555556]'}`}>{p.desc}</p>
                </div>
              </motion.div>
            ))}
          </StaggerContainer>
        </div>
      </section>

      {/* SERVICE OFFERINGS */}
      <section className="section-padding bg-[#F6F6F8]">
        <div className="container-ibv">
          <AnimateOnScroll className="mb-12">
            <p className="text-2xl lg:text-3xl font-bold text-center">
              Our <span className="text-[#E30A13]">consulting &amp; strategy solutions</span> designed to drive clarity, growth, and measurable outcomes
            </p>
          </AnimateOnScroll>

          <div className="space-y-8">
            {services.map((service, i) => (
              <AnimateOnScroll key={service.title} delay={i * 0.1}>
                <div className="bg-white rounded-2xl p-8 lg:p-10">
                  <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
                    <div className="lg:col-span-7">
                      <div className="text-[#E30A13] font-bold text-2xl mb-2">{service.number}</div>
                      <h3 className="text-xl font-bold mb-3">{service.title}</h3>
                      <p className="text-sm text-[#555556] leading-relaxed mb-5">{service.desc}</p>
                      <div className="flex flex-wrap gap-2 mb-6">
                        {service.tags.map((tag) => (
                          <span key={tag} className="tag text-[10px]">{tag}</span>
                        ))}
                      </div>
                      <Link href={service.href} className="btn-outline-black">Explore Service</Link>
                    </div>
                    <div className="lg:col-span-5">
                      <div className="aspect-[4/3] bg-[#F6F6F8] rounded-xl overflow-hidden flex items-center justify-center">
                        <div className="w-16 h-16 rounded-full bg-[#E30A13] opacity-10" />
                      </div>
                    </div>
                  </div>
                </div>
              </AnimateOnScroll>
            ))}
          </div>
        </div>
      </section>

      {/* HOW WE WORK */}
      <section className="section-padding bg-[#111112] relative overflow-hidden">
        <div className="absolute inset-0 opacity-5 pointer-events-none"
          style={{ backgroundImage: 'radial-gradient(circle at 20% 80%, #E30A13 0%, transparent 55%)' }} />
        <div className="container-ibv relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-start">
            <div className="lg:col-span-4">
              <AnimateOnScroll>
                <span className="tag border-white/20 text-white/40 mb-4">How We Work</span>
              </AnimateOnScroll>
              <AnimateOnScroll delay={0.1}>
                <h2 className="text-3xl lg:text-4xl font-bold text-white leading-tight mt-4 mb-6">
                  We focus on building clarity and direction before execution begins.
                </h2>
              </AnimateOnScroll>
              <AnimateOnScroll delay={0.2}>
                <Link href="/contact" className="btn-primary">Get In Touch</Link>
              </AnimateOnScroll>
            </div>

            <div className="lg:col-span-7 lg:col-start-6">
              <StaggerContainer staggerDelay={0.08}>
                {processSteps.map((step) => (
                  <motion.div key={step.number} variants={staggerItem}>
                    <div className="flex items-start gap-6 py-6 border-b border-white/10 group">
                      <span className="text-[#E30A13] text-sm font-semibold flex-shrink-0 mt-0.5">{step.number}</span>
                      <div className="flex-1">
                        <h4 className="text-white font-semibold text-base mb-1 group-hover:text-[#E30A13] transition-colors">
                          {step.title}
                        </h4>
                        <p className="text-white/40 text-sm leading-relaxed">{step.desc}</p>
                      </div>
                      <svg className="w-4 h-4 text-white/20 group-hover:text-[#E30A13] mt-1 transition-colors flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                      </svg>
                    </div>
                  </motion.div>
                ))}
              </StaggerContainer>
            </div>
          </div>
        </div>
      </section>

      <BlogSection />
      <TestimonialsSection />

      {/* FAQ */}
      <section className="section-padding bg-[#F6F6F8]">
        <div className="container-ibv">
          <AnimateOnScroll className="text-center mb-12">
            <h2 className="text-3xl font-bold">Answering few of your questions</h2>
          </AnimateOnScroll>
          <div className="max-w-3xl mx-auto">
            {consultingFaqs.map((faq, i) => (
              <ConsultingFAQItem key={i} faq={faq} defaultOpen={i === 0} />
            ))}
          </div>
        </div>
      </section>
    </>
  );
}

function ConsultingFAQItem({ faq, defaultOpen }: { faq: { q: string; a: string }; defaultOpen?: boolean }) {
  const { useState } = require('react');
  const { AnimatePresence, motion } = require('framer-motion');
  const { Plus, Minus } = require('lucide-react');
  const [open, setOpen] = useState(defaultOpen || false);

  return (
    <div className="border-b border-[#E5E5E9]">
      <button className="w-full flex items-center justify-between py-5 text-left gap-4 group" onClick={() => setOpen(!open)}>
        <span className="text-sm font-semibold group-hover:text-[#E30A13] transition-colors">{faq.q}</span>
        <div className={`flex-shrink-0 w-7 h-7 rounded-full border flex items-center justify-center transition-all ${open ? 'bg-[#E30A13] border-[#E30A13] text-white' : 'border-[#E5E5E9] text-[#555556]'}`}>
          {open ? <Minus size={12} /> : <Plus size={12} />}
        </div>
      </button>
      <AnimatePresence>
        {open && (
          <motion.div initial={{ height: 0, opacity: 0 }} animate={{ height: 'auto', opacity: 1 }} exit={{ height: 0, opacity: 0 }} transition={{ duration: 0.3 }} className="overflow-hidden">
            <p className="pb-5 text-sm text-[#555556] leading-relaxed">{faq.a}</p>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
