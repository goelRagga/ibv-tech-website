import type { Metadata } from 'next';
import { ContentGrowthHubClient } from './ContentGrowthHubClient';

export const metadata: Metadata = {
  title: 'Content & Growth | IBV Technologies',
  description: 'Content strategies and growth frameworks that connect your brand with the right audience and drive measurable results.',
};

export default function Page() {
  return <ContentGrowthHubClient />;
}
