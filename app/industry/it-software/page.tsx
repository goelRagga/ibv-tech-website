import type { Metadata } from 'next';
import { ITSoftwareClient } from './ITSoftwareClient';

export const metadata: Metadata = {
  title: 'IT & Software | IBV Technologies',
  description: 'Built by Tech People. Delivered for Tech Businesses. IBV Technologies helps technology companies scale faster with strong architecture, performance, and strategy.',
};

export default function Page() {
  return <ITSoftwareClient />;
}
