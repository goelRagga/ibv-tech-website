import type { Metadata } from 'next';
import { DataAnalyticsClient } from './DataAnalyticsClient';

export const metadata: Metadata = {
  title: 'Data Analytics & Research | IBV Technologies',
  description: 'Data collection, analysis, visualisation, and dashboards that surface the insights driving smarter business decisions.',
};

export default function Page() {
  return <DataAnalyticsClient />;
}
