"use client";

import { useState } from "react";
import { HubPageHeroSection } from "@/components/sections/services/HubPageHeroSection";
import { AnimateOnScroll } from "@/components/ui/AnimateOnScroll";

/* ── Info Strip ──────────────────────────────────────────────────────────────── */
function InfoStrip() {
  const items = [
    {
      label: "Email",
      value: "hr@ibv.in",
      icon: (
        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#E30A13" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
          <rect x="2" y="4" width="20" height="16" rx="2" />
          <path d="M2 7l10 7 10-7" />
        </svg>
      ),
    },
    {
      label: "Phone",
      value: "+91 80558029655",
      icon: (
        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#E30A13" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
          <path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07A19.5 19.5 0 013.07 10.81 19.79 19.79 0 01.22 2.18 2 2 0 012.18 0h3a2 2 0 012 1.72 12.84 12.84 0 00.7 2.81 2 2 0 01-.45 2.11L6.09 7.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45 12.84 12.84 0 002.81.7A2 2 0 0122 14.92z" />
        </svg>
      ),
    },
    {
      label: "Location",
      value: "H-28, Shanti Kishan Villa, 3rd Floor\nSiddhi Colony, Raja Park,\nJaipur, Rajasthan, India – 302016",
      icon: (
        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#E30A13" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
          <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7z" />
          <circle cx="12" cy="9" r="2.5" />
        </svg>
      ),
    },
  ];

  return (
    <section className="bg-[#f7f7f7] py-10 px-8">
      <AnimateOnScroll>
        <div className="max-w-[95vw] mx-auto grid grid-cols-1 md:grid-cols-3 gap-4">
          {items.map((item) => (
            <div
              key={item.label}
              className="bg-white rounded-xl p-6 border border-[#E8E8E8] flex flex-col gap-3"
            >
              <div className="flex items-center gap-2">
                {item.icon}
                <span className="text-[11px] uppercase tracking-[0.14em] font-bold text-[#999]">
                  {item.label}
                </span>
              </div>
              <p className="text-[#111112] font-medium text-sm leading-relaxed whitespace-pre-line">
                {item.value}
              </p>
            </div>
          ))}
        </div>
      </AnimateOnScroll>
    </section>
  );
}

