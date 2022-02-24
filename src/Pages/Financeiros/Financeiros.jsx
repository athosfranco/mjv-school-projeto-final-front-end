import React from "react";
import { Divider, PageContainer, SectionContainer, SectionTitle, SectionWrapper } from "../Pages.styles";
import metaRedIcon from "../../Assets/meta_red_icon.png";
import fileIcon from "../../Assets/fila_icon.png";
import metaYwIcon from "../../Assets/aprovados_icon.png";
import drIcon from "../../Assets/meta_dr_icon.png";
import InfoCard from "../../Components/InfoCard/InfoCard";

const Financeiros = () => {
  const cardsMetas = {
    cirurgia: [
      {
        id: 1,
        title: "Recebido",
        value: 7,
        img: drIcon,
      },
      {
        id: 2,
        title: "A pagar",
        value: 9,
        img: fileIcon,
      },
      {
        id: 3,
        title: "Consolidado",
        value: 13,
        img: metaYwIcon,
      },
    ],
    exames: [
      {
        id: 1,
        title: "Recebido",
        value: 7,
        img: drIcon,
      },
      {
        id: 2,
        title: "A pagar",
        value: 9,
        img: fileIcon,
      },
      {
        id: 3,
        title: "Consolidado",
        value: 13,
        img: metaYwIcon,
      },
    ],
    contaMedica: [
      {
        id: 1,
        title: "Recebido",
        value: 19,
        img: drIcon,
      },
      {
        id: 2,
        title: "A pagar",
        value: 6,
        img: fileIcon,
      },
      {
        id: 3,
        title: "Consolidado",
        value: 15,
        img: metaYwIcon,
      },
    ],
  };
  return (
    <PageContainer>
      <SectionContainer>
        <SectionTitle>Cirurgia</SectionTitle>
        <Divider />
        <SectionWrapper>
          {cardsMetas.cirurgia.map((card) => {
            return (
              <InfoCard
                title={card.title}
                value={card.value}
                img={card.img}
                key={card.id}
                onClick={() => {
                  alert(card.title);
                }}
                withBtns
              />
            );
          })}
        </SectionWrapper>
      </SectionContainer>
      <SectionContainer>
        <SectionTitle>Exames</SectionTitle>
        <Divider />
        <SectionWrapper>
          {" "}
          {cardsMetas.exames.map((card) => {
            return (
              <InfoCard
                title={card.title}
                value={card.value}
                img={card.img}
                key={card.id}
                onClick={() => {
                  alert(card.title);
                }}
                withBtns
              />
            );
          })}
        </SectionWrapper>
      </SectionContainer>
      <SectionContainer>
        <SectionTitle>Conta Médica</SectionTitle>
        <Divider />
        <SectionWrapper>
          {cardsMetas.contaMedica.map((card) => {
            return (
              <InfoCard
                title={card.title}
                value={card.value}
                img={card.img}
                key={card.id}
                onClick={() => {
                  alert(card.title);
                }}
                withBtns
              />
            );
          })}
        </SectionWrapper>
      </SectionContainer>
    </PageContainer>
  );
};

export default Financeiros;
