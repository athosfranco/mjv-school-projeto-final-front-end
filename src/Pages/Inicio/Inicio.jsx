import React from "react";
import InfoCard from "../../Components/InfoCard/InfoCard";
import { PageContainer, SectionContainer, SectionTitle, SectionWrapper, Divider } from "../Pages.styles";
import cirurgiaImg from "../../Assets/cirurgias_icon.png";
import exameImg from "../../Assets/exames_icon.png";
import contaImg from "../../Assets/contas_icon.png";
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
        <SectionTitle>Casos para avaliar</SectionTitle>
        <Divider />
        <Casos casos={CASOS_DUMMY_DATA} />
      </SectionContainer>
    </PageContainer>
  );
};

export default Inicio;
