import React, { useContext } from "react";
import InfoCard from "../../Components/InfoCard/InfoCard";
import { PageContainer, SectionContainer, SectionTitle, SectionWrapper, Divider } from "../Pages.styles";
import pacienteSvg from "../../Assets/patient_svg.svg";
import medicoSvg from "../../Assets/doctor_svg.svg";
import consultaSvg from "../../Assets/consulta_svg.svg";
import increase from "../../Assets/increase.png";
import decrease from "../../Assets/decrease.png";

import ChartComponent from "../../Components/ChartComponent/ChartComponent";

import { Carousel } from "@trendyol-js/react-carousel";
import { ArrowLeft, ArrowRight } from "./Inicio.styles";
import CampanhasChart from "../../Components/CampanhasChart/CampanhasChart";
import { DataCtx } from "../Dashboard/Dashboard";

const Inicio = () => {
  const { medicos, pacientes, consultas } = useContext(DataCtx);

  //CARDS DE CIRURGIAS, EXAMES E CONTAS MEDICAS /////////////////////////////////////////////////////////

  const cardData = [
    {
      id: 1,
      title: "Pacientes",
      value: pacientes.data.length,
      img: pacienteSvg,
    },
    {
      id: 2,
      title: "Médicos",
      value: medicos.data.length,
      img: medicoSvg,
    },
    {
      id: 3,
      title: "Consultas",
      value: consultas.data.length,
      img: consultaSvg,
    },
  ];

  // CARDS DE ESTATÍSTICAS //////////////////////////////////////////////////////////////////////////////////

  const statisticsCardData = [
    {
      id: 1,
      title: "Doações",
      value: 20.0,
      percentageChange: 2.5,
      img: increase,
    },
    {
      id: 2,
      title: "Pacientes",
      value: 2,
      percentageChange: -4.4,
      img: decrease,
    },
    {
      id: 3,
      title: "Usuários",
      value: 3,
      percentageChange: 2.5,
      img: increase,
    },
  ];
  return (
    <PageContainer>
      <SectionContainer>
        <SectionTitle>Informações rápidas</SectionTitle>
        <Divider />
        <SectionWrapper>
          {cardData.map((card) => {
            return (
              <InfoCard
                title={card.title}
                value={card.value}
                img={card.img}
                key={card.id}
                onClick={() => {
                  alert(card.title);
                }}
              />
            );
          })}
        </SectionWrapper>
      </SectionContainer>
      <SectionContainer>
        <SectionTitle>Estatísticas Semanais</SectionTitle>
        <Divider />
        <SectionWrapper>
          {/*    <ChartComponent title={"Pacientes"} value={98} />
          <ChartComponent title={"Cirurgias"} value={110} />
          <ChartComponent title={"Lista de Espera"} value={155} /> */}
        </SectionWrapper>
        {/* <Casos casos={CASOS_DUMMY_DATA} /> */}
      </SectionContainer>
      <SectionContainer>
        <SectionTitle>Estatísticas Mensais</SectionTitle>
        <Divider />
        {/* <CampanhasChart /> */}
      </SectionContainer>
    </PageContainer>
  );
};

export default Inicio;
