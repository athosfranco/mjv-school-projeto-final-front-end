import React from "react";
import {
  CurrentPage,
  LeftTopbarContent,
  RightTopbarContent,
  TopbarContainer,
  UserAvatar,
  WelcomeMsg,
} from "./Topbar.styles";
import avatar from "../../Assets/avatar.png";

const Topbar = () => {
  return (
    <TopbarContainer>
      <LeftTopbarContent>
        <CurrentPage>Início</CurrentPage>
        <WelcomeMsg>Olá, Maria</WelcomeMsg>
      </LeftTopbarContent>
      <RightTopbarContent>
        <UserAvatar src={avatar} />
      </RightTopbarContent>
    </TopbarContainer>
  );
};

export default Topbar;
