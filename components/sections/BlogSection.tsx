'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';
import { AnimateOnScroll, StaggerContainer, staggerItem } from '@/components/ui/AnimateOnScroll';

const blogs = [
  {
    id: 1,
    category: 'Digital Agency',
    date: '26th March 2026',
    title: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
    href: '/insights/blogs/blog-1',
    image: null,
  },
  {
    id: 2,
    category: 'Digital Agency',
    date: '26th March 2026',
    title: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
    href: '/insights/blogs/blog-2',
    image: null,
  },
  {
    id: 3,
    category: 'Digital Agency',
    date: '26th March 2026',
    title: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
    href: '/insights/blogs/blog-3',
    image: null,
  },
];

function BlogCard({ blog, index }: { blog: typeof blogs[0]; index: number }) {
  return (
    <motion.div variants={staggerItem}>
      <Link href={blog.href} className="group block">
        <div className="grid grid-cols-1 sm:grid-cols-12 gap-6 py-8 border-b border-[#E5E5E9]">
          {/* Image placeholder */}
          <div className="sm:col-span-4 lg:col-span-3">
            <div className="aspect-[4/3] bg-[#E5E5E9] rounded-xl overflow-hidden group-hover:bg-[#D4D4DA] transition-colors">
              <div className="w-full h-full flex items-center justify-center">
                <div className="w-8 h-8 rounded-full bg-[#E30A13] opacity-30" />
              </div>
            </div>
          </div>

          {/* Content */}
          <div className="sm:col-span-8 lg:col-span-9 flex flex-col justify-between">
            <div>
              <div className="flex items-center gap-3 mb-3">
                <span className="text-[10px] uppercase tracking-[0.15em] font-medium text-[#A8A8BC]">
                  {blog.category}
                </span>
                <span className="text-[#D4D4DA]">·</span>
                <span className="text-[10px] uppercase tracking-[0.12em] text-[#A8A8BC]">{blog.date}</span>
              </div>
              <h3 className="text-base font-semibold leading-snug group-hover:text-[#E30A13] transition-colors">
                {blog.title}
              </h3>
            </div>
            <div className="mt-4">
              <span className="inline-flex items-center gap-1.5 text-sm font-semibold text-[#E30A13]">
                Read Now
                <svg className="w-3 h-3 translate-x-0 group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M9 5l7 7-7 7" />
                </svg>
              </span>
            </div>
          </div>
        </div>
      </Link>
    </motion.div>
  );
}

export function BlogSection() {
  return (
    <section className="section-padding bg-[#F6F6F8]">
      <div className="container-ibv">
        {/* Header */}
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 mb-12">
          <div>
            <AnimateOnScroll>
              <span className="tag mb-3">Blogs and Articles</span>
            </AnimateOnScroll>
            <AnimateOnScroll delay={0.1}>
              <h2 className="text-3xl lg:text-4xl font-bold leading-tight tracking-tight mt-2">
                Thoughts, trends, and<br />practical business insights
              </h2>
            </AnimateOnScroll>
          </div>
          <AnimateOnScroll delay={0.2} direction="right">
            <Link href="/insights/blogs" className="btn-black whitespace-nowrap">
              Read All Blogs
            </Link>
          </AnimateOnScroll>
        </div>

        {/* Blog list */}
        <StaggerContainer staggerDelay={0.1}>
          {blogs.map((blog, i) => (
            <BlogCard key={blog.id} blog={blog} index={i} />
          ))}
        </StaggerContainer>
      </div>
    </section>
  );
}
