import React, { useEffect, useContext, useState, createContext } from "react";
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
import LoadingOverlay from "../../Components/LoadingOverlay/LoadingOverlay";

//////dados de conexão da api
const URL_BASE = "http://44.202.73.116:50660/api/";

/////// Endpoints necessárias para fazer a requisiçao dos dados
const CASOS_ENDPOINT = "Caso/GetAllCaso?fVerTodos=true&fSomenteAtivos=true&join=true&maxInstances=9999&order_by=CAS_Id";
const PACIENTES_ENDPOINT =
  "Paciente/GetAllPaciente?fVerTodos=true&fSomenteAtivos=true&join=true&maxInstances=9999&order_by=PAC_Id";
const USERS_ENDPOINT =
  "Usuario/GetAllUsuario?fVerTodos=true&fSomenteAtivos=false&join=true&maxInstances=9999&order_by=USR_Id";

//data context
export const DataCtx = createContext();

const Dashboard = () => {
  //sidebar status
  const [mobileSidebarExpanded, setMobileSidebarExpanded] = useState(false);

  //modal context
  const { modalState } = useContext(ModalCtx);

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
  const [medicos, setMedicos] = useState(false);
  const [pacientes, setPacientes] = useState(false);
  const [consultas, setConsultas] = useState(false);

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
      console.log(`DADO: ${endpoint.split("/")[4].toUpperCase()}`);
      setData(res);
      console.log(res.data);
      console.log("----------------");
    } catch (err) {
      // console.log(err);
    }
  };

  const fetchGet = async (endpoint, setData) => {
    try {
      axios.get(endpoint).then((res) => {
        console.log(res);
        setData(res);
      });
    } catch (err) {
      console.log(err);
    }
  };

  //faz o fetch dos dados no primeiro load do front
  useEffect(() => {
    fetchGet(`https://athos-clinica-medica-api-mjv.herokuapp.com/pacientes/listarTodos`, setPacientes);
    fetchGet(`https://athos-clinica-medica-api-mjv.herokuapp.com/medicos/listarTodos`, setMedicos);
    fetchGet(`https://athos-clinica-medica-api-mjv.herokuapp.com/consultas/listarTodos`, setConsultas);
  }, []);

  /////////////////////////////////////////////////////////////////////

  const sidebarToggleHandler = () => setMobileSidebarExpanded(!mobileSidebarExpanded);

  return (
    <DataCtx.Provider value={{ medicos, pacientes, consultas }}>
      {pacientes && medicos && consultas ? (
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
      ) : (
        <LoadingOverlay loadingMsg={"Carregando dados..."} />
      )}
    </DataCtx.Provider>
  );
};

export default Dashboard;
