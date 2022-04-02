import React, { useState, useEffect, useContext } from "react";
import { useSearchParams } from "react-router-dom";
import axios from "axios";
import { Details, DetalhesContainer, InfoTitle, InfoValue, InfoWrap } from "./DetalhesPaciente.styles";

import { Divider, SectionTitle } from "../../Pages.styles";

import { formatarDataSemHora, formatarIdade, getFormattedDate } from "../../../GeneralFunctions";
import CadastrarPaciente from "../CadastrarPaciente/CadastrarPaciente";
import LoadingOverlay from "../../../Components/LoadingOverlay/LoadingOverlay";
import Button from "../../../UI/Button/Button";
import ModalCtx from "../../../Context/ModalContext";
import { DataCtx } from "../../Dashboard/Dashboard";
import { useNavigate } from "react-router-dom";

const DetalhesPaciente = () => {
  //navegaçao programada
  let navigate = useNavigate();
  //manipulaçao do modal
  const { modalState, modalDispatch } = useContext(ModalCtx);

  //refresh
  const { setRefresh } = useContext(DataCtx);

  //query string react router v6
  const [searchParams] = useSearchParams();

  //error msg
  const [errorMsg, setErrorMsg] = useState();

  //pega o id da URL
  const id = searchParams.get("id");

  const [paciente, setPaciente] = useState();

  useEffect(() => {
    const endpoint = `https://athos-clinica-medica-api-mjv.herokuapp.com/pacientes/${id}`;
    try {
      axios.get(endpoint).then((res) => {
        console.log(res);
        setPaciente(res.data);
      });
    } catch (err) {
      console.log(err);
    }
  }, [id]);

  const deleteHandler = () => {
    modalDispatch({
      type: "CONFIG_MODAL",
      value: {
        display: true,
        title: "Exclusão - Paciente",
        text: `ATENÇÃO: Deseja confirmar a EXCLUSÃO do paciente "${paciente?.pessoa.nomeCompleto}" (ID #${paciente?.id})?`,
        modalWithBtn: true,
        confirmBtnTxt: "Excluir",
        cancelBtnTxt: "Cancelar",
        cancelHandler: () => {
          modalDispatch({ type: "SET_DISPLAY", value: false });
        },
        confirmHandler: () => {
          modalDispatch({ type: "SET_DISPLAY", value: false });
          axios
            .delete(`https://athos-clinica-medica-api-mjv.herokuapp.com/pacientes/${paciente?.id}`)
            .then(function (response) {
              console.log(response);
              setRefresh(true);
              navigate(`/dashboard/pacientes`, { replace: true });
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
    <>
      {paciente ? (
        <>
          <DetalhesContainer>
            {errorMsg && <span>{errorMsg}</span>}
            <Details>
              {" "}
              <SectionTitle>Paciente - Dados Cadastrais</SectionTitle>
              <Divider />
              <InfoWrap>
                <InfoTitle>ID:</InfoTitle>
                <InfoValue>{paciente?.id}</InfoValue>
              </InfoWrap>
              <InfoWrap>
                <InfoTitle>Nome:</InfoTitle>
                <InfoValue>{paciente?.pessoa.nomeCompleto}</InfoValue>
              </InfoWrap>
              <InfoWrap>
                <InfoTitle>Data de Nascimento:</InfoTitle>
                <InfoValue>{formatarDataSemHora(paciente?.pessoa.dataNascimento)}</InfoValue>
              </InfoWrap>
              <InfoWrap>
                <InfoTitle>Idade:</InfoTitle>
                <InfoValue>{formatarIdade(paciente?.pessoa.dataNascimento)} anos</InfoValue>
              </InfoWrap>
              <InfoWrap>
                <InfoTitle>Matrícula do Plano de Saúde:</InfoTitle>
                <InfoValue>{paciente?.matriculaPlanoDeSaude}</InfoValue>
              </InfoWrap>
              <InfoWrap>
                <InfoTitle>E-mail:</InfoTitle>
                <InfoValue>{paciente?.pessoa.email}</InfoValue>
              </InfoWrap>
              <InfoWrap>
                <InfoTitle>Telefone:</InfoTitle>
                <InfoValue>{paciente?.pessoa.telefone}</InfoValue>
              </InfoWrap>
              <InfoWrap>
                <InfoTitle>Data de Inclusão:</InfoTitle>
                <InfoValue>{getFormattedDate(paciente.dataInclusao, "dd.mm.yy.hr")}</InfoValue>
              </InfoWrap>
              <InfoWrap>
                <InfoTitle>Última atualização:</InfoTitle>
                <InfoValue>
                  {paciente.dataAlteracao ? getFormattedDate(paciente.dataAlteracao, "dd.mm.yy.hr") : "Nunca alterado"}
                </InfoValue>
              </InfoWrap>
              <InfoWrap>
                <InfoTitle>Endereço completo:</InfoTitle>
                <InfoValue>
                  {`${paciente?.pessoa.endereco.logradouro}, Nº ${paciente?.pessoa.endereco.numero}, ${paciente?.pessoa.endereco.bairro}, CEP ${paciente?.pessoa.endereco.cep} - Complemento: ${paciente?.pessoa.endereco.complemento}`}
                </InfoValue>
              </InfoWrap>
            </Details>
          </DetalhesContainer>
          <CadastrarPaciente tipoFormulario={"atualizar"} pacienteEditado={paciente} />
          <Divider />
          <Button type="danger" width="300px" onClick={deleteHandler}>
            Excluir Paciente
          </Button>
        </>
      ) : (
        <LoadingOverlay />
      )}
    </>
  );
};

export default DetalhesPaciente;
