import Link from "next/link";

const footerLinks = {
  Services: [
    { label: "Consulting & Strategy", href: "/services/consulting-strategy" },
    { label: "Digital Solutions", href: "/services/digital-solutions" },
    { label: "Research & Analytics", href: "/services/research-analysis" },
    { label: "Content & Growth", href: "/services/content-growth" },
  ],
  Industry: [
    { label: "Retail & E-Commerce", href: "/industry/retail-ecommerce" },
    { label: "Healthcare & Wellness", href: "/industry/healthcare-wellness" },
    { label: "Education & EdTech", href: "/industry/education-edtech" },
    { label: "Finance & Banking", href: "/industry/finance-banking" },
    { label: "Real Estate", href: "/industry/real-estate" },
    { label: "Logistics & Supply Chain", href: "/industry/logistics-supply-chain" },
    { label: "IT & Software", href: "/industry/it-software" },
    { label: "Media & Marketing", href: "/industry/media-marketing" },
  ],
  Insights: [
    { label: "Blogs", href: "/insights/blogs" },
    { label: "Case Studies", href: "/insights/case-studies" },
  ],
  Company: [
    { label: "About", href: "/about" },
    { label: "Careers", href: "/careers" },
    { label: "Contact", href: "/contact" },
  ],
  Socials: [
    { label: "Instagram", href: "https://instagram.com" },
    { label: "Facebook", href: "https://facebook.com" },
    { label: "LinkedIn", href: "https://linkedin.com" },
  ],
};

export function Footer() {
  return (
    <footer className="relative w-full text-white overflow-hidden">
      {/* ── MAIN SECTION — image + black overlay + content ── */}
      <div className="relative">
        {/* 1. Background image */}
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{
            // Replace with your actual image: e.g. '/images/footer-bg.jpg'
            backgroundImage:
              "url('https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=1600&q=80')",
          }}
        />

        {/* 2. Black overlay — dims the image so text reads clearly */}
        <div className="absolute inset-0 bg-black/60" />

        {/* 3. All content sits on top of both layers */}
        <div className="relative z-10">
          {/* ── TAGLINE ── */}
          <div className="flex items-center justify-center px-6 pt-10 pb-10 text-center">
            <h2
              className="font-serif text-white leading-[1.1] tracking-tight font-medium"
              style={{
                fontSize: "clamp(32px, 5.5vw, 56px)",
                maxWidth: "860px",
                fontFamily:
                  "'Source Serif 4', Georgia, serif",
               
              }}
            >
              A partner built for businesses that
              <br />
              want to move forward.
            </h2>
          </div>

          {/* ── NAV LINK COLUMNS ── */}
          <div className="px-2 md:px-8 lg:px-8 pt-2 pb-6 md:pb-4">
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-x-4 md:gap-x-9 gap-y-8 md:gap-y-10">
              {Object.entries(footerLinks).map(([category, links]) => (
                <div key={category}>
                  <p className="font-inter text-[18px] font-medium tracking-[0.16em] uppercase text-white mb-2">
                    {category}
                  </p>
                  <ul className="space-y-[2px]">
                    {links.map((link) => (
                      <li key={link.label}>
                        <Link
                          href={link.href}
                          className="font-inter text-[10px] md: text-[14px] tracking-[0.06em] uppercase text-white/70 hover:text-white transition-colors duration-200 leading-snug"
                        >
                          {link.label}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* ── BOTTOM BAR — solid dark strip, no image ── */}
      <div className="bg-[#0d0d0e]">
        <div className="px-4 md:px-8 lg:px-12 py-[18px]">
          <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-3">
            <p className="font-mono text-[10px] tracking-[0.15em] uppercase text-white/35">
              © 2026 IBV Technologies Pvt. Ltd. All Rights Reserved.
            </p>
            <div className="flex items-center gap-8">
              <Link
                href="/privacy"
                className="font-mono text-[10px] tracking-[0.15em] uppercase text-white/35 hover:text-white/60 transition-colors duration-200"
              >
                Privacy Policy
              </Link>
              <Link
                href="/terms"
                className="font-mono text-[10px] tracking-[0.15em] uppercase text-white/35 hover:text-white/60 transition-colors duration-200"
              >
                Terms &amp; Conditions
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
