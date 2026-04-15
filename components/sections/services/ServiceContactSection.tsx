'use client';

import Link from 'next/link';

interface ServiceContactSectionProps {
  /** The main CTA heading. Use "\n" for line breaks. */
  heading?: string;
  /** Service options for the dropdown */
  services?: string[];
}

export function ServiceContactSection({
  heading = "Let's start building\nyour next step.",
  services = [
    'Business Consultation',
    'Startup Consultation',
    'Digital Solutions',
    'Research & Analysis',
    'Content & Growth',
  ],
}: ServiceContactSectionProps) {
  return (
    <section className="bg-[#111112]">
      <div className="max-w-[1344px] mx-auto px-6 lg:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 min-h-[480px]">

          {/* ── Left — headline + CTA ── */}
          <div className="py-16 lg:py-24 flex flex-col justify-between lg:border-r lg:border-white/10 lg:pr-16">
            <div>
              <span className="text-[11px] font-semibold uppercase tracking-[0.18em] text-white/30 mb-6 block">
                Get in touch
              </span>
              <h2
                className="text-white font-bold leading-tight tracking-tight mb-8 whitespace-pre-line"
                style={{ fontSize: 'clamp(28px, 3.5vw, 44px)' }}
              >
                {heading}
              </h2>
            </div>
            <Link
              href="/contact"
              className="inline-flex items-center bg-[#E30A13] hover:bg-[#c8000a] text-white text-sm font-semibold px-8 py-4 rounded-full transition-colors duration-200 self-start"
            >
              Get Started Now
            </Link>
          </div>

          {/* ── Right — form ── */}
          <div className="py-16 lg:py-24 lg:pl-16 border-t border-white/10 lg:border-t-0">
            <h3 className="text-white font-semibold text-[15px] mb-8">Fill this form below</h3>

            <div className="space-y-6">
              {(['Your Name', 'Your Email'] as const).map((placeholder) => (
                <input
                  key={placeholder}
                  type={placeholder === 'Your Email' ? 'email' : 'text'}
                  placeholder={placeholder}
                  className="w-full bg-transparent border-b border-white/20 text-white placeholder-white/30 text-[14px] pb-3 outline-none focus:border-[#E30A13] transition-colors duration-200"
                />
              ))}

              <select
                defaultValue=""
                className="w-full bg-transparent border-b border-white/20 text-white/30 text-[14px] pb-3 outline-none appearance-none focus:border-[#E30A13] transition-colors duration-200"
              >
                <option value="" disabled>
                  Select a service
                </option>
                {services.map((s) => (
                  <option key={s} value={s} className="bg-[#111112] text-white">
                    {s}
                  </option>
                ))}
              </select>

              <textarea
                placeholder="More About The Project"
                rows={3}
                className="w-full bg-transparent border-b border-white/20 text-white placeholder-white/30 text-[14px] pb-3 outline-none resize-none focus:border-[#E30A13] transition-colors duration-200"
              />

              <button
                type="button"
                className="w-full border border-white/20 hover:border-[#E30A13] hover:bg-[#E30A13] text-white text-sm font-semibold py-3.5 rounded-full transition-all duration-200 mt-2"
              >
                Get Started Now
              </button>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
