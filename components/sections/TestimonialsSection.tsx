'use client';

import { AnimateOnScroll, StaggerContainer, staggerItem } from '@/components/ui/AnimateOnScroll';
import { motion } from 'framer-motion';

const reviews = [
  { name: 'Lorem Ipsum', text: 'We help businesses build, launch, and grow through a combination of strategic thinking, digital execution, and data-driven decisions. Every solution is designed with clarity, backed by research, and executed with a focus on real outcomes.' },
  { name: 'Lorem Ipsum', text: 'We help businesses build, launch, and grow through a combination of strategic thinking, digital execution, and data-driven decisions. Every solution is designed with clarity, backed by research, and executed with a focus on real outcomes.' },
];

function StarRating({ rating }: { rating: number }) {
  return (
    <div className="flex items-center gap-1">
      {[1, 2, 3, 4, 5].map((star) => (
        <svg
          key={star}
          className={`w-4 h-4 ${star <= Math.floor(rating) ? 'text-[#F59B00]' : 'text-[#E5E5E9]'}`}
          fill="currentColor"
          viewBox="0 0 20 20"
        >
          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
        </svg>
      ))}
    </div>
  );
}

export function TestimonialsSection() {
  return (
    <section className="section-padding bg-white">
      <div className="container-ibv">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16">
          {/* Rating block */}
          <AnimateOnScroll className="lg:col-span-3">
            <div>
              <div className="text-6xl font-bold text-[#111112] mb-2">4.0<span className="text-[#E30A13]">*</span></div>
              <StarRating rating={4} />
              <p className="text-sm text-[#A8A8BC] mt-2">Based on reviews on Google</p>
            </div>
          </AnimateOnScroll>

          {/* Reviews */}
          <div className="lg:col-span-9">
            <StaggerContainer className="grid grid-cols-1 sm:grid-cols-2 gap-8" staggerDelay={0.15}>
              {reviews.map((review, i) => (
                <motion.div key={i} variants={staggerItem}>
                  <div className="bg-[#F6F6F8] rounded-2xl p-6">
                    <StarRating rating={4} />
                    <p className="text-sm text-[#555556] leading-relaxed mt-4">{review.text}</p>
                    <div className="mt-4 pt-4 border-t border-[#E5E5E9]">
                      <div className="font-semibold text-sm">{review.name}</div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </StaggerContainer>
          </div>
        </div>
      </div>
    </section>
  );
}
