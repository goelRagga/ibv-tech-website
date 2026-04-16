'use client';

import { usePathname } from 'next/navigation';
import UnderDevelopmentPage from './UnderDevelopmentPage';

export default function RouteGuard({ children, footer }: { children: React.ReactNode; footer: React.ReactNode }) {
  const pathname = usePathname();
  const isHome = pathname === '/';

  if (!isHome) {
    return <UnderDevelopmentPage />;
  }

  return (
    <>
      <main>{children}</main>
      {footer}
    </>
  );
}
