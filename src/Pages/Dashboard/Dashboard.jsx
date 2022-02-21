import React, { useEffect, useState } from "react";
import { Outlet } from "react-router-dom";
import Sidebar from "../../Components/Sidebar/Sidebar";
import Topbar from "../../Components/Topbar/Topbar";
import { PageContainer, Main } from "./Dashboard.styles";
import { useLocation } from "react-router-dom";
import { REQ_BODY } from "../../data";
import axios from "axios";

const Dashboard = () => {
  //scrolla pro topo sempre que usuario mudar pagina
  const location = useLocation();
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, [location.pathname]);

  //tela de loading entre fetchs
  const [isLoading, setIsLoading] = useState(false);

  //refaz todas as requisiçoes quando definido como "true"
  const [refresh, setRefresh] = useState(false);

  /////////////////////// data state
  const [casos, setCasos] = useState(false);

  //////dados de conexão da api
  const URL_BASE = "http://44.202.73.116:50660/api/";

  /////// Endpoints necessárias para fazer a requisiçao dos dados
  const CASOS_ENDPOINT =
    "Caso/GetAllCaso?fVerTodos=true&fSomenteAtivos=true&join=true&maxInstances=999999&order_by=CAS_Id";

  ////////////////////////////////////////////////////////////

  //funçao assicrona para fetch de dados com axios
  const fetchData = async (endpoint, setData) => {
    try {
      const res = await axios.post(endpoint, REQ_BODY, {
        auth: {
          username: "AccessJustoDevAPI",
          password: "e8daa6779d7f418443ade747ac9ed4552efhjnx",
        },
        headers: {
          Authorization: "Basic QWNjZXNzTGVhcFN0eWxlREVWQVBJOk1qQk1SV0Z3VTNSNVRHVlNiMk5yZEZOMGRXUnBiekl4",
          "Content-Type": "application/json",
          "Access-Control-Allow-Origin": "*",
        },
      });
      setData(res);
      console.log(res);
    } catch (err) {
      // console.log(err);
    }
  };

  //funçao que verifica se o usuario tem permissao
  const checkAccessLevel = (user, requiredLevel) => (user.accessLevel >= requiredLevel ? true : false);

  //faz o fetch da lista de usuarios na primeira vez em que o app abre
  useEffect(() => {
    fetchData(`${URL_BASE}${CASOS_ENDPOINT}`, setCasos); //faz o fetch dos usuarios

    setRefresh(false);
  }, [refresh]);

  /////////////////////////////////////////////////////////////////////

  return (
    <PageContainer>
      <Sidebar />
      <Topbar />
      <Main>
        <Outlet />
      </Main>
    </PageContainer>
  );
};

export default Dashboard;
