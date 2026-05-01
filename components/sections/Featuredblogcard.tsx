"use client";

import { useRef, useState, useEffect } from "react";
import { motion } from "framer-motion";
import Link from "next/link";

// ─── Props ────────────────────────────────────────────────────────────────────
export interface FeaturedBlogCardProps {
  category: string;
  date: string;
  title: string;
  href: string;
  image: string;
  imageAlt?: string;
  ctaLabel?: string;
}

// ─── useInView ────────────────────────────────────────────────────────────────
function useInView(ref: React.RefObject<Element>, threshold = 0.2) {
  const [inView, setInView] = useState(false);
  useEffect(() => {
    if (!ref.current) return;
    const obs = new IntersectionObserver(
      ([e]) => {
        if (e.isIntersecting) { setInView(true); obs.disconnect(); }
      },
      { threshold }
    );
    obs.observe(ref.current);
    return () => obs.disconnect();
  }, [ref, threshold]);
  return inView;
}

const DEFAULT_IMAGE =
  "https://res.cloudinary.com/dm8jtnzdi/image/upload/q_auto/f_auto/v1776365302/computer_lkd2wc.png";

// ─── FeaturedBlogCard ─────────────────────────────────────────────────────────
export function FeaturedBlogCard({
  category,
  date,
  title,
  href,
  image = DEFAULT_IMAGE,
  imageAlt = "",
  ctaLabel = "Read Now",
}: FeaturedBlogCardProps) {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref as React.RefObject<Element>);
  const EASE = [0.22, 1, 0.36, 1] as const;

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 28 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.75, ease: EASE }}
      style={{
        padding:"40px",
        background:"#111"
      }}
    >
      <Link href={href} className="group block">
        <div
          style={{
            background: "#222222",
            borderRadius: "16px",
            overflow: "hidden",
            display: "grid",
            gridTemplateColumns: "55% 45%",
            minHeight: "clamp(280px, 32vw, 400px)",
            border: "1px solid rgba(255,255,255,0.07)",
            padding:"10"
          }}
        >
          {/* ── LEFT: text content ── */}
          <div
            style={{
              padding: "clamp(24px, 3vw, 40px)",
              display: "flex",
              flexDirection: "column",
              justifyContent: "space-between",
            }}
          >
            {/* Top: category + date */}
            <div>
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: "14px",
                  marginBottom: "clamp(16px, 2.5vw, 28px)",
                }}
              >
                {/* Category pill — white border, red text */}
                <span
                  style={{
                    fontSize: "10px",
                    fontWeight: 700,
                    letterSpacing: "0.12em",
                    textTransform: "uppercase",
                    color: "#E30A13",
                    border: "1.5px solid white",
                    borderRadius: "999px",
                    padding: "5px 14px",
                    whiteSpace: "nowrap",
                    background:"#fff"
                  }}
                >
                  {category}
                </span>

                {/* Date */}
                <span
                  style={{
                    fontSize: "11px",
                    letterSpacing: "0.1em",
                    textTransform: "uppercase",
                    color: "rgba(255,255,255,0.5)",
                    whiteSpace: "nowrap",
                  }}
                >
                  {date}
                </span>
              </div>

              {/* Title */}
              <h2
                className="group-hover:text-[#E30A13] transition-colors duration-300"
                style={{
                  fontSize: "clamp(20px, 2.4vw, 32px)",
                  fontWeight: 700,
                  color: "white",
                  lineHeight: 1.3,
                  letterSpacing: "-0.01em",
                }}
              >
                {title}
              </h2>
            </div>

            {/* Bottom: CTA button */}
            <div>
              <span
                style={{
                  display: "inline-block",
                  background: "#E30A13",
                  color: "white",
                  fontSize: "13px",
                  fontWeight: 600,
                  padding: "10px 24px",
                  borderRadius: "999px",
                }}
              >
                {ctaLabel}
              </span>
            </div>
          </div>

          {/* ── RIGHT: image with inset on top/right/bottom ── */}
          <div style={{ overflow: "hidden", position: "relative", padding: "12px 12px 12px 0" }}>
            <img
              src={image}
              alt={imageAlt || title}
              style={{
                width: "100%",
                height: "100%",
                objectFit: "cover",
                display: "block",
                borderRadius: "10px",
              }}
            />
          </div>
        </div>
      </Link>
    </motion.div>
  );
}