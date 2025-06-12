import React from "react";

const BalanceCard = ({ label, amount }) => {
  return (
    <div style={{
      flex: "1",
      minWidth: "200px",
      padding: "1rem",
      borderRadius: "8px",
      background: "#f0f4f8",
      boxShadow: "0 2px 8px rgba(0,0,0,0.1)"
    }}>
      <h4>{label}</h4>
      <p style={{ fontSize: "1.5rem", fontWeight: "bold" }}>₹ {amount}</p>
    </div>
  );
};

export default BalanceCard;
