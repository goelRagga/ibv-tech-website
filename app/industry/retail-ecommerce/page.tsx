import type { Metadata } from 'next';
import { RetailEcommerceClient } from './RetailEcommerceClient';

export const metadata: Metadata = {
  title: 'Retail & E-Commerce | IBV Technologies',
  description: 'Sell Smarter. Grow Faster. Retain Longer. IBV Technologies helps retail and e-commerce businesses with data-driven insights, high-performance platforms, and strategies built to convert and retain.',
};

export default function Page() {
  return <RetailEcommerceClient />;
}
