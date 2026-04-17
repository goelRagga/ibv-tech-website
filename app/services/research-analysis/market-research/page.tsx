import type { Metadata } from 'next';
import { MarketResearchClient } from './MarketResearchClient';

export const metadata: Metadata = {
  title: 'Market Research | IBV Technologies',
  description: 'Market landscape analysis, consumer behaviour research, and competitor intelligence that gives you the confidence to move forward.',
};

export default function Page() {
  return <MarketResearchClient />;
}
