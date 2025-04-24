// Transaction type: income or expense
export type TransactionType = 'income' | 'expense';

// Interface for a transaction
export interface Transaction {
  id: string;
  type: TransactionType;
  description: string;
  amount: number;
  category: string;
  date: string; // ISO date string
}