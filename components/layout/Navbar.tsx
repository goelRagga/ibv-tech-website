"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import { ChevronDown, Menu, X } from "lucide-react";
import { AnimatePresence, motion } from "framer-motion";

/* ─────────────────────────────── NAV DATA ─────────────────────────────── */
const servicesMenu = [
  {
    category: "Consulting & Strategy",
    href: "/services/consulting-strategy",
    items: [
      { label: "Business Consultation", href: "/services/consulting-strategy/business-consultation" },
      { label: "Startup Consultation", href: "/services/consulting-strategy/startup-consultation" },
    ],
  },
  {
    category: "Digital Solutions",
    href: "/services/digital-solutions",
    items: [
      { label: "Web Development", href: "/services/digital-solutions/web-development" },
      { label: "App Development", href: "/services/digital-solutions/app-development" },
    ],
  },
  {
    category: "Research & Analysis",
    href: "/services/research-analysis",
    items: [
      { label: "Market Research", href: "/services/research-analysis/market-research" },
      { label: "Business Research", href: "/services/research-analysis/business-research" },
      { label: "Data Analytics & Research", href: "/services/research-analysis/data-analytics" },
    ],
  },
  {
    category: "Content & Growth",
    href: "/services/content-growth",
    items: [
      { label: "Content Strategy & Marketing", href: "/services/content-growth/content-strategy" },
      { label: "Social Media & Content Marketing", href: "/services/content-growth/social-media" },
    ],
  },
];

const industryMenu = [
  { label: "Retail & E-Commerce", href: "/industry/retail-ecommerce" },
  { label: "Healthcare & Wellness", href: "/industry/healthcare-wellness" },
  { label: "Education & EdTech", href: "/industry/education-edtech" },
  { label: "Finance & Banking", href: "/industry/finance-banking" },
  { label: "Real Estate", href: "/industry/real-estate" },
  { label: "Logistics & Supply Chain", href: "/industry/logistics-supply-chain" },
  { label: "IT & Software", href: "/industry/it-software" },
  { label: "Media & Marketing", href: "/industry/media-marketing" },
];

const mainNav = [
  { label: "Insights", href: "/insights" },
  { label: "About", href: "/about" },
  { label: "Careers", href: "/careers" },
];

/* ─────────────────────────────── LOGO ─────────────────────────────── */
function IBVLogo() {
  return (
    <Link href="/" className="flex items-center gap-3 group flex-shrink-0">
      <img src="/IBVLOGO.png" alt="IBV Logo" className="w-24 h-24 object-contain" />
    </Link>
  );
}

