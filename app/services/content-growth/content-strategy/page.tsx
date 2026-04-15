import type { Metadata } from 'next';
import { PageShell } from '@/components/ui/PageShell';
import { ContactSection } from '@/components/sections/ContactSection';

export const metadata: Metadata = {
  title: 'Content Strategy & Marketing',
};

export default function Page() {
  return (
    <>
      <PageShell
        eyebrow="Content & Growth"
        title="Content Strategy & Marketing"
        subtitle="We help businesses build, launch, and grow through a combination of strategic thinking, digital execution, and data-driven decisions."
        dark={false}
      />
      <ContactSection />
    </>
  );
}
