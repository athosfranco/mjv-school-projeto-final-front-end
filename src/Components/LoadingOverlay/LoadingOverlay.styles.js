import styled from "styled-components";

export const LoadingOverlayContainer = styled.div`
  width: 100vw;
  height: 100vh;
  position: absolute;
  top: 0;
  left: 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  span {
    margin-top: 10px;
  }
`;
