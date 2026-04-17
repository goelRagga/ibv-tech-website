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
  { value: '500+', label: 'Websites and web applications built across industries and use cases.' },
  { value: '<3s', label: 'Average load time target — because performance is not optional, it is the baseline.' },
];

const services: ServiceCardItem[] = [
  {
    title: 'Custom Web Design',
    description: 'Bespoke visual design crafted around your brand, audience, and conversion goals — no templates, no compromise.',
    icon: <Icon><rect x="3" y="3" width="18" height="18" rx="2"/><path d="M3 9h18M9 21V9"/></Icon>,
  },
  {
    title: 'Frontend Development',
    description: 'Clean, performant frontend code built with modern frameworks — responsive, accessible, and pixel-perfect.',
    icon: <Icon><polyline points="16 18 22 12 16 6"/><polyline points="8 6 2 12 8 18"/></Icon>,
  },
  {
    title: 'Backend Development',
    description: 'Robust server-side architecture, APIs, and database design that powers your web product reliably at any scale.',
    icon: <Icon><ellipse cx="12" cy="5" rx="9" ry="3"/><path d="M21 12c0 1.66-4 3-9 3s-9-1.34-9-3"/><path d="M3 5v14c0 1.66 4 3 9 3s9-1.34 9-3V5"/></Icon>,
  },
  {
    title: 'CMS Integration',
    description: 'Connect your website to the right content management system — from headless CMS to WordPress — for easy ongoing content control.',
    icon: <Icon><path d="M14 2H6a2 2 0 00-2 2v16a2 2 0 002 2h12a2 2 0 002-2V8z"/><polyline points="14 2 14 8 20 8"/><line x1="16" y1="13" x2="8" y2="13"/><line x1="16" y1="17" x2="8" y2="17"/></Icon>,
  },
  {
    title: 'E-commerce Development',
    description: 'End-to-end e-commerce solutions built for conversion — product management, payment integration, and seamless checkout flows.',
    icon: <Icon><circle cx="9" cy="21" r="1"/><circle cx="20" cy="21" r="1"/><path d="M1 1h4l2.68 13.39a2 2 0 002 1.61h9.72a2 2 0 002-1.61L23 6H6"/></Icon>,
  },
  {
    title: 'Performance Optimisation',
    description: 'Audit and improve existing websites for speed, Core Web Vitals, SEO technical foundations, and overall site health.',
    icon: <Icon><path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z"/></Icon>,
  },
];

const approachItems: ApproachItem[] = [
  {
    title: 'Design-Led Development',
    description: 'We start every project with design — not just visuals, but information architecture, user flow, and interaction logic. Code comes after clarity, not before. This prevents expensive rework and ensures the final product feels intentional throughout.',
  },
  {
    title: 'Performance-First Engineering',
    description: 'Speed and reliability are engineering decisions, not afterthoughts. We build for performance from the first line of code — optimising assets, minimising render-blocking resources, and building for Core Web Vitals from the ground up.',
  },
  {
    title: 'Maintainable, Documented Code',
    description: 'We write clean, well-structured code that your team can understand, extend, and maintain. No black boxes, no lock-in. Every project is handed over with clear documentation and a structured codebase.',
  },
];

const faqs: FAQItem[] = [
  {
    q: 'What types of websites do you build?',
    a: 'We build all types of web products — marketing sites, landing pages, corporate websites, web applications, SaaS platforms, e-commerce stores, and custom portals. Each is designed and engineered specifically to your requirements.',
  },
  {
    q: 'Do you use templates or build from scratch?',
    a: 'We build from scratch. Every project starts with a custom design and clean codebase tailored to your brand, goals, and performance requirements. We do not use off-the-shelf templates.',
  },
  {
    q: 'What technology stack do you work with?',
    a: 'We work with modern web technologies including React, Next.js, Node.js, and various headless CMS platforms. Stack choices are always guided by what is best for your specific product, not what is easiest for us.',
  },
  {
    q: 'Will my website be mobile-friendly?',
    a: 'All websites we build are fully responsive by default — designed and tested across all device sizes, including mobile, tablet, and desktop.',
  },
  {
    q: 'How long does web development typically take?',
    a: 'A standard marketing website typically takes 4–8 weeks. Complex web applications or e-commerce platforms range from 3–6 months depending on features, integrations, and scope.',
  },
];

export function WebDevelopmentClient() {
  return (
    <div className="font-hanken bg-white text-[#111112]">
      <ServicePageHero
        breadcrumb="IBV Services / Digital Solutions"
        title="Web Development"
        description="We design and develop high-performance websites and web applications built for speed, scalability, and seamless user experience."
      />

      <ServiceStatsSection
        stats={stats}
        description="Your website is often the first interaction a customer has with your business. We build web products that make that first impression count — combining sharp design, clean engineering, and technical performance into a single, cohesive product."
      />

      <ServiceFullWidthBand />

      <ServiceCardGrid services={services} />

      <ServiceApproachSection
        sectionLabel="How We Build"
        overview="We treat every website and web application as a product — with a defined purpose, a specific audience, and measurable success criteria. Every decision from design to deployment is made in service of those goals."
        items={approachItems}
      />

      <ServiceWhyUsSection
        heading="We build web products that perform"
        paragraphs={[
          'Most web development failures are not technical — they are the result of misaligned expectations, poor planning, and a disconnect between design and engineering. We close that gap by working as a single, integrated team across design and development.',
          'The result is a product that looks right, works right, and scales right — built to last well beyond launch day.',
        ]}
      />

      <ServiceFAQSection faqs={faqs} />

      <ServiceContactSection
        heading={"Let's build your\nnext web product."}
        services={['Web Development', 'App Development', 'Business Consultation', 'Research & Analysis', 'Content & Growth']}
      />
    </div>
  );
}
