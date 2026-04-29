import type { Metadata } from 'next';
import { FinanceBankingClient } from './FinanceBankingClient';

export const metadata: Metadata = {
  title: 'Finance & Banking | IBV Technologies',
  description: 'Precision, Security, and Intelligence — Built Into Every Solution. IBV Technologies helps financial institutions build secure, data-driven systems that improve performance and customer experience.',
};

export default function Page() {
  return <FinanceBankingClient />;
}
