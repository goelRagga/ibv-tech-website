'use client';

import type { ReactNode } from 'react';
import { ServicePageHero }        from '@/components/sections/services/ServicePageHero';
import { ServiceStatsSection }    from '@/components/sections/services/ServiceStatsSection';
import { ServiceFullWidthBand }   from '@/components/sections/services/ServiceFullWidthBand';
import { ServiceCardGrid }        from '@/components/sections/services/ServiceCardGrid';
import { ServiceApproachSection } from '@/components/sections/services/ServiceApproachSection';
import { ServiceWhyUsSection }    from '@/components/sections/services/ServiceWhyUsSection';
import { ServiceFAQSection }      from '@/components/sections/services/ServiceFAQSection';
import { ServiceContactSection }  from '@/components/sections/services/ServiceContactSection';
import type { ServiceCardItem }   from '@/components/sections/services/ServiceCardGrid';
import type { ApproachItem }      from '@/components/sections/services/ServiceApproachSection';
import type { FAQItem }           from '@/components/sections/services/ServiceFAQSection';
import type { ServiceStat }       from '@/components/sections/services/ServiceStatsSection';

function Icon({ children }: { children: ReactNode }) {
  return (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
      {children}
    </svg>
  );
}

const stats: ServiceStat[] = [
  { value: '200+', label: 'Startups guided from idea stage through to market-ready products and investor pitches.' },
  { value: '3x', label: 'Average increase in investor meeting conversions after structured pitch deck preparation.' },
];

const services: ServiceCardItem[] = [
  {
    title: 'Idea Validation',
    description: 'Test your concept against real market conditions before committing resources — reducing risk from day one.',
    icon: <Icon><path d="M12 2a7 7 0 017 7c0 2.5-1.5 4.5-3 6l-1 3H9l-1-3C6.5 13.5 5 11.5 5 9a7 7 0 017-7z"/><line x1="9" y1="21" x2="15" y2="21"/></Icon>,
  },
  {
    title: 'Business Model Design',
    description: 'Define how your startup creates, delivers, and captures value — building a model that is viable and scalable.',
    icon: <Icon><rect x="3" y="3" width="7" height="7" rx="1"/><rect x="14" y="3" width="7" height="7" rx="1"/><rect x="3" y="14" width="7" height="7" rx="1"/><rect x="14" y="14" width="7" height="7" rx="1"/></Icon>,
  },
  {
    title: 'Financial Modelling',
    description: 'Build realistic financial projections, unit economics, and funding scenarios that ground your ambitions in numbers.',
    icon: <Icon><polyline points="22 7 13.5 15.5 8.5 10.5 2 17"/><polyline points="16 7 22 7 22 13"/></Icon>,
  },
  {
    title: 'Pitch Deck Creation',
    description: 'Craft investor-ready pitch decks that communicate your vision, traction, and opportunity with clarity and confidence.',
    icon: <Icon><rect x="2" y="3" width="20" height="14" rx="2"/><line x1="8" y1="21" x2="16" y2="21"/><line x1="12" y1="17" x2="12" y2="21"/></Icon>,
  },
  {
    title: 'Go-To-Market Planning',
    description: 'Define your launch strategy, target customer segments, pricing, and channel mix for a focused, high-impact market entry.',
    icon: <Icon><circle cx="12" cy="12" r="10"/><line x1="2" y1="12" x2="22" y2="12"/><path d="M12 2a15.3 15.3 0 014 10 15.3 15.3 0 01-4 10 15.3 15.3 0 01-4-10 15.3 15.3 0 014-10z"/></Icon>,
  },
  {
    title: 'Investor Readiness',
    description: 'Prepare every element of your fundraising process — from documentation and due diligence to investor narrative.',
    icon: <Icon><path d="M9 11l3 3L22 4"/><path d="M21 12v7a2 2 0 01-2 2H5a2 2 0 01-2-2V5a2 2 0 012-2h11"/></Icon>,
  },
];

const approachItems: ApproachItem[] = [
  {
    title: 'Founder-First Thinking',
    description: 'We approach every engagement from the founder\'s perspective — understanding the personal stakes, resource constraints, and urgency that come with early-stage building. Our advice is practical, not academic, designed for the real challenges founders face.',
  },
  {
    title: 'Lean Methodology',
    description: 'We help startups validate before they build, test before they scale, and learn before they invest heavily. This reduces wasted effort and ensures every decision is grounded in evidence rather than assumption.',
  },
  {
    title: 'Scalability-Focused',
    description: 'Everything we build with founders is designed with scale in mind — from the business model and financial structure to the operational framework. The foundations we lay today need to support the business you intend to become.',
  },
];

const faqs: FAQItem[] = [
  {
    q: 'What stage of startup should use this service?',
    a: 'We work with founders across all early stages — from pre-idea validation through to pre-seed and seed fundraising. Whether you have an idea or a product already in market, we help you find clarity and structure.',
  },
  {
    q: 'Can you help if I already have a product but need investment?',
    a: 'Yes. Investor readiness is a significant part of our startup consulting offering. We help you structure your narrative, prepare your pitch deck, build your financial model, and prepare for due diligence.',
  },
  {
    q: 'Do you co-found or take equity?',
    a: 'No. We are a consulting partner, not a co-founder. We provide advisory and strategic support on an engagement basis without taking equity or board positions.',
  },
  {
    q: 'How do you approach idea validation?',
    a: 'We use a structured validation framework — analysing the problem, market size, customer demand signals, competitor landscape, and monetisation viability before recommending whether and how to proceed.',
  },
  {
    q: 'How long does a startup consultation engagement last?',
    a: 'It depends on scope. A focused validation and business model session can be completed in 2–4 weeks. Full pitch preparation and investor readiness programmes typically take 6–10 weeks.',
  },
];

export function StartupConsultationClient() {
  return (
    <div className="font-hanken bg-white text-[#111112]">
      <ServicePageHero
        breadcrumb="IBV Services / Consulting & Strategy"
        title="Startup Consultation"
        description="We guide founders in turning ideas into scalable businesses through validation, business model development, and go-to-market planning."
      />

      <ServiceStatsSection
        stats={stats}
        description="Most startups fail not because of bad ideas but because of poor validation, unclear models, and unstructured execution. We give founders the clarity and structure to move from concept to market with confidence."
      />

      <ServiceFullWidthBand />

      <ServiceCardGrid services={services} />

      <ServiceApproachSection
        sectionLabel="How We Think"
        overview="Our approach is built around the founder's reality — resource constraints, high uncertainty, and the need for speed without recklessness. We combine structured frameworks with practical thinking to give startups a clear path forward from day one."
        items={approachItems}
      />

      <ServiceWhyUsSection
        heading="We understand the startup journey"
        paragraphs={[
          'Building a startup is one of the most challenging undertakings in business — full of ambiguity, pressure, and constant trade-offs. We have worked with founders across industries and stages, and we understand that generic advice rarely fits the specific constraints and context of a startup.',
          'Our consulting is built around your reality. We challenge assumptions, stress-test models, and help you build clarity in the areas that matter most — so you can move faster with greater confidence.',
        ]}
      />

      <ServiceFAQSection faqs={faqs} />

      <ServiceContactSection
        heading={"Let's build your\nstartup together."}
        services={['Startup Consultation', 'Business Consultation', 'Digital Solutions', 'Research & Analysis', 'Content & Growth']}
      />
    </div>
  );
}
