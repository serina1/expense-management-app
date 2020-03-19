import React, { useEffect, useState } from "react";
import LineExample from "../charts/myLineGraph";
import API from "../../utils/API";

function Charts() {
  const [data, setData] = useState([]);
  
  useEffect(() => {
    API.getExpenses().then(res => {
      setData(res.data);
    });
  }, []);

  return (
    <div>
      <h1>Charts</h1>
      <LineExample data = {data}/>
    </div>
  );
}

export default Charts;
