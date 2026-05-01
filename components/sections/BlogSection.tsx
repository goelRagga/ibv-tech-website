"use client";

import Link from "next/link";
import { useState } from "react";
import { motion } from "framer-motion";
import {
  AnimateOnScroll,
  StaggerContainer,
  staggerItem,
} from "@/components/ui/AnimateOnScroll";

export interface BlogPost {
  id: number;
  category: string;
  date: string;
  title: string;
  href: string;
  image: string;
  authorImage?: string;
}

export interface BlogSectionProps {
  /** 'vertical' = existing row layout (default), 'grid' = 3-col card grid */
  layout?: "vertical" | "grid";
  label?: string;
  heading?: React.ReactNode;
  ctaText?: string;
  ctaHref?: string;
  blogs?: BlogPost[];
  /** Grid mode: how many blogs to show initially before "Load More" */
  initialCount?: number;
}

const defaultBlogs: BlogPost[] = [
  {
    id: 1,
    category: "Digital Agency",
    date: "26th March 2026",
    title: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    href: "/insights/blogs/blog-1",
    image:
      "https://res.cloudinary.com/dm8jtnzdi/image/upload/q_auto/f_auto/v1776365302/computer_lkd2wc.png",
  },
  {
    id: 2,
    category: "Digital Agency",
    date: "26th March 2026",
    title: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    href: "/insights/blogs/blog-2",
    image:
      "https://res.cloudinary.com/dm8jtnzdi/image/upload/q_auto/f_auto/v1776365302/computer_lkd2wc.png",
  },
  {
    id: 3,
    category: "Digital Agency",
    date: "26th March 2026",
    title: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    href: "/insights/blogs/blog-3",
    image:
      "https://res.cloudinary.com/dm8jtnzdi/image/upload/q_auto/f_auto/v1776365302/computer_lkd2wc.png",
  },
  {
    id: 4,
    category: "Digital Agency",
    date: "26th March 2026",
    title: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    href: "/insights/blogs/blog-4",
    image:
      "https://res.cloudinary.com/dm8jtnzdi/image/upload/q_auto/f_auto/v1776365302/computer_lkd2wc.png",
  },
  {
    id: 5,
    category: "Digital Agency",
    date: "26th March 2026",
    title: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    href: "/insights/blogs/blog-5",
    image:
      "https://res.cloudinary.com/dm8jtnzdi/image/upload/q_auto/f_auto/v1776365302/computer_lkd2wc.png",
  },
  {
    id: 6,
    category: "Digital Agency",
    date: "26th March 2026",
    title: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    href: "/insights/blogs/blog-6",
    image:
      "https://res.cloudinary.com/dm8jtnzdi/image/upload/q_auto/f_auto/v1776365302/computer_lkd2wc.png",
  },
];

// ─── Vertical card (existing layout) ─────────────────────────────────────────
function VerticalBlogCard({ blog }: { blog: BlogPost }) {
  return (
    <motion.div variants={staggerItem}>
      <Link href={blog.href} className="group block">
        <div className="grid grid-cols-[1fr_300px] items-center gap-10 py-4 border-b border-[#D8D8D8]">
          <div className="flex flex-col">
            <div className="flex items-center gap-3 mb-3">
              <span className="bg-white text-[#E30A13] text-[10px] font-bold tracking-[0.13em] uppercase px-3 py-1 rounded-full">
                {blog.category}
              </span>
              <span className="text-[10px] uppercase tracking-[0.12em] text-[#555556]">
                {blog.date}
              </span>
            </div>
            <h3 className="font-serif text-[26px] font-semibold leading-[1.3] text-[#111112] mb-7 max-w-[460px] group-hover:text-[#E30A13] transition-colors">
              {blog.title}
            </h3>
            <div>
              <span className="inline-block bg-[#111112] text-white text-[13px] font-semibold px-[26px] py-[10px] rounded-full group-hover:bg-[#E30A13] transition-colors">
                Read Now
              </span>
            </div>
          </div>
          <div className="w-[300px] h-[190px] rounded-2xl overflow-hidden bg-[#C8C8C8] flex-shrink-0">
            {blog.image ? (
              <img src={blog.image} alt={blog.title} className="w-full h-full object-cover" />
            ) : (
              <div className="w-full h-full bg-[#B0B0B0]" />
            )}
          </div>
        </div>
      </Link>
    </motion.div>
  );
}

