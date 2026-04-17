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
  { value: '300+', label: 'Content strategies developed for brands across B2B and B2C industries globally.' },
  { value: '4x', label: 'Average increase in organic traffic for clients 12 months after strategy implementation.' },
];

const services: ServiceCardItem[] = [
  {
    title: 'Content Audit',
    description: 'A structured review of your existing content — what is performing, what is not, and what gaps exist relative to your audience and goals.',
    icon: <Icon><path d="M9 11l3 3L22 4"/><path d="M21 12v7a2 2 0 01-2 2H5a2 2 0 01-2-2V5a2 2 0 012-2h11"/></Icon>,
  },
  {
    title: 'Content Strategy Development',
    description: 'Define your content direction — audience personas, content pillars, channel strategy, tone of voice, and measurable objectives aligned to business goals.',
    icon: <Icon><path d="M2 3h6a4 4 0 014 4v14a3 3 0 00-3-3H2z"/><path d="M22 3h-6a4 4 0 00-4 4v14a3 3 0 013-3h7z"/></Icon>,
  },
  {
    title: 'Editorial Planning',
    description: 'A structured content calendar with planned topics, formats, publish dates, and distribution channels — bringing consistency to your content output.',
    icon: <Icon><rect x="3" y="4" width="18" height="18" rx="2"/><line x1="16" y1="2" x2="16" y2="6"/><line x1="8" y1="2" x2="8" y2="6"/><line x1="3" y1="10" x2="21" y2="10"/></Icon>,
  },
  {
    title: 'SEO Content Creation',
    description: 'Written content built to rank — keyword-researched, structurally optimised, and crafted to deliver genuine value to readers while satisfying search intent.',
    icon: <Icon><circle cx="11" cy="11" r="8"/><line x1="21" y1="21" x2="16.65" y2="16.65"/></Icon>,
  },
  {
    title: 'Brand Messaging',
    description: 'Define and document your brand voice, messaging hierarchy, and key statements — ensuring consistency across every piece of content you produce.',
    icon: <Icon><path d="M21 15a2 2 0 01-2 2H7l-4 4V5a2 2 0 012-2h14a2 2 0 012 2z"/></Icon>,
  },
  {
    title: 'Content Performance Analysis',
    description: 'Regular measurement of content effectiveness against defined KPIs — identifying what drives results and where to focus next.',
    icon: <Icon><path d="M18 20V10"/><path d="M12 20V4"/><path d="M6 20v-6"/></Icon>,
  },
];

const approachItems: ApproachItem[] = [
  {
    title: 'Audience-First Strategy',
    description: 'Every content strategy starts with a deep understanding of your audience — not just demographics, but the questions they are asking, the problems they are solving, and the content they actually engage with. Strategy built on this foundation has a purpose every piece of content can serve.',
  },
  {
    title: 'Consistency as a Foundation',
    description: 'Great content marketing is built on sustained consistency, not sporadic bursts. We build strategies and editorial systems that make it practical to produce high-quality content regularly — with clear workflows, responsibilities, and schedules.',
  },
  {
    title: 'Performance-Focused Iteration',
    description: 'We measure everything that matters and use data to inform what comes next. Content strategy is not set-and-forget — it evolves as audience behaviour, search trends, and business priorities change.',
  },
];

const faqs: FAQItem[] = [
  {
    q: 'What does content strategy include?',
    a: 'Content strategy covers defining your brand voice, identifying audience segments, determining what content types to produce, setting objectives, planning distribution channels, and building the systems to produce content consistently. It is the plan behind every piece of content you publish.',
  },
  {
    q: 'How is content strategy different from just writing content?',
    a: 'Writing content without strategy is guessing. Strategy defines what to write, for whom, why, and how success will be measured. It ensures every piece of content serves a specific purpose aligned to your business goals — rather than just filling space.',
  },
  {
    q: 'Do you also produce the content you plan?',
    a: 'Yes. We can both build the strategy and produce the content — written articles, blog posts, website copy, email campaigns, and more. We can also work alongside your internal team to execute the strategy we define together.',
  },
  {
    q: 'How long before content marketing delivers results?',
    a: 'Content marketing builds compound results over time. Early improvements in brand consistency and audience clarity can appear quickly. Measurable growth in organic traffic, lead generation, and brand authority typically takes 3–6 months of consistent execution.',
  },
  {
    q: 'Can you help with both B2B and B2C content?',
    a: 'Yes. We work with both B2B and B2C brands. The approach differs significantly — B2B typically requires longer-form, authority-building content, while B2C often calls for more frequent, emotionally resonant storytelling.',
  },
];

export function ContentStrategyClient() {
  return (
    <div className="font-hanken bg-white text-[#111112]">
      <ServicePageHero
        breadcrumb="IBV Services / Content & Growth"
        title="Content Strategy & Marketing"
        description="We build content strategies that align your brand message with your audience's needs — driving organic growth, brand authority, and measurable results."
      />

      <ServiceStatsSection
        stats={stats}
        description="Content is one of the highest-leverage growth channels available — but only when it is structured, consistent, and built around what your audience actually needs. We bring the strategy and execution to make content marketing work."
      />

      <ServiceFullWidthBand />

      <ServiceCardGrid services={services} />

      <ServiceApproachSection
        sectionLabel="How We Think"
        overview="Our content strategy approach starts with understanding your business, your audience, and the gap between where you are and where you want to be. Every strategic decision is grounded in data, audience insight, and competitive awareness — not guesswork."
        items={approachItems}
      />

      <ServiceWhyUsSection
        heading="We build content that earns attention"
        paragraphs={[
          'The internet is saturated with content. The only way to stand out is to produce content that is genuinely useful, clearly positioned, and consistently delivered. We help brands build the strategy and systems to do exactly that.',
          'Our approach connects content directly to business outcomes — so every article, campaign, and editorial decision has a purpose beyond filling a publishing calendar.',
        ]}
      />

      <ServiceFAQSection faqs={faqs} />

      <ServiceContactSection
        heading={"Let's build your\ncontent strategy."}
        services={['Content Strategy & Marketing', 'Social Media & Content Marketing', 'Business Consultation', 'Research & Analysis', 'Digital Solutions']}
      />
    </div>
  );
}
