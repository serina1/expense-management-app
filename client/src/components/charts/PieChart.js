import React, { useState } from "react";
import Chart from "chart.js";
import { Bar, Line, Pie } from "react-chartjs-2";
import classes from "./Chart.module.css";

function PieChart(expenses) {

  const [pieData, setPieData] = useState({
    labels: ["Food", "Travel", "Peripherals"],
    datasets: [
      {
        data: [25, 90, 150],
        backgroundColor: ["#FF6384", "#36A2EB", "#FFCE56"],
        hoverBackgroundColor: ["#FF6384", "#36A2EB", "#FFCE56"]
      }
    ]
  });

  // set options
  const [pieOptions, setPieOptions] = useState({
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
        text: "Amount per Category",
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
      <Pie data={pieData} options={pieOptions.options} />
    </div>
  );
}

export default PieChart;
