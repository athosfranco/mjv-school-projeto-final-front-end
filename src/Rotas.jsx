import { useRoutes } from "react-router-dom";
import { useContext } from "react";
//Contexto de login
import LoginCtx from "./Context/LoginContext";
//paginas iniciais
import LoginPage from "./Pages/LoginPage/LoginPage";
import Dashboard from "./Pages/Dashboard/Dashboard";
//sub-paths do dashboard
import Inicio from "./Pages/Inicio/Inicio";
import Mensagem from "./Pages/Mensagem/Mensagem";
import Paciente from "./Pages/Paciente/Paciente";
import Atendimentos from "./Pages/Atendimentos/Atendimentos";
import Metas from "./Pages/Metas/Metas";
import Financeiros from "./Pages/Financeiros/Financeiros";
import Cirurgia from "./Pages/Cirurgia/Cirurgia";
import Exames from "./Pages/Exames/Exames";
import ContaMedica from "./Pages/Conta Médica/ContaMedica";
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
        { path: "/mensagem", element: <Mensagem /> },
        { path: "/paciente", element: <Paciente /> },
        { path: "/atendimentos", element: <Atendimentos /> },
        { path: "/metas", element: <Metas /> },
        { path: "/financeiros", element: <Financeiros /> },
        { path: "/cirurgia", element: <Cirurgia /> },
        { path: "/exames", element: <Exames /> },
        { path: "/conta-medica", element: <ContaMedica /> },
      ],
    },
  ]);
  return element;
};

export default Rotas;
