"use client";

import { useState } from "react";
import { Button } from "@/components/ui/Button";
import { Input, Textarea } from "@/components/ui/Input";
import { FormLabel } from "@/components/ui/FormLabel";
import {
  Select,
  SelectTrigger,
  SelectValue,
  SelectContent,
  SelectItem,
} from "@/components/ui/Select";

const serviceOptions = [
  "Consulting & Strategy",
  "Digital Solutions",
  "Research & Analysis",
  "Content & Growth",
  "Other",
];

export function ContactSection() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    service: "",
    message: "",
  });
  const [submitted, setSubmitted] = useState(false);

  return (
    <section id="contact" className="bg-refresh-black py-6 px-4 md:px-6 lg:px-12 relative overflow-hidden lg:h-screen">
      <div className="relative z-10 max-w-container mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 md:gap-6 items-stretch">
          {/* ── Left Panel ── */}
          <div className="rounded-2xl p-4 flex flex-col justify-between gap-6 lg:gap-0 min-h-[280px] md:min-h-[350px] lg:max-h-[88vh] relative overflow-hidden bg-[#222224]">
            {/* Subtle red glow bottom-left */}
            <div
              className="absolute bottom-0 left-0 w-full h-2/3 pointer-events-none"
              style={{
                background:
                  "radial-gradient(ellipse at 15% 110%, rgba(227,10,19,0.20) 0%, transparent 60%)",
              }}
            />

            {/* Tag */}
            <div className="relative z-10 flex items-center gap-2">
              <span className="text-body font-bold text-rainbow-red">↳</span>
              <span className="text-body font-semibold uppercase tracking-widest text-white/[0.35]">
                GET IN <span className="text-rainbow-red">TOUCH</span>
              </span>
            </div>

            <div className="w-full">
              {/* Headline — pushed to bottom via flex */}
              <h2 className="relative z-10 font-bold text-white leading-tight !font-serif tracking-tight text-[34px] md:text-h2 lg:text-h1 mb-6">
                Let&apos;s start building
                <br />
                your next step.
              </h2>

              {/* CTA */}
              <Button variant="primary" className="w-full">Get Started Now</Button>
            </div>
          </div>

          {/* ── Right Panel ── */}
          <div className="rounded-2xl p-4 flex flex-col bg-[#222224] lg:max-h-[88vh] relative overflow-hidden">
            {submitted ? (
              <div className="flex-1 flex flex-col items-center justify-center text-center">
                <div className="w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-4 bg-rainbow-red">
                  <svg
                    className="w-6 h-6 text-white"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M5 13l4 4L19 7"
                    />
                  </svg>
                </div>
                <h3 className="text-white font-bold mb-2 text-h6">
                  Message Sent!
                </h3>
                <p className="text-body-sm text-white/[0.45]">
                  We&apos;ll get back to you within 24 hours.
                </p>
              </div>
            ) : (
              <>
                <p className="text-white font-bold mb-4 text-[24px] md:text-h4 lg:text-h3">
                  Fill this form below
                </p>

                <form
                  onSubmit={(e) => {
                    e.preventDefault();
                    setSubmitted(true);
                  }}
                  className="flex flex-col gap-5 flex-1"
                >
                  {/* Name */}
                  <div className="flex flex-col gap-[6px]">
                    <FormLabel htmlFor="contact-name">Your Name</FormLabel>
                    <Input
                      id="contact-name"
                      type="text"
                      placeholder="Enter your full name"
                      value={form.name}
                      onChange={(e) =>
                        setForm({ ...form, name: e.target.value })
                      }
                      required
                    />
                  </div>

                  {/* Email */}
                  <div className="flex flex-col gap-[6px]">
                    <FormLabel htmlFor="contact-email">Your Email</FormLabel>
                    <Input
                      id="contact-email"
                      type="email"
                      placeholder="Enter email address"
                      value={form.email}
                      onChange={(e) =>
                        setForm({ ...form, email: e.target.value })
                      }
                      required
                    />
                  </div>

                  {/* Services */}
                  <div className="flex flex-col gap-[6px]">
                    <FormLabel>Services</FormLabel>
                    <Select
                      value={form.service}
                      onValueChange={(val) =>
                        setForm({ ...form, service: val })
                      }
                      required
                    >
                      <SelectTrigger>
                        <SelectValue placeholder="Select a service" />
                      </SelectTrigger>
                      <SelectContent>
                        {serviceOptions.map((s) => (
                          <SelectItem key={s} value={s}>
                            {s}
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  </div>

                  {/* Message */}
                  <div className="flex flex-col gap-[6px]">
                    <FormLabel htmlFor="contact-message">
                      More About The Project
                    </FormLabel>
                    <Textarea
                      id="contact-message"
                      rows={2}
                      placeholder="Describe your project"
                      value={form.message}
                      onChange={(e) =>
                        setForm({ ...form, message: e.target.value })
                      }
                    />
                  </div>

                  <Button variant="white">Get Started Now</Button>
                </form>
              </>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
