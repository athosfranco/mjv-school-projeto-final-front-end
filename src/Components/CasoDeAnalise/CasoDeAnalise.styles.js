import styled from "styled-components";
import { AiOutlineClose } from "react-icons/ai";

export const Container = styled.div`
  //position center and above all
  position: fixed;
  top: 50%;
  left: 50%;
  width: 900px;
  height: 800px;
  margin-top: -400px;
  margin-left: -450px;
  z-index: 1000;
  //styling
  background-color: ${({ theme }) => theme.body};
  border-radius: 18px;
  padding: 15px;
`;

export const Overlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  background-color: rgba(0, 0, 0, 0.8);
  z-index: 999;
`;

export const Header = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding-bottom: 10px;
  border-bottom: 1px solid rgba(255, 255, 255, 0.2);
`;

export const Title = styled.span`
  font-family: "Poppins", sans-serif;
  font-weight: bold;
  cursor: default;
`;

export const CloseBtn = styled(AiOutlineClose)`
  font-size: 24px;
  cursor: pointer;
  &:hover {
    ${({ theme }) => `color: ${theme.primary}`};
  }
`;

export const CaseControl = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-top: 10px;
`;

export const InfoWrapper = styled.div`
  display: flex;
  align-items: center;
  width: 35%;
  justify-content: space-around;
`;

export const SolicitacaoSpan = styled.span`
  text-transform: uppercase;
  font-weight: bold;
`;

export const FieldValue = styled.span`
  background-color: #4642551a;
  border-radius: 10px;
  border: 1.5px solid rgba(169, 27, 28, 0.3);
  padding: 10px 20px;
`;

export const BtnWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-around;
  width: 65%;
`;

export const CaseSection = styled.div`
  margin: 10px 0;
`;

export const CaseSectionTitle = styled.span`
  font-weight: bold;
`;

export const CaseSectionContent = styled.div`
  margin-top: 10px;
  border: 1px solid rgba(169, 27, 28, 0.3);
  padding: 15px;
  border-radius: 10px;
  display: flex;
  flex-direction: ${({ dir }) => (dir === "row" ? "row" : "column")};
`;

export const BeneficiarioRow = styled.div`
  display: flex;
  margin: 20px 0;
`;

export const FieldWrapper = styled.div``;

export const FieldTitle = styled.span`
  margin: 0 10px;
`;

export const TabController = styled.div`
  margin-top: 30px;
  display: flex;
`;

export const Tab = styled.span`
  cursor: pointer;
  margin-right: 30px;
  padding-bottom: 5px;
  border-bottom: 2px solid transparent;
  ${({ active }) => active && "border-bottom: 2px solid darkgray"};
`;
