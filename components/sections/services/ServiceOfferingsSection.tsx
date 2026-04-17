"use client";

import { useRef, useState, useEffect } from "react";
import { motion } from "framer-motion";
import Link from "next/link";

// ─── Types ────────────────────────────────────────────────────────────────────
export interface ServiceOffering {
  number: string; // e.g. '01.'
  title: string;
  desc: string;
  tags: string[];
  href: string;
  image: string; // URL
  ctaLabel?: string; // defaults to 'Explore Service'
}

export interface ServiceOfferingsSectionProps {
  headingPrefix?: string; // defaults to 'Our'
  headingHighlight: string; // the red part e.g. 'consulting & strategy solutions'
  headingSuffix?: string; // defaults to 'designed to drive clarity, growth, and measurable outcomes'
  services: ServiceOffering[];
  bgColor?: string; // defaults to '#F6F6F8'
}

// ─── useInView ────────────────────────────────────────────────────────────────
function useInView(ref: React.RefObject<Element>, threshold = 0.15) {
  const [inView, setInView] = useState(false);
  useEffect(() => {
    if (!ref.current) return;
    const obs = new IntersectionObserver(
      ([e]) => {
        if (e.isIntersecting) {
          setInView(true);
          obs.disconnect();
        }
      },
      { threshold },
    );
    obs.observe(ref.current);
    return () => obs.disconnect();
  }, [ref, threshold]);
  return inView;
}

// ─── Single service card ──────────────────────────────────────────────────────
function ServiceCard({
  service,
  index,
  sectionInView,
}: {
  service: ServiceOffering;
  index: number;
  sectionInView: boolean;
}) {
  const EASE = [0.22, 1, 0.36, 1] as const;

  return (
    <motion.div
      initial={{ opacity: 0, y: 28 }}
      animate={sectionInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.75, ease: EASE, delay: 0.1 + index * 0.12 }}
      className="bg-[#F6F6F8] rounded-2xl overflow-hidden"
      style={{ border: "1px solid #EBEBEB" }}
    >
      <div className="flex flex-col lg:flex-row items-stretch lg:justify-between p-4 w-full" >
        {/* Big number */}
        <div
          className="font-bold text-[#111112] leading-none flex-shrink-0 select-none"
          style={{
            fontSize: "clamp(48px, 5vw, 72px)",
            letterSpacing: "-0.03em",
            lineHeight: 1,
            paddingTop: "2px",
          }}
        >
          {service.number}
        </div>

        {/* Title, desc, tags, cta */}
        <div className="flex flex-col flex-1 ml-8">
          <h3
            className="font-bold text-[#111112] mb-2 leading-tight"
            style={{ fontSize: "clamp(17px, 1.6vw, 22px)" }}
          >
            {service.title}
          </h3>

          <p
            className="text-[#666] leading-relaxed mb-5"
            style={{ fontSize: "clamp(12px, 1vw, 14px)", maxWidth: "380px" }}
          >
            {service.desc}
          </p>

          {/* Tags */}
          <div className="flex flex-wrap gap-2 mb-6">
            {service.tags.map((tag) => (
              <span
                key={tag}
                className="font-semibold uppercase tracking-widest"
                style={{
                  fontSize: "10px",
                  color: "#E30A13",
                  borderRadius: "999px",
                  padding: "4px 10px",
                  letterSpacing: "0.08em",
                  background:"#fff",
                  display: "inline-block",
                }}
              >
                {tag}
              </span>
            ))}
          </div>

          {/* CTA button */}
          <div>
            <Link
              href={service.href}
              className="inline-block font-semibold text-white bg-[#111112] rounded-full transition-all hover:bg-[#E30A13]"
              style={{ fontSize: "13px", padding: "10px 22px" }}
            >
              {service.ctaLabel ?? "Explore Service"}
            </Link>
          </div>
        </div>

        {/* Right: image */}
    
          <img
            src={service.image}
            alt={service.title}
            className="w-[340px] h-[300px] object-cover block rounded-xl"
            
          />
        
      </div>
    </motion.div>
  );
}

// ─── ServiceOfferingsSection ──────────────────────────────────────────────────
export function ServiceOfferingsSection({
  headingPrefix = "Our",
  headingHighlight,
  headingSuffix = "designed to drive clarity, growth, and measurable outcomes",
  services,
  bgColor = "#fff",
}: ServiceOfferingsSectionProps) {
  const sectionRef = useRef<HTMLDivElement>(null);
  const inView = useInView(sectionRef as React.RefObject<Element>);
  const EASE = [0.22, 1, 0.36, 1] as const;

  return (
    <section
      ref={sectionRef}
      className="section-padding"
      style={{ background: bgColor }}
    >
      <div className="container-ibv">
        {/* Section heading */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.75, ease: EASE }}
          className="text-center mb-12"
        >
          <h2
            className="font-semibold text-[#111112] leading-tight"
            style={{
              fontSize: "clamp(22px, 3vw, 38px)",
              maxWidth: "800px",
              margin: "0 auto",
              fontFamily: "var(--font-serif)",
            }}
          >
            {headingPrefix}{" "}
            <span style={{ color: "#E30A13" }}>{headingHighlight}</span>{" "}
            {headingSuffix}
          </h2>
        </motion.div>

        {/* Service cards */}
        <div className="flex flex-col gap-5">
          {services.map((service, i) => (
            <ServiceCard
              key={service.title}
              service={service}
              index={i}
              sectionInView={inView}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
