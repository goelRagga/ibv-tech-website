'use client';

import { usePathname } from 'next/navigation';
import UnderDevelopmentPage from './UnderDevelopmentPage';

export default function RouteGuard({ children, footer }: { children: React.ReactNode; footer: React.ReactNode }) {
  const pathname = usePathname();
  const allowedRoutes = [
    '/',
    '/services/consulting-strategy',
    '/services/digital-solutions',
    '/services/research-analysis',
    '/services/content-growth',
  ];

  if (!allowedRoutes.includes(pathname)) {
    return <UnderDevelopmentPage />;
  }

  return (
    <>
      <main>{children}</main>
      {footer}
    </>
  );
}
