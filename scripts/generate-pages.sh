#!/bin/bash
# Generate stub pages for all routes

generate_page() {
  local dir=$1
  local title=$2
  local eyebrow=$3
  local dark=${4:-false}

  mkdir -p "$dir"
  cat > "$dir/page.tsx" << PAGEOF
import type { Metadata } from 'next';
import { PageShell } from '@/components/ui/PageShell';
import { ContactSection } from '@/components/sections/ContactSection';

export const metadata: Metadata = {
  title: '${title}',
};

export default function Page() {
  return (
    <>
      <PageShell
        eyebrow="${eyebrow}"
        title="${title}"
        subtitle="We help businesses build, launch, and grow through a combination of strategic thinking, digital execution, and data-driven decisions."
        dark={${dark}}
      />
      <ContactSection />
    </>
  );
}
PAGEOF
  echo "Created: $dir/page.tsx"
}

BASE="/home/claude/ibv-technologies/app"

# Main pages
generate_page "$BASE/about" "About IBV Technologies" "About" false
generate_page "$BASE/careers" "Careers at IBV Technologies" "Careers" true
generate_page "$BASE/contact" "Let's Build Something Together" "Contact" true

# Insights
generate_page "$BASE/insights/blogs" "Blogs & Insights" "Insights" false
generate_page "$BASE/insights/case-studies" "Case Studies" "Case Studies" false

# Services – Hub pages
generate_page "$BASE/services/consulting-strategy" "Consulting & Strategy" "Services" true
generate_page "$BASE/services/digital-solutions" "Digital Solutions" "Services" true
generate_page "$BASE/services/research-analysis" "Research & Analysis" "Services" true
generate_page "$BASE/services/content-growth" "Content & Growth" "Services" true

# Services – Individual pages
generate_page "$BASE/services/consulting-strategy/business-consultation" "Business Consultation" "Consulting & Strategy" false
generate_page "$BASE/services/consulting-strategy/startup-consultation" "Startup Consultation" "Consulting & Strategy" false
generate_page "$BASE/services/digital-solutions/web-development" "Web Development" "Digital Solutions" false
generate_page "$BASE/services/digital-solutions/app-development" "App Development" "Digital Solutions" false
generate_page "$BASE/services/research-analysis/market-research" "Market Research" "Research & Analysis" false
generate_page "$BASE/services/research-analysis/business-research" "Business Research" "Research & Analysis" false
generate_page "$BASE/services/research-analysis/data-analytics" "Data Analytics & Research" "Research & Analysis" false
generate_page "$BASE/services/content-growth/content-strategy" "Content Strategy & Marketing" "Content & Growth" false
generate_page "$BASE/services/content-growth/social-media" "Social Media & Content Marketing" "Content & Growth" false

# Industry pages
generate_page "$BASE/industry/retail-ecommerce" "Retail & E-Commerce" "Industry" false
generate_page "$BASE/industry/healthcare-wellness" "Healthcare & Wellness" "Industry" false
generate_page "$BASE/industry/education-edtech" "Education & EdTech" "Industry" false
generate_page "$BASE/industry/finance-banking" "Finance & Banking" "Industry" false
generate_page "$BASE/industry/real-estate" "Real Estate" "Industry" false
generate_page "$BASE/industry/logistics-supply-chain" "Logistics & Supply Chain" "Industry" false
generate_page "$BASE/industry/it-software" "IT & Software" "Industry" false
generate_page "$BASE/industry/media-marketing" "Media & Marketing" "Industry" false
generate_page "$BASE/industry/manufacturing" "Manufacturing" "Industry" false
generate_page "$BASE/industry/pharma-life-sciences" "Pharma & Life Sciences" "Industry" false

echo "All stub pages generated!"
