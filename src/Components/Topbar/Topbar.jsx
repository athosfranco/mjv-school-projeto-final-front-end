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

const Topbar = () => {
  const [offset, setOffset] = useState(0);

  useEffect(() => {
    const onScroll = () => setOffset(window.pageYOffset);
    // clean up code
    window.removeEventListener("scroll", onScroll);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  console.log(offset);

  return (
    <TopbarContainer scroll={offset}>
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
