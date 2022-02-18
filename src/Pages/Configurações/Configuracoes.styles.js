import styled from "styled-components";

export const OptionContainer = styled.div`
  display: flex;
  align-items: center;
`;

export const OptionTitle = styled.span`
  font-family: "Poppins", sans-serif;
  font-size: 18px;
`;

export const OptionDesc = styled.p`
  text-align: center;
  padding: 5px;
  background-color: ${({ theme }) => theme.body};
  border-radius: 5px;
`;
