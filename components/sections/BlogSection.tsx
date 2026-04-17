"use client";

import Link from "next/link";
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
}

export interface BlogSectionProps {
  label?: string;
  heading?: React.ReactNode;
  ctaText?: string;
  ctaHref?: string;
  blogs?: BlogPost[];
}

const defaultBlogs: BlogPost[] = [
  {
    id: 1,
    category: "Digital Agency",
    date: "26th March 2026",
    title: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    href: "/insights/blogs/blog-1",
    image: "https://res.cloudinary.com/dm8jtnzdi/image/upload/q_auto/f_auto/v1776365302/computer_lkd2wc.png",
  },
  {
    id: 2,
    category: "Digital Agency",
    date: "26th March 2026",
    title: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    href: "/insights/blogs/blog-2",
    image: "https://res.cloudinary.com/dm8jtnzdi/image/upload/q_auto/f_auto/v1776365302/computer_lkd2wc.png",
  },
  {
    id: 3,
    category: "Digital Agency",
    date: "26th March 2026",
    title: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    href: "/insights/blogs/blog-3",
    image: "https://res.cloudinary.com/dm8jtnzdi/image/upload/q_auto/f_auto/v1776365302/computer_lkd2wc.png",
  },
];

function BlogCard({ blog }: { blog: BlogPost }) {
  return (
    <motion.div variants={staggerItem}>
      <Link href={blog.href} className="group block">
        <div className="grid grid-cols-[1fr_300px] items-center gap-10 py-4 border-b border-[#D8D8D8]">
          {/* ── LEFT COLUMN ── */}
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

          {/* ── RIGHT COLUMN — Image ── */}
          <div className="w-[300px] h-[190px] rounded-2xl overflow-hidden bg-[#C8C8C8] flex-shrink-0">
            {blog.image ? (
              <img
                src={blog.image}
                alt={blog.title}
                className="w-full h-full object-cover"
              />
            ) : (
              <div className="w-full h-full bg-[#B0B0B0]" />
            )}
          </div>
        </div>
      </Link>
    </motion.div>
  );
}

export function BlogSection({
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
}: BlogSectionProps) {
  return (
    <section className="bg-[#F5f5f5] pt-[60px]">
      <div className="px-8">
        <div className="flex justify-between items-start gap-10 ">
          {/* Label */}
          <div className="pt-2">
            <AnimateOnScroll>
              <div className="flex items-center gap-1.5">
                <svg
                  className="text-[#E30A13] w-3 h-3 mt-px"
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
                  {label}
                </span>
              </div>
            </AnimateOnScroll>
          </div>

          {/* ── BLOG LIST ── */}
          <div className="border-l border-[#D8D8D8] pl-4 mb-4">
            <div className="flex justify-between">
              {/* Heading */}
              <div>
                <AnimateOnScroll delay={0.1}>
                  <h2 className="font-serif text-[44px] font-normal leading-[1.15] tracking-[-0.01em] text-[#111112]">
                    {heading}
                  </h2>
                </AnimateOnScroll>
              </div>

              {/* CTA Button */}
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
                <BlogCard key={blog.id} blog={blog} />
              ))}
            </StaggerContainer>
          </div>
        </div>
      </div>
    </section>
  );
}
