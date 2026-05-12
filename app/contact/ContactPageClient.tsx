"use client";

import { useState } from "react";
import { HubPageHeroSection } from "@/components/sections/services/HubPageHeroSection";
import { AnimateOnScroll } from "@/components/ui/AnimateOnScroll";

/* ── Info Strip ──────────────────────────────────────────────────────────────── */
function InfoStrip() {
  const items = [
    { label: "Email",    value: "hr@ibvt.in" },
    { label: "Phone",    value: "+ 91 8058826666" },
    { label: "Location", value: "H-28, Shanti Kishan Villa,\n3rd Floor Sindhi Colony, Raja Park,\nJaipur, Rajasthan, India - 302016" },
  ];

  return (
    <section className="bg-white py-8 md:py-10 px-4 md:px-8">
      <AnimateOnScroll>
        <div className="max-w-[95vw] mx-auto">
          <div className="border border-[#e8e8e8] bg-[#F6F6F8] rounded-2xl grid grid-cols-1 md:grid-cols-3 divide-y md:divide-y-0 md:divide-x divide-[#e8e8e8] overflow-hidden">
            {items.map((item) => (
              <div key={item.label} className="flex flex-col items-center justify-center text-center py-4 px-4 gap-2">
                <span className="font-bold text-[#111112] text-[15px]">{item.label}</span>
                <p className="text-[#55555B] text-[13px] font-semibold leading-relaxed whitespace-pre-line">{item.value}</p>
              </div>
            ))}
          </div>
        </div>
      </AnimateOnScroll>
    </section>
  );
}

/* ── Field styles (light theme) ─────────────────────────────────────────────── */
const fieldCls =
  "w-full bg-white rounded-xl px-4 py-3.5 text-[14px] text-[#111] placeholder:text-[#aaa] border border-[#e0e0e0] focus:outline-none focus:border-[#E30A13] transition-colors duration-200";

