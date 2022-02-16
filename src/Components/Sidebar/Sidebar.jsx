import React from "react";
import { Container, SidebarLogo, SidebarContainer } from "./Sidebar.styles";
import logo from "../../Assets/junta_cor.png";
import UIContainer from "../../UI/UIContainer/UIContainer";
import Navigation from "../Navigation/Navigation";

const Sidebar = () => {
  return (
    <Container>
      <UIContainer>
        <SidebarContainer>
          <SidebarLogo src={logo} />
          <Navigation />
        </SidebarContainer>
      </UIContainer>
    </Container>
  );
};

export default Sidebar;
