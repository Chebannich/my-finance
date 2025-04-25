import { useState, useEffect } from 'react';
import type { Transaction } from './types';

function App() {
  const [transactions, setTransactions] = useState<Transaction[]>([]);

  useEffect(() => {
    const example: Transaction = {
      id: crypto.randomUUID(),
      type: 'expense',
      description: 'Test transaction',
      amount: 10,
      category: 'Other',
      date: new Date().toISOString(),
    };

    setTransactions([example]);
  }, []);

  const addTransaction = (newTransaction: Transaction) => {
    setTransactions(prev => [newTransaction, ...prev]);
  };

  return (
    <div className="App">
      <h1>Financial Tracker</h1>

      {/* тут потом будет форма */}
      {/* <TransactionForm onAdd={addTransaction} /> */}

      {/* временно покажем список */}
      <ul>
        {transactions.map(tx => (
          <li key={tx.id}>
            [{tx.date}] {tx.description} — {tx.amount} €
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;
