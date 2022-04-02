import styled from "styled-components";

export const DetalhesContainer = styled.div`
  background-color: ${({ theme }) => theme.body};
  color: ${({ theme }) => theme.text};
  border-radius: 12px;
  box-shadow: 0px 8px 16px rgba(0, 0, 0, 0.06);
  padding: 15px;
  width: 77vw;
  margin-bottom: 10px;
`;

export const Details = styled.div`
  display: flex;
  flex-wrap: wrap;
`;

export const InfoWrap = styled.div`
  display: flex;
  padding: 10px;
  background-color: ${({ theme }) => theme.background};
  margin: 5px;
`;

export const InfoTitle = styled.span`
  font-weight: bold;
  margin-right: 5px;
`;

export const InfoValue = styled.span``;

export const InfoEsp = styled.div`
  display: flex;
  flex-wrap: wrap;
`;
