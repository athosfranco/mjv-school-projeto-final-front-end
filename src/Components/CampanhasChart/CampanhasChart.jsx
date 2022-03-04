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
import { randomInt } from "../../GeneralFunctions";
import { CampanhasChartContainer } from "./CampanhasChart.styles";

ChartJS.register(CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend);

export const options = {
  maintainAspectRatio: false,
  responsive: true,
  plugins: {
    legend: {
      position: "top",
      align: "end",
    },
    title: {
      display: false,
      text: "Chart.js Line Chart",
    },
  },
};

const labels = ["Jan", "Fev", "Mar", "Abr", "Mai", "Jun", "Jul", "Ago", "Set", "Out", "Dez"];

export const data = {
  labels,
  datasets: [
    {
      label: "Retorno",
      data: labels.map(() => randomInt(200, 500)),
      borderColor: "#00A389",
      backgroundColor: "#00A389",
      tension: 0.3,
    },
    {
      label: "Crescimento",
      data: labels.map(() => randomInt(200, 500)),
      borderColor: "#FFBB54",
      backgroundColor: "#FFBB54",
      tension: 0.3,
    },
  ],
};

const CampanhasChart = () => {
  return (
    <CampanhasChartContainer>
      <Line options={options} data={data} height="315px" />
    </CampanhasChartContainer>
  );
};

export default CampanhasChart;
