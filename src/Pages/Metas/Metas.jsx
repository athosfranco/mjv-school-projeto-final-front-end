import React from "react";
import { Divider, PageContainer, SectionContainer, SectionTitle, SectionWrapper } from "../Pages.styles";
import metaRedIcon from "../../Assets/meta_red_icon.png";
import metaYwIcon from "../../Assets/meta_yw_icon.png";
import metaDrIcon from "../../Assets/meta_dr_icon.png";
import InfoCard from "../../Components/InfoCard/InfoCard";

const Metas = () => {
  const cardsMetas = {
    cirurgia: [
      {
        id: 1,
        title: "Meta 25%",
        value: 19,
        img: metaRedIcon,
      },
      {
        id: 2,
        title: "Meta 50%",
        value: 6,
        img: metaYwIcon,
      },
      {
        id: 3,
        title: "Meta 75%",
        value: 15,
        img: metaYwIcon,
      },
      {
        id: 4,
        title: "Meta 100%",
        value: 13,
        img: metaDrIcon,
      },
    ],
    exames: [
      {
        id: 1,
        title: "Meta 25%",
        value: 19,
        img: metaRedIcon,
      },
      {
        id: 2,
        title: "Meta 50%",
        value: 6,
        img: metaYwIcon,
      },
      {
        id: 3,
        title: "Meta 75%",
        value: 15,
        img: metaYwIcon,
      },
      {
        id: 4,
        title: "Meta 100%",
        value: 13,
        img: metaDrIcon,
      },
    ],
    contaMedica: [
      {
        id: 1,
        title: "Meta 25%",
        value: 19,
        img: metaRedIcon,
      },
      {
        id: 2,
        title: "Meta 50%",
        value: 6,
        img: metaYwIcon,
      },
      {
        id: 3,
        title: "Meta 75%",
        value: 15,
        img: metaYwIcon,
      },
      {
        id: 4,
        title: "Meta 100%",
        value: 13,
        img: metaDrIcon,
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

export default Metas;
