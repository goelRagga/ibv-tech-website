import type { Metadata } from 'next';
import './globals.css';
import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import RouteGuard from '@/components/RouteGuard';

export const metadata: Metadata = {
  title: {
    default: 'IBV Technologies – Build What\'s Next. Scale Without Limits.',
    template: '%s | IBV Technologies',
  },
  description:
    'IBV Technologies helps businesses build, launch, and grow through strategic thinking, digital execution, and data-driven decisions.',
  keywords: ['business consulting', 'digital solutions', 'strategy', 'IBV Technologies'],
  authors: [{ name: 'IBV Technologies' }],
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://ibvtechnologies.com',
    siteName: 'IBV Technologies',
    title: 'IBV Technologies – Build What\'s Next.',
    description: 'Strategic consulting, digital solutions and data-driven growth.',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'IBV Technologies',
    description: 'Strategic consulting, digital solutions and data-driven growth.',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true },
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700&display=swap"
          rel="stylesheet"
        />
      </head>
      <body>
        <RouteGuard footer={<Footer />}>
          {children}
        </RouteGuard>
      </body>
    </html>
  );
}
