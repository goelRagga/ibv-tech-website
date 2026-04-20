"use client";

import type { ReactNode } from "react";
import { IndividualPageHeroSection } from "@/components/sections/services/IndividualPageHeroSection";
import { ServiceStatsSection } from "@/components/sections/services/ServiceStatsSection";

import { ServiceApproachSection } from "@/components/sections/services/ServiceApproachSection";
import { ServiceWhyUsSection } from "@/components/sections/services/ServiceWhyUsSection";
import { FAQSection } from "@/components/sections/FAQSection";
import { ContactSection } from "@/components/sections/ContactSection";
import type { ApproachItem } from "@/components/sections/services/ServiceApproachSection";
import type { FAQItem } from "@/components/sections/FAQSection";
import type { ServiceStat } from "@/components/sections/services/ServiceStatsSection";
import type { WhyUsItem } from "@/components/sections/services/ServiceWhyUsSection";
import {
  ServiceCardGrid,
  ServiceFullWidthBand,
} from "@/components/sections/services/Servicebandandcardgrid";

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
      "Data points can influence early-stage decisions when analysed correctly.",
  },
  {
    value: "90%",
    label:
      "Of startups fail due to gaps in market need, strategy, or execution.",
  },
];

const services: any[] = [
  {
    title: "Idea Validation",
    description:
      "Test concepts against real market demand to reduce risk before execution and early uncertainty.",
    icon: (
      <Icon>
        <path d="M12 2a7 7 0 017 7c0 2.5-1.5 4.5-3 6l-1 3H9l-1-3C6.5 13.5 5 11.5 5 9a7 7 0 017-7z" />
        <line x1="9" y1="21" x2="15" y2="21" />
      </Icon>
    ),
  },
  {
    title: "Business Model Development",
    description:
      "Define scalable and sustainable revenue and operational structures aligned with growth potential.",
    icon: (
      <Icon>
        <rect x="3" y="3" width="7" height="7" rx="1" />
        <rect x="14" y="3" width="7" height="7" rx="1" />
        <rect x="3" y="14" width="7" height="7" rx="1" />
        <rect x="14" y="14" width="7" height="7" rx="1" />
      </Icon>
    ),
  },
  {
    title: "Go-To-Market Strategy",
    description:
      "Plan how your product or service will reach, position, and acquire customers effectively in the market.",
    icon: (
      <Icon>
        <circle cx="12" cy="12" r="10" />
        <line x1="2" y1="12" x2="22" y2="12" />
        <path d="M12 2a15.3 15.3 0 014 10 15.3 15.3 0 01-4 10 15.3 15.3 0 01-4-10 15.3 15.3 0 014-10z" />
      </Icon>
    ),
  },
  {
    title: "Investor Readiness",
    description:
      "Prepare pitch decks, narratives, and positioning to clearly communicate value to potential investors.",
    icon: (
      <Icon>
        <path d="M9 11l3 3L22 4" />
        <path d="M21 12v7a2 2 0 01-2 2H5a2 2 0 01-2-2V5a2 2 0 012-2h11" />
      </Icon>
    ),
  },
  {
    title: "Financial Planning",
    description:
      "Build projections, cost and funding requirements with clarity on short and long term needs.",
    icon: (
      <Icon>
        <polyline points="22 7 13.5 15.5 8.5 10.5 2 17" />
        <polyline points="16 7 22 7 22 13" />
      </Icon>
    ),
  },
  {
    title: "Execution Roadmap",
    description:
      "Create a clear, structured plan from idea to launch, growth, and early-stage scaling.",
    icon: (
      <Icon>
        <path d="M3 12h18M3 6h18M3 18h18" />
      </Icon>
    ),
  },
];

const approachItems: ApproachItem[] = [
  {
    title: "Understanding Uncertainty",
    description:
      "Startups operate with limited data and high uncertainty, making early decisions critical. We validate ideas, test assumptions, and bring clarity to key decisions so founders can move forward with confidence and reduce risk.",
  },
  {
    title: "Market-Fit Tests",
    description:
      "A strong idea only succeeds if it aligns with real customer needs. We validate the problem, understand customer needs, and ensure your solution has a clear place in the market, helping avoid wasted effort and building a foundation for sustainable growth.",
  },
  {
    title: "Scalable Foundation",
    description:
      "Early decisions shape long-term outcomes. We ensure your business models, strategies and operations support growth from the start, creating a strong and adaptable foundation that allows your startup to scale efficiently with clarity and control.",
  },
];

