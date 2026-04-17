'use client';

import { FAQSection } from '@/components/sections/FAQSection';
import { BlogSection } from '@/components/sections/BlogSection';
import { TestimonialsSection } from '@/components/sections/TestimonialsSection';
import { HubPageHeroSection } from '@/components/sections/services/HubPageHeroSection';
import { ThreePillarsSection, type Pillar } from '@/components/sections/services/ThreePillarsSection';
import { ServiceOffering, ServiceOfferingsSection } from '@/components/sections/services/ServiceOfferingsSection';
import { HowWeWorkSection, ProcessStep } from '@/components/sections/services/HowWeWorkSection';

const researchPillars: [Pillar, Pillar, Pillar] = [
  {
    number: '01',
    title: 'Data-Driven Decisions',
    desc: 'Replace assumptions with structured analysis that gives decision-makers reliable, grounded intelligence.',
    type: 'red',
  },
  {
    number: '02',
    title: 'Deep Market Intelligence',
    desc: 'Go beyond surface-level data to understand the forces shaping your market, competitors, and customers.',
    type: 'image',
    image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&q=80',
  },
  {
    number: '03',
    title: 'Actionable Insights',
    desc: 'Research only has value when it leads somewhere — every report we deliver is built around clear next steps.',
    type: 'dark',
  },
];

const researchServices: ServiceOffering[] = [
  {
    number: '01.',
    title: 'Market Research',
    desc: 'We analyse market landscapes, consumer behaviour, and competitive dynamics to give you the intelligence needed to enter new markets, launch products, or reposition with confidence.',
    tags: ['Primary Research', 'Secondary Research', 'Consumer Behaviour', 'Competitor Analysis', 'Market Sizing'],
    href: '/services/research-analysis/market-research',
    image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=600&q=80',
  },
  {
    number: '02.',
    title: 'Business Research',
    desc: 'We conduct structured research to evaluate industry dynamics, business feasibility, and strategic opportunities — giving you clarity before making critical business decisions.',
    tags: ['Industry Analysis', 'Feasibility Studies', 'Risk Assessment', 'Due Diligence', 'Growth Mapping'],
    href: '/services/research-analysis/business-research',
    image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=600&q=80',
  },
  {
    number: '03.',
    title: 'Data Analytics & Research',
    desc: 'We collect, clean, analyse, and visualise data to surface patterns, trends, and insights that drive smarter decisions across operations, marketing, and growth.',
    tags: ['Data Collection', 'Descriptive Analytics', 'Predictive Modelling', 'Dashboards', 'Reporting'],
    href: '/services/research-analysis/data-analytics',
    image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=600&q=80',
  },
];

const researchProcessSteps: ProcessStep[] = [
  { number: '01', title: 'Define Objectives', desc: 'We clarify the research question, business goal, and scope before collecting a single data point.' },
  { number: '02', title: 'Gather Data', desc: 'We collect primary and secondary data from relevant, high-quality sources suited to your research needs.' },
  { number: '03', title: 'Analyse', desc: 'We apply structured analytical frameworks to identify patterns, anomalies, and meaningful relationships.' },
  { number: '04', title: 'Interpret', desc: 'We translate findings into business-relevant conclusions, filtering noise from genuine insight.' },
  { number: '05', title: 'Report & Apply', desc: 'We deliver clear, actionable reports designed for decision-making — not just reading.' },
];

const researchFaqs = [
  {
    q: 'What types of research do you conduct?',
    a: 'We cover market research, business research, and data analytics. This includes primary research (surveys, interviews), secondary research (desk research, industry reports), competitor analysis, feasibility studies, and data-driven analytics.',
  },
  {
    q: 'How do you ensure research accuracy and objectivity?',
    a: 'We follow structured methodologies, source data from credible channels, and apply analytical frameworks that reduce bias. Every finding is validated before it informs a recommendation.',
  },
  {
    q: 'Can research be tailored to a specific industry or market?',
    a: 'Yes. All research is custom-built to your specific industry, geography, and business context. We do not rely on generic templates or off-the-shelf reports.',
  },
  {
    q: 'What does a typical research engagement deliver?',
    a: 'Deliverables vary by scope but typically include a structured research report, key findings summary, data visualisations, and an actionable insights section with clear recommendations for decision-making.',
  },
  {
    q: 'How long does a research project take?',
    a: 'Timelines vary based on scope and data availability. Focused desk research can be completed in 1–2 weeks. Primary research or comprehensive analytics projects typically take 4–8 weeks.',
  },
];

export function ResearchAnalysisHubClient() {
  return (
    <>
      <HubPageHeroSection
        eyebrow="Our Intelligence Layer"
        tagline1="Intelligence Before Action."
        tagline2="Insight Before Investment."
        headlineTitle="Research & Analysis"
        description="Data alone doesn't drive decisions — the right interpretation does. We provide structured research and analysis that turns raw information into actionable intelligence."
        backgroundImage="https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=1600&q=80"
      />

      <ThreePillarsSection
        labelPrefix="Our"
        labelHighlight="Intelligence"
        paragraph={
          <>
            Decisions made without evidence carry unnecessary risk.{' '}
            <strong>IBV Technologies</strong> provides the research infrastructure, analytical rigour,
            and clear reporting that businesses need to move forward with confidence, not guesswork.
          </>
        }
        pillars={researchPillars}
      />

      <ServiceOfferingsSection
        headingHighlight="research & analysis services"
        headingSuffix="designed to give you intelligence that drives confident decisions"
        services={researchServices}
      />

      <HowWeWorkSection
        bannerImage="https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=1400&q=80"
        eyebrowLabel="HOW WE"
        eyebrowHighlight="WORK"
        heading="We ask the right questions before we gather a single data point."
        ctaLabel="Get In Touch"
        ctaHref="/contact"
        sideImage="https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=600&q=80"
        steps={researchProcessSteps}
        defaultOpenStep="02"
      />

      <BlogSection />
      <TestimonialsSection />
      <FAQSection faqs={researchFaqs} />
    </>
  );
}
