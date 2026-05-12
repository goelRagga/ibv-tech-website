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
    title: "Engaging Learning Experiences",
    desc: "We design platforms that improve student engagement and enhance learning outcomes through interactive digital environments.",
    type: "red",
  },
  {
    number: "02",
    title: "Scalable Education Systems",
    desc: "We build LMS and applications that scale with institutions and evolving learning needs.",
    type: "image",
    image: "/HOMEPAGEBANNER.png",
  },
  {
    number: "03",
    title: "Performance Tracking",
    desc: "We use analytics to track learning progress and improve educational effectiveness.",
    type: "dark",
  },
];

const faqs: FAQItem[] = [
  {
    q: "What challenges do education and EdTech platforms face today?",
    a: "They need to balance engagement, scalability, and performance while adapting to evolving digital learning needs.",
  },
  {
    q: "Do you build custom learning management systems (LMS)?",
    a: "Yes, we develop custom LMS platforms and education applications tailored to institutional and user needs.",
  },
  {
    q: "Can you help improve student engagement?",
    a: "We design interactive and user-friendly learning environments that improve engagement and learning outcomes.",
  },
  {
    q: "Do you work with both institutions and startups?",
    a: "Yes, we work with schools, universities, and EdTech startups at different stages of growth.",
  },
  {
    q: "How do you measure learning performance?",
    a: "We use analytics and performance tracking to monitor progress and improve learning effectiveness.",
  },
];

export function EducationEdtechClient() {
  return (
    <div className="font-hanken bg-white text-[#111112]">
      <IndividualPageHeroSection
        tagline1="INDUSTRIES WE SERVE"
        headlineTitle="Education & EdTech"
        description="Shaping the Future Starts With Smarter Learning Solutions. Education is evolving rapidly, and strong digital infrastructure is essential. We help institutions and platforms build engaging, scalable, and performance-driven learning environments."
        backgroundImage="https://res.cloudinary.com/dm8jtnzdi/image/upload/q_auto/f_auto/v1778604658/IBV_Education_EdTech_Banner_vh0nnv.webp"
      />

      <ThreePillarsSection
        labelPrefix="What We"
        labelHighlight="Do"
        heading="Building digital learning systems that drive real outcomes."
        ctaText="Get Started"
        ctaHref="/contact"
        paragraph="Education is evolving and changing so quickly and the institutions and platforms in the forefront must have great, strong, and enforceable technology supporting them. IBV Technologies collaborates with schools and universities, e-learning platforms, and EdTech startups to create digital learning environments which can engage students, assist educators, and achieve measurable results.

Our services include the development of custom LMS, education applications, research and feasibility analysis, defining the content strategy of EdTech brands, and data analytics to monitor learning performance. Whether you need to create a product completely or enhance an already developed platform, our team introduces technical expertise as well as educational knowledge that will make learning more productive and available."
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
