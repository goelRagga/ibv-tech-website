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
    value: "20K+",
    label:
      "Content pieces distributed across platforms to improve reach and engagement.",
  },
  {
    value: "80%",
    label:
      "Of engagement happens through consistent social and content presence.",
  },
];

const services: any[] = [
  {
    title: "Content Planning",
    description:
      "We plan content aligned with your brand, audience, and communication goals.",
    icon: (
      <Icon>
        <rect x="3" y="4" width="18" height="18" rx="2" />
        <line x1="16" y1="2" x2="16" y2="6" />
        <line x1="8" y1="2" x2="8" y2="6" />
        <line x1="3" y1="10" x2="21" y2="10" />
      </Icon>
    ),
  },
  {
    title: "Social Media Management",
    description:
      "We manage social media platforms to ensure consistent presence and engagement.",
    icon: (
      <Icon>
        <circle cx="12" cy="12" r="10" />
        <line x1="2" y1="12" x2="22" y2="12" />
        <path d="M12 2a15.3 15.3 0 014 10 15.3 15.3 0 01-4 10 15.3 15.3 0 01-4-10 15.3 15.3 0 014-10z" />
      </Icon>
    ),
  },
  {
    title: "Content Distribution",
    description:
      "We distribute content across relevant channels to maximize reach and visibility.",
    icon: (
      <Icon>
        <path d="M22 2L11 13" />
        <path d="M22 2L15 22l-4-9-9-4 20-7z" />
      </Icon>
    ),
  },
  {
    title: "Audience Engagement",
    description:
      "We create content that encourages interaction and builds meaningful audience connections.",
    icon: (
      <Icon>
        <path d="M17 21v-2a4 4 0 00-4-4H5a4 4 0 00-4 4v2" />
        <circle cx="9" cy="7" r="4" />
        <path d="M23 21v-2a4 4 0 00-3-3.87" />
        <path d="M16 3.13a4 4 0 010 7.75" />
      </Icon>
    ),
  },
  {
    title: "Campaign Execution",
    description:
      "We execute content-driven campaigns to improve awareness and engagement.",
    icon: (
      <Icon>
        <path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z" />
      </Icon>
    ),
  },
  {
    title: "Performance Tracking",
    description:
      "We track content performance to measure impact and improve future outcomes.",
    icon: (
      <Icon>
        <path d="M2 20h20M6 20V10M12 20V4M18 20v-7" />
      </Icon>
    ),
  },
];

const approachItems: ApproachItem[] = [
  {
    title: "Consistent Presence",
    description:
      "We focus on maintaining a consistent brand presence across platforms to ensure visibility and recall. Consistency builds familiarity over time, making it easier for audiences to connect with and trust your brand.",
  },
  {
    title: "Audience Focus",
    description:
      "We create and distribute content based on audience behavior, preferences, and engagement patterns. This ensures that content is relevant, meaningful, and aligned with what your audience expects, improving engagement quality.",
  },
  {
    title: "Performance Driven",
    description:
      "We track engagement, reach, and content performance to continuously improve results. This ensures that strategies evolve based on insights and deliver better outcomes, identifying what works best to optimize for stronger impact.",
  },
];

const whyUsItems: any[] = [
  "We create and distribute content that is designed to engage your audience and build real connections. This ensures that your brand does not just reach people but also interacts with them effectively — building trust and long-term relationships that go beyond visibility.",

  "Consistency is key to building a strong brand presence. We maintain a structured approach to content planning and publishing across platforms, ensuring that your brand communication remains aligned, reliable, and recognizable, reinforcing your positioning over time.",

  "Creating content is only part of the process. We ensure that content is effectively distributed across the right channels to reach the right audience. This helps maximize visibility and ensures that your content performs as intended, connecting strategy with execution.",
];

const faqs: FAQItem[] = [
  {
    q: "What does social media and content marketing include?",
    a: "It includes planning, creating, and distributing content across social media platforms to improve visibility and engagement. This ensures consistent communication and helps build a strong brand presence.",
  },
  {
    q: "How can social media marketing help my business?",
    a: "It helps you reach and engage your target audience, build brand awareness, and maintain ongoing communication. It also supports lead generation and long-term customer relationships.",
  },
  {
    q: "Do you manage social media accounts?",
    a: "Yes, we manage social media platforms including content planning, posting, and engagement. This ensures consistency and effective communication across channels.",
  },
  {
    q: "How do you measure performance?",
    a: "We track metrics such as engagement, reach, and content performance to evaluate results. This helps improve strategy and optimize future content efforts.",
  },
  {
    q: "Do you create content as well as distribute it?",
    a: "Yes, we handle both content creation and distribution to ensure alignment and effectiveness. This ensures that content is not only well-created but also reaches the right audience.",
  },
];

export function SocialMediaClient() {
  return (
    <div className="font-hanken bg-white text-[#111112]">
      <IndividualPageHeroSection
        eyebrow="Content & Growth"
        tagline1="Reach the Right Audience."
        tagline2="Build Lasting Connections."
        headlineTitle="Social Media"
        description="We help businesses build visibility, engage audiences, and maintain consistent communication across platforms through structured content and social media strategies."
        backgroundImage="https://res.cloudinary.com/dm8jtnzdi/image/upload/q_auto/f_auto/v1776713429/WEBDEV_BANNER_vuecwi.png"
      />

      <ServiceStatsSection
        stats={stats}
        description="Visibility today depends on consistent communication and effective distribution. We plan and execute content across social media platforms to help your brand stay relevant, engage the right audience, and build long-term connections that support growth."
      />

      <ServiceFullWidthBand  imageSrc="https://res.cloudinary.com/dm8jtnzdi/image/upload/q_auto/f_auto/v1776361851/BANNER_IMAGE_CHOOSe_US_uevvac.png"/>

      <ServiceCardGrid services={services} />

      <ServiceApproachSection
        sectionLabel="How We Think"
        overview="Effective social media and content marketing is not just about posting regularly, but about delivering the right message to the right audience at the right time. Our approach focuses on consistency, relevance, and performance to ensure that content drives real engagement and business outcomes."
        items={approachItems}
      />

      <ServiceWhyUsSection
        imageSrc="https://res.cloudinary.com/dm8jtnzdi/image/upload/q_auto/f_auto/v1776710664/BC_WHY_CHOOSE_fjwza5.png"
        heading="We focus on meaningful engagement"
        paragraphs={whyUsItems}
      />

      <FAQSection faqs={faqs} />

      <ContactSection />
    </div>
  );
}
