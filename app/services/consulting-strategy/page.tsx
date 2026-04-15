import type { Metadata } from 'next';
import { ConsultingHubClient } from './ConsultingHubClient';

export const metadata: Metadata = {
  title: 'Consulting & Strategy – IBV Technologies',
  description:
    'Every successful business starts with the right decisions. We help you define direction, solve challenges, and build strategies that drive measurable growth.',
};

export default function ConsultingStrategyPage() {
  return <ConsultingHubClient />;
}
