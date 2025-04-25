import { useState } from "react";
import { Transaction, TransactionType } from "../../types";

interface Props {
  onAdd: (transaction: Transaction) => void;
}

const TransactionForm = ({ onAdd }: Props) => {
  const [type, setType] = useState<TransactionType>('expense');
  const [description, setDescription] = useState('');
  const [amout, setAmout] = useState('');
  const [category, setCategory] = useState('');
  const [date, setDate] = useState(new Date().toISOString().split('T')[0]); // YYYY-MM-DD format

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (!description || !amout || !category) return;

    const newTransaction: Transaction = {
      id: crypto.randomUUID(),
      type,
      description,
      amount: parseFloat(amout),
      category,
      date,
    };

    onAdd(newTransaction);

    setDescription('');
    setAmout('');
    setCategory('');
    setDate(new Date().toISOString().split('T')[0]);
  };

  return (
    <form onSubmit={handleSubmit}>
      <select value={type} onChange={e => setType(e.target.value as TransactionType)}>
        <option value="income">Income</option>
        <option value="expense">Expense</option>
      </select>

      <input 
        type="text" 
        placeholder="Description" 
        value={description} 
        onChange={e => setDescription(e.target.value)}
      />

      <input
        type="number"
        placeholder="Amount"
        value={amout}
        onChange={e => setAmout(e.target.value)}
      />

      <input
        type="text"
        placeholder="Category"
        value={category}
        onChange={e => setCategory(e.target.value)}
      />

      <input
        type="date"
        value={date}
        onChange={e => setDate(e.target.value)}
      />

      <button type="submit">Submit Transaction</button>
    </form>
  );
};

export default TransactionForm;