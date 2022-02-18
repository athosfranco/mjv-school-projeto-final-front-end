import React, { useContext } from "react";
import { PageContainer, SectionContainer, SectionTitle, SectionWrapper, Divider } from "../Pages.styles";
import { Switch } from "@mui/material";
import { OptionContainer, OptionTitle, OptionDesc } from "./Configuracoes.styles";
import { ThemeCtx } from "../../App";

const Configuracoes = () => {
  const { handleToggleTheme, theme } = useContext(ThemeCtx);
  return (
    <PageContainer>
      <SectionContainer>
        <SectionTitle>Preferências de interface</SectionTitle>
        <Divider />
        <SectionWrapper>
          <OptionContainer>
            <OptionTitle>Modo Escuro</OptionTitle>
            <Switch onChange={handleToggleTheme} checked={theme !== "light"} />
            <OptionDesc>
              Modifica a paleta de cores para uma com tons escuros, diminuindo a luminosidade da tela.
            </OptionDesc>
          </OptionContainer>
        </SectionWrapper>
      </SectionContainer>
    </PageContainer>
  );
};

export default Configuracoes;