/* ─────────────────────────────── DROPDOWNS ─────────────────────────────── */
function ServicesDropdown({ onClose }: { onClose: () => void }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: -6 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -6 }}
      transition={{ duration: 0.16 }}
      className="absolute top-full  mt-3 w-[940px] bg-[#0f0f10] border border-white/10 rounded-2xl shadow-2xl z-50 overflow-hidden"
      onMouseLeave={onClose}
    >
      <div className="grid grid-cols-4 p-4 gap-0">
        {servicesMenu.map((group, i) => (
          <div
            key={group.category}
            className={`pr-4 last:pr-0 ${i > 0 ? "pl-4 border-l border-white/10" : ""}`}
          >
            <Link
              href={group.href}
              onClick={onClose}
              className="block text-[10px] font-bold text-[#E30A13] uppercase tracking-[0.18em] mb-2 hover:text-red-400 transition-colors"
            >
              {group.category}
            </Link>
            <ul className="space-y-3">
              {group.items.map((item) => (
                <li key={item.label}>
                  <Link
                    href={item.href}
                    onClick={onClose}
                    className="text-[13px] text-white/60 hover:text-white transition-colors leading-snug block"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </motion.div>
  );
}

function IndustryDropdown({ onClose }: { onClose: () => void }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: -6 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -6 }}
      transition={{ duration: 0.16 }}
      className="absolute top-full left-1/2 -translate-x-1/2 mt-3 w-[420px] bg-[#0f0f10] border border-white/10 rounded-2xl shadow-2xl z-50 overflow-hidden"
      onMouseLeave={onClose}
    >
      <div className="p-4 grid grid-cols-2 gap-x-10 gap-y-3">
        {industryMenu.map((item) => (
          <Link
            key={item.label}
            href={item.href}
            onClick={onClose}
            className="text-[13px] text-white/60 hover:text-white transition-colors"
          >
            {item.label}
          </Link>
        ))}
      </div>
    </motion.div>
  );
}

/* ─────────────────────────────── MOBILE MENU ─────────────────────────────── */
function MobileMenu({ onClose }: { onClose: () => void }) {
  const [openSection, setOpenSection] = useState<string | null>(null);
  return (
    <motion.div
      initial={{ opacity: 0, x: "100%" }}
      animate={{ opacity: 1, x: 0 }}
      exit={{ opacity: 0, x: "100%" }}
      transition={{ type: "tween", duration: 0.28 }}
      className="fixed inset-0 bg-[#0f0f10] z-[200] overflow-y-auto flex flex-col"
    >
      {/* Header */}
      <div className="flex items-center justify-between px-5 py-3 border-b border-white/10 flex-shrink-0">
        <Link href="/" onClick={onClose} className="flex items-center">
          <img src="/IBVLOGO.png" alt="IBV Logo" className="w-12 h-12 object-contain" />
        </Link>
        <button
          onClick={onClose}
          aria-label="Close menu"
          className="text-white p-2 -mr-2 rounded-full hover:bg-white/5 transition-colors"
        >
          <X size={22} />
        </button>
      </div>

      {/* Nav */}
      <nav className="flex-1 px-5 pt-3 pb-6 flex flex-col">
        {["services", "industry"].map((key) => (
          <div key={key} className="border-b border-white/10">
            <button
              className="w-full flex items-center justify-between py-4 text-white text-[13px] font-semibold uppercase tracking-[0.12em]"
              onClick={() => setOpenSection(openSection === key ? null : key)}
            >
              {key.charAt(0).toUpperCase() + key.slice(1)}
              <ChevronDown
                size={16}
                className={`transition-transform duration-200 ${openSection === key ? "rotate-180 text-[#E30A13]" : "text-white/60"}`}
              />
            </button>
            <AnimatePresence initial={false}>
              {openSection === key && (
                <motion.div
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: "auto", opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  transition={{ duration: 0.22, ease: [0.22, 1, 0.36, 1] }}
                  className="overflow-hidden"
                >
                  <div className="pb-3">
                    {key === "services"
                      ? servicesMenu.map((g) => (
                          <div key={g.category} className="py-3">
                            <Link
                              href={g.href}
                              onClick={onClose}
                              className="block text-[10px] text-[#E30A13] uppercase tracking-[0.18em] font-bold mb-2"
                            >
                              {g.category}
                            </Link>
                            <div className="flex flex-col">
                              {g.items.map((it) => (
                                <Link
                                  key={it.label}
                                  href={it.href}
                                  onClick={onClose}
                                  className="block py-1.5 text-[13px] text-white/60 hover:text-white transition-colors"
                                >
                                  {it.label}
                                </Link>
                              ))}
                            </div>
                          </div>
                        ))
                      : (
                        <div className="grid grid-cols-1 py-1">
                          {industryMenu.map((it) => (
                            <Link
                              key={it.label}
                              href={it.href}
                              onClick={onClose}
                              className="block py-2 text-[13px] text-white/60 hover:text-white transition-colors"
                            >
                              {it.label}
                            </Link>
                          ))}
                        </div>
                      )
                    }
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        ))}

        {mainNav.map((item) => (
          <Link
            key={item.label}
            href={item.href}
            onClick={onClose}
            className="block py-4 text-white text-[13px] font-semibold uppercase tracking-[0.12em] border-b border-white/10"
          >
            {item.label}
          </Link>
        ))}

        <div className="mt-6">
          <Link
            href="/contact"
            onClick={onClose}
            className="block !w-fit text-center bg-[#E30A13] text-white font-bold py-3.5 rounded-full text-[13px] uppercase tracking-[0.12em] hover:bg-red-700 transition-colors"
          >
            Contact Us
          </Link>
        </div>
      </nav>
    </motion.div>
  );
}

/* ─────────────────────────────── MAIN NAVBAR ─────────────────────────────── */
export function Navbar() {
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const [mobileOpen, setMobileOpen] = useState(false);
  const closeTimer = useRef<ReturnType<typeof setTimeout> | null>(null);

  const open = (name: string) => {
    if (closeTimer.current) clearTimeout(closeTimer.current);
    setActiveDropdown(name);
  };
  const close = () => {
    closeTimer.current = setTimeout(() => setActiveDropdown(null), 120);
  };

  return (
    <>
      {/* Pill navbar — floats over hero */}
      <header className="relative top-2 left-0 right-0 z-50 flex justify-center pointer-events-none">
        <div
          className="pointer-events-auto w-full max-w-[95vw] flex items-center justify-between h-[58px] px-4 pl-5 rounded-full border border-white/10 bg-[#111112]/95 backdrop-blur-md"
          style={{ boxShadow: "0 4px 32px rgba(0,0,0,0.55)" }}
        >
          {/* Logo */}
          <IBVLogo />

          {/* Desktop nav */}
          <nav className="hidden md:flex items-center gap-7">
            {/* Services */}
            <div className="relative" onMouseEnter={() => open("services")} onMouseLeave={close}>
              <button className="flex items-center gap-1 text-white/75 hover:text-white text-sm font-medium transition-colors">
                Services
                <ChevronDown size={13} className={`transition-transform duration-200 ${activeDropdown === "services" ? "rotate-180" : ""}`} />
              </button>
              <AnimatePresence>
                {activeDropdown === "services" && <ServicesDropdown onClose={() => setActiveDropdown(null)} />}
              </AnimatePresence>
            </div>

            {/* Industry */}
            <div className="relative" onMouseEnter={() => open("industry")} onMouseLeave={close}>
              <button className="flex items-center gap-1 text-white/75 hover:text-white text-sm font-medium transition-colors">
                Industry
                <ChevronDown size={13} className={`transition-transform duration-200 ${activeDropdown === "industry" ? "rotate-180" : ""}`} />
              </button>
              <AnimatePresence>
                {activeDropdown === "industry" && <IndustryDropdown onClose={() => setActiveDropdown(null)} />}
              </AnimatePresence>
            </div>

            {mainNav.map((item) => (
              <Link key={item.label} href={item.href} className="text-white/75 hover:text-white text-sm font-medium transition-colors">
                {item.label}
              </Link>
            ))}
          </nav>

          {/* CTA */}
          <div className="hidden md:flex">
            <Link
              href="/contact"
              className="bg-[#E30A13] hover:bg-red-700 transition-colors text-white font-bold text-sm px-3 py-2.5 rounded-full uppercase tracking-wide"
            >
              Contact Us
            </Link>
          </div>

          {/* Mobile hamburger */}
          <button className="md:hidden text-white p-2" onClick={() => setMobileOpen(true)}>
            <Menu size={22} />
          </button>
        </div>
      </header>

      <AnimatePresence>
        {mobileOpen && <MobileMenu onClose={() => setMobileOpen(false)} />}
      </AnimatePresence>
    </>
  );
}