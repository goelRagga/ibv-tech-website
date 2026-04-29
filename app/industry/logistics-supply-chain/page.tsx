import type { Metadata } from 'next';
import { LogisticsSupplyChainClient } from './LogisticsSupplyChainClient';

export const metadata: Metadata = {
  title: 'Logistics & Supply Chain | IBV Technologies',
  description: 'Efficiency Is Not an Option. We Make It Your Standard. IBV Technologies helps logistics businesses optimize operations and improve performance through data and technology.',
};

export default function Page() {
  return <LogisticsSupplyChainClient />;
}
