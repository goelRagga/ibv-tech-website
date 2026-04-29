'use client';

export default function RouteGuard({ children, footer }: { children: React.ReactNode; footer: React.ReactNode }) {
  return (
    <>
      <main>{children}</main>
      {footer}
    </>
  );
}
