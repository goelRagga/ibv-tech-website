"use client";

import { HubPageHeroSection } from "@/components/sections/services/HubPageHeroSection";
import { BlogSection } from "@/components/sections/BlogSection";
import {
  AnimateOnScroll,
  StaggerContainer,
  staggerItem,
} from "@/components/ui/AnimateOnScroll";
import { motion } from "framer-motion";
import { getBlogSectionFormat } from "@/lib/blog-data";
import { FeaturedBlogCard } from "@/components/sections/Featuredblogcard";

/* ── Topic card data ─────────────────────────────────────────────────────────── */
const topics = [
  {
    label: "Digital Strategy",
    desc: "Frameworks for navigating digital transformation and competitive positioning.",
    count: "12 articles",
    icon: (
      <svg
        width="20"
        height="20"
        viewBox="0 0 24 24"
        fill="none"
        stroke="#E30A13"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <rect x="2" y="3" width="20" height="14" rx="2" />
        <path d="M8 21h8M12 17v4" />
      </svg>
    ),
  },
  {
    label: "Business Growth",
    desc: "Scaling models, expansion strategies, and revenue levers that move the needle.",
    count: "8 articles",
    icon: (
      <svg
        width="20"
        height="20"
        viewBox="0 0 24 24"
        fill="none"
        stroke="#E30A13"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <polyline points="23 6 13.5 15.5 8.5 10.5 1 18" />
        <polyline points="17 6 23 6 23 12" />
      </svg>
    ),
  },
  {
    label: "Technology",
    desc: "Tools, platforms, and emerging technology reshaping how industries operate.",
    count: "15 articles",
    icon: (
      <svg
        width="20"
        height="20"
        viewBox="0 0 24 24"
        fill="none"
        stroke="#E30A13"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <polyline points="16 18 22 12 16 6" />
        <polyline points="8 6 2 12 8 18" />
      </svg>
    ),
  },
  {
    label: "Marketing",
    desc: "Brand, content, and campaign thinking that cuts through noise and builds trust.",
    count: "10 articles",
    icon: (
      <svg
        width="20"
        height="20"
        viewBox="0 0 24 24"
        fill="none"
        stroke="#E30A13"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path d="M22 12h-4l-3 9L9 3l-3 9H2" />
      </svg>
    ),
  },
];

/* ── Topics Section ──────────────────────────────────────────────────────────── */
function TopicsSection() {
  return (
    <section className="bg-[#f7f7f7] py-14 px-8">
      <div className="max-w-[95vw] mx-auto">
        {/* Label */}
        <AnimateOnScroll>
          <div className="flex items-center gap-1.5 mb-8">
            <svg
              className="text-[#E30A13] w-3 h-3"
              viewBox="0 0 12 12"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M2 2 L2 8 L10 8"
                stroke="currentColor"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M7 5.5 L10 8 L7 10.5"
                stroke="currentColor"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
            <span className="text-[10px] font-bold tracking-[0.12em] uppercase text-[#111112]">
              Browse by Topic
            </span>
          </div>
        </AnimateOnScroll>

        {/* Cards */}
        <StaggerContainer staggerDelay={0.08}>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {topics.map((topic) => (
              <motion.div
                key={topic.label}
                variants={staggerItem}
                className="bg-white rounded-xl p-6 border border-[#E8E8E8] flex flex-col gap-3 group hover:border-[#E30A13] transition-colors duration-200 cursor-default"
              >
                <div className="w-10 h-10 rounded-full bg-[#FFF0F0] flex items-center justify-center flex-shrink-0 group-hover:bg-[#FFE0E0] transition-colors">
                  {topic.icon}
                </div>
                <h3 className="text-[#111112] font-semibold text-[15px] leading-snug">
                  {topic.label}
                </h3>
                <p className="text-[#666] text-[12px] leading-relaxed flex-1">
                  {topic.desc}
                </p>
                <span className="text-[10px] uppercase tracking-[0.12em] font-bold text-[#E30A13]">
                  {topic.count}
                </span>
              </motion.div>
            ))}
          </div>
        </StaggerContainer>
      </div>
    </section>
  );
}

/* ── Page ────────────────────────────────────────────────────────────────────── */
export default function InsightsBlogsPage() {
  const blogs = getBlogSectionFormat();

  return (
    <div className="bg-white text-[#111112]">
      <HubPageHeroSection
        tagline1="Ideas worth sharing."
        tagline2="Insights that drive action."
        headlineTitle="Insights"
        description="Practical thinking on digital strategy, business growth, and what is shaping the industries we work in."
        backgroundImage="https://res.cloudinary.com/dm8jtnzdi/image/upload/q_auto/f_auto/v1776710665/BC_BANNER_smt17g.png"
      />

      <FeaturedBlogCard
        category="Digital Agency"
        date="26th March 2026"
        title="Lorem ipsum dolor sit amet, consectetur adipiscing elit."
        href="/insights/blogs/blog-1"
        image="https://res.cloudinary.com/dm8jtnzdi/image/upload/q_auto/f_auto/v1776365302/computer_lkd2wc.png"
        ctaLabel="Read Now"
      />

      <BlogSection
        layout="grid"
        label="All Blogs"
        blogs={blogs}
        initialCount={6}
      />
    </div>
  );
}
