import React from "react";
import { NavigationContainer, NavItem, NavIcon, Text } from "./Navigation.styles";
import { CgHome } from "react-icons/cg";
import { AiOutlineMail, AiOutlineUser, AiOutlineFileAdd } from "react-icons/ai";
import { VscGraph } from "react-icons/vsc";
import { IoWalletOutline } from "react-icons/io5";
import { MdOutlineMedicalServices } from "react-icons/md";
import { BsFileEarmarkMedical, BsCoin } from "react-icons/bs";
import { HiOutlineCog } from "react-icons/hi";
import { useNavigate } from "react-router-dom";

const data = [
  {
    id: 1,
    title: "Início",
    icon: <CgHome />,
    expansive: false,
    path: "./",
  },
  {
    id: 2,
    title: "Pacientes",
    icon: <AiOutlineUser />,
    expansive: false,
    path: "./pacientes",
  },
  {
    id: 3,
    title: "Médicos",
    icon: <AiOutlineFileAdd />,
    expansive: false,
    path: "./medicos",
  },

  {
    id: 4,
    title: "Consultas",
    icon: <BsFileEarmarkMedical />,
    expansive: false,
    path: "./consultas",
  },
  {
    id: 5,
    title: "Receita",
    icon: <BsCoin />,
    expansive: false,
    path: "./receita",
  },
  {
    id: 6,
    title: "Configurações",
    icon: <HiOutlineCog />,
    expansive: false,
    path: "./configuracoes",
  },
];

const navigateHandler = (navigateFn, path) => navigateFn(path, { replace: true });

const Navigation = ({ mobileSidebarExpanded }) => {
  let navigate = useNavigate();
  return (
    <NavigationContainer>
      {data.map((nav) => {
        return (
          <NavItem onClick={() => navigateHandler(navigate, nav.path)} key={nav.id}>
            <NavIcon>{nav.icon}</NavIcon>
            <Text mobileSidebarExpanded={mobileSidebarExpanded}>{nav.title}</Text>
          </NavItem>
        );
      })}
    </NavigationContainer>
  );
};

export default Navigation;
