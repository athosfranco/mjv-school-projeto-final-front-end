import styled from "styled-components";

export const PageContainer = styled.div`
  display: flex;
`;

export const Main = styled.main`
  margin: 120px 20px 20px 22vw;
  //media query
  @media only screen and (max-width: 980px) {
    margin: 100px 20px 20px 20vw;
  }
`;
