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
  { value: '1M+', label: 'Data records processed and analysed across client analytics engagements.' },
  { value: '40%', label: 'Average reduction in decision cycle time for teams using our analytics dashboards.' },
];

const services: ServiceCardItem[] = [
  {
    title: 'Data Collection & Integration',
    description: 'Bring together data from multiple sources — CRM, marketing platforms, operations, and financials — into a unified, clean dataset.',
    icon: <Icon><ellipse cx="12" cy="5" rx="9" ry="3"/><path d="M21 12c0 1.66-4 3-9 3s-9-1.34-9-3"/><path d="M3 5v14c0 1.66 4 3 9 3s9-1.34 9-3V5"/></Icon>,
  },
  {
    title: 'Data Cleaning & Preparation',
    description: 'Transform raw, messy data into analysis-ready datasets — removing duplicates, handling missing values, and standardising formats.',
    icon: <Icon><path d="M14.7 6.3a1 1 0 000 1.4l1.6 1.6a1 1 0 001.4 0l3.77-3.77a6 6 0 01-7.94 7.94l-6.91 6.91a2.12 2.12 0 01-3-3l6.91-6.91a6 6 0 017.94-7.94l-3.76 3.76z"/></Icon>,
  },
  {
    title: 'Descriptive Analytics',
    description: 'Understand what has happened in your business through structured analysis of historical data — trends, patterns, anomalies, and performance drivers.',
    icon: <Icon><path d="M2 20h20M6 20V10M12 20V4M18 20v-7"/></Icon>,
  },
  {
    title: 'Predictive Modelling',
    description: 'Use historical patterns to forecast future outcomes — customer behaviour, demand trends, revenue projections, and operational scenarios.',
    icon: <Icon><polyline points="22 7 13.5 15.5 8.5 10.5 2 17"/><polyline points="16 7 22 7 22 13"/></Icon>,
  },
  {
    title: 'Data Visualisation',
    description: 'Transform complex datasets into clear, compelling visual stories that communicate insight quickly to decision-makers at every level.',
    icon: <Icon><rect x="3" y="3" width="7" height="7" rx="1"/><rect x="14" y="3" width="7" height="7" rx="1"/><rect x="3" y="14" width="7" height="7" rx="1"/><rect x="14" y="14" width="7" height="7" rx="1"/></Icon>,
  },
  {
    title: 'Dashboards & Reporting',
    description: 'Build live or scheduled dashboards that give your team ongoing visibility into the metrics that matter most for your business.',
    icon: <Icon><rect x="2" y="3" width="20" height="14" rx="2"/><line x1="8" y1="21" x2="16" y2="21"/><line x1="12" y1="17" x2="12" y2="21"/></Icon>,
  },
];

const approachItems: ApproachItem[] = [
  {
    title: 'Rigorous Analytical Methodology',
    description: 'We apply statistical rigour to every data project — choosing appropriate methods, validating assumptions, and communicating confidence levels clearly. Data analysis that cuts corners produces misleading conclusions, and we do not allow that.',
  },
  {
    title: 'Insight-Driven, Not Data-Dumping',
    description: 'More data is not better data. We focus on surfacing the insights that drive decisions — filtering noise, prioritising signal, and presenting findings in a way that is immediately useful for the people who need to act on them.',
  },
  {
    title: 'Scalable Data Infrastructure',
    description: 'Where we set up analytics systems — pipelines, dashboards, or models — we build them to scale with your business. Clean architecture today prevents expensive rebuilds tomorrow.',
  },
];

const faqs: FAQItem[] = [
  {
    q: 'What kinds of data can you work with?',
    a: 'We work with structured and semi-structured data from a wide range of sources — CRM systems, marketing platforms, financial systems, operational databases, e-commerce platforms, and more. We can connect to most major data sources.',
  },
  {
    q: 'Do I need a large data set to benefit from analytics?',
    a: 'No. Even with relatively small datasets, structured analytics can reveal meaningful patterns and drive better decisions. The value is in the interpretation and structure, not just the volume of data.',
  },
  {
    q: 'What does a data analytics engagement typically deliver?',
    a: 'Deliverables depend on scope. Common outputs include analytical reports with key findings, interactive dashboards, predictive models, and data infrastructure improvements. We tailor the deliverable to your specific use case.',
  },
  {
    q: 'Can you build dashboards we can use ongoing?',
    a: 'Yes. We build dashboards that your team can access and use independently — with appropriate training and documentation. We also offer ongoing dashboard maintenance and development as your reporting needs evolve.',
  },
  {
    q: 'How do you handle data privacy and security?',
    a: 'Data security and privacy are built into every engagement. We follow strict data handling protocols, work within your existing security framework, and ensure all data is processed in compliance with applicable regulations.',
  },
];

export function DataAnalyticsClient() {
  return (
    <div className="font-hanken bg-white text-[#111112]">
      <ServicePageHero
        breadcrumb="IBV Services / Research & Analysis"
        title="Data Analytics & Research"
        description="We collect, clean, analyse, and visualise data to surface the patterns and insights that drive smarter decisions across your business."
      />

      <ServiceStatsSection
        stats={stats}
        description="Data is only valuable when it tells you something you can act on. We turn raw business data into structured intelligence — through rigorous analysis, clear visualisation, and reporting built around the decisions that matter most."
      />

      <ServiceFullWidthBand />

      <ServiceCardGrid services={services} />

      <ServiceApproachSection
        sectionLabel="How We Analyse"
        overview="Analytics without structure produces noise. We bring methodological rigour to every data project — defining the right questions, selecting the right methods, and delivering findings in a form that is immediately useful for decision-making."
        items={approachItems}
      />

      <ServiceWhyUsSection
        heading="We make data work for your business"
        paragraphs={[
          'Most businesses have more data than they use effectively. The challenge is not collection — it is structure, analysis, and interpretation. We help organisations close the gap between raw data and real decisions.',
          'Whether you need a one-off analytical project or an ongoing analytics capability, we build the infrastructure and insights that keep your business running on evidence rather than intuition.',
        ]}
      />

      <ServiceFAQSection faqs={faqs} />

      <ServiceContactSection
        heading={"Let's unlock the value\nin your data."}
        services={['Data Analytics & Research', 'Market Research', 'Business Research', 'Business Consultation', 'Digital Solutions']}
      />
    </div>
  );
}
