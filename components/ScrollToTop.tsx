'use client';

import { useEffect } from 'react';
import { usePathname } from 'next/navigation';
import { useLenis } from 'lenis/react';

export default function ScrollToTop() {
  const pathname = usePathname();
  const lenis = useLenis();

  useEffect(() => {
    if (pathname === '/') return;
    if (lenis) {
      lenis.scrollTo(0, { immediate: false, duration: 1.2 });
    } else {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  }, [pathname, lenis]);

  return null;
}
