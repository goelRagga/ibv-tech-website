'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { AnimateOnScroll } from '@/components/ui/AnimateOnScroll';

const serviceOptions = [
  'Consulting & Strategy',
  'Digital Solutions',
  'Research & Analysis',
  'Content & Growth',
  'Other',
];

export function ContactSection() {
  const [form, setForm] = useState({ name: '', email: '', service: '', message: '' });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <section className="section-padding bg-[#111112] overflow-hidden relative">
      {/* BG accent */}
      <div className="absolute inset-0 opacity-10 pointer-events-none"
        style={{ backgroundImage: 'radial-gradient(circle at 80% 50%, #E30A13 0%, transparent 55%)' }}
      />

      <div className="container-ibv relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-start">

          {/* Left: Headline */}
          <div className="lg:col-span-5">
            <AnimateOnScroll>
              <span className="tag mb-6 border-white/20 text-white/40">Get In Touch</span>
            </AnimateOnScroll>
            <AnimateOnScroll delay={0.1}>
              <h2 className="text-4xl lg:text-5xl font-bold text-white leading-tight tracking-tight mt-4">
                Let&apos;s start building your next step.
              </h2>
            </AnimateOnScroll>
            <AnimateOnScroll delay={0.2}>
              <div className="mt-10 flex items-center gap-4">
                <div className="w-10 h-[1px] bg-[#E30A13]" />
                <p className="text-white/40 text-sm">
                  A partner built for businesses that want to move forward.
                </p>
              </div>
            </AnimateOnScroll>
          </div>

          {/* Right: Form */}
          <div className="lg:col-span-6 lg:col-start-7">
            <AnimateOnScroll delay={0.15} direction="right">
              {submitted ? (
                <motion.div
                  initial={{ opacity: 0, scale: 0.96 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="bg-white/5 border border-white/10 rounded-2xl p-10 text-center"
                >
                  <div className="w-12 h-12 rounded-full bg-[#E30A13] flex items-center justify-center mx-auto mb-4">
                    <svg className="w-6 h-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <h3 className="text-white text-xl font-bold mb-2">Message Sent!</h3>
                  <p className="text-white/50 text-sm">We&apos;ll get back to you within 24 hours.</p>
                </motion.div>
              ) : (
                <div className="bg-white/5 border border-white/10 rounded-2xl p-8">
                  <p className="text-white text-sm font-medium mb-6">Fill this form below</p>
                  <form onSubmit={handleSubmit} className="space-y-4">
                    {/* Name */}
                    <div>
                      <label className="block text-xs text-white/40 uppercase tracking-wider mb-2">Your Name</label>
                      <input
                        type="text"
                        placeholder="Enter your full name"
                        value={form.name}
                        onChange={(e) => setForm({ ...form, name: e.target.value })}
                        required
                        className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3.5 text-white text-sm placeholder:text-white/20 focus:outline-none focus:border-[#E30A13] transition-colors"
                      />
                    </div>

                    {/* Email */}
                    <div>
                      <label className="block text-xs text-white/40 uppercase tracking-wider mb-2">Your Email</label>
                      <input
                        type="email"
                        placeholder="Enter email address"
                        value={form.email}
                        onChange={(e) => setForm({ ...form, email: e.target.value })}
                        required
                        className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3.5 text-white text-sm placeholder:text-white/20 focus:outline-none focus:border-[#E30A13] transition-colors"
                      />
                    </div>

                    {/* Service */}
                    <div>
                      <label className="block text-xs text-white/40 uppercase tracking-wider mb-2">Services</label>
                      <select
                        value={form.service}
                        onChange={(e) => setForm({ ...form, service: e.target.value })}
                        required
                        className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3.5 text-white text-sm focus:outline-none focus:border-[#E30A13] transition-colors appearance-none"
                        style={{ colorScheme: 'dark' }}
                      >
                        <option value="" disabled className="bg-[#111112]">Select a service</option>
                        {serviceOptions.map((s) => (
                          <option key={s} value={s} className="bg-[#111112]">{s}</option>
                        ))}
                      </select>
                    </div>

                    {/* Message */}
                    <div>
                      <label className="block text-xs text-white/40 uppercase tracking-wider mb-2">More About The Project</label>
                      <textarea
                        rows={4}
                        placeholder="Describe your project"
                        value={form.message}
                        onChange={(e) => setForm({ ...form, message: e.target.value })}
                        className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3.5 text-white text-sm placeholder:text-white/20 focus:outline-none focus:border-[#E30A13] transition-colors resize-none"
                      />
                    </div>

                    <div className="flex gap-3 pt-2">
                      <button type="submit" className="btn-primary flex-1 justify-center">
                        Get Started Now
                      </button>
                      <button type="reset" className="btn-outline-black flex-1 justify-center !border-white/20 !text-white hover:!bg-white/10">
                        Get Started Now
                      </button>
                    </div>
                  </form>
                </div>
              )}
            </AnimateOnScroll>
          </div>
        </div>
      </div>
    </section>
  );
}
