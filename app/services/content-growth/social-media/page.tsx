import type { Metadata } from 'next';
import { SocialMediaClient } from './SocialMediaClient';

export const metadata: Metadata = {
  title: 'Social Media & Content Marketing | IBV Technologies',
  description: 'Platform-native social media management, content creation, community engagement, and paid social campaigns that grow your brand.',
};

export default function Page() {
  return <SocialMediaClient />;
}
