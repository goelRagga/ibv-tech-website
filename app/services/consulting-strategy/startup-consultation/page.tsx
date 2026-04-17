import type { Metadata } from 'next';
import { StartupConsultationClient } from './StartupConsultationClient';

export const metadata: Metadata = {
  title: 'Startup Consultation | IBV Technologies',
  description: 'We guide founders in turning ideas into scalable businesses through validation, business model development, and go-to-market planning.',
};

export default function Page() {
  return <StartupConsultationClient />;
}
