'use client';

import { FAQSection } from '@/components/sections/FAQSection';
import { BlogSection } from '@/components/sections/BlogSection';
import { TestimonialsSection } from '@/components/sections/TestimonialsSection';
import { HubPageHeroSection } from '@/components/sections/services/HubPageHeroSection';
import { ThreePillarsSection, type Pillar } from '@/components/sections/services/ThreePillarsSection';
import { ServiceOffering, ServiceOfferingsSection } from '@/components/sections/services/ServiceOfferingsSection';
import { HowWeWorkSection, ProcessStep } from '@/components/sections/services/HowWeWorkSection';

const digitalPillars: [Pillar, Pillar, Pillar] = [
  {
    number: '01',
    title: 'Custom Development',
    desc: 'Create tailored websites and applications aligned with your business needs.',
    type: 'red',
  },
  {
    number: '02',
    title: 'User Experience',
    desc: 'Design intuitive, fast, and engaging digital experiences for your users.',
    type: 'image',
    image: 'https://res.cloudinary.com/dm8jtnzdi/image/upload/q_auto/f_auto/v1776457133/DG_eishfk.png',
  },
  {
    number: '03',
    title: 'Scalable Systems',
    desc: 'Develop platforms that grow with your business and evolving requirements.',
    type: 'dark',
  },
];

const digitalServices: ServiceOffering[] = [
  {
    number: '01.',
    title: 'Web Development',
    desc: 'We create custom websites, landing pages, and e-commerce platforms designed to convert visitors into customers and support business growth.',
    tags: ['CUSTOM WEBSITES', 'ECOMMERCE', 'RESPONSIVE DESIGN', 'LANDING PAGES', "PERFORMANCE"],
    href: '/services/digital-solutions/web-development',
    image: 'https://res.cloudinary.com/dm8jtnzdi/image/upload/q_auto/f_auto/v1776457406/WEB_D_cp5br7.png',
  },
  {
    number: '02.',
    title: 'Application Development',
    desc: 'We build scalable mobile and web applications designed to solve real business problems, focusing on performance, usability, and long-term reliability across platforms and user environments.',
    tags: ['MOBILE APPS', 'WEB APPS', 'CROSS PLATFORM', 'UI/UX', 'SCALABILITY'],
    href: '/services/digital-solutions/app-development',
    image: 'https://res.cloudinary.com/dm8jtnzdi/image/upload/q_auto/f_auto/v1776457403/App_Dev_mw2nsv.png',
  },
];

const digitalProcessSteps: ProcessStep[] = [
  { number: '01', title: 'Discover', desc: 'We start by understanding your product goals, users, and technical constraints.' },
  { number: '02', title: 'Define', desc: 'We define the scope, architecture, and feature roadmap before writing a single line of code.' },
  { number: '03', title: 'Design', desc: 'We craft the visual and interaction design grounded in real user behaviour and brand identity.' },
  { number: '04', title: 'Develop', desc: 'We build with clean, well-structured code following best practices for performance and maintainability.' },
  { number: '05', title: 'Deploy & Maintain', desc: 'We launch, monitor, and iteratively improve the product as your business evolves.' },
];

const digitalFaqs = [
  {
    q: 'What types of digital products do you build?',
    a: 'We build websites, web applications, and mobile apps across industries. This includes marketing sites, e-commerce platforms, SaaS dashboards, iOS and Android apps, and cross-platform solutions.',
  },
  {
    q: 'How long does a typical web or app project take?',
    a: 'Timelines depend on scope. A standard website can take 4–8 weeks. Complex web applications or mobile apps typically range from 3–6 months depending on features and integrations.',
  },
  {
    q: 'Do you handle design as well as development?',
    a: 'Yes. We offer end-to-end digital product development — from UI/UX design through to full frontend and backend development, ensuring design and code are aligned from day one.',
  },
  {
    q: 'Will my product be optimised for performance and SEO?',
    a: 'Absolutely. Performance and SEO best practices are built into our development process, not treated as an afterthought. We ensure fast load times, clean markup, and search-friendly architecture.',
  },
  {
    q: 'Do you provide post-launch support and maintenance?',
    a: 'Yes. We offer ongoing support, updates, and maintenance to ensure your digital product continues to perform as your business and user base grows.',
  },
];

export function DigitalSolutionsHubClient() {
  return (
    <>
      <HubPageHeroSection
        eyebrow="Our Capabilities"
        tagline1="Build What Works."
        tagline2="Scale What Wins."
        headlineTitle="Digital Solutions"
        description="From websites to mobile applications, we design and develop digital products that are fast, reliable, and built to scale with your business."
        backgroundImage="https://res.cloudinary.com/dm8jtnzdi/image/upload/q_auto/f_auto/v1776452451/DIGITAL_SOLUTIONS_nvlkfa.png"
      />

      <ThreePillarsSection
        labelPrefix="Our"
        labelHighlight="Capabilities"
        paragraph={
          <>
            In an increasingly digital world, the difference between a product that succeeds and one
            that doesn&apos;t often comes down to execution.{' '}
            <strong>IBV Technologies</strong> builds digital products that are technically sound,
            visually sharp, and architected for the long term.
          </>
        }
        pillars={digitalPillars}
      />

      <ServiceOfferingsSection
        headingHighlight="digital solutions"
        headingSuffix="designed to build, launch, and grow your digital presence"
        services={digitalServices}
      />

      <HowWeWorkSection
        bannerImage="https://res.cloudinary.com/dm8jtnzdi/image/upload/q_auto/f_auto/v1776457406/Digutal_banner_aa34xl.png"
        eyebrowLabel="HOW WE"
        eyebrowHighlight="WORK"
        heading="We define what to build before we begin building it."
        ctaLabel="Get In Touch"
        ctaHref="/contact"
        sideImage="https://res.cloudinary.com/dm8jtnzdi/image/upload/q_auto/f_auto/v1776457404/Digu_work_side_ohngmh.png"
        steps={digitalProcessSteps}
        defaultOpenStep="02"
      />

      <BlogSection />
      <TestimonialsSection />
      <FAQSection faqs={digitalFaqs} />
    </>
  );
}
