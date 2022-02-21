import React from "react";
import styled from "styled-components";

const getStatusString = (statusId) => {
  if (statusId === 0) return "Analisar";
  else if (statusId === 1) return "Em Análise";
  else if (statusId === 2) return "Aprovado";
  else if (statusId === 3) return "Recusado";
};

//estilo
export const Status = styled.div`
  padding: 15px 20px;
  margin: 0 10px;

  background-color: ${({ theme, status }) => {
    if (status === 0) {
      return theme.disabled;
    } else if (status === 1) {
      return theme.warning;
    } else if (status === 2) {
      return theme.success;
    } else if (status === 3) {
      return theme.danger;
    }
  }};

  border-radius: 10px;
`;

export const Text = styled.p`
  text-align: center;
  font-size: 14px;
`;

const StatusCaso = ({ statusId }) => {
  return (
    <Status status={statusId}>
      <Text>{getStatusString(statusId)}</Text>
    </Status>
  );
};

export default StatusCaso;
