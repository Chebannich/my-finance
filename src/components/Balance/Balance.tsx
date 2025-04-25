import { Transaction } from "../../types";

interface Props {
  transactions: Transaction[];
}

const Balance = ({ transactions }: Props) => {
  const income = transactions
    .filter(tx => tx.type === 'income')
    .reduce((sum, tx) => sum + tx.amount, 0);

  const expense = transactions
    .filter(tx => tx.type === 'expense')
    .reduce((sum, tx) => sum + tx.amount, 0)

  const total = income - expense;

  return (
    <div style={{ marginBottom: '2rem' }}>
      <h2>Balance: {total.toFixed(2)} €</h2>
      <p style={{ color: 'green'}}>Income: +{income.toFixed(2)} €</p>
      <p style={{ color: 'red' }}>Expenses: −{expense.toFixed(2)} €</p>
    </div>
  );
};

export default Balance;