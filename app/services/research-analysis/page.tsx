import type { Metadata } from 'next';
import { ResearchAnalysisHubClient } from './ResearchAnalysisHubClient';

export const metadata: Metadata = {
  title: 'Research & Analysis | IBV Technologies',
  description: 'Structured market research, business research, and data analytics that turn information into actionable intelligence.',
};

export default function Page() {
  return <ResearchAnalysisHubClient />;
}
