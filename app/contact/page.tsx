import type { Metadata } from 'next';
import { ContactPageClient } from './ContactPageClient';

export const metadata: Metadata = {
  title: "Contact Us | IBV Technologies",
  description: "Share your challenges with us. We'll help you find clarity, direction, and take a step forward with practical solutions and structured thinking.",
};

export default function Page() {
  return <ContactPageClient />;
}
