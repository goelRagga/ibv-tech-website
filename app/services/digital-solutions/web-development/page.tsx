import type { Metadata } from 'next';
import { WebDevelopmentClient } from './WebDevelopmentClient';

export const metadata: Metadata = {
  title: 'Web Development | IBV Technologies',
  description: 'High-performance websites and web applications built for speed, scalability, and seamless user experience.',
};

export default function Page() {
  return <WebDevelopmentClient />;
}