// ─── Grid card (new layout) ───────────────────────────────────────────────────
function GridBlogCard({ blog, delay }: { blog: BlogPost; delay: number }) {
  const EASE = [0.22, 1, 0.36, 1] as const;
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: EASE, delay }}
    >
      <Link href={blog.href} className="group block">
        {/* Image */}
        <div
          className="w-full overflow-hidden rounded-2xl bg-[#E0E0E0] mb-4"
          style={{ height: "clamp(180px, 18vw, 240px)" }}
        >
          {blog.image ? (
            <img
              src={blog.image}
              alt={blog.title}
              className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
            />
          ) : (
            <div className="w-full h-full bg-[#C8C8C8]" />
          )}
        </div>

        {/* Category + date row */}
        <div className="flex items-center justify-between mb-3">
          <span
            className="text-[#E30A13] font-bold uppercase tracking-[0.1em] border border-[#E30A13] rounded-full px-3 py-0.5"
            style={{ fontSize: "10px" }}
          >
            {blog.category}
          </span>
          <span
            className="text-[#888] uppercase tracking-[0.1em]"
            style={{ fontSize: "10px" }}
          >
            {blog.date}
          </span>
        </div>

        {/* Title */}
        <h3
          className="font-bold text-[#111112] leading-snug group-hover:text-[#E30A13] transition-colors"
          style={{ fontSize: "clamp(15px, 1.4vw, 18px)" }}
        >
          {blog.title}
        </h3>
      </Link>
    </motion.div>
  );
}

// ─── BlogSection ──────────────────────────────────────────────────────────────
export function BlogSection({
  layout = "vertical",
  label = "Blogs and Articles",
  heading = (
    <>
      Thoughts, trends, and
      <br />
      practical business
      <br />
      insights
    </>
  ),
  ctaText = "Read All Blogs",
  ctaHref = "/insights/blogs",
  blogs = defaultBlogs,
  initialCount = 6,
}: BlogSectionProps) {
  const [visibleCount, setVisibleCount] = useState(initialCount);
  const visibleBlogs = blogs.slice(0, visibleCount);
  const hasMore = visibleCount < blogs.length;

  // ── GRID LAYOUT ─────────────────────────────────────────────────────────────
  if (layout === "grid") {
    // Split label — last word red
    const labelWords = label.trim().split(" ");
    const labelRed = labelWords.pop();
    const labelPlain = labelWords.join(" ");

    return (
      <section className="bg-white" style={{ padding: "clamp(40px, 5vw, 72px) 0" }}>
        <div className="max-w-[1344px] mx-auto px-6 lg:px-12">

          {/* Eyebrow */}
          <div className="flex items-center gap-2 mb-8">
            <svg width="18" height="14" viewBox="0 0 18 14" fill="none">
              <path
                d="M1 7H17M11 1L17 7L11 13"
                stroke="#111112"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
            <span
              className="font-bold uppercase"
              style={{ fontSize: "11px", letterSpacing: "0.15em", color: "#111112" }}
            >
              {labelPlain}{" "}
              <span style={{ color: "#E30A13" }}>{labelRed}</span>
            </span>
          </div>

          {/* 3-col grid */}
          <div
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3"
            style={{ gap: "clamp(24px, 3vw, 40px) clamp(16px, 2vw, 28px)" }}
          >
            {visibleBlogs.map((blog, i) => (
              <GridBlogCard key={blog.id} blog={blog} delay={i * 0.06} />
            ))}
          </div>

          {/* Load More */}
          {hasMore && (
            <div className="flex justify-center mt-12">
              <button
                onClick={() => setVisibleCount((c) => c + initialCount)}
                className="inline-flex items-center justify-center font-semibold text-white transition-colors duration-200"
                style={{
                  background: "#E30A13",
                  fontSize: "14px",
                  padding: "12px 36px",
                  borderRadius: "999px",
                }}
                onMouseEnter={(e) => (e.currentTarget.style.background = "#c8000a")}
                onMouseLeave={(e) => (e.currentTarget.style.background = "#E30A13")}
              >
                Load More
              </button>
            </div>
          )}
        </div>
      </section>
    );
  }

  // ── VERTICAL LAYOUT (default — unchanged) ───────────────────────────────────
  return (
    <section className="bg-[#F5f5f5] pt-[60px]">
      <div className="px-8">
        <div className="flex justify-between items-start gap-10">
          {/* Label */}
          <div className="pt-2">
            <AnimateOnScroll>
              <div className="flex items-center gap-1.5">
                <svg
                  className="text-[#E30A13] w-3 h-3 mt-px"
                  viewBox="0 0 12 12"
                  fill="none"
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
                  {label}
                </span>
              </div>
            </AnimateOnScroll>
          </div>

          {/* Blog list */}
          <div className="border-l border-[#D8D8D8] pl-4 mb-4">
            <div className="flex justify-between">
              <div>
                <AnimateOnScroll delay={0.1}>
                  <h2 className="font-serif text-[44px] font-normal leading-[1.15] tracking-[-0.01em] text-[#111112]">
                    {heading}
                  </h2>
                </AnimateOnScroll>
              </div>
              <div className="pt-1.5">
                <AnimateOnScroll delay={0.2} direction="right">
                  <Link
                    href={ctaHref}
                    className="inline-block bg-[#E30A13] text-white text-[13px] font-semibold px-6 py-1 rounded-full hover:bg-[#c50910] transition-colors whitespace-nowrap"
                  >
                    {ctaText}
                  </Link>
                </AnimateOnScroll>
              </div>
            </div>
            <StaggerContainer staggerDelay={0.1}>
              {blogs.map((blog) => (
                <VerticalBlogCard key={blog.id} blog={blog} />
              ))}
            </StaggerContainer>
          </div>
        </div>
      </div>
    </section>
  );
}