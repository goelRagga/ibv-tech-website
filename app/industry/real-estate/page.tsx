import type { Metadata } from 'next';
import { RealEstateClient } from './RealEstateClient';

export const metadata: Metadata = {
  title: 'Real Estate | IBV Technologies',
  description: 'From Listings to Leads — We Build What Moves Property. IBV Technologies helps real estate businesses generate leads, improve visibility, and convert interest into transactions.',
};

export default function Page() {
  return <RealEstateClient />;
}
