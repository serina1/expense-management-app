import React, { useState } from "react";
import Chart from "chart.js";
import { Bar, Line, Pie } from "react-chartjs-2";
import classes from "./LineGraph.module.css";

function LineExample({data}) {
    console.log(data[0])
  const [lineData, setLineData] = useState({
    labels: ["label 1", "label 2", "label 3", "label 4"],
    datasets: [
      {
        label: "expenses",
        data: [48, 35, 73, 82],
        backgroundColor: [
          "#996cb7"
        ],
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
        text: "Expense claims created over the past month",
        fontSize: 25
      },
      legend: {
        display: true,
        position: "top"
      }
    }
  });
  // return chart
  return (
    <div className="graphContainer">
      <Line data={lineData} options={lineOptions.options} />
    </div>
  );
}

export default LineExample;
