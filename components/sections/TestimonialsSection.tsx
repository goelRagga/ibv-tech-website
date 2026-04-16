'use client';

import { AnimateOnScroll, StaggerContainer, staggerItem } from '@/components/ui/AnimateOnScroll';
import { motion } from 'framer-motion';

const reviews = [
  {
    name: 'Lorem Ipsum',
    role: 'Lorem Ipsum',
    text: '"We help businesses build, launch, and grow through a combination of strategic thinking, digital execution, and data-driven decisions. Every solution is designed with clarity, backed by research, and executed with a focus on real outcomes."',
  },
  {
    name: 'Lorem Ipsum',
    role: 'Lorem Ipsum',
    text: '"We help businesses build, launch, and grow through a combination of strategic thinking, digital execution, and data-driven decisions. Every solution is designed with clarity, backed by research, and executed with a focus on real outcomes."',
  },
];

export function TestimonialsSection() {
  return (
    <section className="section-padding bg-[#000]">
      <div className="container-ibv">
        <div className="grid grid-cols-[1fr_1.5px_1fr_1.5px_1fr] min-h-[320px]">

          {/* Col 1 — Rating */}
          <AnimateOnScroll className="flex flex-col justify-end pr-10 pb-2">
            <div className="text-[72px] font-bold text-white leading-none mb-3">
              4.0<span className="text-rainbow-red">*</span>
            </div>
            <p className="text-[16px] text-[#76767F] leading-relaxed">
              Based on{' '}
              <span className="text-rainbow-red font-medium">reviews</span>
              <br />on Google
            </p>
          </AnimateOnScroll>

          {/* Divider */}
          <div className="bg-[#2a2a35] self-stretch" />

          {/* Col 2 — Review 1 */}
          <AnimateOnScroll delay={0.1} className="flex flex-col justify-between px-3">
            <p className="text-[14px] text-[#fff] leading-[1.7] pt-2">
              {reviews[0].text}
            </p>
            <div className="pb-2">
              <div className="font-serif text-[20px] font-normal text-white mb-1">
                {reviews[0].name}
              </div>
              <div className="text-[13px] text-[#76767F] font-medium">
                {reviews[0].role}
              </div>
            </div>
          </AnimateOnScroll>

          {/* Divider */}
          <div className="bg-[#2a2a35] self-stretch" />

          {/* Col 3 — Review 2 */}
          <AnimateOnScroll delay={0.2} className="flex flex-col justify-between px-3">
            <p className="text-[14px] text-[#fff] leading-[1.7] pt-2">
              {reviews[1].text}
            </p>
            <div className="pb-2">
              <div className="font-serif text-[20px] font-normal text-white mb-1">
                {reviews[1].name}
              </div>
              <div className="text-[13px] text-[#76767F] font-medium">
                {reviews[1].role}
              </div>
            </div>
          </AnimateOnScroll>

      


          <div />
        </div>
      </div>
    </section>
  );
}