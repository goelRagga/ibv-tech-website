"use client";

import type { ReactNode } from "react";
import { IndividualPageHeroSection } from "@/components/sections/services/IndividualPageHeroSection";
import { ServiceStatsSection } from "@/components/sections/services/ServiceStatsSection";
import {
  ServiceCardGrid,
  ServiceFullWidthBand,
} from "@/components/sections/services/Servicebandandcardgrid";
import { ServiceApproachSection } from "@/components/sections/services/ServiceApproachSection";
import { ServiceWhyUsSection } from "@/components/sections/services/ServiceWhyUsSection";
import { FAQSection } from "@/components/sections/FAQSection";
import { ContactSection } from "@/components/sections/ContactSection";
import type { ApproachItem } from "@/components/sections/services/ServiceApproachSection";
import type { FAQItem } from "@/components/sections/FAQSection";
import type { ServiceStat } from "@/components/sections/services/ServiceStatsSection";
import type { WhyUsItem } from "@/components/sections/services/ServiceWhyUsSection";

function Icon({ children }: { children: ReactNode }) {
  return (
    <svg
      width="22"
      height="22"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.5"
    >
      {children}
    </svg>
  );
}

const stats: ServiceStat[] = [
  {
    value: "10K+",
    label:
      "Users interact with your website before making a business decision.",
  },
  {
    value: "95%",
    label: "Of first impressions are influenced by your website experience.",
  },
];

const services: any[] = [
  {
    title: "Custom Website",
    description:
      "Each site that we design is specific to your brand name, your purposes, and your business interests.",
    icon: (
      <Icon>
        <rect x="3" y="3" width="18" height="18" rx="2" />
        <path d="M3 9h18M9 21V9" />
      </Icon>
    ),
  },
  {
    title: "E-commerce Solutions",
    description:
      "We develop e-commerce platforms designed to support business growth and customer engagement.",
    icon: (
      <Icon>
        <circle cx="9" cy="21" r="1" />
        <circle cx="20" cy="21" r="1" />
        <path d="M1 1h4l2.68 13.39a2 2 0 002 1.61h9.72a2 2 0 002-1.61L23 6H6" />
      </Icon>
    ),
  },
  {
    title: "Website Development",
    description:
      "Development of websites that support business operations and digital experiences.",
    icon: (
      <Icon>
        <polyline points="16 18 22 12 16 6" />
        <polyline points="8 6 2 12 8 18" />
      </Icon>
    ),
  },
  {
    title: "CMS Integration",
    description:
      "Integration to CMS for easier content management, updates, and flexibility.",
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
    title: "Performance Optimisation",
    description:
      "Mobile-first philosophy, lightning-fast loading, and optimisation of performance.",
    icon: (
      <Icon>
        <path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z" />
      </Icon>
    ),
  },
  {
    title: "Code Quality",
    description:
      "We develop clean codes and architecture that is easy to optimise to make your site look and work as potent as it is strong.",
    icon: (
      <Icon>
        <path d="M9 11l3 3L22 4" />
        <path d="M21 12v7a2 2 0 01-2 2H5a2 2 0 01-2-2V5a2 2 0 012-2h11" />
      </Icon>
    ),
  },
];

const approachItems: ApproachItem[] = [
  {
    title: "Digital Experience First",
    description:
      "Each site that we design is specific to your brand name, your purposes, and your business interests, ensuring the website reflects your identity while delivering a clear, engaging and purposeful user experience across platforms.",
  },
  {
    title: "Mobile-First Approach",
    description:
      "We follow a mobile-first philosophy to ensure seamless performance across devices and platforms, making sure your website remains accessible, responsive, and consistent for users across different screen sizes and environments.",
  },
  {
    title: "Performance and Scalability",
    description:
      "We focus on building fast and optimised platforms that perform consistently as your business grows, ensuring reliability, smooth user experience, and the ability to handle evolving requirements.",
  },
];

