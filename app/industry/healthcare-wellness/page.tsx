import type { Metadata } from 'next';
import { HealthcareWellnessClient } from './HealthcareWellnessClient';

export const metadata: Metadata = {
  title: 'Healthcare & Wellness | IBV Technologies',
  description: 'Technology That Cares As Much As You Do. IBV Technologies helps healthcare organizations build secure, compliant, and user-friendly solutions that improve outcomes and patient engagement.',
};

export default function Page() {
  return <HealthcareWellnessClient />;
}
