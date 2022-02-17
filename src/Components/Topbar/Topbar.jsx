import React, { useState, useEffect } from "react";
import {
  CurrentPage,
  LeftTopbarContent,
  RightTopbarContent,
  TopbarContainer,
  UserAvatar,
  WelcomeMsg,
} from "./Topbar.styles";
import avatar from "../../Assets/avatar.png";
import { useLocation } from "react-router-dom";

const Topbar = () => {
  const [offset, setOffset] = useState(0);

  const [currPageTitle, setCurrPageTitle] = useState("Início");

  const { pathname } = useLocation();

  useEffect(() => {
    let basePathname = "/dashboard/";
    switch (pathname) {
      case basePathname:
        setCurrPageTitle("Início");
        break;
      case basePathname + "mensagem":
        setCurrPageTitle("Mensagem");
        break;
      case basePathname + "paciente":
        setCurrPageTitle("Paciente");
        break;
      case basePathname + "atendimentos":
        setCurrPageTitle("Atendimentos");
        break;
      case basePathname + "metas":
        setCurrPageTitle("Metas");
        break;
      case basePathname + "financeiros":
        setCurrPageTitle("Financeiros");
        break;
      case basePathname + "cirurgia":
        setCurrPageTitle("Cirurgia");
        break;
      case basePathname + "exames":
        setCurrPageTitle("Exames");
        break;
      case basePathname + "conta-medica":
        setCurrPageTitle("Conta Médica");
        break;
      case basePathname + "configuracoes":
        setCurrPageTitle("Configurações");
        break;
      default:
        break;
    }
  }, [pathname]);

  useEffect(() => {
    const onScroll = () => setOffset(window.pageYOffset);
    // clean up code
    window.removeEventListener("scroll", onScroll);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <TopbarContainer scroll={offset}>
      <LeftTopbarContent>
        <CurrentPage>{currPageTitle}</CurrentPage>
        <WelcomeMsg>Olá, Maria</WelcomeMsg>
      </LeftTopbarContent>
      <RightTopbarContent>
        <UserAvatar src={avatar} />
      </RightTopbarContent>
    </TopbarContainer>
  );
};

export default Topbar;
