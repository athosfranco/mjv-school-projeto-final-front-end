import styled from "styled-components";
import { AiOutlineArrowLeft, AiOutlineArrowRight } from "react-icons/ai";

export const CasesContainer = styled.div`
  display: flex;
  flex-direction: column;
  @media only screen and (max-width: 980px) {
    overflow-x: auto;
    overflow-y: hidden;
  }
`;

export const Table = styled.table`
  border-collapse: collapse;
`;

export const TableRow = styled.tr`
  cursor: default;
  //media query
  @media only screen and (max-width: 980px) {
    font-size: 12px;
  }
`;

export const TableRowValues = styled.tr`
  cursor: pointer;
  &:hover {
    background-color: ${({ theme }) => theme.hoverOnCases};
  }
`;

export const TableHead = styled.th`
  text-align: left;
  @media only screen and (max-width: 980px) {
    text-align: center;
    padding: 0 10px;
  }
`;

export const TableCell = styled.td`
  text-align: left;
  padding: 30px 0;
  border-bottom: 1px solid ${({ theme }) => theme.borderCases};
  //media query
  @media only screen and (max-width: 980px) {
    font-size: 12px;
    text-align: center;
  }
`;

export const ArrowLeft = styled(AiOutlineArrowLeft)`
  font-size: 27px;

  cursor: pointer;
  &:hover {
    transform: translateX(-5px);
    color: ${({ theme }) => theme.primary};
  }

  //media query
  @media only screen and (max-width: 980px) {
    font-size: 15px;
  }
`;

export const ArrowRight = styled(AiOutlineArrowRight)`
  font-size: 27px;

  cursor: pointer;
  &:hover {
    transform: translateX(5px);
    color: ${({ theme }) => theme.primary};
  }

  //media query
  @media only screen and (max-width: 980px) {
    font-size: 15px;
  }
`;

export const AboutContainer = styled.div`
  display: flex;
  margin-bottom: 50px;
`;

export const AboutTitle = styled.h2`
  font-family: "Poppins", sans-serif;
`;

export const AboutText = styled.p`
  line-height: 2;
  margin: 20px 100px 0 0;
  text-align: justify;
`;

export const AboutDescDiv = styled.div`
  flex: 2;
`;

export const AboutLinks = styled.div`
  margin-left: 40px;
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

export const AthosDevImg = styled.img`
  width: 300px;
  margin-bottom: 20px;
`;
