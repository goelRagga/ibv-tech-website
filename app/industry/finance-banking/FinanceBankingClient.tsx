"use client";

import { IndividualPageHeroSection } from "@/components/sections/services/IndividualPageHeroSection";
import { ThreePillarsSection } from "@/components/sections/services/ThreePillarsSection";
import type { Pillar } from "@/components/sections/services/ThreePillarsSection";
import { BlogSection } from "@/components/sections/BlogSection";
import { FAQSection } from "@/components/sections/FAQSection";
import type { FAQItem } from "@/components/sections/FAQSection";
import { ContactSection } from "@/components/sections/ContactSection";

const pillars: [Pillar, Pillar, Pillar] = [
  {
    number: "01",
    title: "Secure Financial Systems",
    desc: "We build solutions aligned with compliance, security, and regulatory requirements.",
    type: "red",
  },
  {
    number: "02",
    title: "Operational Efficiency",
    desc: "We streamline processes and improve performance through structured systems.",
    type: "image",
    image: "/HOMEPAGEBANNER.png",
  },
  {
    number: "03",
    title: "Data-Driven Growth",
    desc: "We use analytics to identify opportunities and improve financial performance.",
    type: "dark",
  },
];

const faqs: FAQItem[] = [
  {
    q: "What challenges do financial institutions face today?",
    a: "Financial organizations must manage compliance, security, and digital transformation while maintaining trust and performance.",
  },
  {
    q: "How do you ensure security in financial solutions?",
    a: "We build systems aligned with security standards and regulatory requirements to ensure safe and reliable operations.",
  },
  {
    q: "Do you work with fintech startups as well?",
    a: "Yes, we work with fintech startups, banks, and financial institutions based on their specific needs.",
  },
  {
    q: "What services do you provide in finance and banking?",
    a: "We offer application development, data analytics, regulatory research, and consulting for financial environments.",
  },
  {
    q: "How can analytics improve financial performance?",
    a: "Analytics helps identify trends, optimize operations, and uncover new revenue opportunities.",
  },
];

export function FinanceBankingClient() {
  return (
    <div className="font-hanken bg-white text-[#111112]">
      <IndividualPageHeroSection
        tagline1="INDUSTRIES WE SERVE"
        headlineTitle="Finance & Banking"
        description="Precision, Security, and Intelligence — Built Into Every Solution. Finance demands accuracy, compliance, and trust. We help institutions build secure, data-driven systems that improve performance and customer experience."
        backgroundImage="/HOMEPAGEBANNER.png"
      />

      <ThreePillarsSection
        labelPrefix="What We"
        labelHighlight="Do"
        heading="Delivering secure and intelligent financial solutions."
        ctaText="Get Started"
        ctaHref="/contact"
        paragraph="The finance and banking industry demands the highest levels of precision, security, and compliance. IBV Technologies provides advanced services to financial institutions, fintech startups, investment firms, and banking institutions that are prepared to become digital first. We have experience in regulatory research, development of financial applications, data analytics, and business consulting specifically in financial-based settings.

We assist financial organizations in creating safe services, simplifying processes, enhancing digital experiences that face customers, and using data to discover new sources of revenue. Trust is the core of any business relationship, and therefore we construct solutions that enhance trust at each point of touch."
        pillars={pillars}
      />

      <BlogSection
        label="BLOGS AND ARTICLES"
        heading={
          <>
            Thoughts, Trends, and
            <br />
            Practical Business
            <br />
            Insights
          </>
        }
        ctaText="Explore all blogs"
        ctaHref="/insights/blogs"
      />

      <FAQSection
        heading="Answering Few of your questions"
        faqs={faqs}
      />

      <ContactSection />
    </div>
  );
}
