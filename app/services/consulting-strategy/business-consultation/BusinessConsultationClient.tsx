'use client';

import type { ReactNode } from 'react';
import { ServicePageHero }       from '@/components/sections/services/ServicePageHero';
import { ServiceStatsSection }   from '@/components/sections/services/ServiceStatsSection';
import { ServiceFullWidthBand }  from '@/components/sections/services/ServiceFullWidthBand';
import { ServiceCardGrid }       from '@/components/sections/services/ServiceCardGrid';
import { ServiceApproachSection }from '@/components/sections/services/ServiceApproachSection';
import { ServiceWhyUsSection }   from '@/components/sections/services/ServiceWhyUsSection';
import { ServiceFAQSection }     from '@/components/sections/services/ServiceFAQSection';
import { ServiceContactSection } from '@/components/sections/services/ServiceContactSection';
import type { ServiceCardItem }  from '@/components/sections/services/ServiceCardGrid';
import type { ApproachItem }     from '@/components/sections/services/ServiceApproachSection';
import type { FAQItem }          from '@/components/sections/services/ServiceFAQSection';
import type { ServiceStat }      from '@/components/sections/services/ServiceStatsSection';

// ─── Icons ────────────────────────────────────────────────────────────────────

function Icon({ children }: { children: ReactNode }) {
  return (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
      {children}
    </svg>
  );
}

// ─── Page data ────────────────────────────────────────────────────────────────

const stats: ServiceStat[] = [
  {
    value: '10K+',
    label: 'Can influence decisions when analysed with the right structure and context.',
  },
  {
    value: '85%',
    label: 'Of business challenges are linked to gaps in strategy, execution, or alignment.',
  },
];

const services: ServiceCardItem[] = [
  {
    title: 'Operational Analysis',
    description:
      'Assess current processes, identify inefficiencies, and uncover performance gaps across functions.',
    icon: (
      <Icon>
        <rect x="3" y="3" width="7" height="7" rx="1" />
        <rect x="14" y="3" width="7" height="7" rx="1" />
        <rect x="3" y="14" width="7" height="7" rx="1" />
        <rect x="14" y="14" width="7" height="7" rx="1" />
      </Icon>
    ),
  },
  {
    title: 'Process Optimisation',
    description:
      'Redesign workflows to eliminate waste, reduce cycle times, and improve operational performance.',
    icon: (
      <Icon>
        <path d="M12 2v4M12 18v4M4.93 4.93l2.83 2.83M16.24 16.24l2.83 2.83M2 12h4M18 12h4M4.93 19.07l2.83-2.83M16.24 7.76l2.83-2.83" />
      </Icon>
    ),
  },
  {
    title: 'Growth Strategy Development',
    description:
      'Build structured plans for expansion based on market opportunities and business capacity.',
    icon: (
      <Icon>
        <polyline points="22 7 13.5 15.5 8.5 10.5 2 17" />
        <polyline points="16 7 22 7 22 13" />
      </Icon>
    ),
  },
  {
    title: 'Revenue Optimisation',
    description:
      'Identify opportunities to improve profitability through pricing, cost control, and performance.',
    icon: (
      <Icon>
        <circle cx="12" cy="12" r="10" />
        <path d="M12 6v6l4 2" />
      </Icon>
    ),
  },
  {
    title: 'Business Restructuring',
    description:
      'Redefine organisational structure, processes, or strategy to align with changing business needs.',
    icon: (
      <Icon>
        <rect x="2" y="3" width="6" height="6" rx="1" />
        <rect x="16" y="3" width="6" height="6" rx="1" />
        <rect x="9" y="15" width="6" height="6" rx="1" />
        <path d="M5 9v3h14V9M12 12v3" />
      </Icon>
    ),
  },
  {
    title: 'Decision Support',
    description:
      'Provide structured insights and recommendations to support faster, more confident business decisions.',
    icon: (
      <Icon>
        <path d="M9 11l3 3L22 4" />
        <path d="M21 12v7a2 2 0 01-2 2H5a2 2 0 01-2-2V5a2 2 0 012-2h11" />
      </Icon>
    ),
  },
];

