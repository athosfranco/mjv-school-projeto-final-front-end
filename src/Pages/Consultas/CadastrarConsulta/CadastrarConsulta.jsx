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
  Select,
  TextArea,
} from "./CadastrarConsulta.styles";
import axios from "axios";
import { DataCtx } from "../../Dashboard/Dashboard";
import { getCurrentDateWithTime } from "../../../GeneralFunctions";
import ModalCtx from "../../../Context/ModalContext";

//Esses valores são enviados nos campos de input que o usuário não informar

const CadastrarConsulta = ({ tipoFormulario, consultaEditado }) => {
  const formCadastroPadrao =
    tipoFormulario === "atualizar"
      ? {
          pacienteIDInput: consultaEditado?.paciente?.id,
          medicoIDInput: consultaEditado?.medico?.id,
          motivoInput: consultaEditado?.motivo,
          prescricaoInput: consultaEditado?.prescricao,
          valorConsultaInput: consultaEditado?.valorConsulta,
          dtConsultaInput: consultaEditado?.dataConsulta,
          dtCadastroInput: consultaEditado?.dataInclusao,
        }
      : {
          pacienteIDInput: "string",
          medicoIDInput: "string",
          motivoInput: "string",
          prescricaoInput: "string",
          valorConsultaInput: 67.5,
          dtConsultaInput: null,
          dtCadastroInput: null,
        };

  //refresh
  const { setRefresh, pacientes, medicos } = useContext(DataCtx);

  //manipulaçao do modal
  const { modalDispatch } = useContext(ModalCtx);

  //Mostrando o formulario (expandido ou nao)
  const [cadastroIsExpanded, setCadastroIsExpanded] = useState(false);

  //msg de erro
  const [errorMsg, setErrorMsg] = useState();

  //////////////////ADICIONANDO NOVO
  const reducer = (state, action) => {
    let newState;
    switch (action.type) {
      case "PACIENTE":
        newState = { ...state, pacienteIDInput: action.value };
        break;
      case "MEDICO":
        newState = { ...state, medicoIDInput: action.value };
        break;
      case "MOTIVO":
        newState = { ...state, motivoInput: action.value };
        break;
      case "VALOR":
        newState = { ...state, valorConsultaInput: action.value };
        break;
      case "PRESCRICAO":
        newState = { ...state, prescricaoInput: action.value };
        break;
      case "DATA_CONSULTA":
        newState = { ...state, dtConsultaInput: action.value };
        break;
      case "DATA_CADASTRO":
        newState = { ...state, dtCadastroInput: action.value };
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

  //funçao executada quando o formulario é editado
  const editarConsultaHandler = () => {
    modalDispatch({
      type: "CONFIG_MODAL",
      value: {
        display: true,
        title: "Atualização - Consulta",
        text: `Deseja confirmar a atualização dos dados cadastrais da consulta?`,
        modalWithBtn: true,
        confirmBtnTxt: "Atualizar",
        cancelBtnTxt: "Cancelar",
        cancelHandler: () => {
          modalDispatch({ type: "SET_DISPLAY", value: false });
        },
        confirmHandler: () => {
          modalDispatch({ type: "SET_DISPLAY", value: false });
          axios
            .put(`https://athos-clinica-medica-api-mjv.herokuapp.com/consultas/${consultaEditado?.idConsulta}`, {
              paciente: {
                id: formularioCadastroState.pacienteIDInput,
              },
              medico: {
                id: formularioCadastroState.medicoIDInput,
              },
              motivo: formularioCadastroState.motivoInput,
              prescricao: formularioCadastroState.prescricaoInput,
              valorConsulta: formularioCadastroState.valorConsultaInput,
              dataConsulta: formularioCadastroState.dataConsulta,
              dataInclusao: formularioCadastroState.dataInclusao,
            })
            .then(function (response) {
              console.log(response);
              setRefresh(true);
            })
            .catch(function (error) {
              console.log(error);
              setErrorMsg(
                "❌ Algo de errado ao atualizar os dados cadastrais. Verifique se os campos estão preenchidos com valores válidos."
              );
            });
        },
      },
    });
  };

  //funçao executada quando o formulario é submetido
  const adicionarConsultaHandler = () => {
    if (formularioCadastroState.motivoInput === "string") {
      setErrorMsg("❌ É necessário informar o motivo e a prescrição da consulta.");
      return null;
    }
    setErrorMsg(null);
    if (formularioCadastroState.dtCadastroInput === null) {
      const valorFormatado = getCurrentDateWithTime();

      dispatch({ type: "DATA_CADASTRO", value: valorFormatado });
    }
    if (formularioCadastroState.dtConsultaInput === null) {
      const valorFormatado = getCurrentDateWithTime();

      dispatch({ type: "DATA_CONSULTA", value: valorFormatado });
    }

    modalDispatch({
      type: "CONFIG_MODAL",
      value: {
        display: true,
        title: "Cadastro - Consulta",
        text: `Deseja confirmar o cadastro da consulta?`,
        modalWithBtn: true,
        confirmBtnTxt: "Cadastrar",
        cancelBtnTxt: "Cancelar",
        cancelHandler: () => {
          modalDispatch({ type: "SET_DISPLAY", value: false });
        },
        confirmHandler: () => {
          modalDispatch({ type: "SET_DISPLAY", value: false });

          axios
            .post("https://athos-clinica-medica-api-mjv.herokuapp.com/consultas", {
              paciente: {
                id: formularioCadastroState.pacienteIDInput,
              },
              medico: {
                id: formularioCadastroState.medicoIDInput,
              },
              motivo: formularioCadastroState.motivoInput,
              prescricao: formularioCadastroState.prescricaoInput,
              valorConsulta: formularioCadastroState.valorConsultaInput,
              dataConsulta: formularioCadastroState.dataConsulta,
              dataInclusao: formularioCadastroState.dataInclusao,
            })
            .then(function (response) {
              console.log(response);
              setRefresh(true);
            })
            .catch(function (error) {
              console.log(error);
              setErrorMsg(
                "❌ Algo de errado ao cadastrar consulta. Verifique se os campos estão preenchidos com valores válidos."
              );
            });
        },
      },
    });
  };

  //Navegar para a pagina de detalhes

  return (
    <CadastrarContainer>
      <Header onClick={toggleSectionHandler}>
        {" "}
        <SectionTitle>{tipoFormulario === "atualizar" ? "Atualizar Consulta" : "Adicionar Nova Consulta"}</SectionTitle>
        {cadastroIsExpanded ? <ColapsarBtn /> : <ExpandirBtn />}
      </Header>

      {cadastroIsExpanded && (
        <CadastroForm>
          {tipoFormulario === "atualizar" && (
            <span style={{ fontSize: "14px" }}>Os campos deixados em branco manterão o último valor.</span>
          )}
          <FormSection>
            <InputWrap>
              {/* ////////////////////////////INPUT E VALIDAÇÃO - SELEÇÃO PACIENTE ////////////////////////////////// */}
              <Label>Paciente</Label>
              <Select
                onChange={(e) => {
                  const valorFormatado = parseInt(e.target.value);
                  dispatch({ type: "PACIENTE", value: valorFormatado });
                }}
              >
                <option>Escolher paciente...</option>
                {pacientes.data.map((paciente) => {
                  return (
                    <option value={paciente.id} key={paciente.id}>
                      {paciente.pessoa.nomeCompleto} (ID: {paciente.id})
                    </option>
                  );
                })}
              </Select>
              {/* /////////////////////////////////////////////////////////////////////////////////////////////// */}
            </InputWrap>
            <InputWrap>
              <Label>Médico</Label>
              {/* ////////////////////////////INPUT E VALIDAÇÃO - SELEÇÃO MEDICO ////////////////////////////////// */}
              <Select
                onChange={(e) => {
                  const valorFormatado = parseInt(e.target.value);
                  dispatch({ type: "MEDICO", value: valorFormatado });
                }}
              >
                <option>Escolher médico...</option>
                {medicos.data.map((medico) => {
                  return (
                    <option value={medico.id} key={medico.id}>
                      {medico.pessoa.nomeCompleto} (ID: {medico.id})
                    </option>
                  );
                })}
              </Select>
              {/* /////////////////////////////////////////////////////////////////////////////////////////////// */}
            </InputWrap>

            <InputWrap>
              <Label>Data da Consulta</Label>
              {/* ////////////////////////////INPUT E VALIDAÇÃO - DATA NASCIMENTO ////////////////////////////////// */}
              <Input
                type="date"
                wd={180}
                onChange={(e) => {
                  const valorFormatado = e.target.value;
                  dispatch({ type: "DATA_CONSULTA", value: valorFormatado });
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
                  dispatch({ type: "DATA_CADASTRO", value: valorFormatado });
                }}
              ></Input>
              {/* /////////////////////////////////////////////////////////////////////////////////////////////// */}
            </InputWrap>
          </FormSection>
          <FormSection>
            <InputWrap>
              <Label>Motivo</Label>
              {/* ////////////////////////////INPUT E VALIDAÇÃO - MOTIVO ////////////////////////////////// */}
              <TextArea
                wd={350}
                onChange={(e) => {
                  const valorFormatado = e.target.value.trim().substring(0, 255);
                  dispatch({ type: "MOTIVO", value: valorFormatado });
                }}
              ></TextArea>
              {/* /////////////////////////////////////////////////////////////////////////////////////////////// */}
            </InputWrap>
            <InputWrap>
              <Label>Prescrição</Label>
              {/* ////////////////////////////INPUT E VALIDAÇÃO - PRESCRIÇÃO ////////////////////////////////// */}
              <TextArea
                wd={350}
                onChange={(e) => {
                  const valorFormatado = e.target.value.trim().substring(0, 255);
                  dispatch({ type: "PRESCRICAO", value: valorFormatado });
                }}
              ></TextArea>
              {/* /////////////////////////////////////////////////////////////////////////////////////////////// */}
            </InputWrap>
          </FormSection>
          <FormSection>
            <InputWrap>
              <Label>Valor da Consulta*</Label>
              {/* ////////////////////////////INPUT E VALIDAÇÃO - VALOR ////////////////////////////////// */}
              <Input
                type="number"
                step="0.50"
                wd={200}
                onChange={(e) => {
                  const valorFormatado = e.target.value.trim();
                  dispatch({ type: "VALOR", value: valorFormatado });
                }}
              ></Input>
              <span style={{ fontSize: "12px" }}>
                *Valor numérico seguindo padrão monetário, separado por vírgula. Ex.: 60,00
              </span>

              {/* /////////////////////////////////////////////////////////////////////////////////////////////// */}
            </InputWrap>
          </FormSection>

          <Button
            type="success"
            width={"280px"}
            onClick={tipoFormulario === "atualizar" ? editarConsultaHandler : adicionarConsultaHandler}
          >
            {tipoFormulario === "atualizar" ? "Atualizar Consulta" : "Cadastrar Nova Consulta"}
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

export default CadastrarConsulta;
