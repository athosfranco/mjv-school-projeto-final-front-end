import React from "react";

import { CampanhasChartContainer, CampanhasTitle } from "./CampanhasChart.styles";
import LineChart from "./LineChart";

const CampanhasChart = () => {
  return (
    <CampanhasChartContainer>
      <CampanhasTitle>Campanhas</CampanhasTitle>
      <div>
        <LineChart />
      </div>
    </CampanhasChartContainer>
  );
};

export default CampanhasChart;
