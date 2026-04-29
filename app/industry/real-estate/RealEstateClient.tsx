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
    title: "Lead Generation Focus",
    desc: "We help real estate businesses attract the right audience and convert interest into qualified leads. From property discovery to inquiry, we optimize each step to improve conversion outcomes.",
    type: "red",
  },
  {
    number: "02",
    title: "Market Intelligence",
    desc: "We provide insights into location trends, buyer behavior, and market demand to support better pricing, positioning, and investment decisions.",
    type: "image",
    image: "/HOMEPAGEBANNER.png",
  },
  {
    number: "03",
    title: "Digital Platforms",
    desc: "We build property platforms and systems that improve visibility, streamline listings, and enhance user experience across buyer journeys.",
    type: "dark",
  },
];

const faqs: FAQItem[] = [
  {
    q: "What challenges do real estate businesses face today?",
    a: "Real estate businesses must manage market competition, lead generation, and digital visibility while adapting to changing buyer behavior.",
  },
  {
    q: "How can digital solutions improve real estate sales?",
    a: "They help attract qualified leads, improve user experience, and convert interest into transactions.",
  },
  {
    q: "Do you provide solutions for property management?",
    a: "Yes, we offer CRM integrations, listing platforms, and systems to streamline property management.",
  },
  {
    q: "How do you support lead generation?",
    a: "We combine market research, digital platforms, and content strategies to attract and convert potential buyers.",
  },
  {
    q: "Can you help analyze real estate market trends?",
    a: "Yes, we provide market research and data analytics to help businesses understand trends and make informed decisions.",
  },
];

export function RealEstateClient() {
  return (
    <div className="font-hanken bg-white text-[#111112]">
      <IndividualPageHeroSection
        tagline1="INDUSTRIES WE SERVE"
        headlineTitle="Real Estate"
        description="From Listings to Leads — We Build What Moves Property. Real estate is evolving with digital tools. We help businesses generate leads, improve visibility, and convert interest into transactions."
        backgroundImage="/HOMEPAGEBANNER.png"
      />

      <ThreePillarsSection
        labelPrefix="What We"
        labelHighlight="Do"
        heading="Enabling real estate growth through digital solutions."
        ctaText="Get Started"
        ctaHref="/contact"
        paragraph="Real estate is a people business that is getting increasingly driven by digital instruments. IBV Technologies assists real estate agencies, developers, property technology platforms, and investment firms with targeted market research, lead generation strategy, web development, and business consulting. We help real estate companies build an online presence that attracts serious buyers, streamline property management, and translate interest into transactions.

Our solutions include property listing platforms, CRM integrations, location data analytics, market trends research, and both B2B and B2C content strategies. Timing and information are everything in real estate, and we ensure that our customers have both."
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