/* ── Field styles (light theme) ─────────────────────────────────────────────── */
const fieldCls =
  "w-full bg-transparent pb-2 text-sm text-[#111] placeholder:text-[#bbb] border-b border-[#ddd] focus:outline-none focus:border-[#E30A13] transition-colors duration-200";

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
    <section className="bg-white py-16 px-8">
      <div className="max-w-[95vw] mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">

          {/* ── Left panel ── */}
          <AnimateOnScroll>
            <div>
              <h2
                className="font-bold text-[#111112] leading-tight mb-5"
                style={{ fontSize: "clamp(28px, 3.5vw, 48px)", fontFamily: "var(--font-serif)" }}
              >
                Let&apos;s build your next step forward
              </h2>
              <p className="text-[#666] text-sm leading-relaxed mb-10 max-w-[420px]">
                Every business reaches a point where clarity matters more than speed. Whether you are solving a problem, planning growth, or exploring new opportunities, the right direction makes the difference.
              </p>

              <div className="flex flex-col gap-5">
                {[
                  {
                    label: "Direct Communication",
                    icon: (
                      <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="#E30A13" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07A19.5 19.5 0 013.07 10.81 19.79 19.79 0 01.22 2.18 2 2 0 012.18 0h3a2 2 0 012 1.72 12.84 12.84 0 00.7 2.81 2 2 0 01-.45 2.11L6.09 7.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45 12.84 12.84 0 002.81.7A2 2 0 0122 14.92z" />
                      </svg>
                    ),
                  },
                  {
                    label: "Focused Problem Solving",
                    icon: (
                      <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="#E30A13" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M12 2a7 7 0 017 7c0 2.5-1.5 4.5-3 6l-1 3H9l-1-3C6.5 13.5 5 11.5 5 9a7 7 0 017-7z" />
                        <line x1="9" y1="21" x2="15" y2="21" />
                      </svg>
                    ),
                  },
                ].map(({ label, icon }) => (
                  <div key={label} className="flex items-center gap-3">
                    <div className="w-9 h-9 rounded-full border-2 border-[#E30A13] flex items-center justify-center flex-shrink-0">
                      {icon}
                    </div>
                    <span className="text-[#111] font-semibold text-sm">{label}</span>
                  </div>
                ))}
              </div>
            </div>
          </AnimateOnScroll>

          {/* ── Right panel: form card ── */}
          <AnimateOnScroll delay={0.1}>
            <div className="bg-white border border-[#E8E8E8] rounded-2xl p-8 shadow-sm">
              {submitted ? (
                <div className="flex flex-col items-center justify-center py-12 text-center">
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
                  <h3 className="text-[18px] font-bold text-[#111112] mb-1">
                    Schedule a Consultation Now
                  </h3>
                  <p className="text-[#999] text-[12px] mb-7 leading-relaxed">
                    Tell us about your requirements or challenges. We&apos;ll review it and get back with the right next steps.
                  </p>

                  <form
                    onSubmit={(e) => { e.preventDefault(); setSubmitted(true); }}
                    className="flex flex-col gap-6"
                  >
                    <input
                      type="text"
                      placeholder="Full Name"
                      required
                      className={fieldCls}
                      value={form.name}
                      onChange={(e) => setForm({ ...form, name: e.target.value })}
                    />

                    <input
                      type="email"
                      placeholder="Email Address"
                      required
                      className={fieldCls}
                      value={form.email}
                      onChange={(e) => setForm({ ...form, email: e.target.value })}
                    />

                    <input
                      type="tel"
                      placeholder="Phone Number"
                      className={fieldCls}
                      value={form.phone}
                      onChange={(e) => setForm({ ...form, phone: e.target.value })}
                    />

                    <select
                      className={`${fieldCls} cursor-pointer`}
                      value={form.service}
                      onChange={(e) => setForm({ ...form, service: e.target.value })}
                    >
                      <option value="" disabled>How can we help you?</option>
                      {helpOptions.map((o) => (
                        <option key={o} value={o}>{o}</option>
                      ))}
                    </select>

                    <textarea
                      placeholder="Message*"
                      rows={3}
                      className={`${fieldCls} resize-none`}
                      value={form.message}
                      onChange={(e) => setForm({ ...form, message: e.target.value })}
                    />

                    <label className="flex items-start gap-2 cursor-pointer">
                      <input
                        type="checkbox"
                        required
                        checked={form.agreed}
                        onChange={(e) => setForm({ ...form, agreed: e.target.checked })}
                        className="mt-0.5 accent-[#E30A13]"
                      />
                      <span className="text-[11px] text-[#888] leading-snug">
                        I agree to the{" "}
                        <a href="/terms" className="text-[#E30A13] underline">
                          terms and conditions
                        </a>
                        .
                      </span>
                    </label>

                    <button
                      type="submit"
                      className="w-full bg-[#E30A13] hover:bg-[#c50910] transition-colors text-white font-semibold text-sm py-3 rounded-full"
                    >
                      Send Message
                    </button>

                    <p className="text-[#bbb] text-[10px] text-center">
                      * We usually respond within 48–72 hours.
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
    <section className="w-full" style={{ height: "460px" }}>
      <iframe
        src="https://maps.google.com/maps?q=H-28+Siddhi+Colony+Raja+Park+Jaipur+Rajasthan+302016+India&output=embed&z=15"
        width="100%"
        height="100%"
        style={{ border: 0, display: "block" }}
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
        backgroundImage="/HOMEPAGEBANNER.png"
      />

      <InfoStrip />
      <FormSection />
      <MapSection />
    </div>
  );
}
