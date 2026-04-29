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
    title: "Conversion-Focused Execution",
    desc: "Whether optimizing a product page or building a complete e-commerce platform, our solutions are designed to transform a browser into a buyer and a buyer into a loyal customer.",
    type: "red",
  },
  {
    number: "02",
    title: "Data-Driven Insights",
    desc: "We provide advanced analytics and customer behavior insights to help businesses understand what drives purchase decisions and improve performance across digital channels.",
    type: "image",
    image: "/HOMEPAGEBANNER.png",
  },
  {
    number: "03",
    title: "Performance & Growth",
    desc: "We combine intelligent automation, customized marketing, and seamless user experiences to improve performance, increase engagement, and reduce cart abandonment.",
    type: "dark",
  },
];

const faqs: FAQItem[] = [
  {
    q: "What challenges do retail and e-commerce businesses face today?",
    a: "Retail and e-commerce businesses face rapidly changing consumer trends, increasing competition, and the need for strong digital experiences. Businesses that cannot adapt quickly risk losing relevance in a fast-moving market.",
  },
  {
    q: "How does IBV Technologies help improve conversions?",
    a: "We focus on optimizing user journeys, product pages, and digital platforms to improve engagement and conversion rates. This helps turn visitors into customers and customers into repeat buyers.",
  },
  {
    q: "Do you support both new and existing e-commerce businesses?",
    a: "Yes, we support businesses at different stages, whether launching a new online store or scaling an existing retail operation. Our approach is adapted based on your business needs and growth goals.",
  },
  {
    q: "How do you use data in retail and e-commerce solutions?",
    a: "We use analytics and customer behavior insights to understand purchase drivers and identify opportunities for improvement. This ensures decisions are based on real data rather than assumptions.",
  },
  {
    q: "Can you help reduce cart abandonment?",
    a: "Yes, we focus on improving user experience, streamlining processes, and optimizing engagement to reduce cart abandonment and improve overall conversion rates.",
  },
];

export function RetailEcommerceClient() {
  return (
    <div className="font-hanken bg-white text-[#111112]">
      <IndividualPageHeroSection
        tagline1="INDUSTRIES WE SERVE"
        headlineTitle="Retail & E-commerce"
        description="Sell Smarter. Grow Faster. Retain Longer. Retail and e-commerce move fast, and customer expectations evolve even faster. We help businesses adapt with data-driven insights, high-performance platforms, and strategies built to convert and retain."
        backgroundImage="/HOMEPAGEBANNER.png"
      />

      <ThreePillarsSection
        labelPrefix="What We"
        labelHighlight="Do"
        heading="Helping retail businesses navigate change and drive growth."
        ctaText="Get Started"
        ctaHref="/contact"
        paragraph="One of the most competitive and actively developing spheres of business nowadays is the retail and e-commerce industry. Trends of consumers change fast and companies that cannot match up become outnumbered in a short time. IBV Technologies helps retail and e-commerce companies to leverage data-driven market research, high-performance web and application development, conversion-optimized online programs, and content engaging to the contemporary buyer. Launching an online store or anything that enlarges an already established retail brand or takes your customer experience into a fresh new phase of imagination, we guide you to make decisions that will give you real revenues.

Whether it is optimization of a product page or developing an entire e-commerce platform, our team develops solutions that help transform a browser into a buyer and a buyer into a loyal customer. IBV Technologies is also able to serve the retailers by offering them an advanced analytics and customer behavior insights that also help businesses to know what actually leads to a purchase decision. Through the combination of intelligent automation, customized marketing and seamless user experiences, we enable brands to reach their customers in a stronger digital relationship. Our proposed solutions are aimed at enhancing performance of the websites, enhancing interaction, and decreasing the rate of cart abandonments. This will allow retailing companies to grow effectively, improve their flexibility to market changes, and remain ahead in an environment becoming more and more digital-first in its shopping patterns."
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
