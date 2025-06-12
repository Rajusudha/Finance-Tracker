import React, { useState } from "react";

const mockExpenses = [
  { name: "Groceries", amount: 1200 },
  { name: "Internet Bill", amount: 800 },
  { name: "Electricity", amount: 1500 },
  { name: "Movies", amount: 500 },
  { name: "Gym", amount: 900 }
];

const ExpenseTable = () => {
  const [search, setSearch] = useState("");

  const filtered = mockExpenses.filter(exp =>
    exp.name.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <>
      <input
        type="text"
        placeholder="Search expense..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        style={{
          padding: "0.5rem",
          marginBottom: "1rem",
          width: "100%",
          maxWidth: "300px",
          borderRadius: "4px",
          border: "1px solid #ccc"
        }}
      />
      <table style={{ width: "100%", borderCollapse: "collapse" }}>
        <thead>
          <tr style={{ background: "#f2f2f2" }}>
            <th style={{ padding: "0.5rem", border: "1px solid #ddd" }}>Name</th>
            <th style={{ padding: "0.5rem", border: "1px solid #ddd" }}>Amount</th>
          </tr>
        </thead>
        <tbody>
          {filtered.map((expense, index) => (
            <tr key={index}>
              <td style={{ padding: "0.5rem", border: "1px solid #eee" }}>{expense.name}</td>
              <td style={{ padding: "0.5rem", border: "1px solid #eee" }}>₹ {expense.amount}</td>
            </tr>
          ))}
          {filtered.length === 0 && (
            <tr>
              <td colSpan="2" style={{ textAlign: "center", padding: "1rem", color: "gray" }}>
                No matching expenses found.
              </td>
            </tr>
          )}
        </tbody>
      </table>
    </>
  );
};

export default ExpenseTable;
