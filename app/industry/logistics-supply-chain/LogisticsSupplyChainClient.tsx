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
    title: "Operational Efficiency",
    desc: "We identify inefficiencies across logistics operations and implement systems that improve speed, accuracy, and overall performance.",
    type: "red",
  },
  {
    number: "02",
    title: "Visibility & Tracking",
    desc: "We build solutions that provide real-time tracking and operational visibility, enabling better coordination and faster decision-making.",
    type: "image",
    image: "/HOMEPAGEBANNER.png",
  },
  {
    number: "03",
    title: "Cost Optimization",
    desc: "We use analytics and process improvements to reduce operational costs while maintaining reliability and service quality.",
    type: "dark",
  },
];

const faqs: FAQItem[] = [
  {
    q: "What challenges do logistics and supply chain businesses face today?",
    a: "They deal with inefficiencies, delays, lack of visibility, and rising operational costs across processes.",
  },
  {
    q: "How can technology improve supply chain efficiency?",
    a: "Technology helps improve tracking, visibility, and decision-making, reducing delays and operational friction.",
  },
  {
    q: "Do you provide fleet and tracking solutions?",
    a: "Yes, we develop systems for tracking, fleet management, and warehouse operations.",
  },
  {
    q: "How do you help reduce operational costs?",
    a: "We use analytics and process optimization to identify inefficiencies and improve cost management.",
  },
  {
    q: "Can you improve real-time visibility in operations?",
    a: "Yes, we build systems that provide real-time tracking and insights across the supply chain.",
  },
];

export function LogisticsSupplyChainClient() {
  return (
    <div className="font-hanken bg-white text-[#111112]">
      <IndividualPageHeroSection
        tagline1="INDUSTRIES WE SERVE"
        headlineTitle="Logistics & Supply Chain"
        description="Efficiency Is Not an Option. We Make It Your Standard. Logistics depends on speed, accuracy, and visibility. We help businesses optimize operations and improve performance through data and technology."
        backgroundImage="https://res.cloudinary.com/dm8jtnzdi/image/upload/q_auto/f_auto/v1778604659/IBV_Logistics_Supply_Chain_Banner_wfzpns.webp"
      />

      <ThreePillarsSection
        labelPrefix="What We"
        labelHighlight="Do"
        heading="Improving efficiency across supply chain operations."
        ctaText="Get Started"
        ctaHref="/contact"
        paragraph="Every delay costs money and every inefficiency compounds over time in logistics and supply chain. IBV Technologies collaborates with distribution networks, supply chain managers, freight operators, and logistics companies to adopt technology and data-driven solutions that reduce friction, enhance visibility, and improve performance across the board.

Our services in this industry include process consulting, operational analytics, supply chain research, and custom software development for tracking, fleet management, and warehouse operations. We focus on building systems and strategies that deliver tangible gains in speed, cost, and reliability — because in logistics, what is measured is managed, and what is managed is optimized."
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
