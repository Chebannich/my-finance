import { useState, useEffect } from 'react';
import type { Transaction } from './types';
import TransactionForm from './components/TransactionForm/TransactionForm';
import TransactionList from './components/TransactionList/TransactionList';
import Balance from './components/Balance/Balance';

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

      <Balance transactions={transactions} />
      <TransactionForm onAdd={addTransaction} />
      <TransactionList transactions={transactions} />
      
    </div>
  );
}

export default App;
