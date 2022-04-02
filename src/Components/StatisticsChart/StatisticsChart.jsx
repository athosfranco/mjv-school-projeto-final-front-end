import React, { useState, useContext, useEffect } from "react";
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

const anoAtual = new Date().getFullYear();

ChartJS.register(CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend);

export const options = {
  responsive: true,
  plugins: {
    legend: {
      position: "top",
      align: "end",
    },
    title: {
      display: false,
    },
  },
};

const labels = [
  "Janeiro",
  "Fevereiro",
  "Março",
  "Abril",
  "Maio",
  "Junho",
  "Julho",
  "Agosto",
  "Setembro",
  "Outubro",
  "Novembro",
  "Dezembro",
];

const StatisticsChart = () => {
  ////
  const { medicos, pacientes, consultas } = useContext(DataCtx);
  ///////////
  const [medicosPorMes, setMedicosPorMes] = useState([]);
  const [pacientesPorMes, setPacientesPorMes] = useState([]);
  const [consultasPorMes, setConsultasPorMes] = useState([]);
  const [anoSelecionado, setAnoSelecionado] = useState(anoAtual);
  const [anosComCadastro, setAnosComCadastro] = useState([]);

  useEffect(() => {
    ////Pegando todos os anos em que há algum tipo de cadastro
    let anosCadastrados = [];
    medicos.data.forEach((m) => {
      !anosCadastrados.includes(m.dataInclusao.split("-")[0]) && anosCadastrados.push(m.dataInclusao.split("-")[0]);
    });
    pacientes.data.forEach((p) => {
      !anosCadastrados.includes(p.dataInclusao.split("-")[0]) && anosCadastrados.push(p.dataInclusao.split("-")[0]);
    });
    consultas.data.forEach((c) => {
      !anosCadastrados.includes(c.dataInclusao.split("-")[0]) && anosCadastrados.push(c.dataInclusao.split("-")[0]);
    });

    setAnosComCadastro(anosCadastrados);

    /////Inserindo os medicos do ano selecionado no gráfico
    const medicosNoAnoSelecionado = medicos.data.filter((m) => {
      return m.dataInclusao.split("-")[0] == anoSelecionado;
    });

    let [jan, fev, mar, abr, mai, jun, jul, ago, set, out, nov, dez] = [
      medicosNoAnoSelecionado.filter((m) => m.dataInclusao.split("-")[1] === "01").length,
      medicosNoAnoSelecionado.filter((m) => m.dataInclusao.split("-")[1] === "02").length,
      medicosNoAnoSelecionado.filter((m) => m.dataInclusao.split("-")[1] === "03").length,
      medicosNoAnoSelecionado.filter((m) => m.dataInclusao.split("-")[1] === "04").length,
      medicosNoAnoSelecionado.filter((m) => m.dataInclusao.split("-")[1] === "05").length,
      medicosNoAnoSelecionado.filter((m) => m.dataInclusao.split("-")[1] === "06").length,
      medicosNoAnoSelecionado.filter((m) => m.dataInclusao.split("-")[1] === "07").length,
      medicosNoAnoSelecionado.filter((m) => m.dataInclusao.split("-")[1] === "08").length,
      medicosNoAnoSelecionado.filter((m) => m.dataInclusao.split("-")[1] === "09").length,
      medicosNoAnoSelecionado.filter((m) => m.dataInclusao.split("-")[1] === "10").length,
      medicosNoAnoSelecionado.filter((m) => m.dataInclusao.split("-")[1] === "11").length,
      medicosNoAnoSelecionado.filter((m) => m.dataInclusao.split("-")[1] === "12").length,
    ];

    setMedicosPorMes([jan, fev, mar, abr, mai, jun, jul, ago, set, out, nov, dez]);
    ////////////
    /////Inserindo os pacientes do ano selecionado no gráfic(p)
    const pacientesNoAnoSelecionado = pacientes.data.filter((p) => {
      return p.dataInclusao.split("-")[0] == anoSelecionado;
    });

    [jan, fev, mar, abr, mai, jun, jul, ago, set, out, nov, dez] = [
      pacientesNoAnoSelecionado.filter((p) => p.dataInclusao.split("-")[1] === "01").length,
      pacientesNoAnoSelecionado.filter((p) => p.dataInclusao.split("-")[1] === "02").length,
      pacientesNoAnoSelecionado.filter((p) => p.dataInclusao.split("-")[1] === "03").length,
      pacientesNoAnoSelecionado.filter((p) => p.dataInclusao.split("-")[1] === "04").length,
      pacientesNoAnoSelecionado.filter((p) => p.dataInclusao.split("-")[1] === "05").length,
      pacientesNoAnoSelecionado.filter((p) => p.dataInclusao.split("-")[1] === "06").length,
      pacientesNoAnoSelecionado.filter((p) => p.dataInclusao.split("-")[1] === "07").length,
      pacientesNoAnoSelecionado.filter((p) => p.dataInclusao.split("-")[1] === "08").length,
      pacientesNoAnoSelecionado.filter((p) => p.dataInclusao.split("-")[1] === "09").length,
      pacientesNoAnoSelecionado.filter((p) => p.dataInclusao.split("-")[1] === "10").length,
      pacientesNoAnoSelecionado.filter((p) => p.dataInclusao.split("-")[1] === "11").length,
      pacientesNoAnoSelecionado.filter((p) => p.dataInclusao.split("-")[1] === "12").length,
    ];

    setPacientesPorMes([jan, fev, mar, abr, mai, jun, jul, ago, set, out, nov, dez]);
    ////////////
    /////Inserindo as consultas do ano selecionado no gráfic(p)
    const consultasNoAnoSelecionado = consultas.data.filter((c) => {
      return c.dataInclusao.split("-")[0] == anoSelecionado;
    });

    [jan, fev, mar, abr, mai, jun, jul, ago, set, out, nov, dez] = [
      consultasNoAnoSelecionado.filter((c) => c.dataInclusao.split("-")[1] === "01").length,
      consultasNoAnoSelecionado.filter((c) => c.dataInclusao.split("-")[1] === "02").length,
      consultasNoAnoSelecionado.filter((c) => c.dataInclusao.split("-")[1] === "03").length,
      consultasNoAnoSelecionado.filter((c) => c.dataInclusao.split("-")[1] === "04").length,
      consultasNoAnoSelecionado.filter((c) => c.dataInclusao.split("-")[1] === "05").length,
      consultasNoAnoSelecionado.filter((c) => c.dataInclusao.split("-")[1] === "06").length,
      consultasNoAnoSelecionado.filter((c) => c.dataInclusao.split("-")[1] === "07").length,
      consultasNoAnoSelecionado.filter((c) => c.dataInclusao.split("-")[1] === "08").length,
      consultasNoAnoSelecionado.filter((c) => c.dataInclusao.split("-")[1] === "09").length,
      consultasNoAnoSelecionado.filter((c) => c.dataInclusao.split("-")[1] === "10").length,
      consultasNoAnoSelecionado.filter((c) => c.dataInclusao.split("-")[1] === "11").length,
      consultasNoAnoSelecionado.filter((c) => c.dataInclusao.split("-")[1] === "12").length,
    ];

    setConsultasPorMes([jan, fev, mar, abr, mai, jun, jul, ago, set, out, nov, dez]);
    ////////////
  }, [anoSelecionado]);

  const data = {
    labels,
    datasets: [
      {
        label: "Pacientes",
        data: pacientesPorMes,
        borderColor: "rgb(255, 99, 132)",
        backgroundColor: "rgba(255, 99, 132, 0.5)",
        tension: 0.5,
      },
      {
        label: "Médicos",
        data: medicosPorMes,
        borderColor: "rgb(44, 162, 56)",
        backgroundColor: "rgba(44, 162, 56, 0.5)",
        tension: 0.5,
      },
      {
        label: "Consultas",
        data: consultasPorMes,
        borderColor: "rgb(53, 162, 235)",
        backgroundColor: "rgba(53, 162, 235, 0.5)",
        tension: 0.5,
      },
    ],
  };
  return (
    <StatisticsContainer>
      <Line options={options} data={data} />
    </StatisticsContainer>
  );
};

export default StatisticsChart;
