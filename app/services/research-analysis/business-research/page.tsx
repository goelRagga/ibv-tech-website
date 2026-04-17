import type { Metadata } from 'next';
import { BusinessResearchClient } from './BusinessResearchClient';

export const metadata: Metadata = {
  title: 'Business Research | IBV Technologies',
  description: 'Structured business research covering industry analysis, feasibility studies, competitive intelligence, and strategic opportunity mapping.',
};

export default function Page() {
  return <BusinessResearchClient />;
}
