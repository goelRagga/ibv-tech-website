import type { Metadata } from "next";
import { PageShell } from "@/components/ui/PageShell";
import { MissionSection } from "@/components/sections/MissionSection";
import { AboutSection } from "@/components/sections/AboutSection";
import { WhyChooseUsSection } from "@/components/sections/WhyChooseUsSection";
import { ContactSection } from "@/components/sections/ContactSection";
import { HubPageHeroSection } from "@/components/sections/services/HubPageHeroSection";
import { ServicesGridSection } from "@/components/sections/ServicesGridSection";
import { ChipsDropSection } from "@/components/sections/ChipsDropSection";
import { CompanyStorySection } from "@/components/sections/CompanyStorySection";
import { ProcessStepsSection } from "@/components/sections/ProcessStepsSection";
import { ThinkAnalyzeSection } from "@/components/sections/ThinkAnalyzeSection";

export const metadata: Metadata = {
  title: "About IBV Technologies",
  description:
    "Learn about IBV Technologies — who we are, what we stand for, and how we help businesses build, launch, and grow.",
};

export default function AboutPage() {
  return (
    <>
      <div className="font-inter bg-white text-[#111112]">
        <HubPageHeroSection
          tagline1=""
          tagline2=""
          headlineTitle="Who We Are"
          description="The idea behind IBV Technologies is simple yet powerful: every business should have access to deep expertise, modern technology, and data-driven thinking, regardless of its size or stage."
          backgroundImage="https://res.cloudinary.com/dm8jtnzdi/image/upload/q_auto/f_auto/v1777657105/IBV_About_Banner_1_hrhv7l.png"
          maxHeight="200px"
        />
        <CompanyStorySection />
        <ServicesGridSection />
        <ChipsDropSection />
        <ProcessStepsSection />
        <ThinkAnalyzeSection />

        {/* Contact CTA */}
        <ContactSection />
      </div>
    </>
  );
}
