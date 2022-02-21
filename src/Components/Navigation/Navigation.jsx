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
    title: "Mensagem",
    icon: <AiOutlineMail />,
    expansive: false,
    path: "./mensagem",
  },
  {
    id: 3,
    title: "Paciente",
    icon: <AiOutlineUser />,
    expansive: false,
    path: "./paciente",
  },
  {
    id: 4,
    title: "Atendimentos",
    icon: <AiOutlineFileAdd />,
    expansive: false,
    path: "./atendimentos",
  },
  {
    id: 5,
    title: "Metas",
    icon: <VscGraph />,
    expansive: false,
    path: "./metas",
  },
  {
    id: 6,
    title: "Financeiros",
    icon: <IoWalletOutline />,
    expansive: false,
    path: "./financeiros",
  },
  {
    id: 7,
    title: "Cirurgia",
    icon: <MdOutlineMedicalServices />,
    expansive: false,
    path: "./cirurgia",
  },
  {
    id: 8,
    title: "Exames",
    icon: <BsFileEarmarkMedical />,
    expansive: false,
    path: "./exames",
  },
  {
    id: 9,
    title: "Conta Médica",
    icon: <BsCoin />,
    expansive: false,
    path: "./conta-medica",
  },
  {
    id: 10,
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
