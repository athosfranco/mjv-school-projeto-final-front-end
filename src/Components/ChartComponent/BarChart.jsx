import React from "react";
import { Chart as ChartJS, CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend } from "chart.js";
import { Bar } from "react-chartjs-2";
import { randomInt } from "../../GeneralFunctions";

ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend);

export const options = {
  responsive: true,
  scales: {
    xAxes: [
      {
        gridLines: {
          color: "rgba(0, 0, 0, 0)",
        },
      },
    ],
    yAxes: [
      {
        gridLines: {
          color: "rgba(0, 0, 0, 0)",
        },
      },
    ],
  },
  plugins: {
    legend: {
      display: false,
    },
    title: {
      display: false,
      text: "Chart.js Bar Chart",
    },
  },
};

const labels = ["Dom", "Seg", "Ter", "Qua", "Qui", "Sex", "Sáb"];

const BarChart = ({ title }) => {
  const data = {
    labels,
    datasets: [
      {
        label: title,
        data: labels.map((label) => randomInt(4, 750)),
        backgroundColor: ["#a91b1bc8", "#cd2424bb", "#6f0d0dc1"],
        hoverBackgroundColor: ["#A91B1C", "#A91B1C", "#A91B1C"],
        borderRadius: 8,
      },
    ],
  };

  return (
    <div>
      <Bar options={options} data={data} height={"210px"} />
    </div>
  );
};

export default BarChart;
