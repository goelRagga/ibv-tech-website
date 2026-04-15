'use client';

import { ReactNode } from 'react';
import { motion } from 'framer-motion';
import Link from 'next/link';

interface PageShellProps {
  eyebrow?: string;
  title: string;
  subtitle?: string;
  dark?: boolean;
  children?: ReactNode;
  breadcrumb?: { label: string; href: string }[];
}

export function PageShell({ eyebrow, title, subtitle, dark = false, children, breadcrumb }: PageShellProps) {
  const bg = dark ? 'bg-[#111112]' : 'bg-white';
  const textColor = dark ? 'text-white' : 'text-[#111112]';

  return (
    <>
      {/* Hero */}
      <section className={`${bg} pt-32 pb-16 relative overflow-hidden`}>
        {dark && (
          <div className="absolute inset-0 opacity-10 pointer-events-none"
            style={{ backgroundImage: 'radial-gradient(circle at 20% 80%, #E30A13 0%, transparent 55%)' }} />
        )}
        <div className="absolute top-0 left-0 w-1 h-full bg-[#E30A13]" />
        <div className="container-ibv relative z-10">
          {breadcrumb && (
            <nav className="flex items-center gap-2 mb-8 text-xs">
              {breadcrumb.map((crumb, i) => (
                <span key={crumb.href} className="flex items-center gap-2">
                  {i > 0 && <span className={dark ? 'text-white/30' : 'text-[#A8A8BC]'}>/</span>}
                  <Link href={crumb.href} className={`${dark ? 'text-white/50 hover:text-white' : 'text-[#A8A8BC] hover:text-[#111112]'} transition-colors`}>
                    {crumb.label}
                  </Link>
                </span>
              ))}
            </nav>
          )}

          {eyebrow && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="flex items-center gap-3 mb-6"
            >
              <div className="w-6 h-[2px] bg-[#E30A13]" />
              <span className={`text-xs uppercase tracking-[0.2em] font-medium ${dark ? 'text-white/40' : 'text-[#A8A8BC]'}`}>
                {eyebrow}
              </span>
            </motion.div>
          )}

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
            className={`${textColor} font-bold leading-tight tracking-tight mb-6`}
            style={{ fontSize: 'clamp(40px, 5vw, 80px)' }}
          >
            {title}
          </motion.h1>

          {subtitle && (
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className={`text-base lg:text-lg leading-relaxed max-w-2xl ${dark ? 'text-white/60' : 'text-[#555556]'}`}
            >
              {subtitle}
            </motion.p>
          )}
        </div>
      </section>

      {children}
    </>
  );
}
