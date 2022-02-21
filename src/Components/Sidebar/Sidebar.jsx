import React from "react";
import { Container, SidebarLogo, SidebarContainer, SidebarMenuBtn } from "./Sidebar.styles";
import logo from "../../Assets/junta_cor.png";
import UIContainer from "../../UI/UIContainer/UIContainer";
import Navigation from "../Navigation/Navigation";

const Sidebar = ({ onSidebarToggle, mobileSidebarExpanded }) => {
  return (
    <Container mobileSidebarExpanded={mobileSidebarExpanded}>
      <SidebarMenuBtn onClick={onSidebarToggle} />
      <UIContainer>
        <SidebarContainer>
          <SidebarLogo src={logo} />
          <Navigation mobileSidebarExpanded={mobileSidebarExpanded} />
        </SidebarContainer>
      </UIContainer>
    </Container>
  );
};

export default Sidebar;
