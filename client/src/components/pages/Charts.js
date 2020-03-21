import React, { useEffect, useState } from "react";
import PieChart from "../charts/PieChart";
import LineChart from "../charts/LineChart";
import API from "../../utils/API";

function Charts() {
  const [expenses, setExpenses] = useState([]);

  useEffect(() => {
    API.getExpenses().then(res => {
      setExpenses(res.data);
    });
  }, []);

  return (
    <div>
      <h2>Charts Dashboard</h2>
      <PieChart expenses={expenses} /><LineChart expenses={expenses} />
    </div>
  );
}

export default Charts;