const approachItems: ApproachItem[] = [
  {
    title: 'Structured Thinking',
    description:
      'We rely on analysis and structured frameworks rather than assumptions, ensuring that every recommendation is logical, relevant, and aligned with your business context. This reduces uncertainty and improves decision-making across functions.',
  },
  {
    title: 'Cross-Functional Approach',
    description:
      'Business challenges rarely exist in isolation. We look at strategy, operations, and growth together to ensure that solutions are aligned across the organisation and do not create unintended gaps or inefficiencies.',
  },
  {
    title: 'Outcome-Focused Execution',
    description:
      'Our work is measured by results, not just recommendations. Every strategy is designed to deliver clear outcomes such as improved performance, better efficiency, or measurable growth.',
  },
];

const faqs: FAQItem[] = [
  {
    q: 'What does business consultation typically involve?',
    a: 'Business consultation focuses on understanding your current operations, identifying gaps, and building structured strategies to improve performance. This can include process optimisation, growth planning, and aligning decisions with measurable business outcomes.',
  },
  {
    q: 'Are your solutions scalable?',
    a: 'Yes. Every solution we build is designed with scalability in mind, ensuring it grows with your business and adapts to changing market conditions.',
  },
  {
    q: 'Do you focus on design or performance?',
    a: 'Our primary focus is performance and outcomes. We ensure every strategy and solution is built to deliver measurable results rather than just looking good on paper.',
  },
  {
    q: 'Do you provide post launch support?',
    a: 'Yes. We offer ongoing support and refinement services to ensure strategies remain effective and continue to deliver results as your business evolves.',
  },
  {
    q: 'How long does a typical engagement take?',
    a: 'Timelines vary based on scope and complexity. Simple consulting engagements can be completed in 4–6 weeks, while comprehensive strategy programmes may take 3–6 months.',
  },
];

// ─── Page ─────────────────────────────────────────────────────────────────────

export function BusinessConsultationClient() {
  return (
    <div className="font-hanken bg-white text-[#111112]">

      <ServicePageHero
        breadcrumb="IBV Services / Consulting & Strategy"
        title="Business Consultation"
        description="We help organisations identify gaps, improve performance, and build practical strategies that drive measurable outcomes and long-term growth."
      />

      <ServiceStatsSection
        stats={stats}
        description="Strong business decisions come from clarity, not assumptions. We analyse how your business operates, identify what drives performance, and build clear strategies that focus on the areas that matter most."
      />

      <ServiceFullWidthBand />

      <ServiceCardGrid services={services} />

      <ServiceApproachSection
        sectionLabel="How We Think"
        overview="Our approach focuses on understanding how your business actually works before recommending any strategy, ensuring that every decision is grounded in reality and aligned with your goals. We prioritise clarity, practicality, and measurable outcomes so that strategies are not just defined, but effectively executed."
        items={approachItems}
      />

      <ServiceWhyUsSection
        heading="We understand business complexity"
        paragraphs={[
          'No two businesses operate the same way. Each has its own constraints, priorities, and trade-offs across operations, markets, and resources. We take the time to understand how your business actually functions before recommending any strategy, ensuring that every decision is grounded in your reality, not in generic frameworks.',
          'This deep understanding helps us design solutions that fit your structure, capabilities, and market conditions. It ensures that strategies are not only relevant but also practical and sustainable over time.',
        ]}
      />

      <ServiceFAQSection faqs={faqs} />

      <ServiceContactSection
        heading={"Let's start building\nyour next step."}
        services={[
          'Business Consultation',
          'Startup Consultation',
          'Digital Solutions',
          'Research & Analysis',
          'Content & Growth',
        ]}
      />

    </div>
  );
}
