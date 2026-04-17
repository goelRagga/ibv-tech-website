'use client';

import { FAQSection } from '@/components/sections/FAQSection';
import { BlogSection } from '@/components/sections/BlogSection';
import { TestimonialsSection } from '@/components/sections/TestimonialsSection';
import { HubPageHeroSection } from '@/components/sections/services/HubPageHeroSection';
import { ThreePillarsSection, type Pillar } from '@/components/sections/services/ThreePillarsSection';
import { ServiceOffering, ServiceOfferingsSection } from '@/components/sections/services/ServiceOfferingsSection';
import { HowWeWorkSection, ProcessStep } from '@/components/sections/services/HowWeWorkSection';

const contentPillars: [Pillar, Pillar, Pillar] = [
  {
    number: '01',
    title: 'Brand Voice',
    desc: 'We help you define and maintain a consistent, recognisable voice across every channel and piece of content.',
    type: 'red',
  },
  {
    number: '02',
    title: 'Audience Engagement',
    desc: 'Content that connects — built around what your audience actually cares about, not what you want to say.',
    type: 'image',
    image: 'https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=800&q=80',
  },
  {
    number: '03',
    title: 'Measurable Growth',
    desc: 'Every content initiative is tied to metrics — reach, engagement, leads, and conversions that matter.',
    type: 'dark',
  },
];

const contentServices: ServiceOffering[] = [
  {
    number: '01.',
    title: 'Content Strategy & Marketing',
    desc: "We build content strategies that align your brand message with your audience's needs — from editorial planning and SEO content to brand messaging and performance analysis.",
    tags: ['Content Audit', 'Editorial Planning', 'SEO Content', 'Brand Messaging', 'Performance Analysis'],
    href: '/services/content-growth/content-strategy',
    image: 'https://images.unsplash.com/photo-1542435503-956c469947f6?w=600&q=80',
  },
  {
    number: '02.',
    title: 'Social Media & Content Marketing',
    desc: 'We manage, grow, and activate social media channels through platform-native content, community engagement, paid social, and data-driven optimisation.',
    tags: ['Platform Strategy', 'Content Creation', 'Community Management', 'Paid Social', 'Analytics'],
    href: '/services/content-growth/social-media',
    image: 'https://images.unsplash.com/photo-1611162617213-7d7a39e9b1d7?w=600&q=80',
  },
];

const contentProcessSteps: ProcessStep[] = [
  { number: '01', title: 'Audit', desc: 'We assess your current content, channels, and brand positioning to identify gaps and opportunities.' },
  { number: '02', title: 'Plan', desc: 'We build a content strategy and editorial calendar aligned to your goals, audience, and key platforms.' },
  { number: '03', title: 'Create', desc: 'We produce content — written, visual, or video — that is on-brand, audience-relevant, and purpose-built.' },
  { number: '04', title: 'Distribute', desc: 'We publish and promote content across the right channels at the right time for maximum reach.' },
  { number: '05', title: 'Measure & Optimise', desc: 'We track performance, identify what works, and continuously refine the approach based on data.' },
];

const contentFaqs = [
  {
    q: 'What does content strategy actually involve?',
    a: 'Content strategy covers defining your brand voice, identifying your audience, planning content types and topics, building an editorial calendar, and aligning content with business goals such as lead generation, brand awareness, or SEO.',
  },
  {
    q: 'Do you create content or just plan it?',
    a: 'Both. We handle strategy, planning, and execution. We can create written content, social media posts, email campaigns, and more — or work alongside your existing team to execute the strategy we build together.',
  },
  {
    q: 'How do you measure the success of content?',
    a: 'We track metrics aligned to your goals — reach, engagement rates, follower growth, website traffic from content, lead conversions, and more. Reporting is tied to outcomes, not just vanity metrics.',
  },
  {
    q: 'Which social platforms do you work with?',
    a: 'We work across all major platforms including Instagram, LinkedIn, X (Twitter), Facebook, TikTok, and YouTube. Platform selection is always driven by where your audience is most active.',
  },
  {
    q: 'How long before we see results from content marketing?',
    a: 'Content marketing builds compound results over time. Early wins (increased engagement, improved brand consistency) can appear within weeks. Meaningful growth in reach and leads typically takes 3–6 months of consistent effort.',
  },
];

export function ContentGrowthHubClient() {
  return (
    <>
      <HubPageHeroSection
        eyebrow="Growth Through Content"
        tagline1="Content That Connects."
        tagline2="Strategy That Converts."
        headlineTitle="Content & Growth"
        description="Growth doesn't happen by accident. We build content strategies and growth frameworks that put the right message in front of the right audience at the right time."
        backgroundImage="https://images.unsplash.com/photo-1552664730-d307ca884978?w=1600&q=80"
      />

      <ThreePillarsSection
        labelPrefix="Our"
        labelHighlight="Approach"
        paragraph={
          <>
            Content without strategy is noise. Strategy without content is invisible.{' '}
            <strong>IBV Technologies</strong> bridges both — building content ecosystems that grow
            your brand, engage your audience, and convert attention into measurable business outcomes.
          </>
        }
        pillars={contentPillars}
      />

      <ServiceOfferingsSection
        headingHighlight="content & growth services"
        headingSuffix="designed to build your brand and drive sustained, measurable growth"
        services={contentServices}
      />

      <HowWeWorkSection
        bannerImage="https://images.unsplash.com/photo-1600880292203-757bb62b4baf?w=1400&q=80"
        eyebrowLabel="HOW WE"
        eyebrowHighlight="WORK"
        heading="We audit before we act, and measure before we scale."
        ctaLabel="Get In Touch"
        ctaHref="/contact"
        sideImage="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=600&q=80"
        steps={contentProcessSteps}
        defaultOpenStep="02"
      />

      <BlogSection />
      <TestimonialsSection />
      <FAQSection faqs={contentFaqs} />
    </>
  );
}
