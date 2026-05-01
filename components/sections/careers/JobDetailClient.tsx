"use client";

// components/sections/careers/JobDetailClient.tsx

import { useState, useRef } from "react";
import Link from "next/link";
import { motion, useInView } from "framer-motion";
import { MapPin, Briefcase, Clock, Upload } from "lucide-react";
import type { JobListing } from "@/lib/careers-data";
import { Navbar } from "@/components/layout/Navbar";
import { Button } from "@/components/ui/Button";

// ─── APPLY FORM ──────────────────────────────────────────────────────────────

function JobApplyForm() {
  const [fields, setFields] = useState({
    fullName: "",
    email: "",
    phone: "",
    linkedin: "",
    experience: "",
    agree: false,
  });
  const [fileName, setFileName] = useState<string | null>(null);
  const [sent, setSent] = useState(false);

  const set = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value, type, checked } = e.target;
    setFields((p) => ({ ...p, [name]: type === "checkbox" ? checked : value }));
  };

  const inputCls =
    "w-full rounded-lg border border-[#A9A9B5] bg-white px-2 py-1 font-inter text-[14px] text-[#111112] placeholder:text-[#A9A9B5] outline-none focus:border-[#999] transition-colors";

  if (sent) {
    return (
      <div className="rounded-2xl bg-[#f3f4f6] p-10 text-center">
        <div className="mx-auto mb-3 flex h-11 w-11 items-center justify-center rounded-full bg-green-50">
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#16a34a" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
            <polyline points="20 6 9 17 4 12" />
          </svg>
        </div>
        <p className="font-hanken text-[15px] font-semibold text-[#111112]">Application Sent!</p>
        <p className="mt-1 font-hanken text-[12px] text-[#999]">We usually respond within 48–72 hours.</p>
      </div>
    );
  }

  return (
    <div className="rounded-xl bg-[#F6F6F8] p-6">
      {/* Header */}
      <h3 className="mb-1.5 font-inter text-[28px] font-bold text-[#111112]">
        Apply for this position
      </h3>
      <p className="mb-2 font-inter text-[14px] text-[#555]">
        Fill out this form below and our team will review your application.
      </p>

      <div className="space-y-2">
        <input
          name="fullName"
          type="text"
          placeholder="Full Name*"
          value={fields.fullName}
          onChange={set}
          className={inputCls}
        />

        <input
          name="email"
          type="email"
          placeholder="Email Address*"
          value={fields.email}
          onChange={set}
          className={inputCls}
        />

        <input
          name="phone"
          type="tel"
          placeholder="Phone Number*"
          value={fields.phone}
          onChange={set}
          className={inputCls}
        />

        <input
          name="linkedin"
          type="url"
          placeholder="LinkedIn Profile*"
          value={fields.linkedin}
          onChange={set}
          className={inputCls}
        />

        <input
          name="experience"
          type="text"
          placeholder="Years of Experience*"
          value={fields.experience}
          onChange={set}
          className={inputCls}
        />

        {/* File upload */}
        <div>
          <label className="inline-flex cursor-pointer items-center gap-2 rounded-lg border border-[#e2e2e2] bg-white px-4 py-1 border border-[#A9A9B5] font-hanken text-[14px] text-[#c0c0c0] hover:border-[#999] transition-colors">
            <Upload size={14} />
            <span className={fileName ? "text-[#111112]" : ""}>
              {fileName ?? "Upload CV*"}
            </span>
            <input
              type="file"
              accept=".pdf,.doc,.docx"
              className="hidden"
              onChange={(e) => setFileName(e.target.files?.[0]?.name ?? null)}
            />
          </label>
          <p className="mt-1 pl-0.5 font-inter text-[11px] text-[#111112]">
            Max. file size 5MB.
          </p>
        </div>

        {/* Agree */}
        <label className="flex cursor-pointer items-start gap-2.5 pt-1">
          <input
            type="checkbox"
            name="agree"
            checked={fields.agree}
            onChange={set}
            className="mt-0.5 h-3.5 w-3.5 flex-shrink-0 cursor-pointer accent-[#cc1f1f]"
          />
          <span className="font-hanken text-[13px] text-[#555]">
            I agree to the{" "}
            <Link href="/terms" className="underline text-[#111112] hover:text-[#cc1f1f] transition-colors">
              terms and conditions
            </Link>
            .
          </span>
        </label>

        {/* Submit */}
        <Button
          onClick={() => setSent(true)}
          disabled={!fields.agree || !fields.fullName || !fields.email}
        >
          Send Message
        </Button>

        {/* Footer note — monospace to match screenshot */}
        <p className="pt-1 font-mono font-bold text-[11.5px] text-[#111]">
          * We usually respond within 48–72 hours.
        </p>
      </div>
    </div>
  );
}

