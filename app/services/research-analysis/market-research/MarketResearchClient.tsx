'use client';

import type { ReactNode } from 'react';
import { IndividualPageHeroSection } from '@/components/sections/services/IndividualPageHeroSection';
import { ServiceStatsSection }       from '@/components/sections/services/ServiceStatsSection';
import { ServiceCardGrid, ServiceFullWidthBand } from '@/components/sections/services/Servicebandandcardgrid';
import { ServiceApproachSection }    from '@/components/sections/services/ServiceApproachSection';
import { ServiceWhyUsSection }       from '@/components/sections/services/ServiceWhyUsSection';
import { FAQSection }                from '@/components/sections/FAQSection';
import { ContactSection }            from '@/components/sections/ContactSection';
import type { ApproachItem }         from '@/components/sections/services/ServiceApproachSection';
import type { FAQItem }              from '@/components/sections/FAQSection';
import type { ServiceStat }          from '@/components/sections/services/ServiceStatsSection';
import type { WhyUsItem }            from '@/components/sections/services/ServiceWhyUsSection';

function Icon({ children }: { children: ReactNode }) {
  return (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
      {children}
    </svg>
  );
}

const stats: ServiceStat[] = [
  {
    value: '10K+',
    label: 'Data points can shape market understanding when analysed with the right context.',
  },
  {
    value: '85%',
    label: 'Of strategic decisions depend on accurate market and customer insights.',
  },
];

const services: any[] = [
  {
    title: 'Consumer Analysis',
    description:
      'Our market research services cover the analysis of consumer behavior to understand customer needs.',
    icon: (
      <Icon>
        <circle cx="12" cy="12" r="10" />
        <path d="M8 14s1.5 2 4 2 4-2 4-2" />
        <line x1="9" y1="9" x2="9.01" y2="9" />
        <line x1="15" y1="9" x2="15.01" y2="9" />
      </Icon>
    ),
  },
  {
    title: 'Competitor Benchmarking',
    description:
      'Our market research services cover benchmarks of competitors to evaluate positioning and performance.',
    icon: (
      <Icon>
        <path d="M17 21v-2a4 4 0 00-4-4H5a4 4 0 00-4 4v2" />
        <circle cx="9" cy="7" r="4" />
        <path d="M23 21v-2a4 4 0 00-3-3.87" />
        <path d="M16 3.13a4 4 0 010 7.75" />
      </Icon>
    ),
  },
  {
    title: 'Industry Trend Mapping',
    description:
      'Our market research services cover mapping of industry trends to identify patterns and opportunities.',
    icon: (
      <Icon>
        <polyline points="22 7 13.5 15.5 8.5 10.5 2 17" />
        <polyline points="16 7 22 7 22 13" />
      </Icon>
    ),
  },
  {
    title: 'Demand Prediction',
    description:
      'Our market research services cover demand prediction to support planning and decision-making.',
    icon: (
      <Icon>
        <path d="M2 20h20M6 20V10M12 20V4M18 20v-7" />
      </Icon>
    ),
  },
  {
    title: 'Target Audience Profiling',
    description:
      'Our market research services cover profiling of the target audience for segmentation and targeting.',
    icon: (
      <Icon>
        <circle cx="12" cy="12" r="10" />
        <line x1="2" y1="12" x2="22" y2="12" />
        <path d="M12 2a15.3 15.3 0 014 10 15.3 15.3 0 01-4 10 15.3 15.3 0 01-4-10 15.3 15.3 0 014-10z" />
      </Icon>
    ),
  },
  {
    title: 'Qual & Quant',
    description:
      'A blended research approach to ensure insights are dependable, applicable, and actionable.',
    icon: (
      <Icon>
        <rect x="3" y="3" width="7" height="7" rx="1" />
        <rect x="14" y="3" width="7" height="7" rx="1" />
        <rect x="3" y="14" width="7" height="7" rx="1" />
        <rect x="14" y="14" width="7" height="7" rx="1" />
      </Icon>
    ),
  },
];

const approachItems: ApproachItem[] = [
  {
    title: 'Beyond Surface',
    description:
      'We do not limit ourselves to surface-level information; instead, we identify trends, behaviors, and opportunities that matter to your business and drive long-term growth decisions. This uncovers deeper insights often missed in traditional research approaches.',
  },
  {
    title: 'Insight Driven Approach',
    description:
      'Data Without Insight Is Just Numbers. We Give You Both. We focus on ensuring that insights are meaningful, structured, and usable for business decisions. This allows you to move beyond data and take clear, informed actions with confidence.',
  },
  {
    title: 'Decision Focus',
    description:
      'When entering into a new market, starting a new product or re-establishing your positioning, we provide you with that intelligence that will see you take a step into a new direction with a lot of confidence.',
  },
];

