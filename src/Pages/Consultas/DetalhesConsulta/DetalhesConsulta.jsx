import React, { useState, useEffect, useContext } from "react";
import { useSearchParams } from "react-router-dom";
import axios from "axios";
import { Details, DetalhesContainer, InfoEsp, InfoTitle, InfoValue, InfoWrap } from "./DetalhesConsulta.styles";
import { Divider, SectionTitle } from "../../Pages.styles";
import { formatarDataSemHora, formatarIdade, getFormattedDate } from "../../../GeneralFunctions";
import CadastrarConsulta from "../CadastrarConsulta/CadastrarConsulta";
import LoadingOverlay from "../../../Components/LoadingOverlay/LoadingOverlay";
import Button from "../../../UI/Button/Button";
import ModalCtx from "../../../Context/ModalContext";
import { DataCtx } from "../../Dashboard/Dashboard";
import { useNavigate } from "react-router-dom";
import { EspItem } from "../../../Components/ListaMedico/ListaMedico.styles";

const DetalhesConsulta = () => {
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

  const [consulta, setConsulta] = useState();

  console.log(consulta);

  useEffect(() => {
    const endpoint = `https://athos-clinica-medica-api-mjv.herokuapp.com/consultas/${id}`;
    try {
      axios.get(endpoint).then((res) => {
        console.log(res);
        setConsulta(res.data);
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
        title: "Exclusão - Consulta",
        text: `ATENÇÃO: Deseja confirmar a EXCLUSÃO da consulta de ID #${consulta?.idConsulta}?`,
        modalWithBtn: true,
        confirmBtnTxt: "Excluir",
        cancelBtnTxt: "Cancelar",
        cancelHandler: () => {
          modalDispatch({ type: "SET_DISPLAY", value: false });
        },
        confirmHandler: () => {
          modalDispatch({ type: "SET_DISPLAY", value: false });
          axios
            .delete(`https://athos-clinica-medica-api-mjv.herokuapp.com/consultas/${consulta?.idConsulta}`)
            .then(function (response) {
              console.log(response);
              setRefresh(true);
              navigate(`/dashboard/consultas`, { replace: true });
            })
            .catch(function (error) {
              console.log(error);
              setErrorMsg(
                "❌ Algo de errado ao deletar consulta. Verifique se os campos estão preenchidos com valores válidos."
              );
            });
        },
      },
    });
  };

  return (
    <>
      {consulta ? (
        <>
          <DetalhesContainer>
            {errorMsg && <span>{errorMsg}</span>}
            <Details>
              {" "}
              <SectionTitle>Consulta</SectionTitle>
              <Divider />
              <InfoWrap>
                <InfoTitle>ID:</InfoTitle>
                <InfoValue>{consulta?.idConsulta}</InfoValue>
              </InfoWrap>
              <InfoWrap>
                <InfoTitle>Motivo:</InfoTitle>
                <InfoValue>{consulta?.motivo}</InfoValue>
              </InfoWrap>
              <InfoWrap>
                <InfoTitle>Prescrição:</InfoTitle>
                <InfoValue>{consulta?.prescricao}</InfoValue>
              </InfoWrap>
              <InfoWrap>
                <InfoTitle>Valor:</InfoTitle>
                <InfoValue>
                  {consulta?.valorConsulta.toLocaleString("pt-BR", { style: "currency", currency: "BRL" })}
                </InfoValue>
              </InfoWrap>
              <InfoWrap>
                <InfoTitle>Data da Consulta:</InfoTitle>
                <InfoValue>{getFormattedDate(consulta?.dataConsulta, "dd.mm.yy.hr")}</InfoValue>
              </InfoWrap>
              <InfoWrap>
                <InfoTitle>Data de Inclusão:</InfoTitle>
                <InfoValue>{getFormattedDate(consulta?.dataInclusao, "dd.mm.yy.hr")}</InfoValue>
              </InfoWrap>
              <InfoWrap>
                <InfoTitle>Última atualização:</InfoTitle>
                <InfoValue>
                  {consulta.dataAlteracao ? getFormattedDate(consulta.dataAlteracao, "dd.mm.yy.hr") : "Nunca alterado"}
                </InfoValue>
              </InfoWrap>
            </Details>
            <Details>
              {" "}
              <SectionTitle>Dados do Paciente</SectionTitle>
              <Divider />
              <InfoWrap>
                <InfoTitle>ID:</InfoTitle>
                <InfoValue>{consulta.paciente?.id}</InfoValue>
              </InfoWrap>
              <InfoWrap>
                <InfoTitle>Nome:</InfoTitle>
                <InfoValue>{consulta.paciente?.pessoa.nomeCompleto}</InfoValue>
              </InfoWrap>
              <InfoWrap>
                <InfoTitle>Data de Nascimento:</InfoTitle>
                <InfoValue>{formatarDataSemHora(consulta.paciente?.pessoa.dataNascimento)}</InfoValue>
              </InfoWrap>
              <InfoWrap>
                <InfoTitle>Idade:</InfoTitle>
                <InfoValue>{formatarIdade(consulta.paciente?.pessoa.dataNascimento)} anos</InfoValue>
              </InfoWrap>
              <InfoWrap>
                <InfoTitle>Matrícula do Plano de Saúde:</InfoTitle>
                <InfoValue>{consulta.paciente?.matriculaPlanoDeSaude}</InfoValue>
              </InfoWrap>
              <InfoWrap>
                <InfoTitle>E-mail:</InfoTitle>
                <InfoValue>{consulta.paciente?.pessoa.email}</InfoValue>
              </InfoWrap>
              <InfoWrap>
                <InfoTitle>Telefone:</InfoTitle>
                <InfoValue>{consulta.paciente?.pessoa.telefone}</InfoValue>
              </InfoWrap>
              <InfoWrap>
                <InfoTitle>Data de Inclusão:</InfoTitle>
                <InfoValue>{getFormattedDate(consulta.paciente.dataInclusao, "dd.mm.yy.hr")}</InfoValue>
              </InfoWrap>
              <InfoWrap>
                <InfoTitle>Última atualização:</InfoTitle>
                <InfoValue>
                  {consulta.paciente.dataAlteracao
                    ? getFormattedDate(consulta.paciente.dataAlteracao, "dd.mm.yy.hr")
                    : "Nunca alterado"}
                </InfoValue>
              </InfoWrap>
              <InfoWrap>
                <InfoTitle>Endereço completo:</InfoTitle>
                <InfoValue>
                  {`${consulta.paciente?.pessoa.endereco.logradouro}, Nº ${consulta.paciente?.pessoa.endereco.numero}, ${consulta.paciente?.pessoa.endereco.bairro}, CEP ${consulta.paciente?.pessoa.endereco.cep} - Complemento: ${consulta.paciente?.pessoa.endereco.complemento}`}
                </InfoValue>
              </InfoWrap>
            </Details>
            <Details>
              {" "}
              <SectionTitle>Dados do Médico</SectionTitle>
              <Divider />
              <InfoWrap>
                <InfoTitle>ID:</InfoTitle>
                <InfoValue>{consulta?.medico?.id}</InfoValue>
              </InfoWrap>
              <InfoWrap>
                <InfoTitle>Nome:</InfoTitle>
                <InfoValue>{consulta?.medico?.pessoa.nomeCompleto}</InfoValue>
              </InfoWrap>
              <InfoWrap>
                <InfoTitle>Data de Nascimento:</InfoTitle>
                <InfoValue>{formatarDataSemHora(consulta?.medico?.pessoa.dataNascimento)}</InfoValue>
              </InfoWrap>
              <InfoWrap>
                <InfoTitle>Idade:</InfoTitle>
                <InfoValue>{formatarIdade(consulta?.medico?.pessoa.dataNascimento)} anos</InfoValue>
              </InfoWrap>
              <InfoWrap>
                <InfoTitle>Código CRM:</InfoTitle>
                <InfoValue>{consulta?.medico?.codigoCRM}</InfoValue>
              </InfoWrap>
              <InfoWrap>
                <InfoTitle>E-mail:</InfoTitle>
                <InfoValue>{consulta?.medico?.pessoa.email}</InfoValue>
              </InfoWrap>
              <InfoWrap>
                <InfoTitle>Telefone:</InfoTitle>
                <InfoValue>{consulta?.medico?.pessoa.telefone}</InfoValue>
              </InfoWrap>
              <InfoWrap>
                <InfoTitle>Especialidades: </InfoTitle>
                <InfoEsp>
                  {" "}
                  {consulta?.medico?.especialidades.map((esp) => (
                    <EspItem key={esp.id}>{esp.titulo} </EspItem>
                  ))}
                </InfoEsp>
              </InfoWrap>
              <InfoWrap>
                <InfoTitle>Data de Inclusão:</InfoTitle>
                <InfoValue>{getFormattedDate(consulta?.medico.dataInclusao, "dd.mm.yy.hr")}</InfoValue>
              </InfoWrap>
              <InfoWrap>
                <InfoTitle>Última atualização:</InfoTitle>
                <InfoValue>
                  {consulta?.medico.dataAlteracao
                    ? getFormattedDate(consulta?.medico.dataAlteracao, "dd.mm.yy.hr")
                    : "Nunca alterado"}
                </InfoValue>
              </InfoWrap>
              <InfoWrap>
                <InfoTitle>Endereço completo:</InfoTitle>
                <InfoValue>
                  {`${consulta?.medico?.pessoa.endereco.logradouro}, Nº ${consulta?.medico?.pessoa.endereco.numero}, ${consulta?.medico?.pessoa.endereco.bairro}, CEP ${consulta?.medico?.pessoa.endereco.cep} - Complemento: ${consulta?.medico?.pessoa.endereco.complemento}`}
                </InfoValue>
              </InfoWrap>
            </Details>
          </DetalhesContainer>
          <CadastrarConsulta tipoFormulario={"atualizar"} consultaEditado={consulta} />
          <Divider />
          <Button type="danger" width="300px" onClick={deleteHandler}>
            Excluir Consulta
          </Button>
        </>
      ) : (
        <LoadingOverlay />
      )}
    </>
  );
};

export default DetalhesConsulta;
