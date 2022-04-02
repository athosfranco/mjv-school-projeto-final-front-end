import React, { useState, useEffect, useContext } from "react";
import { useSearchParams } from "react-router-dom";
import axios from "axios";
import { Details, DetalhesContainer, InfoEsp, InfoTitle, InfoValue, InfoWrap } from "./DetalhesMedico.styles";

import { Divider, SectionTitle } from "../../Pages.styles";

import { formatarDataSemHora, formatarIdade, getFormattedDate } from "../../../GeneralFunctions";
import CadastrarMedico from "../CadastrarMedico/CadastrarMedico";
import LoadingOverlay from "../../../Components/LoadingOverlay/LoadingOverlay";
import Button from "../../../UI/Button/Button";
import ModalCtx from "../../../Context/ModalContext";
import { DataCtx } from "../../Dashboard/Dashboard";
import { useNavigate } from "react-router-dom";
import { EspItem } from "../../../Components/ListaMedico/ListaMedico.styles";

const DetalhesMedico = () => {
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

  const [medico, setMedico] = useState();

  useEffect(() => {
    const endpoint = `https://athos-clinica-medica-api-mjv.herokuapp.com/medicos/${id}`;
    try {
      axios.get(endpoint).then((res) => {
        console.log(res);
        setMedico(res.data);
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
        title: "Exclusão - Médico",
        text: `ATENÇÃO: Deseja confirmar a EXCLUSÃO do médico "${medico?.pessoa.nomeCompleto}" (ID #${medico?.id})?`,
        modalWithBtn: true,
        confirmBtnTxt: "Excluir",
        cancelBtnTxt: "Cancelar",
        cancelHandler: () => {
          modalDispatch({ type: "SET_DISPLAY", value: false });
        },
        confirmHandler: () => {
          modalDispatch({ type: "SET_DISPLAY", value: false });
          axios
            .delete(`https://athos-clinica-medica-api-mjv.herokuapp.com/medicos/${medico?.id}`)
            .then(function (response) {
              console.log(response);
              setRefresh(true);
              navigate(`/dashboard/medicos`, { replace: true });
            })
            .catch(function (error) {
              console.log(error);
              setErrorMsg(
                "❌ Algo de errado ao deletar médico. Verifique se os campos estão preenchidos com valores válidos."
              );
            });
        },
      },
    });
  };

  return (
    <>
      {medico ? (
        <>
          <DetalhesContainer>
            {errorMsg && <span>{errorMsg}</span>}
            <Details>
              {" "}
              <SectionTitle>Médico - Dados Cadastrais</SectionTitle>
              <Divider />
              <InfoWrap>
                <InfoTitle>ID:</InfoTitle>
                <InfoValue>{medico?.id}</InfoValue>
              </InfoWrap>
              <InfoWrap>
                <InfoTitle>Nome:</InfoTitle>
                <InfoValue>{medico?.pessoa.nomeCompleto}</InfoValue>
              </InfoWrap>
              <InfoWrap>
                <InfoTitle>Data de Nascimento:</InfoTitle>
                <InfoValue>{formatarDataSemHora(medico?.pessoa.dataNascimento)}</InfoValue>
              </InfoWrap>
              <InfoWrap>
                <InfoTitle>Idade:</InfoTitle>
                <InfoValue>{formatarIdade(medico?.pessoa.dataNascimento)} anos</InfoValue>
              </InfoWrap>
              <InfoWrap>
                <InfoTitle>Código CRM:</InfoTitle>
                <InfoValue>{medico?.codigoCRM}</InfoValue>
              </InfoWrap>
              <InfoWrap>
                <InfoTitle>E-mail:</InfoTitle>
                <InfoValue>{medico?.pessoa.email}</InfoValue>
              </InfoWrap>
              <InfoWrap>
                <InfoTitle>Telefone:</InfoTitle>
                <InfoValue>{medico?.pessoa.telefone}</InfoValue>
              </InfoWrap>
              <InfoWrap>
                <InfoTitle>Especialidades: </InfoTitle>
                <InfoEsp>
                  {" "}
                  {medico?.especialidades.map((esp) => (
                    <EspItem>{esp.titulo} </EspItem>
                  ))}
                </InfoEsp>
              </InfoWrap>
              <InfoWrap>
                <InfoTitle>Data de Inclusão:</InfoTitle>
                <InfoValue>{getFormattedDate(medico.dataInclusao, "dd.mm.yy.hr")}</InfoValue>
              </InfoWrap>
              <InfoWrap>
                <InfoTitle>Última atualização:</InfoTitle>
                <InfoValue>
                  {medico.dataAlteracao ? getFormattedDate(medico.dataAlteracao, "dd.mm.yy.hr") : "Nunca alterado"}
                </InfoValue>
              </InfoWrap>
              <InfoWrap>
                <InfoTitle>Endereço completo:</InfoTitle>
                <InfoValue>
                  {`${medico?.pessoa.endereco.logradouro}, Nº ${medico?.pessoa.endereco.numero}, ${medico?.pessoa.endereco.bairro}, CEP ${medico?.pessoa.endereco.cep} - Complemento: ${medico?.pessoa.endereco.complemento}`}
                </InfoValue>
              </InfoWrap>
            </Details>
          </DetalhesContainer>
          <CadastrarMedico tipoFormulario={"atualizar"} medicoEditado={medico} />
          <Divider />
          <Button type="danger" width="300px" onClick={deleteHandler}>
            Excluir Médico
          </Button>
        </>
      ) : (
        <LoadingOverlay />
      )}
    </>
  );
};

export default DetalhesMedico;
