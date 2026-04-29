import type { Metadata } from 'next';
import { EducationEdtechClient } from './EducationEdtechClient';

export const metadata: Metadata = {
  title: 'Education & EdTech | IBV Technologies',
  description: 'Shaping the Future Starts With Smarter Learning Solutions. IBV Technologies helps institutions and EdTech platforms build engaging, scalable, and performance-driven learning environments.',
};

export default function Page() {
  return <EducationEdtechClient />;
}
