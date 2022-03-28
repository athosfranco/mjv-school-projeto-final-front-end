import React, { useContext } from "react";
import InfoCard from "../../Components/InfoCard/InfoCard";
import { PageContainer, SectionContainer, SectionTitle, SectionWrapper, Divider } from "../Pages.styles";
import pacienteSvg from "../../Assets/patient_svg.svg";
import medicoSvg from "../../Assets/doctor_svg.svg";
import consultaSvg from "../../Assets/consulta_svg.svg";
import ChartComponent from "../../Components/ChartComponent/ChartComponent";

import { Carousel } from "@trendyol-js/react-carousel";
import { ArrowLeft, ArrowRight } from "./Inicio.styles";
import CampanhasChart from "../../Components/CampanhasChart/CampanhasChart";
import { DataCtx } from "../Dashboard/Dashboard";
import Section from "../../Components/Section/Section";

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

  return (
    <PageContainer>
      <Section sectionTitle="Informações Rápidas">
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
      </Section>
      <Section sectionTitle="Estatísticas Mensais">
        <h1>lalalala teste</h1>
      </Section>
    </PageContainer>
  );
};

export default Inicio;
