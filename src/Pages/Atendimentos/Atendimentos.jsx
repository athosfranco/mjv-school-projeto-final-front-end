import React from "react";
import { Divider, PageContainer, SectionContainer, SectionTitle, SectionWrapper } from "../Pages.styles";
import infantilIcon from "../../Assets/infantil_icon.png";
import mulheresIcon from "../../Assets/mulher_icon.png";
import idososIcon from "../../Assets/idoso_icon.png";
import atendimentosIcon from "../../Assets/atendimentos_icon.png";
import filaIcon from "../../Assets/fila_icon.png";
import aprovadosIcon from "../../Assets/aprovados_icon.png";
import InfoCard from "../../Components/InfoCard/InfoCard";

const cardsAtendimentos = {
  cirurgia: [
    {
      id: 1,
      title: "Crianças",
      value: 19,
      img: infantilIcon,
    },
    {
      id: 2,
      title: "Mulheres",
      value: 11,
      img: mulheresIcon,
    },
    {
      id: 3,
      title: "Idosos",
      value: 86,
      img: idososIcon,
    },
    {
      id: 4,
      title: "Atendimentos",
      value: 7,
      img: atendimentosIcon,
    },
    {
      id: 5,
      title: "Fila de espera",
      value: 9,
      img: filaIcon,
    },
    {
      id: 6,
      title: "Aprovados para cirurgia",
      value: 13,
      img: aprovadosIcon,
    },
  ],
  exames: [
    {
      id: 1,
      title: "Crianças",
      value: 14,
      img: infantilIcon,
    },
    {
      id: 2,
      title: "Mulheres",
      value: 12,
      img: mulheresIcon,
    },
    {
      id: 3,
      title: "Idosos",
      value: 92,
      img: idososIcon,
    },
    {
      id: 4,
      title: "Atendimentos",
      value: 24,
      img: atendimentosIcon,
    },
    {
      id: 5,
      title: "Fila de espera",
      value: 10,
      img: filaIcon,
    },
    {
      id: 6,
      title: "Aprovados para cirurgia",
      value: 64,
      img: aprovadosIcon,
    },
  ],
  contaMedica: [
    {
      id: 1,
      title: "Crianças",
      value: 29,
      img: infantilIcon,
    },
    {
      id: 2,
      title: "Mulheres",
      value: 9,
      img: mulheresIcon,
    },
    {
      id: 3,
      title: "Idosos",
      value: 60,
      img: idososIcon,
    },
    {
      id: 4,
      title: "Atendimentos",
      value: 7,
      img: atendimentosIcon,
    },
    {
      id: 5,
      title: "Fila de espera",
      value: 9,
      img: filaIcon,
    },
    {
      id: 6,
      title: "Aprovados para cirurgia",
      value: 13,
      img: aprovadosIcon,
    },
  ],
};

const Atendimentos = () => {
  return (
    <PageContainer>
      <SectionContainer>
        <SectionTitle>Cirurgia</SectionTitle>
        <Divider />
        <SectionWrapper>
          {cardsAtendimentos.cirurgia.map((card) => {
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
        <SectionTitle>Exames</SectionTitle>
        <Divider />
        <SectionWrapper>
          {" "}
          {cardsAtendimentos.exames.map((card) => {
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
        <SectionTitle>Conta Médica</SectionTitle>
        <Divider />
        <SectionWrapper>
          {cardsAtendimentos.contaMedica.map((card) => {
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
    </PageContainer>
  );
};

export default Atendimentos;
