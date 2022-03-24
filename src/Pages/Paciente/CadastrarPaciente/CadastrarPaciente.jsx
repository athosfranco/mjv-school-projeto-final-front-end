import React, { useState, useReducer, useContext } from "react";
import Button from "../../../UI/Button/Button";
import { SectionTitle } from "../../Pages.styles";
import {
  CadastrarContainer,
  CadastroForm,
  Input,
  InputWrap,
  FormSection,
  Label,
  ColapsarBtn,
  ExpandirBtn,
  Header,
} from "./CadastrarPaciente.styles";
import axios from "axios";
import { DataCtx } from "../../Dashboard/Dashboard";
import { getCurrentDateWithTime } from "../../../GeneralFunctions";
import ModalCtx from "../../../Context/ModalContext";

//Esses valores são enviados nos campos de input que o usuário não informar
const formCadastroPadrao = {
  nomeCompletoInput: "string",
  matriculaInput: "string",
  cpfInput: "string",
  rgInput: "string",
  telInput: "string",
  emailInput: "string",
  dtNascInput: null,
  dtCadastroInput: null,
  logrInput: "string",
  numeroInput: 0,
  bairroInput: "string",
  cepInput: "string",
  complInput: "string",
};

const CadastrarPaciente = () => {
  //refresh
  const { setRefresh } = useContext(DataCtx);

  //manipulaçao do modal
  const { modalState, modalDispatch } = useContext(ModalCtx);

  //Mostrando o formulario (expandido ou nao)
  const [cadastroIsExpanded, setCadastroIsExpanded] = useState(false);

  //msg de erro
  const [errorMsg, setErrorMsg] = useState();

  const reducer = (state, action) => {
    let newState;
    switch (action.type) {
      case "NOME_COMPLETO":
        newState = { ...state, nomeCompletoInput: action.value };
        break;
      case "MATRICULA":
        newState = { ...state, matriculaInput: action.value };
        break;
      case "CPF":
        newState = { ...state, cpfInput: action.value };
        break;
      case "RG":
        newState = { ...state, rgInput: action.value };
        break;
      case "TEL":
        newState = { ...state, telInput: action.value };
        break;
      case "EMAIL":
        newState = { ...state, emailInput: action.value };
        break;
      case "DT_NASCIMENTO":
        newState = { ...state, dtNascInput: action.value };
        break;
      case "DT_CADASTRO":
        newState = { ...state, dtCadastroInput: action.value };
        break;
      case "LOGRADOURO":
        newState = { ...state, logrInput: action.value };
        break;
      case "NUMERO":
        newState = { ...state, numeroInput: action.value };
        break;
      case "BAIRRO":
        newState = { ...state, bairroInput: action.value };
        break;
      case "CEP":
        newState = { ...state, cepInput: action.value };
        break;
      case "COMPLEMENTO":
        newState = { ...state, complInput: action.value };
        break;

      default:
        throw new Error();
    }
    return newState;
  };

  //Estado do formulario do cadastro (quando o usuario digitar um valor, o formulario é atualizado)
  const [formularioCadastroState, dispatch] = useReducer(reducer, formCadastroPadrao);

  console.log(formularioCadastroState);

  const toggleSectionHandler = () => setCadastroIsExpanded(!cadastroIsExpanded);

  //funçao executada quando o formulario é submetido
  const adicionarPacienteHandler = () => {
    if (formularioCadastroState.nomeCompletoInput === "string") {
      setErrorMsg("❌ É necessário informar pelo menos o nome do paciente.");
      return null;
    }
    setErrorMsg(null);
    if (formularioCadastroState.dtCadastroInput === null) {
      const valorFormatado = getCurrentDateWithTime();

      dispatch({ type: "DT_CADASTRO", value: valorFormatado });
    }
    if (formularioCadastroState.dtNascInput === null) {
      const cd = new Date();
      const mes = cd.getMonth() + 1;
      const ano = cd.getFullYear();
      const dia = cd.getDay();
      const valorFormatado = `${ano}-${mes < 10 ? "0" + mes : mes}-${dia < 10 ? "0" + dia : dia}`;

      dispatch({ type: "DT_NASCIMENTO", value: valorFormatado });
    }

    modalDispatch({
      type: "CONFIG_MODAL",
      value: {
        display: true,
        title: "Cadastro - Paciente",
        text: `Deseja confirmar o cadastro do paciente "${formularioCadastroState.nomeCompletoInput}"?`,
        modalWithBtn: true,
        confirmBtnTxt: "Cadastrar",
        cancelBtnTxt: "Cancelar",
        cancelHandler: () => {
          modalDispatch({ type: "SET_DISPLAY", value: false });
        },
        confirmHandler: () => {
          modalDispatch({ type: "SET_DISPLAY", value: false });
          axios
            .post("https://athos-clinica-medica-api-mjv.herokuapp.com/pacientes", {
              matriculaPlanoDeSaude: formularioCadastroState.matriculaInput,
              pessoa: {
                nomeCompleto: formularioCadastroState.nomeCompletoInput,
                dataNascimento: formularioCadastroState.dtNascInput,
                cpf: formularioCadastroState.cpfInput,
                rg: formularioCadastroState.rgInput,
                telefone: formularioCadastroState.telInput,
                email: formularioCadastroState.emailInput,
                endereco: {
                  logradouro: formularioCadastroState.logrInput,
                  numero: 0,
                  bairro: formularioCadastroState.bairroInput,
                  complemento: formularioCadastroState.complInput,
                  cep: formularioCadastroState.cepInput,
                },
              },
              dataInclusao: formularioCadastroState.dtCadastroInput,
            })
            .then(function (response) {
              console.log(response);
              setRefresh(true);
            })
            .catch(function (error) {
              console.log(error);
              setErrorMsg(
                "❌ Algo de errado ao cadastrar paciente. Verifique se os campos estão preenchidos com valores válidos."
              );
            });
        },
      },
    });
  };

  return (
    <CadastrarContainer>
      <Header onClick={toggleSectionHandler}>
        {" "}
        <SectionTitle>Adicionar Novo Paciente</SectionTitle>
        {cadastroIsExpanded ? <ColapsarBtn /> : <ExpandirBtn />}
      </Header>

      {cadastroIsExpanded && (
        <CadastroForm>
          <FormSection>
            <InputWrap>
              {/* ////////////////////////////INPUT E VALIDAÇÃO - NOME COMPLETO ////////////////////////////////// */}
              <Label>Nome Completo</Label>
              <Input
                onChange={(e) => {
                  const valorFormatado = e.target.value
                    .trim()
                    .replace(/[.,\/#!$%\^&\*;:{}=\-_`~()]/g, "")
                    .replace(/\s{2,}/g, " ")
                    .toUpperCase()
                    .substring(0, 60);
                  dispatch({ type: "NOME_COMPLETO", value: valorFormatado });
                }}
              ></Input>
              {/* /////////////////////////////////////////////////////////////////////////////////////////////// */}
            </InputWrap>
            <InputWrap>
              <Label>Mat. Plano de Saúde</Label>
              {/* ////////////////////////////INPUT E VALIDAÇÃO - MATRICULA PL SAUDE ////////////////////////////////// */}
              <Input
                wd={200}
                onChange={(e) => {
                  const valorFormatado = e.target.value.replace(/\D/g, "").trim().substring(0, 10);
                  dispatch({ type: "MATRICULA", value: valorFormatado });
                }}
              ></Input>
              {/* /////////////////////////////////////////////////////////////////////////////////////////////// */}
            </InputWrap>
            <InputWrap>
              <Label>CPF</Label>
              {/* ////////////////////////////INPUT E VALIDAÇÃO - CPF ////////////////////////////////// */}
              <Input
                wd={200}
                onChange={(e) => {
                  const valorFormatado = e.target.value.replace(/\D/g, "").trim().substring(0, 11);
                  dispatch({ type: "CPF", value: valorFormatado });
                }}
              ></Input>
              {/* /////////////////////////////////////////////////////////////////////////////////////////////// */}
            </InputWrap>
            <InputWrap>
              <Label>RG</Label>
              {/* ////////////////////////////INPUT E VALIDAÇÃO - RG ////////////////////////////////// */}
              <Input
                wd={200}
                onChange={(e) => {
                  const valorFormatado = e.target.value.replace(/\D/g, "").trim().substring(0, 10);
                  dispatch({ type: "RG", value: valorFormatado });
                }}
              ></Input>
              {/* /////////////////////////////////////////////////////////////////////////////////////////////// */}
            </InputWrap>
            <InputWrap>
              <Label>Telefone</Label>
              {/* ////////////////////////////INPUT E VALIDAÇÃO - TELEFONE ////////////////////////////////// */}
              <Input
                wd={200}
                onChange={(e) => {
                  const valorFormatado = e.target.value.replace(/\D/g, "").trim().substring(0, 11);
                  dispatch({ type: "TEL", value: valorFormatado });
                }}
              ></Input>
              {/* /////////////////////////////////////////////////////////////////////////////////////////////// */}
            </InputWrap>

            <InputWrap>
              <Label>E-mail</Label>
              {/* ////////////////////////////INPUT E VALIDAÇÃO - EMAIL ////////////////////////////////// */}
              <Input
                wd={200}
                onChange={(e) => {
                  const valorFormatado = e.target.value
                    .trim()
                    .replace(/[,\/#!$%\^&\*;:{}=\-_`~()]/g, "")
                    .replace(/\s{2,}/g, " ")
                    .substring(0, 30);
                  dispatch({ type: "EMAIL", value: valorFormatado });
                }}
              ></Input>
              {/* /////////////////////////////////////////////////////////////////////////////////////////////// */}
            </InputWrap>
            <InputWrap>
              <Label>Data de Nascimento</Label>
              {/* ////////////////////////////INPUT E VALIDAÇÃO - DATA NASCIMENTO ////////////////////////////////// */}
              <Input
                type="date"
                wd={180}
                onChange={(e) => {
                  const valorFormatado = e.target.value;
                  dispatch({ type: "DT_NASCIMENTO", value: valorFormatado });
                }}
              ></Input>
              {/* /////////////////////////////////////////////////////////////////////////////////////////////// */}
            </InputWrap>
            <InputWrap>
              <Label>Data de Cadastro</Label>
              {/* ////////////////////////////INPUT E VALIDAÇÃO - DATA CADASTRO ////////////////////////////////// */}
              <Input
                type="date"
                wd={180}
                onChange={(e) => {
                  const cd = new Date();
                  const valorFormatado = `${e.target.value}T${
                    cd.getHours() < 10 ? "0" + cd.getHours() : cd.getHours()
                  }:${cd.getMinutes()}:${cd.getSeconds()}.404Z`;
                  dispatch({ type: "DT_CADASTRO", value: valorFormatado });
                }}
              ></Input>
              {/* /////////////////////////////////////////////////////////////////////////////////////////////// */}
            </InputWrap>
          </FormSection>
          <h3>Endereço</h3>
          <FormSection>
            <InputWrap>
              <Label>Logradouro</Label>
              {/* ////////////////////////////INPUT E VALIDAÇÃO - LOGRADOURO ////////////////////////////////// */}
              <Input
                wd={200}
                onChange={(e) => {
                  const valorFormatado = e.target.value
                    .trim()
                    .replace(/[.,\/#!$%\^&\*;:{}=\-_`~()]/g, "")
                    .replace(/\s{2,}/g, " ")
                    .substring(0, 30);
                  dispatch({ type: "LOGRADOURO", value: valorFormatado });
                }}
              ></Input>
            </InputWrap>
            <InputWrap>
              <Label>Número</Label>
              {/* ////////////////////////////INPUT E VALIDAÇÃO - ENDEREÇO NUMERO ////////////////////////////////// */}
              <Input
                wd={100}
                type="number"
                onChange={(e) => {
                  const valorFormatado = e.target.value
                    .trim()
                    .replace(/[.,\/#!$%\^&\*;:{}=\-_`~()]/g, "")
                    .replace(/\s{2,}/g, " ")
                    .substring(0, 15);
                  dispatch({ type: "NUMERO", value: valorFormatado });
                }}
              ></Input>
            </InputWrap>
            <InputWrap>
              <Label>Bairro</Label>
              {/* ////////////////////////////INPUT E VALIDAÇÃO - BAIRRO ////////////////////////////////// */}
              <Input
                wd={200}
                onChange={(e) => {
                  const valorFormatado = e.target.value
                    .trim()
                    .replace(/[.,\/#!$%\^&\*;:{}=\-_`~()]/g, "")
                    .replace(/\s{2,}/g, " ")
                    .substring(0, 15);
                  dispatch({ type: "BAIRRO", value: valorFormatado });
                }}
              ></Input>
            </InputWrap>

            <InputWrap>
              <Label>CEP</Label>
              {/* ////////////////////////////INPUT E VALIDAÇÃO - CEP ////////////////////////////////// */}
              <Input
                wd={200}
                onChange={(e) => {
                  const valorFormatado = e.target.value.replace(/\D/g, "").trim().substring(0, 15);
                  dispatch({ type: "CEP", value: valorFormatado });
                }}
              ></Input>
            </InputWrap>
            <InputWrap>
              <Label>Complemento</Label>
              {/* ////////////////////////////INPUT E VALIDAÇÃO - COMPLEMENTO ////////////////////////////////// */}
              <Input
                onChange={(e) => {
                  const valorFormatado = e.target.value
                    .trim()
                    .replace(/[.,\/#!$%\^&\*;:{}=\-_`~()]/g, "")
                    .replace(/\s{2,}/g, " ")
                    .substring(0, 30);
                  dispatch({ type: "COMPLEMENTO", value: valorFormatado });
                }}
              ></Input>
            </InputWrap>
          </FormSection>
          <Button type="success" width={"220px"} onClick={adicionarPacienteHandler}>
            Cadastrar Novo Paciente
          </Button>
          {errorMsg && (
            <span
              style={{
                color: "red",
                backgroundColor: "#eeeeee",
                padding: "5px 10px",
                marginLeft: "10px",
                fontSize: "14px",
              }}
            >
              {errorMsg}
            </span>
          )}
        </CadastroForm>
      )}
    </CadastrarContainer>
  );
};

export default CadastrarPaciente;
