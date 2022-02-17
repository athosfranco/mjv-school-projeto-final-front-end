import React from "react";
import underConstruction from "../../Assets/under_construction.svg";
import styled from "styled-components";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-top: 30px;
`;

const Svg = styled.img`
  width: 50vw;
  margin-bottom: 10px;
`;

const UnderConstruction = () => {
  return (
    <Container>
      <Svg src={underConstruction} />
      <h2>Página em construção!</h2>
    </Container>
  );
};

export default UnderConstruction;
