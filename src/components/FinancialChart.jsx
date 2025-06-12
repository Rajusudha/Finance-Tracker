// src/components/FinanceChart.jsx (or wherever you're keeping it)

import React from "react";
import { Line } from "@ant-design/plots";

const FinanceChart = ({ transactions }) => {
  const data = transactions.map((t, index) => ({
    index,
    value: t.amount,
    category: t.type,
  }));

  const config = {
    data,
    xField: "index",
    yField: "value",
    seriesField: "category",
    smooth: true,
    height: 300,
    padding: 'auto',
  };

  return (
    <div>
      <h3>Financial Statistics</h3>
      <Line {...config} />
    </div>
  );
};

export default FinanceChart;
