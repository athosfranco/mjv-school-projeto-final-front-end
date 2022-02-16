import { useRoutes } from "react-router-dom";
import { useContext } from "react";
import LoginCtx from "./Context/LoginContext";
import LoginPage from "./Pages/LoginPage/LoginPage";
import Dashboard from "./Pages/Dashboard/Dashboard";

const Rotas = () => {
  const { state } = useContext(LoginCtx);

  const element = useRoutes([
    { path: "/", element: <LoginPage /> },
    {
      path: "/dashboard",
      element: state.userLoggedIn ? <Dashboard /> : <LoginPage />,
      children: [
        // { path: "", element: <Home /> },
        // { path: "graficos", element: <GraphicsPage /> },
        // { path: "exames", element: <Exames /> },
        // { path: "agendamentos", element: <Agendamentos /> },
        // { path: "pessoas", element: <Pessoas /> },
        // { path: "profile", element: <Profile /> },
        // { path: "financeiro", element: <Financeiro /> },
        // { path: "atendimentos", element: <Atendimentos /> },
      ],
    },
  ]);
  return element;
};

export default Rotas;
