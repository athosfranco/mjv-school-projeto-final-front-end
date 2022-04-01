import React from "react";
import { Container, SidebarContainer, SidebarMenuBtn } from "./Sidebar.styles";
import UIContainer from "../../UI/UIContainer/UIContainer";
import Navigation from "../Navigation/Navigation";
import ClinicLogo from "../ClinicLogo/ClinicLogo";

const Sidebar = ({ onSidebarToggle, mobileSidebarExpanded }) => {
  return (
    <Container mobileSidebarExpanded={mobileSidebarExpanded}>
      <SidebarMenuBtn onClick={onSidebarToggle} />
      <UIContainer>
        <SidebarContainer>
          <ClinicLogo sidebar />
          <Navigation mobileSidebarExpanded={mobileSidebarExpanded} />
        </SidebarContainer>
      </UIContainer>
    </Container>
  );
};

export default Sidebar;
