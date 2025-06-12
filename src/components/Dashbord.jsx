import React, { useState, useEffect } from "react";
// import TransactionForm from "./TransactionForm.jsx";
import TransactionForm from "../components/TransactionFrom.jsx"
// import ExportCSV from "./ExportCSV.jsx";
import ExportCSV from "../components/ExportCSV.jsx";
// import FinanceChart from "./FinanceChart.jsx";
import FinanceChart from "../components/FinancialChart.jsx";
// import Header from "./Header";
import Header from  "../components/Header.jsx";

const Dashboard = () => {
  const [transactions, setTransactions] = useState([]);
  const [income, setIncome] = useState(0);
  const [expense, setExpense] = useState(0);
  const [balance, setBalance] = useState(0);

  const calculateBalance = (list) => {
    const inc = list.filter(t => t.type === "income").reduce((a, t) => a + t.amount, 0);
    const exp = list.filter(t => t.type === "expense").reduce((a, t) => a + t.amount, 0);
    setIncome(inc);
    setExpense(exp);
    setBalance(inc - exp);
  };

  useEffect(() => calculateBalance(transactions), [transactions]);

  const addTransaction = (t) => {
    setTransactions(prev => [...prev, t]);
  };

  return (
   <>
   <Header/>
    <div className="dashboard">
      <h1>My Finance Dashboard</h1>
      <div className="cards">
        <div className="card">💰 Balance: ₹{balance}</div>
        <div className="card">📈 Income: ₹{income}</div>
        <div className="card">📉 Expense: ₹{expense}</div>
      </div>

      <TransactionForm addTransaction={addTransaction} />

      <div className="actions">
        <ExportCSV transactions={transactions} />
      </div>

      <FinanceChart transactions={transactions} />

      <div className="transactions-list">
        <h2>All Transactions</h2>
        <ul>
          {transactions.map((t, i) => (
            <li key={i}>
              [{t.date}] {t.type.toUpperCase()} – ₹{t.amount} ({t.name})
            </li>
          ))}
        </ul>
      </div>
    </div>
   </>
  );
};

export default Dashboard;
