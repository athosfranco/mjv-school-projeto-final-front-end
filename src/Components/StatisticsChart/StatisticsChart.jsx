import React, { useState, useContext } from "react";
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
import { StatisticsContainer } from "./StatisticsChart.styles";
import { DataCtx } from "../../Pages/Dashboard/Dashboard";

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

///////////q
const [casesPerMonth, setCasesPerMonth] = useState([]);

useEffect(() => {
  const dataForSelectedYear = dadosListaEspera.filter((caso) => {
    return caso.CAS_DataCriacao.split("-")[0] == anoSelecionado;
  });

  console.log(dataForSelectedYear);

  let [jan, fev, mar, abr, mai, jun, jul, ago, set, out, nov, dez] = [
    dataForSelectedYear.filter((caso) => {
      return caso.CAS_DataCriacao.split("-")[1] === "01";
    }).length,
    dataForSelectedYear.filter((caso) => {
      return caso.CAS_DataCriacao.split("-")[1] === "02";
    }).length,
    dataForSelectedYear.filter((caso) => {
      return caso.CAS_DataCriacao.split("-")[1] === "03";
    }).length,
    dataForSelectedYear.filter((caso) => {
      return caso.CAS_DataCriacao.split("-")[1] === "04";
    }).length,
    dataForSelectedYear.filter((caso) => {
      return caso.CAS_DataCriacao.split("-")[1] === "05";
    }).length,
    dataForSelectedYear.filter((caso) => {
      return caso.CAS_DataCriacao.split("-")[1] === "06";
    }).length,
    dataForSelectedYear.filter((caso) => {
      return caso.CAS_DataCriacao.split("-")[1] === "07";
    }).length,
    dataForSelectedYear.filter((caso) => {
      return caso.CAS_DataCriacao.split("-")[1] === "08";
    }).length,
    dataForSelectedYear.filter((caso) => {
      return caso.CAS_DataCriacao.split("-")[1] === "09";
    }).length,
    dataForSelectedYear.filter((caso) => {
      return caso.CAS_DataCriacao.split("-")[1] === "10";
    }).length,
    dataForSelectedYear.filter((caso) => {
      return caso.CAS_DataCriacao.split("-")[1] === "11";
    }).length,
    dataForSelectedYear.filter((caso) => {
      return caso.CAS_DataCriacao.split("-")[1] === "12";
    }).length,
  ];

  setCasesPerMonth([jan, fev, mar, abr, mai, jun, jul, ago, set, out, nov, dez]);
}, [dadosListaEspera, anoSelecionado]);

console.log(casesPerMonth);

////////////

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
  ////
  const { medicos, pacientes, consultas } = useContext(DataCtx);
  return (
    <StatisticsContainer>
      <Line options={options} data={data} />
    </StatisticsContainer>
  );
};

export default StatisticsChart;
