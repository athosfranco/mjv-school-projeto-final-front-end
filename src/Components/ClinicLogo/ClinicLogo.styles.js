import styled from "styled-components";

export const LogoContainer = styled.div`
  cursor: default;
  display: flex;
  justify-content: center;
  align-items: center;
  @media only screen and (max-width: 768px) {
    ${({ sidebar }) => sidebar && "display: none;"};
  }
`;

export const LogoName1 = styled.h1`
  margin: 0;
  padding: 0;
  font-family: "Oswald", sans-serif;
  color: #8fc543;
`;

export const LogoName2 = styled.h1`
  margin: 0;
  padding: 0;
  font-family: "Oswald", sans-serif;
  color: #25abe1;
`;

export const Image = styled.img`
  transform: scale(0.5);
`;
