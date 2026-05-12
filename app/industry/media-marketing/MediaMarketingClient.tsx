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
    title: "Content & Strategy",
    desc: "We develop structured content strategies aligned with brand goals, ensuring consistency, clarity, and effective communication across channels.",
    type: "red",
  },
  {
    number: "02",
    title: "Audience Insights",
    desc: "We use research and data to understand audience behavior, helping businesses target the right users with relevant messaging.",
    type: "image",
    image: "/HOMEPAGEBANNER.png",
  },
  {
    number: "03",
    title: "Performance Tracking",
    desc: "We track and analyze campaign performance to optimize results, improve engagement, and ensure measurable outcomes.",
    type: "dark",
  },
];

const faqs: FAQItem[] = [
  {
    q: "What challenges do media and marketing businesses face today?",
    a: "They must balance creativity with measurable performance while adapting to changing audience behavior. This requires both strong storytelling and data-driven decision-making.",
  },
  {
    q: "How do you combine creativity with data?",
    a: "We use audience insights and analytics to guide content and campaign strategies. This ensures creative efforts are aligned with measurable outcomes and performance goals.",
  },
  {
    q: "Do you provide content strategy and writing services?",
    a: "Yes, we create structured content aligned with brand goals and audience needs. This helps maintain consistency while improving engagement and communication.",
  },
  {
    q: "How do you measure campaign performance?",
    a: "We use analytics and tracking tools to evaluate engagement, reach, and outcomes. This helps identify what works and continuously improve campaign effectiveness.",
  },
  {
    q: "Can you help improve audience targeting?",
    a: "Yes, we use segmentation and data insights to reach the right audience effectively. This ensures better engagement, relevance, and overall campaign performance.",
  },
];

export function MediaMarketingClient() {
  return (
    <div className="font-hanken bg-white text-[#111112]">
      <IndividualPageHeroSection
        tagline1="INDUSTRIES WE SERVE"
        headlineTitle="Media & Marketing"
        description="Creative Vision Backed by Strategic Intelligence. We combine creativity and data to build campaigns that deliver measurable impact."
        backgroundImage="https://res.cloudinary.com/dm8jtnzdi/image/upload/q_auto/f_auto/v1778604659/IBV_Media_Marketing_Banner_erc54s.webp"
      />

      <ThreePillarsSection
        labelPrefix="What We"
        labelHighlight="Do"
        heading="Connecting creativity with data-driven strategy."
        ctaText="Get Started"
        ctaHref="/contact"
        paragraph="The media and marketing industry sits at the intersection of creativity and intelligence, and IBV Technologies is built to operate exactly in that space. We collaborate with marketing firms, media houses, content creators, and brand-focused businesses to deliver strategic content, research-driven campaigns, digital platform development, and analytics that measure what truly matters for growth.

Our services include content strategy and writing, audience research, web development for creative agencies, and data analytics to optimize campaign performance. We help media and marketing companies build stronger brands, reach the right audiences, and prove the value of creative decisions with numbers that genuinely support them."
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
