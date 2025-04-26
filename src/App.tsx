import { useState, useEffect } from 'react';
import type { Transaction } from './types';
import TransactionForm from './components/TransactionForm/TransactionForm';
import TransactionList from './components/TransactionList/TransactionList';
import Balance from './components/Balance/Balance';

function App() {
  const [transactions, setTransactions] = useState<Transaction[]>(() => {
    const saved = localStorage.getItem('transactions');
    return saved ? JSON.parse(saved) : [];
  });

  useEffect(() => {
    console.log('Saving to localStorage:', transactions);
    localStorage.setItem('transactions', JSON.stringify(transactions));
  }, [transactions]);

  const addTransaction = (newTransaction: Transaction) => {
    setTransactions((prev) => [newTransaction, ...prev]);
  };

  const deleteTransaction = (id: string) => {
    setTransactions((prev) => prev.filter((t) => t.id !== id));
  };

  const [editTransaction, setEditTransaction] = useState<Transaction | null>(
    null,
  );

  const updateTransaction = (updated: Transaction) => {
    setTransactions((prev) =>
      prev.map((tx) => (tx.id === updated.id ? updated : tx)),
    );
    setEditTransaction(null);
  };

  return (
    <div className="App">
      <h1>Financial Tracker</h1>
      <Balance transactions={transactions} />
      <TransactionForm
        onAdd={addTransaction}
        onEdit={updateTransaction}
        onCancel={() => setEditTransaction(null)}
        editing={editTransaction}
      />
      <TransactionList
        transactions={transactions}
        onDelete={deleteTransaction}
        onEdit={setEditTransaction}
      />
    </div>
  );
}

export default App;
