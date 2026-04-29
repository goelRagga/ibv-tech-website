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
    title: "Secure & Compliant Systems",
    desc: "We build secure, compliant, and reliable digital platforms designed for sensitive healthcare environments and patient data handling.",
    type: "red",
  },
  {
    number: "02",
    title: "Patient-Centric Solutions",
    desc: "Our solutions focus on improving patient engagement, accessibility, and overall experience across digital healthcare platforms.",
    type: "image",
    image: "/HOMEPAGEBANNER.png",
  },
  {
    number: "03",
    title: "Data-Driven Outcomes",
    desc: "We use analytics and insights to support better decision-making, improve outcomes, and enhance operational efficiency.",
    type: "dark",
  },
];

const faqs: FAQItem[] = [
  {
    q: "What challenges do healthcare organizations face today?",
    a: "Healthcare organizations must balance compliance, patient experience, and operational efficiency while adapting to digital transformation.",
  },
  {
    q: "How do you ensure data security and compliance?",
    a: "We follow structured development practices and build systems aligned with security and compliance standards required in healthcare environments.",
  },
  {
    q: "Do you work with startups and established organizations?",
    a: "Yes, we work with health-tech startups, clinics, and large medical organizations based on their specific needs.",
  },
  {
    q: "What kind of healthcare solutions do you build?",
    a: "We develop applications, patient management systems, and analytics solutions tailored to healthcare workflows.",
  },
  {
    q: "How can analytics improve healthcare outcomes?",
    a: "Analytics helps identify patterns, improve decision-making, and enhance both operational and patient-level outcomes.",
  },
];

export function HealthcareWellnessClient() {
  return (
    <div className="font-hanken bg-white text-[#111112]">
      <IndividualPageHeroSection
        tagline1="INDUSTRIES WE SERVE"
        headlineTitle="Healthcare & Wellness"
        description="Technology That Cares As Much As You Do. Healthcare demands precision, trust, and reliability. We help organizations build secure, compliant, and user-friendly solutions that improve outcomes and patient engagement."
        backgroundImage="/HOMEPAGEBANNER.png"
      />

      <ThreePillarsSection
        labelPrefix="What We"
        labelHighlight="Do"
        heading="Enabling better healthcare through technology and insight."
        ctaText="Get Started"
        ctaHref="/contact"
        paragraph="Precision and trust are all in the field of healthcare and wellness. IBV Technologies collaborates with wellness brands, health-tech startups, clinics, and medical organizations to provide technology and research solutions that help enhance its outcomes, engage better with patients, and empower them with making informed decisions. We create high-level secure, compliant and user-friendly digital platforms that enable healthcare to be more approachable and manageable.

The services we offer in this field are healthcare application development, patient management system development, health data analytics, wellness brand market research, and wellness brand content writing. Since healthcare technology is sensitive and a responsibility, we realize that certain projects are handled with the utmost standards of accuracy and care."
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
