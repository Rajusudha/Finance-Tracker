import React from "react";
import Papa from "papaparse";

export default function ExportCSV({ transactions }) {
  const exportCSV = () => {
    const csv = Papa.unparse(transactions, {
      columns: ["name", "amount", "type", "date"]
    });
    const blob = new Blob([csv], { type: "text/csv;charset=utf-8;" });
    const url = URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url;
    a.download = "transactions.csv";
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
  };

  return (
    <button onClick={exportCSV} className="export-btn">
      Export CSV
    </button>
  );
}
