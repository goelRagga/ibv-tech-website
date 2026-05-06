"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import Link from "next/link";
import { MapPin, Briefcase, Clock } from "lucide-react";
import { HubPageHeroSection } from "@/components/sections/services/HubPageHeroSection";
import { ThreePillarsSection } from "@/components/sections/services/ThreePillarsSection";
import type { Pillar } from "@/components/sections/services/ThreePillarsSection";
import { FAQSection } from "@/components/sections/FAQSection";
import { ContactSection } from "@/components/sections/ContactSection";
import { Button } from "@/components/ui/Button";

// ─── DATA ────────────────────────────────────────────────────────────────────


const careerBenefits = [
  {
    number: "01",
    title: "Learning & Mentorship",
    desc: "Work alongside experienced professionals across consulting, development, and research, gaining practical exposure and structured guidance.",
  },
  {
    number: "02",
    title: "Real-World Impact",
    desc: "Contribute to projects that directly influence business decisions, performance, and growth across industries.",
  },
  {
    number: "03",
    title: "Growth Opportunities",
    desc: "Take on increasing responsibilities with clear opportunities to grow based on performance and contribution.",
  },
  {
    number: "04",
    title: "Collaborative",
    desc: "Work in a team that values clarity, communication, and aligned problem-solving across functions.",
  },
  {
    number: "05",
    title: "Structured Approach",
    desc: "Be part of a process-driven environment that focuses on clarity, efficiency, and measurable outcomes.",
  },
];

const openPositions = [
  {
    title: "Market Research & Data Analyst",
    location: "Jaipur, Rajasthan",
    type: "In-House",
    employment: "Full Time",
    slug: "market-research-data-analyst",
  },
  {
    title: "Python Developer",
    location: "Jaipur, Rajasthan",
    type: "In-House",
    employment: "Full Time",
    slug: "python-developer",
  },
  {
    title: "Business Development Executive",
    location: "Jaipur, Rajasthan",
    type: "In-House",
    employment: "Full Time",
    slug: "business-development-executive",
  },
];

const careerFaqs = [
  {
    q: "What kind of work will I be doing at IBV Technologies?",
    a: "You'll work on real business challenges across strategy, research, technology, and growth. We focus on meaningful projects that directly influence business decisions and performance across industries.",
  },
  {
    q: "Is there a structured learning environment?",
    a: "Yes. We place a strong emphasis on structured learning and mentorship. You'll work alongside experienced professionals and receive practical exposure and guided development.",
  },
  {
    q: "What growth opportunities are available?",
    a: "Growth at IBV Technologies is performance-based. You'll take on increasing responsibilities over time, with clear pathways to advance based on your contribution and results.",
  },
  {
    q: "Are all roles based in Jaipur?",
    a: "Our current open positions are all in-house roles based in Jaipur, Rajasthan. We believe in building a collaborative, co-located team culture.",
  },
  {
    q: "How can I apply for a position?",
    a: "You can apply directly through our open positions section on this page. Click 'Apply' on any role to view full details and submit your application.",
  },
];

// ─── MARQUEE SECTION ─────────────────────────────────────────────────────────

