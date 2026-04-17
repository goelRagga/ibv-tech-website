import type { Metadata } from 'next';
import { DigitalSolutionsHubClient } from './DigitalSolutionsHubClient';

export const metadata: Metadata = {
  title: 'Digital Solutions | IBV Technologies',
  description: 'From websites to mobile apps, IBV Technologies builds digital products that are fast, scalable, and built for growth.',
};

export default function Page() {
  return <DigitalSolutionsHubClient />;
}
