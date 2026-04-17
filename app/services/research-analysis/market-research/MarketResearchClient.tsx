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
  { value: '300+', label: 'Market research studies conducted across diverse industries and geographies.' },
  { value: '92%', label: 'Of clients report making a key strategic decision directly informed by our research.' },
];

const services: ServiceCardItem[] = [
  {
    title: 'Primary Research',
    description: 'First-hand data collected directly from your target audience through surveys, interviews, and focus groups tailored to your research questions.',
    icon: <Icon><circle cx="12" cy="12" r="10"/><line x1="12" y1="8" x2="12" y2="16"/><line x1="8" y1="12" x2="16" y2="12"/></Icon>,
  },
  {
    title: 'Secondary Research',
    description: 'Comprehensive desk research drawing on industry reports, academic sources, and proprietary databases to map the competitive and regulatory landscape.',
    icon: <Icon><path d="M4 19.5A2.5 2.5 0 016.5 17H20"/><path d="M6.5 2H20v20H6.5A2.5 2.5 0 014 19.5v-15A2.5 2.5 0 016.5 2z"/></Icon>,
  },
  {
    title: 'Competitor Analysis',
    description: 'In-depth analysis of direct and indirect competitors — their positioning, strengths, weaknesses, pricing, and market strategies.',
    icon: <Icon><path d="M17 21v-2a4 4 0 00-4-4H5a4 4 0 00-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M23 21v-2a4 4 0 00-3-3.87"/><path d="M16 3.13a4 4 0 010 7.75"/></Icon>,
  },
  {
    title: 'Consumer Behaviour Analysis',
    description: 'Understand what drives your customers — their motivations, buying triggers, pain points, and decision-making process.',
    icon: <Icon><circle cx="12" cy="12" r="10"/><path d="M8 14s1.5 2 4 2 4-2 4-2"/><line x1="9" y1="9" x2="9.01" y2="9"/><line x1="15" y1="9" x2="15.01" y2="9"/></Icon>,
  },
  {
    title: 'Market Sizing',
    description: 'Quantify the total addressable, serviceable, and obtainable market — with structured methodologies that give investors and leadership confidence.',
    icon: <Icon><rect x="3" y="3" width="18" height="18" rx="2"/><path d="M3 9h18M9 21V9"/></Icon>,
  },
  {
    title: 'Trend Analysis',
    description: 'Identify emerging market trends, shifting consumer preferences, and technology disruptions before they become mainstream.',
    icon: <Icon><polyline points="22 7 13.5 15.5 8.5 10.5 2 17"/><polyline points="16 7 22 7 22 13"/></Icon>,
  },
];

const approachItems: ApproachItem[] = [
  {
    title: 'Methodology-Led Research',
    description: 'Every research project starts with a defined methodology — selecting the right data collection approach, sample design, and analytical framework before any data is gathered. This rigour ensures findings are reliable and defensible.',
  },
  {
    title: 'Unbiased, Objective Analysis',
    description: 'We are not in the business of confirming what clients want to hear. Our analysis is structured to surface the truth — whether that validates a hypothesis, challenges an assumption, or reveals an opportunity that was not originally on the radar.',
  },
  {
    title: 'Actionable Outputs',
    description: 'Research reports without recommendations are just data. Every deliverable we produce includes a structured insights section with clear, prioritised actions that connect findings to business decisions.',
  },
];

const faqs: FAQItem[] = [
  {
    q: 'What is the difference between primary and secondary market research?',
    a: 'Primary research involves collecting new data directly from your target audience — through surveys, interviews, or focus groups. Secondary research uses existing published sources such as industry reports, databases, and academic studies. Most projects benefit from a combination of both.',
  },
  {
    q: 'Can you conduct research for a market I want to enter?',
    a: 'Yes. Market entry research is one of our most common engagements. We analyse market size, competitive dynamics, regulatory environment, customer segments, and entry barriers to give you a clear picture before you commit.',
  },
  {
    q: 'How large does the research sample need to be?',
    a: 'Sample size depends on the type of research, the market, and the statistical confidence required. We design samples that are fit for purpose — large enough to be statistically meaningful, targeted enough to be relevant.',
  },
  {
    q: 'What format are research deliverables provided in?',
    a: 'We deliver structured research reports, executive summary decks, and data visualisations. Format is tailored to how you intend to use the findings — whether for internal strategy, investor presentations, or product development.',
  },
  {
    q: 'How long does market research take?',
    a: 'Focused desk research projects can be completed in 1–2 weeks. Primary research including survey design, data collection, and analysis typically takes 3–6 weeks depending on sample complexity.',
  },
];

export function MarketResearchClient() {
  return (
    <div className="font-hanken bg-white text-[#111112]">
      <ServicePageHero
        breadcrumb="IBV Services / Research & Analysis"
        title="Market Research"
        description="We analyse market landscapes, consumer behaviour, and competitive dynamics to give you the intelligence needed to move forward with confidence."
      />

      <ServiceStatsSection
        stats={stats}
        description="Entering a market without research is a gamble. We give businesses the market intelligence they need to make informed decisions — whether launching a new product, entering a new geography, or repositioning against competitors."
      />

      <ServiceFullWidthBand />

      <ServiceCardGrid services={services} />

      <ServiceApproachSection
        sectionLabel="How We Research"
        overview="Good market research is more than collecting data — it requires the right questions, the right sources, and the analytical rigour to separate signal from noise. We apply structured methodologies to every research engagement to ensure findings are reliable, relevant, and actionable."
        items={approachItems}
      />

      <ServiceWhyUsSection
        heading="We turn market data into market clarity"
        paragraphs={[
          'Markets are complex — shaped by shifting consumer preferences, competitive dynamics, regulatory change, and macro forces that interact in non-linear ways. Surface-level data rarely captures this complexity, which is why we go deeper in every research engagement.',
          'Our research is designed to give decision-makers the confidence to act — not just information to sit on. Every report is built around the specific business decisions you need to make.',
        ]}
      />

      <ServiceFAQSection faqs={faqs} />

      <ServiceContactSection
        heading={"Let's research your\nmarket together."}
        services={['Market Research', 'Business Research', 'Data Analytics & Research', 'Business Consultation', 'Digital Solutions']}
      />
    </div>
  );
}
