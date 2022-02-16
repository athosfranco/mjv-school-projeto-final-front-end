import styled from "styled-components";

export const PageContainer = styled.div`
  height: 100vh;
  width: 100vw;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  align-items: center;
  footer {
    display: flex;
    flex-direction: column;
    justify-content: center;
    text-align: center;
    font-size: 12px;
    color: darkgray;
    margin-bottom: 5px;
  }
  //shadow
  box-shadow: 0px 8px 16px rgba(0, 0, 0, 0.06);
`;
