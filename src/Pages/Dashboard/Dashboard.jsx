import React from "react";
import { Outlet } from "react-router-dom";
import Sidebar from "../../Components/Sidebar/Sidebar";
import Topbar from "../../Components/Topbar/Topbar";
import { PageContainer, Main } from "./Dashboard.styles";

const Dashboard = () => {
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