// ─── BULLET LIST ─────────────────────────────────────────────────────────────

function BulletList({ items }: { items: string[] }) {
  return (
    <ul className="space-y-1">
      {items.map((item, i) => (
        <li
          key={i}
          className="flex items-start gap-2 font-inter text-[18px]  leading-tight text-[#444]"
        >
          <span className="mt-[7px] h-[4px] w-[4px] flex-shrink-0 rounded-full bg-[#333]" />
          {item}
        </li>
      ))}
    </ul>
  );
}

// ─── MAIN CLIENT COMPONENT ───────────────────────────────────────────────────

export function JobDetailClient({ job }: { job: JobListing }) {
  const contentRef = useRef(null);
  const inView = useInView(contentRef, { once: true });

  return (
    <section>
      <Navbar />
      <div className="mx-8 max-w-[1100px] flex flex-col lg:flex-row gap-16 items-start pt-10 pb-16">
        <div className="flex items-center gap-1.5">
          <span className="text-[#cc1f1f] text-[13px]">↳</span>
          <Link
            href="/careers"
            className="font-hanken text-[11px] font-bold tracking-[0.09em] text-[#111112] hover:text-[#cc1f1f] transition-colors leading-tight"
          >
            OPEN <span className="text-[#cc1f1f]">POSITION</span>
          </Link>
        </div>

        <div className="flex flex-col  gap-12 lg:gap-12  ">
          {/* ── COL 2: Job detail content ── */}
          <motion.div
            ref={contentRef}
            initial={{ opacity: 0, y: 16 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.45, ease: "easeOut" }}
          >
            {/* Title */}
            <h1 className="mb-3 font-hanken text-[36px] font-semibold leading-tight text-[#111112]">
              {job.title}
            </h1>

            {/* Meta pills — small, inline, no border, just text with icons */}
            <div className="mb-4 flex flex-wrap items-center gap-2 border-b border-b-[#e5e5e5] pb-4">
              <span className="flex items-center gap-1 rounded-full bg-[#f3f3f3] px-3 py-1 font-hanken text-[12px] text-[#555]">
                <MapPin size={11} className="text-[#888]" />
                {job.location}
              </span>
              <span className="flex items-center gap-1 rounded-full bg-[#f3f3f3] px-3 py-1 font-hanken text-[12px] text-[#555]">
                <Briefcase size={11} className="text-[#888]" />
                {job.type}
              </span>
              <span className="flex items-center gap-1 rounded-full bg-[#f3f3f3] px-3 py-1 font-hanken text-[12px] text-[#555]">
                <Clock size={11} className="text-[#888]" />
                {job.employment}
              </span>
              {job.salary && (
                <span className="flex items-center gap-1 rounded-full bg-[#f3f3f3] px-3 py-1 font-hanken text-[12px] text-[#555]">
                  Rs. {job.salary}
                </span>
              )}
            </div>

            {/* Summary */}
            <p className="mb-7  font-inter text-[18px] leading-relaxed text-[#444]"> 
              {job.summary}
            </p>

            {/* Responsibilities */}
            <div className="mb-7">
              <h2 className="mb-3  font-inter text-[22px]  font-semibold text-[#111112]">
                Responsibilities
              </h2>
              <BulletList items={job.responsibilities} />
            </div>

            {/* Required Qualifications */}
            <div className="mb-7">
              <h2 className="mb-3 font-inter text-[22px]  font-semibold text-[#111112]">
                Required Qualifications
              </h2>
              <BulletList items={job.requirements} />
            </div>

            {/* What We Offer */}
            <div className="mb-2">
              <h2 className="mb-3 font-inter text-[22px]  font-semibold text-[#111112]">
                What We Offer
              </h2>
              <BulletList items={job.whatWeOffer} />
            </div>
          </motion.div>

          {/* ── COL 3: Apply form (sticky) ── */}
          <div className="w-[45vw]">
            <JobApplyForm />
          </div>
        </div>
      </div>
    </section>
  );
}
