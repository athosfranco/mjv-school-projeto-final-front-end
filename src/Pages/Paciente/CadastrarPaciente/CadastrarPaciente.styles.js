import styled from "styled-components";

export const CadastrarContainer = styled.div`
  background-color: ${({ theme }) => theme.body};
  color: ${({ theme }) => theme.text};
  border-radius: 12px;
  box-shadow: 0px 8px 16px rgba(0, 0, 0, 0.06);
  padding: 15px;
`;

export const CadastroForm = styled.form``;

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
  margin: 5px 0;
`;

export const Input = styled.input`
    border: 2px solid ${({ theme }) => theme.border};
    border-radius: 10px;
    width: 300px;
    padding: 5px;
    font-size: 16px;
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
