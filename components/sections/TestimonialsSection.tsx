'use client';

import { AnimateOnScroll } from '@/components/ui/AnimateOnScroll';

export interface Testimonial {
  name: string;
  role: string;
  text: string;
}

export interface TestimonialsSectionProps {
  rating?: string;
  ratingLabel?: string;
  reviews?: Testimonial[];
}

const defaultReviews: Testimonial[] = [
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

export function TestimonialsSection({
  rating = '4.0',
  ratingLabel = 'reviews',
  reviews = defaultReviews,
}: TestimonialsSectionProps) {
  const cols = reviews.length;
  const gridCols = `1fr ${Array(cols).fill('1.5px 1fr').join(' ')}`;

  return (
    <section className="section-padding bg-[#000]">
      <div className="container-ibv">
        <div
          className="min-h-[320px]"
          style={{ display: 'grid', gridTemplateColumns: gridCols }}
        >
          {/* Col 1 — Rating */}
          <AnimateOnScroll className="flex flex-col justify-end pr-10 pb-2">
            <div className="text-[72px] font-bold text-white leading-none mb-3">
              {rating}<span className="text-rainbow-red">*</span>
            </div>
            <p className="text-[16px] text-[#76767F] leading-relaxed">
              Based on{' '}
              <span className="text-rainbow-red font-medium">{ratingLabel}</span>
              <br />on Google
            </p>
          </AnimateOnScroll>

          {reviews.map((review, i) => (
            <>
              {/* Divider */}
              <div key={`div-${i}`} className="bg-[#2a2a35] self-stretch" />

              {/* Review column */}
              <AnimateOnScroll key={`rev-${i}`} delay={0.1 * (i + 1)} className="flex flex-col justify-between px-3">
                <p className="text-[14px] text-[#fff] leading-[1.7] pt-2">
                  {review.text}
                </p>
                <div className="pb-2">
                  <div className="font-serif text-[20px] font-normal text-white mb-1">
                    {review.name}
                  </div>
                  <div className="text-[13px] text-[#76767F] font-medium">
                    {review.role}
                  </div>
                </div>
              </AnimateOnScroll>
            </>
          ))}
        </div>
      </div>
    </section>
  );
}
