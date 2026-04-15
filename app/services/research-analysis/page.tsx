import type { Metadata } from 'next';
import { PageShell } from '@/components/ui/PageShell';
import { ContactSection } from '@/components/sections/ContactSection';

export const metadata: Metadata = {
  title: 'Research & Analysis',
};

export default function Page() {
  return (
    <>
      <PageShell
        eyebrow="Services"
        title="Research & Analysis"
        subtitle="We help businesses build, launch, and grow through a combination of strategic thinking, digital execution, and data-driven decisions."
        dark={true}
      />
      <ContactSection />
    </>
  );
}