/* ── Form Section ────────────────────────────────────────────────────────────── */
function FormSection() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    service: "",
    message: "",
    agreed: false,
  });
  const [submitted, setSubmitted] = useState(false);

  const helpOptions = [
    "Consulting & Strategy",
    "Digital Solutions",
    "Research & Analysis",
    "Content & Growth",
    "Other",
  ];

  return (
    <section className="bg-white py-12 md:py-16 px-4 md:px-8">
      <div className="max-w-[95vw] mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 md:gap-16 items-start">

          {/* ── Left panel ── */}
          <AnimateOnScroll>
            <div>
              <h2
                className="font-bold text-[#111112] leading-tight mb-4 md:mb-5"
                style={{ fontSize: "clamp(26px, 3.5vw, 48px)", fontFamily: "var(--font-serif)" }}
              >
                Let&apos;s build your next step forward
              </h2>
              <p className="text-[#666] text-sm leading-relaxed mb-8 md:mb-10 max-w-[420px]">
                Every business reaches a point where clarity matters more than speed. Whether you are solving a problem, planning growth, or exploring new opportunities, the right direction makes the difference.
              </p>

              <div className="flex flex-col gap-5">
                {[
                  {
                    label: "Direct Communication",
                    icon: (
                      <svg width="25" height="25" viewBox="0 0 24 24" fill="none" stroke="#E30A13" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07A19.5 19.5 0 013.07 10.81 19.79 19.79 0 01.22 2.18 2 2 0 012.18 0h3a2 2 0 012 1.72 12.84 12.84 0 00.7 2.81 2 2 0 01-.45 2.11L6.09 7.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45 12.84 12.84 0 002.81.7A2 2 0 0122 14.92z" />
                      </svg>
                    ),
                  },
                  {
                    label: "Focused Problem Solving",
                    icon: (
                      <svg width="25" height="25" viewBox="0 0 24 24" fill="none" stroke="#E30A13" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M12 2a7 7 0 017 7c0 2.5-1.5 4.5-3 6l-1 3H9l-1-3C6.5 13.5 5 11.5 5 9a7 7 0 017-7z" />
                        <line x1="9" y1="21" x2="15" y2="21" />
                      </svg>
                    ),
                  },
                ].map(({ label, icon }) => (
                  <div key={label} className="flex items-center gap-3">
                    <div className="w-9 h-9 rounded-full border-2 border-[#E30A13]  bg-[#E20A13]/10 flex items-center justify-center flex-shrink-0">
                      {icon}
                    </div>
                    <span className="text-[#111] font-semibold text-2xl font-serif">{label}</span>
                  </div>
                ))}
              </div>
            </div>
          </AnimateOnScroll>

          {/* ── Right panel: form card ── */}
          <AnimateOnScroll delay={0.1}>
            <div className="bg-[#f5f5f5] rounded-2xl border border-[#e8e8e8] p-6 md:p-8">
              {submitted ? (
                <div className="flex flex-col items-center justify-center py-16 text-center">
                  <div className="w-14 h-14 rounded-full bg-[#E30A13] flex items-center justify-center mb-5">
                    <svg className="w-7 h-7 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <h4 className="font-bold text-[#111] text-lg mb-2">Message Sent!</h4>
                  <p className="text-[#888] text-sm">We&apos;ll get back to you within 48–72 hours.</p>
                </div>
              ) : (
                <>
                  <h3
                    className="font-bold text-[#111112] leading-tight mb-2"
                    style={{ fontSize: "clamp(24px, 2.8vw, 34px)" }}
                  >
                    Schedule a Consultation Now
                  </h3>
                  <p className="text-[#444] text-[14px] leading-relaxed mb-8 max-w-[480px]">
                    Tell us about your requirements or challenges. We&apos;ll review it and get back with the right next steps.
                  </p>

                  <form
                    onSubmit={(e) => { e.preventDefault(); setSubmitted(true); }}
                    className="flex flex-col gap-4"
                  >
                    <input
                      type="text"
                      placeholder="Full Name*"
                      required
                      className={fieldCls}
                      value={form.name}
                      onChange={(e) => setForm({ ...form, name: e.target.value })}
                    />

                    <input
                      type="email"
                      placeholder="Email Address*"
                      required
                      className={fieldCls}
                      value={form.email}
                      onChange={(e) => setForm({ ...form, email: e.target.value })}
                    />

                    <input
                      type="tel"
                      placeholder="Phone Number*"
                      className={fieldCls}
                      value={form.phone}
                      onChange={(e) => setForm({ ...form, phone: e.target.value })}
                    />

                    <select
                      className={`${fieldCls} cursor-pointer appearance-none`}
                      value={form.service}
                      onChange={(e) => setForm({ ...form, service: e.target.value })}
                      style={{ backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='12' height='12' viewBox='0 0 24 24' fill='none' stroke='%23aaa' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3E%3Cpolyline points='6 9 12 15 18 9'/%3E%3C/svg%3E")`, backgroundRepeat: 'no-repeat', backgroundPosition: 'right 14px center' }}
                    >
                      <option value="" disabled>How can we help you?*</option>
                      {helpOptions.map((o) => (
                        <option key={o} value={o}>{o}</option>
                      ))}
                    </select>

                    <textarea
                      placeholder="Message*"
                      rows={6}
                      className={`${fieldCls} resize-none`}
                      value={form.message}
                      onChange={(e) => setForm({ ...form, message: e.target.value })}
                    />

                    <label className="flex items-center gap-2.5 cursor-pointer mt-1">
                      <input
                        type="checkbox"
                        required
                        checked={form.agreed}
                        onChange={(e) => setForm({ ...form, agreed: e.target.checked })}
                        className="w-4 h-4 accent-[#E30A13] cursor-pointer"
                      />
                      <span className="text-[13px] text-[#333] leading-snug">
                        I agree to the{" "}
                        <a href="/terms" className="underline text-[#111]">
                          terms and conditions
                        </a>
                        .
                      </span>
                    </label>

                    <button
                      type="submit"
                      className="self-start bg-[#E30A13] hover:bg-[#c50910] transition-colors text-white font-semibold text-[15px] px-10 py-3.5 rounded-full mt-2"
                    >
                      Send Message
                    </button>

                    <p className="text-[#E30A13] text-[12px] font-mono mt-2">
                      * We usually respond within 48-72 hours.
                    </p>
                  </form>
                </>
              )}
            </div>
          </AnimateOnScroll>

        </div>
      </div>
    </section>
  );
}

/* ── Map Section ─────────────────────────────────────────────────────────────── */
function MapSection() {
  return (
    <section className="w-full h-[320px] md:h-[460px]">
      <iframe
        src="https://maps.google.com/maps?q=H-28+Siddhi+Colony+Raja+Park+Jaipur+Rajasthan+302016+India&output=embed&z=15"
        width="100%"
        height="100%"
        className="block w-full h-full"
        style={{ border: 0 }}
        allowFullScreen
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
        title="IBV Technologies Location"
      />
    </section>
  );
}

/* ── Page ────────────────────────────────────────────────────────────────────── */
export function ContactPageClient() {
  return (
    <div className="bg-white text-[#111112]">
      <HubPageHeroSection
        tagline1="Share your challenges with us."
        tagline2="We'll help you find clarity and direction."
        headlineTitle="Contact Us"
        description="Take a step forward with practical solutions and structured thinking."
        backgroundImage="https://res.cloudinary.com/dm8jtnzdi/image/upload/q_auto/f_auto/v1776710665/BUSINESS_CONSULTING_HERO_xc9tql.png"
      />

      <InfoStrip />
      <FormSection />
      <MapSection />
    </div>
  );
}
