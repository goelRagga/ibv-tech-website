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
  { value: '50M+', label: 'Combined social media impressions generated for clients across managed accounts.' },
  { value: '8x', label: 'Average increase in engagement rate within 90 days of taking over account management.' },
];

const services: ServiceCardItem[] = [
  {
    title: 'Platform Strategy',
    description: 'Define which platforms to prioritise, how to position your brand on each, and what content approach fits each platform\'s unique audience and format.',
    icon: <Icon><circle cx="12" cy="12" r="10"/><line x1="2" y1="12" x2="22" y2="12"/><path d="M12 2a15.3 15.3 0 014 10 15.3 15.3 0 01-4 10 15.3 15.3 0 01-4-10 15.3 15.3 0 014-10z"/></Icon>,
  },
  {
    title: 'Content Creation',
    description: 'Platform-native content built for engagement — written posts, graphics, short-form video concepts, and stories designed to perform in the feed.',
    icon: <Icon><rect x="3" y="3" width="18" height="18" rx="2"/><circle cx="8.5" cy="8.5" r="1.5"/><polyline points="21 15 16 10 5 21"/></Icon>,
  },
  {
    title: 'Community Management',
    description: 'Active management of comments, messages, and mentions — building genuine relationships and maintaining brand voice across every interaction.',
    icon: <Icon><path d="M17 21v-2a4 4 0 00-4-4H5a4 4 0 00-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M23 21v-2a4 4 0 00-3-3.87"/><path d="M16 3.13a4 4 0 010 7.75"/></Icon>,
  },
  {
    title: 'Paid Social Advertising',
    description: 'Strategic paid social campaigns across Instagram, LinkedIn, Facebook, and TikTok — targeting the right audience, optimised for conversions.',
    icon: <Icon><path d="M12 2L2 7l10 5 10-5-10-5z"/><path d="M2 17l10 5 10-5"/><path d="M2 12l10 5 10-5"/></Icon>,
  },
  {
    title: 'Influencer Marketing',
    description: 'Identify, vet, and manage influencer partnerships that align with your brand values and reach your target audience authentically.',
    icon: <Icon><circle cx="12" cy="12" r="10"/><path d="M8 14s1.5 2 4 2 4-2 4-2"/><line x1="9" y1="9" x2="9.01" y2="9"/><line x1="15" y1="9" x2="15.01" y2="9"/></Icon>,
  },
  {
    title: 'Analytics & Reporting',
    description: 'Monthly performance reporting across all managed channels — tracking the metrics that matter and translating data into clear strategic recommendations.',
    icon: <Icon><path d="M2 20h20M6 20V10M12 20V4M18 20v-7"/></Icon>,
  },
];

const approachItems: ApproachItem[] = [
  {
    title: 'Platform-Native Content',
    description: 'Content that works on Instagram rarely works on LinkedIn. We create content that is native to each platform — in format, tone, length, and visual style. This is what drives real engagement rather than just publishing the same post everywhere.',
  },
  {
    title: 'Community-Led Growth',
    description: 'Follower counts without community are vanity. We focus on building genuine audiences — people who engage, share, and convert. This means active community management, response strategies, and content that invites participation rather than just broadcasting.',
  },
  {
    title: 'Data-Driven Optimisation',
    description: 'We track what matters, not what is easy to measure. Every content decision is informed by performance data — with regular reporting and strategic adjustments to ensure the approach keeps improving month over month.',
  },
];

const faqs: FAQItem[] = [
  {
    q: 'Which social media platforms do you manage?',
    a: 'We manage Instagram, LinkedIn, Facebook, X (Twitter), TikTok, and YouTube. Platform selection is always driven by where your target audience is most active and where your brand has the most to gain.',
  },
  {
    q: 'Do you create the content or do we need to provide it?',
    a: 'We handle content creation end-to-end — copywriting, graphic design direction, and video content concepts. We work with your brand guidelines and input from your team to ensure content is on-brand and accurate.',
  },
  {
    q: 'How often do you post on our behalf?',
    a: 'Posting frequency is agreed as part of your engagement. We typically recommend 3–5 posts per week per platform depending on the channel and audience behaviour, with daily stories or short-form content where relevant.',
  },
  {
    q: 'Can you run paid social campaigns alongside organic management?',
    a: 'Yes. We manage both organic social strategy and paid social advertising. Combining both is typically the most effective approach — using organic content to build community and paid campaigns to drive reach and conversions.',
  },
  {
    q: 'How do you measure success on social media?',
    a: 'We align metrics to your specific business goals. This might include follower growth, engagement rate, reach, website clicks, lead form completions, or ad-driven conversions — not just likes and impressions.',
  },
];

export function SocialMediaClient() {
  return (
    <div className="font-hanken bg-white text-[#111112]">
      <ServicePageHero
        breadcrumb="IBV Services / Content & Growth"
        title="Social Media & Content Marketing"
        description="We manage, grow, and activate your social presence through platform-native content, community engagement, and data-driven optimisation."
      />

      <ServiceStatsSection
        stats={stats}
        description="Social media is one of the most direct channels to your audience — but it requires consistency, platform expertise, and genuine community thinking. We manage your social presence with the discipline and creativity it takes to build a brand people actually follow."
      />

      <ServiceFullWidthBand />

      <ServiceCardGrid services={services} />

      <ServiceApproachSection
        sectionLabel="How We Work"
        overview="Social media management is not just scheduling posts. We approach it as an active, evolving brand channel — with strategy, original content, community engagement, and continuous performance improvement built in from the start."
        items={approachItems}
      />

      <ServiceWhyUsSection
        heading="We build social presence with purpose"
        paragraphs={[
          'Many brands are on social media without a clear reason to be. We help you define what your social presence is for — whether that is brand awareness, lead generation, community building, or customer retention — and build everything around that purpose.',
          'The result is a social media presence that works as a genuine business channel, not just a digital obligation.',
        ]}
      />

      <ServiceFAQSection faqs={faqs} />

      <ServiceContactSection
        heading={"Let's grow your\nsocial presence."}
        services={['Social Media & Content Marketing', 'Content Strategy & Marketing', 'Business Consultation', 'Research & Analysis', 'Digital Solutions']}
      />
    </div>
  );
}
