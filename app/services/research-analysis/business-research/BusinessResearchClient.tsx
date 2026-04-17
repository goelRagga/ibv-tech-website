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
  { value: '250+', label: 'Business research engagements completed across sectors including finance, healthcare, and technology.' },
  { value: '88%', label: 'Of clients use our research to directly inform a major strategic or investment decision.' },
];

const services: ServiceCardItem[] = [
  {
    title: 'Industry Analysis',
    description: 'Deep-dive analysis of industry structure, dynamics, key players, growth drivers, and headwinds that shape your operating environment.',
    icon: <Icon><path d="M2 20h20M6 20V10M12 20V4M18 20v-7"/></Icon>,
  },
  {
    title: 'Feasibility Studies',
    description: 'Structured assessments of whether a business idea, project, or expansion is viable — covering market, operational, financial, and regulatory dimensions.',
    icon: <Icon><path d="M9 11l3 3L22 4"/><path d="M21 12v7a2 2 0 01-2 2H5a2 2 0 01-2-2V5a2 2 0 012-2h11"/></Icon>,
  },
  {
    title: 'Competitive Intelligence',
    description: 'Ongoing monitoring and structured analysis of competitors — their moves, positioning shifts, pricing changes, and strategic direction.',
    icon: <Icon><circle cx="11" cy="11" r="8"/><line x1="21" y1="21" x2="16.65" y2="16.65"/></Icon>,
  },
  {
    title: 'Risk Assessment',
    description: 'Identify and quantify the key business, market, operational, and regulatory risks associated with a strategy, expansion, or investment.',
    icon: <Icon><path d="M10.29 3.86L1.82 18a2 2 0 001.71 3h16.94a2 2 0 001.71-3L13.71 3.86a2 2 0 00-3.42 0z"/><line x1="12" y1="9" x2="12" y2="13"/><line x1="12" y1="17" x2="12.01" y2="17"/></Icon>,
  },
  {
    title: 'Growth Opportunity Mapping',
    description: 'Identify and prioritise untapped growth opportunities — new segments, adjacent markets, product extensions, or geographic expansions.',
    icon: <Icon><circle cx="12" cy="12" r="10"/><line x1="2" y1="12" x2="22" y2="12"/><path d="M12 2a15.3 15.3 0 014 10 15.3 15.3 0 01-4 10 15.3 15.3 0 01-4-10 15.3 15.3 0 014-10z"/></Icon>,
  },
  {
    title: 'Due Diligence Support',
    description: 'Research and analysis that supports investment decisions, acquisitions, or partnerships — giving decision-makers the evidence they need.',
    icon: <Icon><path d="M14 2H6a2 2 0 00-2 2v16a2 2 0 002 2h12a2 2 0 002-2V8z"/><polyline points="14 2 14 8 20 8"/><line x1="16" y1="13" x2="8" y2="13"/><line x1="16" y1="17" x2="8" y2="17"/></Icon>,
  },
];

const approachItems: ApproachItem[] = [
  {
    title: 'Structured Analytical Frameworks',
    description: 'We apply proven frameworks — industry analysis models, financial evaluation matrices, risk assessment tools — to ensure research is rigorous and comparable across engagements. This prevents ad-hoc analysis and ensures findings are defensible.',
  },
  {
    title: 'Data Integrity First',
    description: 'We are disciplined about data sources — distinguishing between high-quality primary data, reliable secondary sources, and lower-confidence estimates. Every finding is clearly attributed, and confidence levels are always communicated alongside conclusions.',
  },
  {
    title: 'Business-Aligned Research',
    description: 'Business research is only valuable if it addresses the specific decisions in front of leadership. We scope every engagement around the decisions that matter most — not just the questions that are easiest to answer.',
  },
];

const faqs: FAQItem[] = [
  {
    q: 'What is business research and how does it differ from market research?',
    a: 'Market research focuses on understanding your market — customers, competitors, and demand. Business research is broader, covering industry dynamics, feasibility, risk, operational context, and strategic opportunity. Both can be relevant depending on your decision.',
  },
  {
    q: 'When should a business commission a feasibility study?',
    a: 'Before any significant new investment — launching a new product, entering a new market, acquiring a company, or building a new facility. A feasibility study helps quantify whether the opportunity is viable before committing resources.',
  },
  {
    q: 'Can you support M&A due diligence?',
    a: 'Yes. We provide commercial and market due diligence support — assessing the target company\'s market position, competitive dynamics, customer base, and growth potential to inform acquisition decisions.',
  },
  {
    q: 'How is your research delivered?',
    a: 'We deliver structured research reports, executive summary presentations, and supporting data. Deliverables are designed to be presentation-ready for boards, investors, and senior leadership teams.',
  },
  {
    q: 'Can the research be customised to our industry?',
    a: 'All research is customised to your specific industry, market, and business context. We do not deliver generic reports — every engagement starts with understanding your specific decision and building the research around it.',
  },
];

export function BusinessResearchClient() {
  return (
    <div className="font-hanken bg-white text-[#111112]">
      <ServicePageHero
        breadcrumb="IBV Services / Research & Analysis"
        title="Business Research"
        description="We conduct structured research to evaluate industry dynamics, business feasibility, and strategic opportunities — giving you clarity before making critical decisions."
      />

      <ServiceStatsSection
        stats={stats}
        description="Big business decisions carry real risk. We give leadership teams the evidence-based intelligence they need to evaluate opportunities, assess risks, and commit to the right path — with confidence, not speculation."
      />

      <ServiceFullWidthBand />

      <ServiceCardGrid services={services} />

      <ServiceApproachSection
        sectionLabel="How We Research"
        overview="Business research requires both analytical rigour and business acumen. We combine structured frameworks with a deep understanding of how businesses operate — ensuring our research addresses the actual decisions you need to make, not just abstract questions."
        items={approachItems}
      />

      <ServiceWhyUsSection
        heading="We research with decision-making in mind"
        paragraphs={[
          'Too much business research ends up as documents that look thorough but drive no action. We design every research engagement around a clear decision — whether it is a market entry, an investment, a product launch, or a strategic pivot.',
          'Our deliverables are built for leadership use — clear, structured, and specific enough to inform a real choice rather than just add to the pile of information on the table.',
        ]}
      />

      <ServiceFAQSection faqs={faqs} />

      <ServiceContactSection
        heading={"Let's research your\nnext big decision."}
        services={['Business Research', 'Market Research', 'Data Analytics & Research', 'Business Consultation', 'Digital Solutions']}
      />
    </div>
  );
}