function CareerBenefitsMarquee() {
  const doubled = [...careerBenefits, ...careerBenefits];
  return (
    <section className="overflow-hidden border-y border-[#e5e5e5] bg-white py-0">
      <div className="flex w-max animate-marquee">
        {doubled.map((benefit, i) => (
          <div
            key={i}
            className="w-[240px] md:w-[280px] flex-shrink-0 border-r border-[#e5e5e5] px-4 py-5 md:py-6"
          >
            <p className="mb-3 md:mb-4 font-hanken text-[13px] font-semibold tracking-wide text-[#cc1f1f]">
              {benefit.number}
            </p>
            <h3 className="mb-3 md:mb-5 font-hanken text-[18px] md:text-[20px] font-medium leading-snug text-[#111112]">
              {benefit.title}
            </h3>
            <p className="font-hanken text-[13px] md:text-[13.5px] leading-relaxed text-[#555555]">
              {benefit.desc}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}

// ─── JOB ROW ─────────────────────────────────────────────────────────────────

function JobRow({
  job,
  index,
}: {
  job: (typeof openPositions)[0];
  index: number;
}) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 24 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.5, delay: index * 0.1, ease: "easeOut" }}
      className="flex flex-col md:flex-row md:items-center gap-3 md:gap-5 border-t border-[#d9d9d9] py-3 md:py-2"
    >
      <p className="md:min-w-[260px] md:flex-shrink-0 font-hanken text-[16px] md:text-[17px] font-medium text-[#111112]">
        {job.title}
      </p>

      <div className="flex flex-1 flex-wrap gap-2 md:gap-2.5">
        <span className="flex items-center gap-1.5 rounded-full bg-white px-3 md:px-3.5 py-1 md:py-1.5 font-hanken text-[12px] md:text-[13px] text-[#333]">
          <MapPin size={14} />
          {job.location}
        </span>
        <span className="flex items-center gap-1.5 rounded-full bg-white px-3 md:px-3.5 py-1 md:py-1.5 font-hanken text-[12px] md:text-[13px] text-[#333]">
          <Briefcase size={14} />
          {job.type}
        </span>
        <span className="flex items-center gap-1.5 rounded-full bg-white px-3 md:px-3.5 py-1 md:py-1.5 font-hanken text-[12px] md:text-[13px] text-[#333]">
          <Clock size={14} />
          {job.employment}
        </span>
      </div>

      {/* Link passes job slug as the [id] param to the detail page */}
      <Link href={`/careers/${job.slug}`} className="md:min-w-[150px]">
        <Button variant="black" className="w-full">
          Apply
        </Button>
      </Link>
    </motion.div>
  );
}

// ─── OPEN POSITIONS SECTION ───────────────────────────────────────────────────

function OpenPositionsSection() {
  const headerRef = useRef(null);
  const headerInView = useInView(headerRef, { once: true });

  return (
    <section className="bg-[#f5f5f5] px-4 md:px-6 py-8 md:py-10">
      <motion.div
        ref={headerRef}
        initial={{ opacity: 0, y: 20 }}
        animate={headerInView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.55, ease: "easeOut" }}
        className="mb-2 flex flex-col lg:flex-row items-start gap-6 lg:gap-28"
      >
        <div className="mb-2 lg:mb-5 flex items-center gap-2.5">
          <span className="text-[#cc1f1f]">↳</span>
          <span className="font-hanken text-[12px] font-semibold tracking-[0.08em] text-[#111112]">
            OPEN <span className="text-[#cc1f1f]">POSITIONS</span>
          </span>
        </div>
        <div className="w-full">
          <div className="flex flex-col lg:flex-row lg:gap-32 lg:items-start mb-6 gap-4">
            <h2 className="max-w-[580px] font-hanken text-[28px] md:text-[40px] lg:text-[56px] font-normal leading-[1.1] text-[#111112]">
              Join a team solving real business problems with clarity and
              structure
            </h2>
            <button className="mt-0 lg:mt-2 self-start rounded-full bg-[#cc1f1f] px-6 md:px-7 py-3 md:py-3.5 font-hanken text-[14px] font-medium text-white transition-opacity hover:opacity-85">
              Reach Us
            </button>
          </div>

          <div>
            {openPositions.map((job, i) => (
              <JobRow key={job.slug} job={job} index={i} />
            ))}
            <div className="border-t border-[#d9d9d9]" />
          </div>
        </div>
      </motion.div>
    </section>
  );
}

// ─── PAGE ────────────────────────────────────────────────────────────────────

export default function CareersPage() {
  return (
    <div className="font-inter bg-white text-[#111112]">
      <HubPageHeroSection
        tagline1=""
        tagline2=""
        headlineTitle="Careers"
        description="Build your career with a team focused on solving real business problems through strategy, technology, and data-driven thinking."
        backgroundImage="https://res.cloudinary.com/dm8jtnzdi/image/upload/q_auto/f_auto/v1777657105/IBV_Careers_Banner_2_f9elwh.png"
        maxHeight="200px"
      />

      <ThreePillarsSection
        labelPrefix="CAREER"
        labelHighlight="BENEFITS"
        heading="Looking for a career where your work creates real impact? At IBV Technologies, you'll work on meaningful business challenges across strategy, research, technology, and growth."
        ctaText="Get in Touch"
        ctaHref="/contact"
        paragraph="We focus on building practical solutions, encouraging structured thinking, and creating an environment where individuals can learn, contribute, and grow consistently."
      />

      <CareerBenefitsMarquee />
      <OpenPositionsSection />

      <FAQSection heading="Answering Few of your questions" faqs={careerFaqs} />
      <ContactSection />
    </div>
  );
}