"use client";

import { useState, useRef } from "react";
import { motion, useInView } from "framer-motion";
import { Upload } from "lucide-react";

interface JobApplyFormProps {
  jobTitle: string;
}

export function JobApplyForm({ jobTitle }: JobApplyFormProps) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phone: "",
    linkedin: "",
    experience: "",
    agree: false,
  });
  const [fileName, setFileName] = useState<string | null>(null);
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value, type, checked } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value,
    }));
  };

  const handleFile = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) setFileName(file.name);
  };

  const handleSubmit = (e: React.MouseEvent) => {
    e.preventDefault();
    // Wire up to your email/form service here
    setSubmitted(true);
  };

  const inputClass =
    "w-full rounded-md border border-[#e0e0e0] bg-white px-4 py-2.5 font-hanken text-[13px] text-[#111112] placeholder:text-[#bbb] outline-none focus:border-[#111112] transition-colors";

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 24 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.55, ease: "easeOut" }}
      className="rounded-2xl border border-[#e8e8e8] bg-white p-8 shadow-sm"
    >
      <h3 className="mb-1 font-hanken text-[22px] font-semibold text-[#111112]">
        Apply for this position
      </h3>
      <p className="mb-6 font-hanken text-[13px] text-[#888]">
        Fill out this form below and our team will review your application.
      </p>

      {submitted ? (
        <div className="flex flex-col items-center justify-center py-10 text-center">
          <div className="mb-3 flex h-12 w-12 items-center justify-center rounded-full bg-green-100">
            <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#22c55e" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
              <polyline points="20 6 9 17 4 12" />
            </svg>
          </div>
          <p className="font-hanken text-[15px] font-medium text-[#111112]">Application Sent!</p>
          <p className="mt-1 font-hanken text-[13px] text-[#888]">We usually respond within 48–72 hours.</p>
        </div>
      ) : (
        <div className="space-y-3">
          {/* Full Name */}
          <input
            type="text"
            name="fullName"
            placeholder="Full Name*"
            value={formData.fullName}
            onChange={handleChange}
            className={inputClass}
          />

          {/* Email */}
          <input
            type="email"
            name="email"
            placeholder="Email Address*"
            value={formData.email}
            onChange={handleChange}
            className={inputClass}
          />

          {/* Phone */}
          <input
            type="tel"
            name="phone"
            placeholder="Phone Number*"
            value={formData.phone}
            onChange={handleChange}
            className={inputClass}
          />

          {/* LinkedIn */}
          <input
            type="url"
            name="linkedin"
            placeholder="LinkedIn Profile*"
            value={formData.linkedin}
            onChange={handleChange}
            className={inputClass}
          />

          {/* Years of Experience */}
          <input
            type="text"
            name="experience"
            placeholder="Years of Experience*"
            value={formData.experience}
            onChange={handleChange}
            className={inputClass}
          />

          {/* File Upload */}
          <div>
            <label className="flex cursor-pointer items-center gap-2 rounded-md border border-[#e0e0e0] bg-white px-4 py-2.5 font-hanken text-[13px] text-[#bbb] hover:border-[#111112] transition-colors">
              <Upload size={14} className="text-[#999]" />
              <span className={fileName ? "text-[#111112]" : ""}>
                {fileName ?? "Upload CV*"}
              </span>
              <input
                type="file"
                accept=".pdf,.doc,.docx"
                onChange={handleFile}
                className="hidden"
              />
            </label>
            <p className="mt-1 pl-1 font-hanken text-[11px] text-[#bbb]">
              Max. file size 5MB.
            </p>
          </div>

          {/* Terms checkbox */}
          <label className="flex cursor-pointer items-start gap-2.5 pt-1">
            <input
              type="checkbox"
              name="agree"
              checked={formData.agree}
              onChange={handleChange}
              className="mt-0.5 h-4 w-4 flex-shrink-0 cursor-pointer accent-[#cc1f1f]"
            />
            <span className="font-hanken text-[13px] text-[#555]">
              I agree to the{" "}
              <a href="/terms" className="underline text-[#111112] hover:text-[#cc1f1f] transition-colors">
                terms and conditions
              </a>
              .
            </span>
          </label>

          {/* Submit */}
          <button
            onClick={handleSubmit}
            disabled={!formData.agree || !formData.fullName || !formData.email}
            className="mt-2 w-full rounded-full bg-[#cc1f1f] px-6 py-3 font-hanken text-[14px] font-medium text-white transition-opacity hover:opacity-85 disabled:cursor-not-allowed disabled:opacity-40"
          >
            Send Message
          </button>

          {/* Footer note */}
          <p className="pt-1 text-center font-hanken text-[12px] text-[#bbb]">
            ✦ We usually respond within 48–72 hours.
          </p>
        </div>
      )}
    </motion.div>
  );
}