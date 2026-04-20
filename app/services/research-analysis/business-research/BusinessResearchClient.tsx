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
    value: '15K+',
    label: 'Data points analyzed to deliver structured, decision-ready insights.',
  },
  {
    value: '90%',
    label: 'Of strategic decisions improve with reliable research and intelligence.',
  },
];

const services: any[] = [
  {
    title: 'Feasibility Studies',
    description:
      'Our business research solutions include feasibility studies to evaluate ideas and opportunities.',
    icon: (
      <Icon>
        <path d="M9 11l3 3L22 4" />
        <path d="M21 12v7a2 2 0 01-2 2H5a2 2 0 01-2-2V5a2 2 0 012-2h11" />
      </Icon>
    ),
  },
  {
    title: 'Industry Analysis',
    description:
      'Some of our business research solutions are industry analysis to understand market structure and trends.',
    icon: (
      <Icon>
        <path d="M2 20h20M6 20V10M12 20V4M18 20v-7" />
      </Icon>
    ),
  },
  {
    title: 'Company Profiling',
    description:
      'Some of our business research solutions are company profiling to assess competitors and business positioning.',
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
    title: 'Investment Research',
    description:
      'Our business research solutions include investment research for financial and strategic decisions.',
    icon: (
      <Icon>
        <polyline points="22 7 13.5 15.5 8.5 10.5 2 17" />
        <polyline points="16 7 22 7 22 13" />
      </Icon>
    ),
  },
  {
    title: 'Research Reports',
    description:
      'Our business research solutions include academic and company research reports.',
    icon: (
      <Icon>
        <path d="M14 2H6a2 2 0 00-2 2v16a2 2 0 002 2h12a2 2 0 002-2V8z" />
        <polyline points="14 2 14 8 20 8" />
        <line x1="16" y1="13" x2="8" y2="13" />
        <line x1="16" y1="17" x2="8" y2="17" />
      </Icon>
    ),
  },
  {
    title: 'Strategic Intelligence',
    description:
      'Our business research solutions include strategic intelligence briefings for decision-making.',
    icon: (
      <Icon>
        <circle cx="11" cy="11" r="8" />
        <line x1="21" y1="21" x2="16.65" y2="16.65" />
      </Icon>
    ),
  },
];

const approachItems: ApproachItem[] = [
  {
    title: 'Research Depth',
    description:
      'Our primary and secondary research activities are conducted within industry, market, and business functions to provide comprehensive, precise, and relevant insights. This ensures every research output is detailed, structured, and aligned with business needs.',
  },
  {
    title: 'Insight-driven Focus',
    description:
      'Research Is Not Just About Finding Answers. It Is About Asking the Right Questions. We focus on asking the right questions to ensure that insights are meaningful, relevant, and aligned with decision-making needs.',
  },
  {
    title: 'Usability',
    description:
      'Our findings are presented in well-organized formats, enabling easy access and implementation of complex information and courses of action. This ensures research is understood and applied across teams.',
  },
];

const whyUsItems: WhyUsItem[] = [
  {
    heading: 'We provide structured intelligence',
    body: 'Decisions that are good are founded on good information. We provide extensive business research services that deliver intelligence to plan effectively, compete effectively and grow sustainably — ensuring every decision is backed by structured, relevant, and reliable information.',
  },
  {
    heading: 'We deliver comprehensive research',
    body: 'Our primary and secondary research activities are conducted within industry, market and business functions to provide reports and insights that are comprehensive, precise, and relevant. This allows businesses to gain a complete understanding of their environment without missing critical factors.',
  },
  {
    heading: 'We make research actionable',
    body: 'Our findings are presented in well-organized formats enabling easy access and implementation of complex information. This ensures insights are not just detailed but also easy to understand and apply, helping teams translate research into clear actions without unnecessary complexity.',
  },
  {
    heading: 'We support critical decisions',
    body: 'IBV Technologies provides services to business organizations, investors, academic institutions, and various organizations that use reliable research when making their most crucial decisions. This ensures research is aligned with real-world needs across different domains.',
  },
];

const faqs: FAQItem[] = [
  {
    q: 'What does business research typically involve?',
    a: 'Business research involves collecting and analyzing data across industries, markets, and companies to provide structured decision-making insights. This includes feasibility studies, industry analysis, and strategic intelligence, helping organizations understand their environment and make informed decisions.',
  },
  {
    q: 'How can business research help my organization?',
    a: 'It helps organizations plan effectively, understand competition, and identify opportunities for growth. This ensures that decisions are based on reliable and relevant information. It also reduces uncertainty and enables businesses to respond more confidently to market changes.',
  },
  {
    q: 'Do you provide both primary and secondary research?',
    a: 'Yes, we conduct both primary and secondary research across industry, market, and business functions to deliver comprehensive and precise insights. This combined approach ensures a deeper and more balanced understanding of the data.',
  },
  {
    q: 'Can you support investment or strategic decisions?',
    a: 'Yes, we provide investment research and strategic intelligence briefings that help support high-impact business and financial decisions. This ensures that critical decisions are backed by structured insights and relevant market intelligence.',
  },
  {
    q: 'What makes your business research different?',
    a: 'We focus on delivering structured, precise, and actionable insights in formats that are easy to understand and implement across business functions. Our approach ensures that research is not just informative but also practical and aligned with real business needs.',
  },
];

export function BusinessResearchClient() {
  return (
    <div className="font-hanken bg-white text-[#111112]">

      <IndividualPageHeroSection
        eyebrow="Research & Analysis"
        tagline1="Intelligence That Informs."
        tagline2="Research That Decides."
        headlineTitle="Business Research"
        description="We provide extensive business research services that will give your organization the much-needed intelligence to plan effectively, compete effectively and grow sustainably."
        backgroundImage="https://res.cloudinary.com/dm8jtnzdi/image/upload/q_auto/f_auto/v1776714310/BR_BG_bing9c.png"
      />

      <ServiceStatsSection
        stats={stats}
        description="Decisions that are good are founded on good information. IBV Technologies is a full-service firm providing extensive business research to equip your organization with the intelligence to plan, compete, and grow sustainably."
      />

      <ServiceFullWidthBand imageSrc='https://res.cloudinary.com/dm8jtnzdi/image/upload/q_auto/f_auto/v1776714309/BR_BANNER_stvuik.png'/>

      <ServiceCardGrid services={services} />

      <ServiceApproachSection
        sectionLabel="How We Think"
        overview="Our primary and secondary research activities are conducted across industry, market, and business functions to provide comprehensive, precise, and relevant insights. This balanced approach combines real-world data with structured analysis, delivering insights aligned with business decision-making needs."
        items={approachItems}
      />

      <ServiceWhyUsSection
        heading="We provide structured intelligence"
        paragraphs={['Decisions that are good are founded on good information. We provide extensive business research services that deliver intelligence to plan effectively, compete effectively and grow sustainably.','This ensures that every decision is backed by structured, relevant, and reliable information rather than assumptions. It helps organizations move forward with clarity and confidence in competitive environments.']}
        imageSrc='https://res.cloudinary.com/dm8jtnzdi/image/upload/q_auto/f_auto/v1776714310/BR_RECT_x7wvlo.png'
      />

      <FAQSection faqs={faqs} />

      <ContactSection />

    </div>
  );
}
