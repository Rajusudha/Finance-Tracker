import React, { useState } from "react";

export default function TransactionForm({ addTransaction }) {
  const [data, setData] = useState({ name: "", amount: "", type: "expense", date: "" });

  const handleSubmit = (e) => {
    e.preventDefault();
    const t = {
      name: data.name,
      amount: parseFloat(data.amount),
      type: data.type,
      date: data.date || new Date().toISOString().split("T")[0]
    };
    addTransaction(t);
    setData({ name: "", amount: "", type: "expense", date: "" });
  };

  return (
    <form className="tx-form" onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Name"
        required
        value={data.name}
        onChange={e => setData({ ...data, name: e.target.value })}
      />
      <input
        type="number"
        placeholder="Amount"
        required
        value={data.amount}
        onChange={e => setData({ ...data, amount: e.target.value })}
      />
      <select value={data.type} onChange={e => setData({ ...data, type: e.target.value })}>
        <option value="expense">Expense</option>
        <option value="income">Income</option>
      </select>
      <input
        type="date"
        value={data.date}
        onChange={e => setData({ ...data, date: e.target.value })}
      />
      <button type="submit">Add Transaction</button>
    </form>
  );
}
