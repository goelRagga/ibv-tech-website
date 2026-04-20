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
    value: '50K+',
    label: 'Content pieces created to support brand visibility and engagement.',
  },
  {
    value: '80%',
    label: 'Of users engage with businesses through content before making decisions.',
  },
];

const services: any[] = [
  {
    title: 'Website Copywriting',
    description:
      'Our experts write quality content for website pages designed to communicate clearly and convert users.',
    icon: (
      <Icon>
        <rect x="3" y="3" width="18" height="18" rx="2" />
        <path d="M3 9h18M9 21V9" />
      </Icon>
    ),
  },
  {
    title: 'Blog & Article Writing',
    description:
      'Our professional content writing experts create blog articles that inform, engage, and improve search visibility.',
    icon: (
      <Icon>
        <path d="M2 3h6a4 4 0 014 4v14a3 3 0 00-3-3H2z" />
        <path d="M22 3h-6a4 4 0 00-4 4v14a3 3 0 013-3h7z" />
      </Icon>
    ),
  },
  {
    title: 'Marketing Content',
    description:
      'Our professional content writing experts develop marketing books, reports, and white papers for brand communication.',
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
    title: 'Social Media Content',
    description:
      'Our professional content writing experts create social media content to maintain consistency and engagement.',
    icon: (
      <Icon>
        <path d="M21 15a2 2 0 01-2 2H7l-4 4V5a2 2 0 012-2h14a2 2 0 012 2z" />
      </Icon>
    ),
  },
  {
    title: 'Brand Messaging',
    description:
      'All content is based on your brand, your audience needs and your marketing goals to ensure consistency.',
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
    title: 'SEO Content Writing',
    description:
      'We apply search engine optimal characteristics to ensure content appeals to both readers and search engines.',
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
    title: 'Strategic Writing',
    description:
      'We know that great content does not only consist of writing it well, it means writing strategically. This ensures that every piece of content has a clear purpose and contributes to business goals.',
  },
  {
    title: 'Audience Focus',
    description:
      'All the content we produce is based on your brand, your audience needs and your marketing goals. This helps create content that is relevant, consistent, and aligned with your communication.',
  },
  {
    title: 'Performance Driven',
    description:
      'We apply creativity and search engine optimal characteristics to make sure that the content of your article is appealing to the readers and is also appealing to the search engine.',
  },
];

const whyUsItems: any[] = [

   'The voice of your brand is the content and IBV Technologies makes the voice clear, compelling and consistent. A consistent voice helps build recognition, trust, and clarity in how your brand is perceived, ensuring every interaction strengthens your overall positioning.',
  
 
   'We know that great content does not only consist of writing it well, it means writing strategically. By combining creativity with structured thinking, we create content that delivers both engagement and measurable outcomes, bridging the gap between communication and conversion.',
  
 
];

const faqs: FAQItem[] = [
  {
    q: 'What does content strategy and writing include?',
    a: 'It includes planning, creating, and optimizing content across formats such as website copy, blogs, and marketing materials to support business goals. This ensures that all content is aligned with your brand and contributes to visibility and engagement.',
  },
  {
    q: 'How does content help my business grow?',
    a: 'Content helps communicate your value, attract the right audience, and build trust over time. It also supports SEO, improves engagement, and drives conversions across different channels.',
  },
  {
    q: 'Do you create SEO-friendly content?',
    a: 'Yes, we apply search engine optimal characteristics to ensure content performs well on search engines. This helps improve discoverability while maintaining readability and engagement.',
  },
  {
    q: 'Can you maintain a consistent brand voice?',
    a: 'Yes, all content is aligned with your brand, audience, and goals to ensure consistency. This helps create a unified communication style across all platforms and content formats.',
  },
  {
    q: 'Do you handle both strategy and execution?',
    a: 'Yes, we support both content strategy and writing to ensure alignment from planning to execution. This ensures that content is structured, purposeful, and delivers measurable outcomes.',
  },
];

export function ContentStrategyClient() {
  return (
    <div className="font-hanken bg-white text-[#111112]">

      <IndividualPageHeroSection
        eyebrow="Content & Growth"
        tagline1="Words Have Power."
        tagline2="We Use Them With Purpose."
        headlineTitle="Content Strategy"
        description="The voice of your brand is the content and IBV Technologies makes the voice clear, compelling and consistent."
        backgroundImage="https://images.unsplash.com/photo-1552664730-d307ca884978?w=1600&q=80"
      />

      <ServiceStatsSection
        stats={stats}
        description="The voice of your brand is the content and IBV Technologies makes the voice clear, compelling and consistent. Our professional content writing experts write quality content in any format and platform."
      />

      <ServiceFullWidthBand imageSrc='https://res.cloudinary.com/dm8jtnzdi/image/upload/q_auto/f_auto/v1776715008/CS_ABNNER_bu1vnb.png'/>

      <ServiceCardGrid services={services} />

      <ServiceApproachSection
        sectionLabel="How We Think"
        overview="We know that great content does not only consist of writing it well, it means writing strategically. All the content we produce is based on your brand, your audience needs and your marketing goals. We apply creativity and search engine optimal characteristics to make sure that the content is appealing to both readers and search engines."
        items={approachItems}
      />

      <ServiceWhyUsSection
        heading="We build a consistent brand voice"
        paragraphs={whyUsItems}
        imageSrc='https://res.cloudinary.com/dm8jtnzdi/image/upload/q_auto/f_auto/v1776715008/Cs_RECT_vd5ga9.png'
      />

      <FAQSection faqs={faqs} />

      <ContactSection />

    </div>
  );
}
