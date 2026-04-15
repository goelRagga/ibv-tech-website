import type { Metadata } from "next";
import { HeroSection } from "@/components/sections/HeroSection";
import { AboutSection } from "@/components/sections/AboutSection";
import { ServicesSection } from "@/components/sections/ServicesSection";
import { BlogSection } from "@/components/sections/BlogSection";
import { TestimonialsSection } from "@/components/sections/TestimonialsSection";
import { FAQSection } from "@/components/sections/FAQSection";
import { ContactSection } from "@/components/sections/ContactSection";
import { GrowthSection } from "@/components/sections/GrowthSection";

export const metadata: Metadata = {
  title: "IBV Technologies – Build What's Next. Scale Without Limits.",
  description:
    "IBV Technologies helps businesses build, launch, and grow through strategic thinking, digital execution, and data-driven decisions.",
};

export default function HomePage() {
  return (
    <>
      {/* HeroSection contains MissionSection internally — it slides up over the hero */}
      <HeroSection />

      {/* These scroll normally after the hero+mission animation completes */}
      <div style={{zIndex:20}}>
        <AboutSection />
        <ServicesSection />
        <GrowthSection />
        <BlogSection />
        <TestimonialsSection />
        <FAQSection />
        <ContactSection />
      </div>
    </>
  );
}