const whyUsItems: WhyUsItem[] = [
  {
    heading: "We build with business context",
    body: `We don't approach websites as design projects alone. Your website directly influences how users perceive and engage with your business. Each site is specific to your brand, your purposes, and your interests — built with full understanding of the role it plays.`,
  },
  {
    heading: "We focus on what drives user action",
    body: "A website should do more than exist. It should guide users, create clarity, and drive meaningful action. We build sites that are not just visually stunning but strategically developed to turn visitors into customers and users into advocates.",
  },
  {
    heading: "We prioritise performance and usability",
    body: "Performance is built into the foundation, not added later. We develop with a mobile-first philosophy, lightning-fast loading, and clean architecture that is easy to optimise — reducing friction and improving user experience at every stage.",
  },
  {
    heading: "We build digital experiences, not just websites",
    body: "Your website is often the first interaction users have with your business. We focus on how users navigate, interact, and engage — making the experience clear, purposeful, and effective rather than simply functional.",
  },
];

const faqs: FAQItem[] = [
  {
    q: "What does web development typically involve?",
    a: "It includes designing, building, and optimising websites or web applications that support business goals and user experience. This also covers structuring content, improving performance, and ensuring the platform works seamlessly across devices.",
  },
  {
    q: "Do you build custom websites?",
    a: "Yes. Each site is built specific to your brand name, your purposes, and your business interests. This ensures the website reflects your identity and supports your unique requirements while allowing flexibility for future changes.",
  },
  {
    q: "Do you offer e-commerce development?",
    a: "Yes. We develop e-commerce solutions designed for performance and scalability. This includes building platforms that support product management, user journeys, and smooth transactions.",
  },
  {
    q: "Will the website be optimised for performance?",
    a: "Yes. We focus on mobile-first development, fast loading, and clean architecture. This ensures the website performs reliably and delivers a consistent experience across devices.",
  },
  {
    q: "Do you support CMS integration?",
    a: "Yes. We integrate CMS to ensure flexibility and easy content management. This allows your team to update content easily and keep the website aligned with business needs.",
  },
];

export function WebDevelopmentClient() {
  return (
    <div className="font-hanken bg-white text-[#111112]">
      <IndividualPageHeroSection
        eyebrow="Digital Solutions"
        tagline1="Built to Perform."
        tagline2="Designed to Convert."
        headlineTitle="Web Development"
        description="We build websites that are not just visually strong but structured to convert, perform, and scale with your business."
        backgroundImage="https://res.cloudinary.com/dm8jtnzdi/image/upload/q_auto/f_auto/v1776713429/WEBDEV_BG_vj61ae.png"
      />

      <ServiceStatsSection
        stats={stats}
        description="The first impression your business makes in the digital age is your website. We develop websites which are visually stunning, but also strategically developed to support growth and drive real outcomes."
      />

      <ServiceFullWidthBand  imageSrc="https://res.cloudinary.com/dm8jtnzdi/image/upload/q_auto/f_auto/v1776713429/WEBDEV_BANNER_vuecwi.png"/>

      <ServiceCardGrid services={services} />

      <ServiceApproachSection
        sectionLabel="How We Think"
        overview="Our approach is focused on building websites that work in real business conditions. Every decision is aligned to usability, performance, and long-term scalability — ensuring your website is not just well-designed, but practical, reliable, and capable of supporting day-to-day business operations."
        items={approachItems}
      />

      <ServiceWhyUsSection
        heading="We build with business context"
        imageSrc="https://res.cloudinary.com/dm8jtnzdi/image/upload/q_auto/f_auto/v1776713429/WEBDEV_CHOOSe_h3ggtf.png"
        paragraphs={[
          "We don’t approach websites as design projects alone. Your website is not just a design layer, it directly influences how users perceive and engage with your business.",
          "Each site that we design is specific to your brand name, your purposes, and your business interests. We understand the role your website plays in your business and build accordingly.",
        ]}
      />

      <FAQSection faqs={faqs} />

      <ContactSection />
    </div>
  );
}
