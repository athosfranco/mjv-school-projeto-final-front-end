import React, { useState, useEffect, useContext } from "react";
import ModalCtx from "../../Context/ModalContext";
import LoginCtx from "../../Context/LoginContext";
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
  //valor scrollado
  const [offset, setOffset] = useState(0);

  //titulo da pag atual aparecendo no topbar
  const [currPageTitle, setCurrPageTitle] = useState("Início");

  //url atual
  const { pathname } = useLocation();

  //manipulaçao do modal
  const { modalState, modalDispatch } = useContext(ModalCtx);

  //login context
  const { state, dispatch } = useContext(LoginCtx);

  //useEffect para atualizar o nome da pagina atual no topbar
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

  //scroll listener
  useEffect(() => {
    const onScroll = () => setOffset(window.pageYOffset);
    // clean up code
    window.removeEventListener("scroll", onScroll);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const logoutHandler = () => {
    modalDispatch({
      type: "CONFIG_MODAL",
      value: {
        display: true,
        title: "Logout",
        text: `Você está conectado como: ${state.userLoggedIn}. Deseja desconectar?`,
        modalWithBtn: true,
        confirmBtnTxt: "Desconectar",
        cancelBtnTxt: "Cancelar",
        cancelHandler: () => {
          modalDispatch({ type: "SET_DISPLAY", value: false });
        },
        confirmHandler: () => {
          alert("laaaalaalala");
        },
      },
    });
  };

  return (
    <TopbarContainer scroll={offset}>
      <LeftTopbarContent>
        <CurrentPage>{currPageTitle}</CurrentPage>
        <WelcomeMsg onClick={logoutHandler}>Olá, {state.userLoggedIn}</WelcomeMsg>
      </LeftTopbarContent>
      <RightTopbarContent onClick={logoutHandler}>
        <UserAvatar src={avatar} />
      </RightTopbarContent>
    </TopbarContainer>
  );
};

export default Topbar;
