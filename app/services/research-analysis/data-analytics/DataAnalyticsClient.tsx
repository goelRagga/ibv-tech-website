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
      "Data points processed to generate structured insights and performance visibility.",
  },
  {
    value: "85%",
    label:
      "Of business decisions improve with data-driven analysis and interpretation.",
  },
];

const services: any[] = [
  {
    title: "Predictive Modeling",
    description:
      "Build models to forecast trends, anticipate outcomes, and support proactive decision-making.",
    icon: (
      <Icon>
        <polyline points="22 7 13.5 15.5 8.5 10.5 2 17" />
        <polyline points="16 7 22 7 22 13" />
      </Icon>
    ),
  },
  {
    title: "Statistical Analysis",
    description:
      "Apply analytical techniques to identify patterns, relationships, and performance insights within data.",
    icon: (
      <Icon>
        <path d="M2 20h20M6 20V10M12 20V4M18 20v-7" />
      </Icon>
    ),
  },
  {
    title: "Data Collection & Processing",
    description:
      "Collect, clean, and structure data from multiple sources to ensure accuracy and usability for analysis.",
    icon: (
      <Icon>
        <ellipse cx="12" cy="5" rx="9" ry="3" />
        <path d="M21 12c0 1.66-4 3-9 3s-9-1.34-9-3" />
        <path d="M3 5v14c0 1.66 4 3 9 3s9-1.34 9-3V5" />
      </Icon>
    ),
  },
  {
    title: "Dashboard Development",
    description:
      "Create interactive dashboards to visualize data clearly and track performance in real time.",
    icon: (
      <Icon>
        <rect x="2" y="3" width="20" height="14" rx="2" />
        <line x1="8" y1="21" x2="16" y2="21" />
        <line x1="12" y1="17" x2="12" y2="21" />
      </Icon>
    ),
  },
  {
    title: "Custom Research Analytics",
    description:
      "Deliver tailored analytics solutions based on specific business problems, datasets, and objectives.",
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
    title: "Performance Reporting",
    description:
      "Develop structured reports to monitor key metrics and evaluate business performance regularly.",
    icon: (
      <Icon>
        <path d="M14 2H6a2 2 0 00-2 2v16a2 2 0 002 2h12a2 2 0 002-2V8z" />
        <polyline points="14 2 14 8 20 8" />
        <line x1="16" y1="13" x2="8" y2="13" />
        <line x1="16" y1="17" x2="8" y2="17" />
      </Icon>
    ),
  },
];

const approachItems: ApproachItem[] = [
  {
    title: "Data Clarity",
    description:
      "We focus on cleaning, structuring, and organizing data to ensure accuracy before analysis. This reduces errors and ensures that insights are reliable and consistent, creating a strong foundation for meaningful analysis and decision-making.",
  },
  {
    title: "Insight Driven",
    description:
      "We go beyond raw numbers to identify patterns, trends, and relationships within the data. This ensures that insights are meaningful and aligned with business objectives, helping transform complex datasets into a clear, actionable direction.",
  },
  {
    title: "Decision Focus",
    description:
      "Analytics supports decisions, not just reports. We connect insights to business outcomes and performance improvements, ensuring data guides strategy and execution across teams and business functions.",
  },
];

const whyUsItems: WhyUsItem[] = [
  {
    heading: "We turn data into decisions",
    body: "Data without interpretation has limited value. We focus on converting data into clear insights that support real business decisions. This ensures that teams can act quickly and confidently using reliable information, bridging the gap between analysis and action.",
  },
  {
    heading: "We ensure clean, structured data",
    body: "Effective analytics depends on clean and structured data. We ensure that data is processed and organized before analysis. This improves the reliability of insights and reduces the risk of incorrect conclusions, creating consistency across reporting and decision-making.",
  },
  {
    heading: "We make insights easy to use",
    body: "We present analytics through dashboards, reports, and clear formats that are easy to understand and use across teams without complexity. Clear visualization helps teams quickly interpret data and act without delays — reducing dependency on technical teams.",
  },
  {
    heading: "We support performance visibility",
    body: "We help businesses track key metrics, monitor trends, and understand performance in real time. Real-time visibility allows teams to identify issues early and take corrective action quickly, enabling continuous improvement through data.",
  },
];

const faqs: FAQItem[] = [
  {
    q: "What does data analytics and research involve?",
    a: "It involves collecting, processing, and analyzing data to generate insights that support business decisions. This includes statistical analysis, dashboards, and predictive modeling. It helps businesses understand performance and identify trends clearly.",
  },
  {
    q: "How can data analytics help my business?",
    a: "It helps improve visibility into operations, customer behavior, and performance metrics. This enables faster, more informed decisions. It also helps identify opportunities and optimize business processes.",
  },
  {
    q: "Do you provide dashboards and reporting?",
    a: "Yes, we create dashboards and structured reports to help track performance and visualize data. This ensures that insights are easy to understand and accessible across teams.",
  },
  {
    q: "Can you work with existing data systems?",
    a: "Yes, we can integrate and analyze data from your existing systems and tools. This ensures continuity while improving the way data is used for decision-making.",
  },
  {
    q: "What makes your analytics approach different?",
    a: "We focus on making data usable, not just analyzing it. Our approach ensures insights are clear, actionable, and aligned with business goals. This helps organizations move from data collection to real impact.",
  },
];

export function DataAnalyticsClient() {
  return (
    <div className="font-hanken bg-white text-[#111112]">
      <IndividualPageHeroSection
        eyebrow="Research & Analysis"
        tagline1="From Raw Data."
        tagline2="To Real Decisions."
        headlineTitle="Data & Analytics"
        description="We transform raw data into structured insights through analytics, modeling, and reporting, helping you understand performance, identify trends, and make faster, data-driven decisions."
        backgroundImage="https://res.cloudinary.com/dm8jtnzdi/image/upload/q_auto/f_auto/v1776714607/DA_BFG_dqpntx.png"
      />

      <ServiceStatsSection
        stats={stats}
        description="Data alone does not create value. What matters is how it is processed, analyzed, and used. IBV Technologies helps convert raw data into meaningful insights that improve visibility, support decisions, and drive measurable outcomes across your business."
      />

      <ServiceFullWidthBand imageSrc="https://res.cloudinary.com/dm8jtnzdi/image/upload/q_auto/f_auto/v1776714606/DA_BANNER_uwvba5.png" />

      <ServiceCardGrid services={services} />

      <ServiceApproachSection
        sectionLabel="How We Think"
        overview="Data becomes valuable only when it is structured, analyzed, and translated into clear, actionable insights. Our approach focuses on accuracy, clarity, and usability to ensure that analytics consistently supports real business decisions, not just reporting, across teams and business functions."
        items={approachItems}
      />

      <ServiceWhyUsSection
        heading="We turn data into decisions"
        paragraphs={[
          "Data without interpretation has limited value. We focus on converting data into clear insights that support real business decisions.",
          "This ensures that teams can act quickly and confidently using reliable information. It bridges the gap between analysis and action.",
        ]}
        imageSrc="https://res.cloudinary.com/dm8jtnzdi/image/upload/q_auto/f_auto/v1776714607/DA_RECT_ewonpa.png"
      />

      <FAQSection faqs={faqs} />

      <ContactSection />
    </div>
  );
}
