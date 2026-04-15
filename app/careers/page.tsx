import type { Metadata } from 'next';
import { PageShell } from '@/components/ui/PageShell';
import { ContactSection } from '@/components/sections/ContactSection';

export const metadata: Metadata = {
  title: 'Careers at IBV Technologies',
};

export default function Page() {
  return (
    <>
      <PageShell
        eyebrow="Careers"
        title="Careers at IBV Technologies"
        subtitle="We help businesses build, launch, and grow through a combination of strategic thinking, digital execution, and data-driven decisions."
        dark={true}
      />
      <ContactSection />
    </>
  );
}
