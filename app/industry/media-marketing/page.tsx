import type { Metadata } from 'next';
import { MediaMarketingClient } from './MediaMarketingClient';

export const metadata: Metadata = {
  title: 'Media & Marketing | IBV Technologies',
  description: 'Creative Vision Backed by Strategic Intelligence. IBV Technologies combines creativity and data to build campaigns that deliver measurable impact.',
};

export default function Page() {
  return <MediaMarketingClient />;
}
