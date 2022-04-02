import React, { useState, useEffect, useContext } from "react";
import ModalCtx from "../../Context/ModalContext";
import LoginCtx from "../../Context/LoginContext";
import { MdOutlineNightlight } from "react-icons/md";
import { BsSun } from "react-icons/bs";
import { IconWrapper } from "../LoginModal/LoginModal.styles";
import {
  CurrentPage,
  FlexCol,
  LeftTopbarContent,
  RightTopbarContent,
  TopbarContainer,
  UserAvatar,
  WelcomeMsg,
} from "./Topbar.styles";
import avatar from "../../Assets/avatar.png";
import { useLocation } from "react-router-dom";
import { ThemeCtx } from "../../App";

const Topbar = () => {
  const { handleToggleTheme, theme } = useContext(ThemeCtx);
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
      case basePathname + "pacientes":
        setCurrPageTitle("Pacientes");
        break;
      case basePathname + "medicos":
        setCurrPageTitle("Médicos");
        break;
      case basePathname + "consultas":
        setCurrPageTitle("Consultas");
        break;
      case basePathname + "receita":
        setCurrPageTitle("Receita");
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
          modalDispatch({ type: "SET_DISPLAY", value: false });
          dispatch({ type: "LOGOUT" });
        },
      },
    });
  };

  return (
    <TopbarContainer scroll={offset}>
      <LeftTopbarContent>
        <UserAvatar src={avatar} onClick={logoutHandler} />
        <FlexCol>
          {" "}
          <CurrentPage>{currPageTitle}</CurrentPage>
          <WelcomeMsg onClick={logoutHandler}>
            Olá, {state.userLoggedIn}. Bem vindo ao Sistema de Gestão da MJV Clinic.
          </WelcomeMsg>
        </FlexCol>
      </LeftTopbarContent>
      <RightTopbarContent>
        <IconWrapper onClick={handleToggleTheme}>{theme == "light" ? <MdOutlineNightlight /> : <BsSun />}</IconWrapper>
      </RightTopbarContent>
    </TopbarContainer>
  );
};

export default Topbar;
