import { useRoutes } from "react-router-dom";
import { useContext } from "react";
//Contexto de login
import LoginCtx from "./Context/LoginContext";
//paginas iniciais
import LoginPage from "./Pages/LoginPage/LoginPage";
import Dashboard from "./Pages/Dashboard/Dashboard";
//sub-paths do dashboard
import Inicio from "./Pages/Inicio/Inicio";
import Paciente from "./Pages/Paciente/Paciente";
import Configuracoes from "./Pages/Configurações/Configuracoes";
import Medicos from "./Pages/Medicos/Medicos";
import Receita from "./Pages/Receita/Receita";
import Consultas from "./Pages/Consultas/Consultas";
import DetalhesPaciente from "./Pages/Paciente/DetalhesPaciente/DetalhesPaciente";
import DetalhesMedico from "./Pages/Medicos/DetalhesMedico/DetalhesMedico";
import DetalhesConsulta from "./Pages/Consultas/DetalhesConsulta/DetalhesConsulta";
///

const Rotas = () => {
  const { state } = useContext(LoginCtx);

  const element = useRoutes([
    { path: "/", element: <LoginPage /> },
    {
      path: "/dashboard",
      element: state.userLoggedIn ? <Dashboard /> : <LoginPage />,
      children: [
        { path: "", element: <Inicio /> },
        { path: "pacientes", element: <Paciente /> },
        { path: "detalhesPaciente", element: <DetalhesPaciente /> },
        { path: "detalhesMedico", element: <DetalhesMedico /> },
        { path: "detalhesConsulta", element: <DetalhesConsulta /> },
        { path: "medicos", element: <Medicos /> },
        { path: "consultas", element: <Consultas /> },
        { path: "receita", element: <Receita /> },
        { path: "configuracoes", element: <Configuracoes /> },
      ],
    },
  ]);
  return element;
};

export default Rotas;
