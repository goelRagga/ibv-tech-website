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
    label: 'Applications define how users interact with your business.',
  },
  {
    value: '90%',
    label: 'Of user engagement today happens through mobile and web applications.',
  },
];

const services: any[] = [
  {
    title: 'Custom Development',
    description:
      'We create mobile applications on iOS or Android based on business needs, ensuring usability, performance, and alignment with your goals.',
    icon: (
      <Icon>
        <rect x="5" y="2" width="14" height="20" rx="2" />
        <line x1="12" y1="18" x2="12.01" y2="18" />
      </Icon>
    ),
  },
  {
    title: 'Cross-Platform Applications',
    description:
      'Development of cross-platform applications for wider accessibility, ensuring consistent user experience across devices.',
    icon: (
      <Icon>
        <rect x="2" y="3" width="20" height="14" rx="2" />
        <line x1="8" y1="21" x2="16" y2="21" />
        <line x1="12" y1="17" x2="12" y2="21" />
      </Icon>
    ),
  },
  {
    title: 'Enterprise Applications',
    description:
      'Building multifaceted enterprise application solutions designed to support complex workflows, operations, and large-scale business.',
    icon: (
      <Icon>
        <rect x="2" y="7" width="20" height="14" rx="2" />
        <path d="M16 7V5a2 2 0 00-2-2h-4a2 2 0 00-2 2v2" />
      </Icon>
    ),
  },
  {
    title: 'UI/UX Design',
    description:
      'Applications designed to deliver excellent user experiences, focusing on intuitive interfaces and interactions.',
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
    title: 'End-to-End Development',
    description:
      'We collaborate at all stages such as ideation and wireframing, development, testing, deployment, and support.',
    icon: (
      <Icon>
        <polyline points="22 7 13.5 15.5 8.5 10.5 2 17" />
        <polyline points="16 7 22 7 22 13" />
      </Icon>
    ),
  },
  {
    title: 'Security and Scalability',
    description:
      'Designed for performance, security, and scalability, ensuring stability as your user base grows.',
    icon: (
      <Icon>
        <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
      </Icon>
    ),
  },
];

const approachItems: ApproachItem[] = [
  {
    title: 'Lifecycle Ownership',
    description:
      'We work across the entire lifecycle, ensuring consistency from idea to deployment and beyond, which helps maintain alignment, reduce gaps between stages, and ensure the final application is built with clarity and continuity.',
  },
  {
    title: 'User-Centric Development',
    description:
      'Our approach to developing the application is user centric and therefore all interfaces are user friendly, features are functional and interactions are all really needed by the end user, ensuring the application is intuitive, relevant, and easy to adopt.',
  },
  {
    title: 'Impact-Driven Thinking',
    description:
      'From Concept to Code. From Code to Impact. Every application is built with a clear purpose and measurable impact, ensuring that what is developed not only functions correctly but also contributes directly to business outcomes and user value.',
  },
];

const faqs: FAQItem[] = [
  {
    q: 'What does application development involve?',
    a: 'It includes designing, building, testing, and deploying applications based on business requirements. This ensures the application is functional, reliable, and aligned with user and business needs.',
  },
  {
    q: 'Do you develop both mobile and web applications?',
    a: 'Yes. We develop mobile, web, and cross-platform applications. This allows flexibility in how your application is accessed and used across different devices.',
  },
  {
    q: 'Do you support the full lifecycle?',
    a: 'Yes. From ideation and wireframing to deployment and support. This ensures continuity, better coordination, and smoother execution across all stages.',
  },
  {
    q: 'Are the applications scalable?',
    a: 'Yes. Applications are built to be performance-driven, secure, and scalable. This ensures they can handle growth and increasing user demand over time.',
  },
  {
    q: 'Do you focus on user experience?',
    a: 'Yes. The approach is user centric to ensure usability and effectiveness. This helps improve adoption and overall interaction with the application.',
  },
];

export function AppDevelopmentClient() {
  return (
    <div className="font-hanken bg-white text-[#111112]">

      <IndividualPageHeroSection
        eyebrow="Digital Solutions"
        tagline1="Built for Real Problems."
        tagline2="Designed for Real Users."
        headlineTitle="App Development"
        description="We develop applications that are built to solve real problems, deliver strong user experiences, and scale with your growth."
        backgroundImage="https://res.cloudinary.com/dm8jtnzdi/image/upload/q_auto/f_auto/v1776713879/aPP_D_BG_eazpj9.png"
      />

      <ServiceStatsSection
        stats={stats}
        description="The business of the present day runs on mobile and web applications. We build and create application customisation to address real-world issues, design excellent user experiences, and expand along with your expanding goals."
      />

      <ServiceFullWidthBand  imageSrc='https://res.cloudinary.com/dm8jtnzdi/image/upload/q_auto/f_auto/v1776713878/APP_D_BANNER_rae8mf.png'/>

      <ServiceCardGrid services={services} />

      <ServiceApproachSection
        sectionLabel="How We Think"
        overview="Our approach focuses on building applications that work in real-world conditions. Every decision is aligned to usability, performance, and scalability, ensuring the application remains stable, relevant, and effective as your business grows."
        items={approachItems}
      />

      <ServiceWhyUsSection
        heading="We solve real business problems"
        paragraphs={[
          "We don't approach application development as a technical exercise alone. Every application directly influences how users interact with and perceive your business. We take the time to understand your goals, workflows, and user needs before recommending any solution.",
          "This ensures that every decision is grounded in your reality and aligned with your growth stage. It also helps us prioritise what matters most at each phase, avoiding unnecessary complexity and keeping development focused and effective.",
        ]}
        imageSrc="https://res.cloudinary.com/dm8jtnzdi/image/upload/q_auto/f_auto/v1776713878/aPP-D_whywechoose_jaxcep.png"
      />

      <FAQSection faqs={faqs} />

      <ContactSection />

    </div>
  );
}
