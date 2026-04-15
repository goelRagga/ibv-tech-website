import type { Metadata } from 'next';
import { BusinessConsultationClient } from './BusinessConsultationClient';

export const metadata: Metadata = {
  title: 'Business Consultation – Consulting & Strategy | IBV Technologies',
  description:
    'We help organisations identify gaps, improve performance, and build practical strategies that drive measurable outcomes and long-term growth.',
};

export default function BusinessConsultationPage() {
  return <BusinessConsultationClient />;
}
