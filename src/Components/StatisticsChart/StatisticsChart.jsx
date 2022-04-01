import React from "react";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";
import { Line } from "react-chartjs-2";

ChartJS.register(CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend);

export const options = {
  responsive: true,
  plugins: {
    legend: {
      position: "top",
    },
    title: {
      display: true,
      text: "Chart.js Line Chart",
    },
  },
};

const labels = ["Jan", "Fev", "Mar", "Abr", "Mai", "Jun", "Jul", "Ago", "Set", "Out", "Nov", "Dez"];

export const data = {
  labels,
  datasets: [
    {
      label: "Pacientes",
      data: labels.map(() => Math.floor(Math.random() * (15 - 2 + 1) + 2)),
      borderColor: "rgb(255, 99, 132)",
      backgroundColor: "rgba(255, 99, 132, 0.5)",
    },
    {
      label: "Médicos",
      data: labels.map(() => Math.floor(Math.random() * (15 - 2 + 1) + 2)),
      borderColor: "rgb(44, 162, 56)",
      backgroundColor: "rgba(44, 162, 56, 0.5)",
    },
    {
      label: "Consultas",
      data: labels.map(() => Math.floor(Math.random() * (15 - 2 + 1) + 2)),
      borderColor: "rgb(53, 162, 235)",
      backgroundColor: "rgba(53, 162, 235, 0.5)",
    },
  ],
};

const StatisticsChart = () => {
  return (
    <div>
      <Line options={options} data={data} />
    </div>
  );
};

export default StatisticsChart;
