import React, { useContext } from "react";
import InfoCard from "../../Components/InfoCard/InfoCard";
import { PageContainer, SectionWrapper } from "../Pages.styles";
import pacienteSvg from "../../Assets/patient_svg.svg";
import medicoSvg from "../../Assets/doctor_svg.svg";
import consultaSvg from "../../Assets/consulta_svg.svg";

import { DataCtx } from "../Dashboard/Dashboard";
import Section from "../../Components/Section/Section";
import StatisticsChart from "../../Components/StatisticsChart/StatisticsChart";
import { AboutContainer, AboutDescDiv, AboutLinks, AboutText, AboutTitle, AthosDevImg } from "./Inicio.styles";
import Button from "../../UI/Button/Button";
import { IconWrapper, GithubIcon, LinkedinIcon } from "../LoginPage/LoginPage.styles";
import athosDevLogo from "../../Assets/namedev.png";

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
        <StatisticsChart />
      </Section>
      <Section sectionTitle="Sobre o Dashboard">
        <AboutContainer>
          <AboutDescDiv>
            <AboutTitle>MJV Clinic 1.0</AboutTitle>
            <AboutText>
              Este Sistema de Gestão de Clínica Médica foi apresentado como Projeto Final para a MJV School de Java, em
              Março de 2022. O Dashboard corresponde ao Front-End do sistema, desenvolvido com React, Styled Components,
              Bootstrap e ChartJs. O desenvolvimento do Front-End foi um bônus que decidi implementar.
            </AboutText>

            <AboutText>
              O objetivo do projeto é desenvolver um sistema simples, mas completo e consistente, que permita que os
              funcionários da clínica fictícia possam CRIAR, CONSULTAR, EDITAR e EXCLUIR registros de pacientes, médicos
              e consultas. Esses registros precisam estar salvos em um banco de dados.
            </AboutText>
            <AboutText>
              {" "}
              O Back-End do projeto foi desenvolvido em Java, utilizando Spring Boot framework. Foi utilizado Spring
              Data JPA para implementar a camada de persistência dos dados e o banco de dados PostgreSQL. A API
              desenvolvida está documentada no Swagger. Sinta-se livre para utilizá-la em um projeto pessoal.
            </AboutText>
          </AboutDescDiv>
          <AboutLinks>
            <AthosDevImg src={athosDevLogo} />
            <IconWrapper>
              <a href="https://www.linkedin.com/in/athosfranco/" target="_blank" rel="noreferrer">
                {" "}
                <LinkedinIcon />
              </a>
              <a href="https://github.com/athosfranco" target="_blank" rel="noreferrer">
                <GithubIcon />
              </a>
            </IconWrapper>
            <Button type="success" margin={"0 0 5px 0"}>
              Github Repo (Front-End)
            </Button>
            <Button type="success" margin={"0 0 5px 0"}>
              Githup Repo (Back-End)
            </Button>
            <Button type="success" margin={"0 0 5px 0"}>
              Documentação API
            </Button>
          </AboutLinks>
        </AboutContainer>
      </Section>
    </PageContainer>
  );
};

export default Inicio;
