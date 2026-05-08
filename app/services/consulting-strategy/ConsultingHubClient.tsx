"use client";

import { FAQSection } from "@/components/sections/FAQSection";
import { BlogSection } from "@/components/sections/BlogSection";
import { TestimonialsSection } from "@/components/sections/TestimonialsSection";
import { HubPageHeroSection } from "@/components/sections/services/HubPageHeroSection";
import {
  ThreePillarsSection,
  type Pillar,
} from "@/components/sections/services/ThreePillarsSection";
import {
  ServiceOffering,
  ServiceOfferingsSection,
} from "@/components/sections/services/ServiceOfferingsSection";
import { HowWeWorkSection, ProcessStep } from "@/components/sections/services/HowWeWorkSection";

const consultingPillars: [Pillar, Pillar, Pillar] = [
  {
    number: "01",
    title: "Strategic Clarity",
    desc: "Define direction with clear, structured planning aligned to your business goals.",
    type: "red",
  },
  {
    number: "02",
    title: "Operational Efficiency",
    desc: "Identify gaps, optimize processes, and improve overall business performance.",
    type: "image",
    image:
      "https://images.unsplash.com/photo-1552664730-d307ca884978?w=800&q=80",
  },
  {
    number: "03",
    title: "Sustainable Growth",
    desc: "Build scalable strategies designed for long term success and adaptability.",
    type: "dark",
  },
];

const consultingServices: ServiceOffering[] = [
  {
    number: "01.",
    title: "Business Consultation",
    desc: "We help organizations identify gaps, improve efficiency, and unlock growth through structured, data backed strategies, bringing clarity to complex challenges and enabling confident, practical decision making.",
    tags: ["Strategy", "Optimization", "Growth", "Revenue", "Restructuring"],
    href: "/services/consulting-strategy/business-consultation",
    image:
      "https://res.cloudinary.com/dm8jtnzdi/image/upload/q_auto/f_auto/v1776456928/BUSINESS_CONSULTAYION_uvk4yw.png",
  },
  {
    number: "02.",
    title: "Startup Consultation",
    desc: "We guide founders in turning ideas into scalable businesses through concept validation, business model development, and go to market planning, ensuring clarity, direction, and readiness for growth.",
    tags: [
      "Business Models",
      "Go-To-Market",
      "Pitch Decks",
      "Financial Investment",
      "Investor Readiness",
    ],
    href: "/services/consulting-strategy/startup-consultation",
    image:
      "https://res.cloudinary.com/dm8jtnzdi/image/upload/q_auto/f_auto/v1776456928/STARTUP_CCO_v5jsyr.png",
  },
];


const consultingFaqs = [
  {
    q: "What does your consulting process involve?",
    a: "We start by understanding your business, identifying key challenges, and building structured strategies that are practical and aligned with your goals.",
  },
  {
    q: "Who should use consulting services?",
    a: "Any business looking to improve performance, enter new markets, overcome operational challenges, or scale sustainably can benefit from our consulting services.",
  },
  {
    q: "Do you only provide strategy or also support execution?",
    a: "We support both. Strategy without execution is just a plan. We stay involved through the execution phase to ensure strategies translate into real results.",
  },
  {
    q: "How long does a consulting engagement typically take?",
    a: "Engagements vary based on scope. Initial assessments can take 2-4 weeks, while full strategic programs can run 3-6 months or longer.",
  },
  {
    q: "Can you help with both short term and long term planning?",
    a: "Yes. We build both immediate action plans for quick wins and long-term roadmaps for sustainable growth.",
  },
];

const processSteps: ProcessStep[] = [
  { number: '01', title: 'Understand the Business', desc: 'We start by deeply understanding your business model, goals, and operating environment.' },
  { number: '02', title: 'Analyse Gaps', desc: 'We evaluate performance, identify inefficiencies, and uncover opportunities for improvement.' },
  { number: '03', title: 'Define Strategy', desc: 'We develop a clear, structured strategy tailored to your specific business context.' },
  { number: '04', title: 'Plan Execution', desc: 'We translate strategy into actionable plans with clear timelines and ownership.' },
  { number: '05', title: 'Refine Continuously', desc: 'We monitor outcomes and refine the approach based on real-world feedback and results.' },
];

export function ConsultingHubClient() {
  return (
    <>
      {/* HERO */}
      <HubPageHeroSection
        eyebrow="Our Direction"
        tagline1="Clarity Before Action."
        tagline2="Strategy Before Scale."
        headlineTitle="Consulting & Strategy"
        description="Every successful business starts with the right decisions. We help you define direction, solve challenges, and build strategies that drive measurable, lasting growth."
        backgroundImage="https://res.cloudinary.com/dm8jtnzdi/image/upload/q_auto/f_auto/v1776452452/CONSULTING_STARTEGY_fjjf87.png"
      />

      {/* THREE PILLARS */}
      <ThreePillarsSection
        labelPrefix="Our"
        labelHighlight="Direction"
        paragraph={
          <>
            In a fast-moving business environment, decisions need more than
            assumptions. <strong>IBV Technologies</strong> helps you understand
            your current position, identify opportunities, and build clear,
            scalable strategies aligned with long-term goals, so you can move
            forward with confidence.
          </>
        }
        pillars={consultingPillars}
      />

      <ServiceOfferingsSection
        headingHighlight="consulting & strategy solutions"
        headingSuffix="designed to drive clarity, growth, and measurable outcomes"
        services={consultingServices}
      />

      <HowWeWorkSection
        bannerImage="https://res.cloudinary.com/dm8jtnzdi/image/upload/q_auto/f_auto/v1776456215/HANDSHAKE_BUINESS_wirfzg.png"
        eyebrowLabel="HOW WE"
        eyebrowHighlight="WORK"
        heading="We focus on building clarity and direction before execution begins."
        ctaLabel="Get In Touch"
        ctaHref="/contact"
        sideImage="https://res.cloudinary.com/dm8jtnzdi/image/upload/q_auto/f_auto/v1776457018/CONSULTATION_majwns.png"
        steps={processSteps}
        defaultOpenStep="02"
      />

      {/* <BlogSection />
      <TestimonialsSection /> */}

      {/* FAQ */}
      <FAQSection  faqs={consultingFaqs}/>
    </>
  );
}

function ConsultingFAQItem({
  faq,
  defaultOpen,
}: {
  faq: { q: string; a: string };
  defaultOpen?: boolean;
}) {
  const { useState } = require("react");
  const { AnimatePresence, motion } = require("framer-motion");
  const { Plus, Minus } = require("lucide-react");
  const [open, setOpen] = useState(defaultOpen || false);

  return (
    <div className="border-b border-[#E5E5E9]">
      <button
        className="w-full flex items-center justify-between py-5 text-left gap-4 group"
        onClick={() => setOpen(!open)}
      >
        <span className="text-sm font-semibold group-hover:text-[#E30A13] transition-colors">
          {faq.q}
        </span>
        <div
          className={`flex-shrink-0 w-7 h-7 rounded-full border flex items-center justify-center transition-all ${open ? "bg-[#E30A13] border-[#E30A13] text-white" : "border-[#E5E5E9] text-[#555556]"}`}
        >
          {open ? <Minus size={12} /> : <Plus size={12} />}
        </div>
      </button>
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="overflow-hidden"
          >
            <p className="pb-5 text-sm text-[#555556] leading-relaxed">
              {faq.a}
            </p>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
