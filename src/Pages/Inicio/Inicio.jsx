import React from "react";
import InfoCard from "../../Components/InfoCard/InfoCard";
import { PageContainer, SectionContainer, SectionTitle, SectionWrapper, Divider } from "../Pages.styles";
import cirurgiaImg from "../../Assets/cirurgias_icon.png";
import exameImg from "../../Assets/exames_icon.png";
import contaImg from "../../Assets/contas_icon.png";

const cardData = [
  {
    title: "Cirurgia",
    value: 200,
    img: cirurgiaImg,
  },
  {
    title: "Exames",
    value: 30,
    img: exameImg,
  },
  {
    title: "Contas Médicas",
    value: 50,
    img: contaImg,
  },
];

const Inicio = () => {
  return (
    <PageContainer>
      <SectionContainer>
        <SectionTitle>Informações rápidas</SectionTitle>
        <Divider />
        <SectionWrapper>
          {cardData.map((card) => {
            return <InfoCard title={card.title} value={card.value} img={card.img} />;
          })}
        </SectionWrapper>
      </SectionContainer>
      <SectionContainer>
        <SectionTitle>Casos para avaliar</SectionTitle>
        <Divider />
        <SectionWrapper></SectionWrapper>

        <SectionWrapper></SectionWrapper>
      </SectionContainer>
    </PageContainer>
  );
};

export default Inicio;
