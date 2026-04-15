import type { Metadata } from 'next';
import { PageShell } from '@/components/ui/PageShell';
import { ContactSection } from '@/components/sections/ContactSection';

export const metadata: Metadata = {
  title: 'Data Analytics & Research',
};

export default function Page() {
  return (
    <>
      <PageShell
        eyebrow="Research & Analysis"
        title="Data Analytics & Research"
        subtitle="We help businesses build, launch, and grow through a combination of strategic thinking, digital execution, and data-driven decisions."
        dark={false}
      />
      <ContactSection />
    </>
  );
}
