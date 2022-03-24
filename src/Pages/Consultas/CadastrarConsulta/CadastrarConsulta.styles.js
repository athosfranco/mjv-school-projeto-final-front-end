import styled from "styled-components";
import { AiFillPlusCircle, AiFillMinusCircle } from "react-icons/ai";

export const CadastrarContainer = styled.div`
  background-color: ${({ theme }) => theme.body};
  color: ${({ theme }) => theme.text};
  border-radius: 12px;
  box-shadow: 0px 8px 16px rgba(0, 0, 0, 0.06);
  padding: 15px;
  width: 77vw;
  margin-bottom: 20px;
`;

export const Header = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  cursor: pointer;
`;

export const CadastroForm = styled.form``;

export const ExpandirBtn = styled(AiFillPlusCircle)`
  cursor: pointer;

  font-size: 25px;
  &:hover {
    color: #2196f3;
    transform: scale(1.3);
  }
  &:active {
    color: #2196f3;
    transform: scale(0.9);
  }
`;

export const ColapsarBtn = styled(AiFillMinusCircle)`
  cursor: pointer;
  font-size: 25px;
  &:hover {
    color: #2196f3;
    transform: scale(1.3);
  }
  &:active {
    color: #2196f3;
    transform: scale(0.9);
  }
`;

export const FormSection = styled.div`
  display: flex;
  flex-wrap: wrap;
`;

export const InputWrap = styled.div`
  display: flex;
  flex-direction: column;
  margin: 5px;
`;

export const Label = styled.label`
  margin: 3px 0;
  font-size: 14px;
`;

export const Input = styled.input`
    border: 2px solid ${({ theme }) => theme.border};
    border-radius: 25px;
    width: ${({ wd }) => (wd ? `${wd}px` : "300px")};
    padding: 4px 8px;
    font-size: 14px;
    outline: none;
    background-image: none;
    background-color: transparent;
    -webkit-box-shadow: none;
    -moz-box-shadow: none;
    box-shadow: none;
    margin-bottom: 10px;
    transition: 0.2s ease;
    color: ${({ theme }) => theme.text};
    &:focus {
      border: 2px solid #2196f3;
    }
    ::placeholder {
      /* Chrome, Firefox, Opera, Safari 10.1+ */
      color: ${({ theme }) => theme.text};
      opacity: 0.5; /* Firefox */
    }
  }
`;
export const Select = styled.select`
    border: 2px solid ${({ theme }) => theme.border};
    border-radius: 25px;
    width: ${({ wd }) => (wd ? `${wd}px` : "300px")};
    padding: 4px 8px;
    font-size: 14px;
    outline: none;
    background-image: none;
    background-color: transparent;
    -webkit-box-shadow: none;
    -moz-box-shadow: none;
    box-shadow: none;
    margin-bottom: 10px;
    transition: 0.2s ease;
    color: ${({ theme }) => theme.text};
    &:focus {
      border: 2px solid #2196f3;
    }
    ::placeholder {
      /* Chrome, Firefox, Opera, Safari 10.1+ */
      color: ${({ theme }) => theme.text};
      opacity: 0.5; /* Firefox */
    }
  }  
`;

export const TextArea = styled.textarea`
    border: 2px solid ${({ theme }) => theme.border};
    border-radius: 15px;
    width: ${({ wd }) => (wd ? `${wd}px` : "300px")};
    padding: 8px 12px;
    font-size: 14px;
    outline: none;
    background-image: none;
    background-color: transparent;
    -webkit-box-shadow: none;
    -moz-box-shadow: none;
    box-shadow: none;
    margin-bottom: 10px;
    transition: 0.2s ease;
    color: ${({ theme }) => theme.text};
    &:focus {
      border: 2px solid #2196f3;
    }
    ::placeholder {
      /* Chrome, Firefox, Opera, Safari 10.1+ */
      color: ${({ theme }) => theme.text};
      opacity: 0.5; /* Firefox */
    }
  }`;
