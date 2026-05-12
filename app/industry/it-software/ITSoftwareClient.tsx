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
    title: "Scalable Development",
    desc: "We design and develop systems that are built to scale, ensuring performance, flexibility, and long-term reliability as your product grows.",
    type: "red",
  },
  {
    number: "02",
    title: "Product Strategy",
    desc: "We support product planning and go-to-market strategies, helping businesses align development with user needs and market demand.",
    type: "image",
    image: "/HOMEPAGEBANNER.png",
  },
  {
    number: "03",
    title: "Performance Optimization",
    desc: "We improve system performance, usability, and reliability to ensure consistent user experience across platforms and environments.",
    type: "dark",
  },
];

const faqs: FAQItem[] = [
  {
    q: "What challenges do IT and software companies face today?",
    a: "They must manage rapid innovation, scalability, performance, and competitive market positioning.",
  },
  {
    q: "Do you support product development for SaaS companies?",
    a: "Yes, we provide development, product strategy, and performance optimization for SaaS and tech businesses.",
  },
  {
    q: "Can you help improve system scalability?",
    a: "We design and develop scalable architectures that support growth and performance.",
  },
  {
    q: "Do you provide technical consulting?",
    a: "Yes, we offer consulting on development, architecture, and product strategy.",
  },
  {
    q: "How do you help improve software performance?",
    a: "We optimize systems for reliability, usability, and efficiency across platforms.",
  },
];

export function ITSoftwareClient() {
  return (
    <div className="font-hanken bg-white text-[#111112]">
      <IndividualPageHeroSection
        tagline1="INDUSTRIES WE SERVE"
        headlineTitle="IT & Software"
        description="Built by Tech People. Delivered for Tech Businesses. We help technology companies scale faster with strong architecture, performance, and strategy."
        backgroundImage="https://res.cloudinary.com/dm8jtnzdi/image/upload/q_auto/f_auto/v1778604658/IBV_IT_Software_Banner_vvpw3u.webp"
      />

      <ThreePillarsSection
        labelPrefix="What We"
        labelHighlight="Do"
        heading="Supporting tech companies with scalable solutions."
        ctaText="Get Started"
        ctaHref="/contact"
        paragraph="IBV Technologies brings an insider perspective to every interaction with technology organizations, SaaS businesses, IT service firms, and software product teams. We understand the language, the challenges, and the speed at which this industry evolves. We provide end-to-end application development, technical consulting, product strategy, competitive research, and performance analytics.

We also assist tech firms in accelerating innovation through new architectures, cloud-native applications, and scalable digital infrastructures. Our team works closely with clients to improve development cycles, product performance, and platform reliability — helping IT organizations build better solutions faster, adapt to new technologies, and maintain a competitive edge in a demanding global ecosystem."
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