const whyUsItems: WhyUsItem[] = [
  {
    heading: 'We go beyond surface insights',
    body: 'We do not limit ourselves to mere surface-level information, but focus on uncovering the trends, behaviors and opportunities that truly matter to your business. This depth helps businesses understand not just what is happening, but why — ensuring decisions are based on clarity and context rather than assumptions.',
  },
  {
    heading: 'We deliver actionable research',
    body: 'Our qualitative and quantitative research approach blends the two to ensure that all insights are dependable, applicable, and actionable. By focusing on applicability, we make sure insights can be translated into real strategies and actions without unnecessary complexity.',
  },
  {
    heading: 'We support confident decision-making',
    body: 'The key to every clever business decision is to know your market. We provide an accurate, clear and actionable image of your industry, your competitors and your customers, enabling better strategic direction and reducing uncertainty.',
  },
  {
    heading: 'We enable smarter market moves',
    body: 'When entering into a new market, starting a new product or reestablishing your positioning, we provide you with the intelligence that will see you take a step into a new direction with confidence — minimising risk while maximising success.',
  },
];

const faqs: FAQItem[] = [
  {
    q: 'What does market research typically involve?',
    a: 'Market research involves analyzing your industry, competitors, and customers to provide a clear and actionable understanding of your market. This includes studying behavior, trends, and demand to support better decision-making.',
  },
  {
    q: 'How can market research help my business?',
    a: 'It helps you understand your target audience, identify opportunities, and reduce risk when entering new markets or launching products. This ensures that decisions are based on real insights rather than assumptions.',
  },
  {
    q: 'Do you use both qualitative and quantitative research?',
    a: 'Yes, we use a blend of qualitative and quantitative research methods to ensure insights are dependable, applicable, and actionable. This approach combines data-driven analysis with real-world context for deeper understanding.',
  },
  {
    q: 'Can you help with a new market entry?',
    a: 'Yes, we provide insights and intelligence that help businesses enter new markets with clarity and confidence. We analyze market conditions, competition, and demand to reduce uncertainty and support better planning.',
  },
  {
    q: 'What makes your market research different?',
    a: 'We go beyond surface-level data and focus on trends, behaviors, and opportunities that directly impact business decisions. Our approach ensures insights are not just collected but translated into meaningful direction.',
  },
];

export function MarketResearchClient() {
  return (
    <div className="font-hanken bg-white text-[#111112]">

      <IndividualPageHeroSection
        eyebrow="Research & Analysis"
        tagline1="Know Your Market."
        tagline2="Move With Confidence."
        headlineTitle="Market Research"
        description="We offer comprehensive market research that can offer you an accurate, clear and actionable image as to your industry, your competitors and your customers."
        backgroundImage="https://res.cloudinary.com/dm8jtnzdi/image/upload/q_auto/f_auto/v1776714175/MR_BG_qrxlzl.png "
      />

      <ServiceStatsSection
        stats={stats}
        description="The key to every clever business decision is to know your market. IBV Technologies offers comprehensive market research that can offer you an accurate, clear and actionable image as to your industry, your competitors and your customers."
      />

      <ServiceFullWidthBand imageSrc='https://res.cloudinary.com/dm8jtnzdi/image/upload/q_auto/f_auto/v1776714174/MR_BANNEr_feurez.png'/>

      <ServiceCardGrid services={services} />

      <ServiceApproachSection
        sectionLabel="How We Think"
        overview="Our qualitative and quantitative research approach blends both to ensure insights are dependable, applicable, and actionable. This combines data-driven analysis with real-world context for deeper understanding, ensuring insights are accurate and practical for decision-making."
        items={approachItems}
      />

      <ServiceWhyUsSection
        heading="We go beyond surface insights"
        paragraphs={['We do not limit ourselves to mere surface-level information, but focus on uncovering the trends, behaviors and opportunities that truly matter to your business. This allows us to move beyond basic data collection and deliver deeper, more meaningful insights.',
          'This depth of analysis helps businesses understand not just what is happening, but why it is happening. It ensures that decisions are based on clarity and context rather than assumptions or incomplete information.'
        ]}
        imageSrc='https://res.cloudinary.com/dm8jtnzdi/image/upload/q_auto/f_auto/v1776714310/BR_RECT_x7wvlo.png'
      />

      <FAQSection faqs={faqs} />

      <ContactSection />

    </div>
  );
}
