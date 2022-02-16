import React from "react";
import { NavigationContainer, NavItem, NavIcon, Text } from "./Navigation.styles";
import { CgHome } from "react-icons/cg";
import { AiOutlineMail, AiOutlineUser, AiOutlineFileAdd } from "react-icons/ai";
import { VscGraph } from "react-icons/vsc";
import { IoWalletOutline } from "react-icons/io5";
import { MdOutlineMedicalServices } from "react-icons/md";
import { BsFileEarmarkMedical, BsCoin } from "react-icons/bs";

const Navigation = () => {
  return (
    <NavigationContainer>
      <NavItem>
        <NavIcon>
          <CgHome />
        </NavIcon>
        <Text>Início</Text>
      </NavItem>
      <NavItem>
        <NavIcon>
          <AiOutlineMail />
        </NavIcon>
        <Text>Mensagem</Text>
      </NavItem>
      <NavItem>
        <NavIcon>
          <AiOutlineUser />
        </NavIcon>
        <Text>Paciente</Text>
      </NavItem>
      <NavItem>
        <NavIcon>
          <AiOutlineFileAdd />
        </NavIcon>
        <Text>Atendimentos</Text>
      </NavItem>
      <NavItem>
        <NavIcon>
          <VscGraph />
        </NavIcon>
        <Text>Metas</Text>
      </NavItem>
      <NavItem>
        <NavIcon>
          <IoWalletOutline />
        </NavIcon>
        <Text>Financeiros</Text>
      </NavItem>
      <NavItem>
        <NavIcon>
          <MdOutlineMedicalServices />
        </NavIcon>
        <Text>Cirurgia</Text>
      </NavItem>
      <NavItem>
        <NavIcon>
          <BsFileEarmarkMedical />
        </NavIcon>
        <Text>Exames</Text>
      </NavItem>
      <NavItem>
        <NavIcon>
          <BsCoin />
        </NavIcon>
        <Text>Conta Médica</Text>
      </NavItem>
    </NavigationContainer>
  );
};

export default Navigation;
