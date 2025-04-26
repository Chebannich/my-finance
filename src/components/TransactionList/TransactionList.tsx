import type { Transaction } from "../../types";

interface Props {
  transactions: Transaction[];
  onDelete: (id: string) => void;
}

const TransactionList = ( { transactions, onDelete}: Props) => {
  if (transactions.length === 0) {
    return <p>No transactions yet.</p>;
  }

  const sortedTransactions = [...transactions].sort((a, b) => {
    return new Date(b.date).getTime() - new Date(a.date).getTime();
  });

  return (
    <ul>
      {sortedTransactions.map(tx => (
          <li key={tx.id}>
            [{new Date(tx.date).toLocaleDateString()}] {tx.description} - {tx.amount} € ({tx.category}, {tx.type}) <button onClick={() => onDelete(tx.id)}>Delete</button>
          </li>
        ))}
    </ul>
  );
};

export default TransactionList;