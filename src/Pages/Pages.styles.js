import styled from "styled-components";

export const PageContainer = styled.div`
  width: 76vw;
`;

export const SectionTitle = styled.span`
  font-family: "Poppins", sans-serif;
  font-size: 22px;
  //media query
  @media only screen and (max-width: 980px) {
    font-size: 18px;
  }
`;

export const Divider = styled.div`
  margin-top: 10px;
  margin-bottom: 20px;
  border: 1px solid ${({ theme }) => theme.primary};
  width: 100%;
`;

export const SectionWrapper = styled.section`
  display: flex;
  flex-wrap: wrap;
  //media query
  @media only screen and (max-width: 980px) {
    flex-direction: column;
  }
`;

export const SectionContainer = styled.div`
  margin-bottom: 50px;
`;
