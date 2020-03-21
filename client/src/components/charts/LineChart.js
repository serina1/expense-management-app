import React, { useState } from "react";
import Chart from "chart.js";
import { Bar, Line, Pie } from "react-chartjs-2";
import classes from "./Chart.module.css";

function LineChart(expenses) {
  
  const [lineData, setLineData] = useState({

    labels: ["03-09", "03-13", "03-16", "03-21"],
    datasets: [
      {
        label: "Expenses",
        data: [25, 40, 150, 50],
        borderColor: ["#996ab8"],
        borderWidth: 3
      }
    ]
  });

  // set options
  const [lineOptions, setLineOptions] = useState({
    options: {
      scales: {
        yAxes: [
          {
            ticks: {
              beginAtZero: true
            }
          }
        ]
      },
      title: {
        display: true,
        text: "Amount per date",
        fontSize: 20
      },
      legend: {
        display: true,
        position: "top"
      }
    }
  });
  
  // return chart
  return (
    <div className={classes.graphContainer}>
        <Line data={lineData} options={lineOptions.options} />
    </div>
  );
}

export default LineChart;
