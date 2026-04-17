import type { Metadata } from 'next';
import { AppDevelopmentClient } from './AppDevelopmentClient';

export const metadata: Metadata = {
  title: 'App Development | IBV Technologies',
  description: 'Native and cross-platform mobile applications built for real user behaviour, performance, and long-term reliability.',
};

export default function Page() {
  return <AppDevelopmentClient />;
}
