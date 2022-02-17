import styled from "styled-components";

export const PageContainer = styled.div`
  width: 76vw;
`;

export const SectionTitle = styled.span`
  font-family: "Poppins", sans-serif;
  font-size: 22px;
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
`;

export const SectionContainer = styled.div`
  margin-bottom: 50px;
`;
