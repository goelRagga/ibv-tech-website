import type { Metadata } from 'next';
import { PageShell } from '@/components/ui/PageShell';
import { ContactSection } from '@/components/sections/ContactSection';

export const metadata: Metadata = {
  title: 'Social Media & Content Marketing',
};

export default function Page() {
  return (
    <>
      <PageShell
        eyebrow="Content & Growth"
        title="Social Media & Content Marketing"
        subtitle="We help businesses build, launch, and grow through a combination of strategic thinking, digital execution, and data-driven decisions."
        dark={false}
      />
      <ContactSection />
    </>
  );
}
