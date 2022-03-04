import React from "react";
import {
  ChartComponentContainer,
  ChartContainer,
  ComponentHeader,
  Title,
  Value,
  VerTodos,
} from "./ChartComponent.styles";

import BarChart from "./BarChart";

const ChartComponent = ({ title, value, type }) => {
  return (
    <ChartComponentContainer>
      <ComponentHeader>
        <Title>{title}</Title>
        <VerTodos>Ver todos</VerTodos>
      </ComponentHeader>
      <Value>{value}</Value>
      <ChartContainer>
        <BarChart title={title} />
      </ChartContainer>
    </ChartComponentContainer>
  );
};

export default ChartComponent;
