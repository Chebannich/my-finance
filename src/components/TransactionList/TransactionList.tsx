import type { Transaction } from "../../types";

interface Props {
  transactions: Transaction[];
}

const TransactionList = ( { transactions }: Props) => {
  if (transactions.length === 0) {
    return <p>No transactions yet.</p>;
  }

  return (
    <ul>
      {transactions.map(tx => (
          <li key={tx.id}>
            [{new Date(tx.date).toLocaleDateString()}] {tx.description} - {tx.amount} € ({tx.category}, {tx.type})
          </li>
        ))}
    </ul>
  );
};

export default TransactionList;