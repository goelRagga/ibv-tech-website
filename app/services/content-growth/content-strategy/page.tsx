import type { Metadata } from 'next';
import { ContentStrategyClient } from './ContentStrategyClient';

export const metadata: Metadata = {
  title: 'Content Strategy & Marketing | IBV Technologies',
  description: 'Content strategies that align your brand with your audience needs — driving organic growth, authority, and measurable business outcomes.',
};

export default function Page() {
  return <ContentStrategyClient />;
}
