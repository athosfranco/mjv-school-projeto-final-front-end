import React, { useEffect } from "react";
import { Outlet } from "react-router-dom";
import Sidebar from "../../Components/Sidebar/Sidebar";
import Topbar from "../../Components/Topbar/Topbar";
import { PageContainer, Main } from "./Dashboard.styles";
import { useLocation } from "react-router-dom";

const Dashboard = () => {
  //scrolla pro topo sempre que usuario mudar pagina
  const location = useLocation();
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, [location.pathname]);

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
