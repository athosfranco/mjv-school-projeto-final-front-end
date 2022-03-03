import React, { useEffect, useContext, useState } from "react";
import ReactDOM from "react-dom";
import { Outlet } from "react-router-dom";
import Sidebar from "../../Components/Sidebar/Sidebar";
import Topbar from "../../Components/Topbar/Topbar";
import ModalCtx from "../../Context/ModalContext";
import Modal from "../../Components/Modal/Modal";
import { PageContainer, Main } from "./Dashboard.styles";
import { useLocation } from "react-router-dom";
import { REQ_BODY } from "../../data";
import axios from "axios";

//////dados de conexão da api
const URL_BASE = "http://44.202.73.116:50660/api/";

/////// Endpoints necessárias para fazer a requisiçao dos dados
const CASOS_ENDPOINT =
  "Caso/GetAllCaso?fVerTodos=true&fSomenteAtivos=true&join=true&maxInstances=999999&order_by=CAS_Id";

const Dashboard = () => {
  //sidebar status
  const [mobileSidebarExpanded, setMobileSidebarExpanded] = useState(false);

  //scrolla pro topo sempre que usuario mudar pagina
  const location = useLocation();
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
    setMobileSidebarExpanded(false);
  }, [location.pathname]);

  //tela de loading entre fetchs
  const [isLoading, setIsLoading] = useState(false);

  //refaz todas as requisiçoes quando definido como "true"
  const [refresh, setRefresh] = useState(false);

  /////////////////////// data state
  const [casos, setCasos] = useState(false);

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
          // Authorization: "Basic QWNjZXNzTGVhcFN0eWxlREVWQVBJOk1qQk1SV0Z3VTNSNVRHVlNiMk5yZEZOMGRXUnBiekl4",
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

  const sidebarToggleHandler = () => setMobileSidebarExpanded(!mobileSidebarExpanded);

  const { modalState } = useContext(ModalCtx);

  return (
    <PageContainer>
      {modalState?.display &&
        ReactDOM.createPortal(
          <Modal
            title={modalState.title}
            text={modalState.text}
            modalWithBtn={modalState.modalWithBtn}
            confirmBtnTxt={modalState.confirmBtnTxt}
            cancelBtnTxt={modalState.cancelBtnTxt}
            onCancel={modalState.cancelHandler}
            onConfirm={modalState.confirmHandler}
          />,
          document.getElementById("overlay-root")
        )}

      <Sidebar onSidebarToggle={sidebarToggleHandler} mobileSidebarExpanded={mobileSidebarExpanded} />
      <Topbar />
      <Main>
        <Outlet />
      </Main>
    </PageContainer>
  );
};

export default Dashboard;