const whyUsItems: WhyUsItem[] = [
  {
    heading: "We understand founder challenges",
    body: "Building a startup involves navigating uncertainty, limited resources, and constant decision-making. We take the time to understand your vision, constraints, and goals before recommending any strategy. This ensures that every decision is grounded in your reality and aligned with your stage of growth.",
  },
  {
    heading: "We focus on what matters early",
    body: "Startups cannot afford to do everything at once. We identify the few critical priorities that will have the highest impact and help you focus on executing them effectively. This approach helps conserve resources while driving meaningful progress.",
  },
  {
    heading: "We align strategy with growth outcomes",
    body: "Every decision in a startup should contribute to growth. Our approach connects strategy with outcomes such as user acquisition, revenue potential, and scalability — ensuring efforts are not just structured, but impactful.",
  },
  {
    heading: "We work as an extension of your team",
    body: "We collaborate closely with founders and teams to ensure alignment at every stage. By working alongside you, we ensure that plans are practical and adapted to real-world startup conditions, keeping your team aligned with the direction and priorities.",
  },
];

const faqs: FAQItem[] = [
  {
    q: "Do you work with early-stage startup ideas?",
    a: "Yes, we work with founders at the idea stage as well as those who have already started building. Our focus is on validating concepts, refining direction, and creating a structured path from idea to execution.",
  },
  {
    q: "Can you help with investor readiness?",
    a: "We support startups in preparing for funding by building clear business models, strong narratives, and well-structured pitch decks. The goal is to ensure you can communicate your vision clearly and confidently.",
  },
  {
    q: "Do you only work with tech startups?",
    a: "No, we work with startups across industries. While many startups are technology-driven, our approach is focused on business fundamentals, market fit, and scalability across sectors.",
  },
  {
    q: "What if my idea is not fully developed?",
    a: "That is where we add most value. We help you refine your ideas, validate them against market demand, and shape it into a structured business concept.",
  },
  {
    q: "Do you support startups after launch?",
    a: "Yes, we continue to support startups post-launch by helping optimise strategy, improve performance, and build scalable systems that support long-term growth.",
  },
];

export function StartupConsultationClient() {
  return (
    <div className="font-hanken bg-white text-[#111112]">
      <IndividualPageHeroSection
        eyebrow="Consulting & Strategy"
        tagline1="Validate First."
        tagline2="Build With Confidence."
        headlineTitle="Startup Consulting"
        description="We help founders validate ideas, build strong foundations, and create clear strategies that support scalable and sustainable business growth."
        backgroundImage="https://res.cloudinary.com/dm8jtnzdi/image/upload/q_auto/f_auto/v1776712714/SC_BG_gpdkgo.png"
      />

      <ServiceStatsSection
        stats={stats}
        description="Building a startup requires more than a strong idea. We work with founders to validate concepts, define business models, and create structured plans that focus on real demand, execution clarity, and long-term growth."
      />

      <ServiceFullWidthBand imageSrc="https://res.cloudinary.com/dm8jtnzdi/image/upload/q_auto/f_auto/v1776712714/SC_BANNER_g7bmaj.png" />

      <ServiceCardGrid services={services} />

      <ServiceApproachSection
        sectionLabel="How We Think"
        overview="Our approach focuses on bringing structure to early-stage uncertainty, helping founders make informed decisions without slowing down momentum. We prioritise validation, clarity, and execution readiness so that ideas are not just developed, but built on strong foundations aligned with real market demand."
        items={approachItems}
      />

      <ServiceWhyUsSection
        heading="We understand founder challenges"
        paragraphs={[
          "Building a startup involves navigating uncertainty, limited resources, and constant decision-making. We take the time to understand your vision, constraints, and goals before recommending any strategy.",
          "This ensures that every decision is grounded in your reality and aligned with your stage of growth. It also helps us prioritise what matters most at each stage, avoiding unnecessary complexity and keeping execution focused.",
        ]}
        imageSrc="https://res.cloudinary.com/dm8jtnzdi/image/upload/q_auto/f_auto/v1776712714/SC_WHYCHOOSeUS_v0kpyu.png"
      />

      <FAQSection faqs={faqs} />

      <ContactSection />
    </div>
  );
}
