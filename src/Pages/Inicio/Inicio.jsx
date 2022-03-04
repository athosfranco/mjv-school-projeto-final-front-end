import React from "react";
import InfoCard from "../../Components/InfoCard/InfoCard";
import { PageContainer, SectionContainer, SectionTitle, SectionWrapper, Divider } from "../Pages.styles";
import cirurgiaImg from "../../Assets/cirurgias_icon.png";
import exameImg from "../../Assets/exames_icon.png";
import contaImg from "../../Assets/contas_icon.png";
import increase from "../../Assets/increase.png";
import decrease from "../../Assets/decrease.png";
import Casos from "./Casos";
import { CASOS_DUMMY_DATA } from "../../data";

const cardData = [
  {
    id: 1,
    title: "Cirurgia",
    value: 200,
    img: cirurgiaImg,
  },
  {
    id: 2,
    title: "Exames",
    value: 30,
    img: exameImg,
  },
  {
    id: 3,
    title: "Contas Médicas",
    value: 50,
    img: contaImg,
  },
];

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
    value: 300,
    percentageChange: -4.4,
    img: decrease,
  },
  {
    id: 3,
    title: "Novos Usuários",
    value: 37,
    percentageChange: 2.5,
    img: increase,
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
        <SectionTitle>Estatísticas</SectionTitle>
        <Divider />
        <SectionWrapper>
          {statisticsCardData.map((card) => {
            return (
              <InfoCard
                title={card.title}
                value={card.value}
                percentageChange={card.percentageChange}
                img={card.img}
                key={card.id}
                onClick={() => {
                  alert(card.title);
                }}
              />
            );
          })}
        </SectionWrapper>
        {/* <Casos casos={CASOS_DUMMY_DATA} /> */}
      </SectionContainer>
      <SectionContainer>
        <SectionTitle>Pedidos em Destaque</SectionTitle>
        <Divider />
        <SectionWrapper></SectionWrapper>
      </SectionContainer>
    </PageContainer>
  );
};

export default Inicio;
