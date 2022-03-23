import React, { useState } from "react";
import Button from "../../../UI/Button/Button";
import { Divider, SectionTitle } from "../../Pages.styles";
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

const CadastrarPaciente = () => {
  const [cadastroIsExpanded, setCadastroIsExpanded] = useState(false);

  const toggleSectionHandler = () => setCadastroIsExpanded(!cadastroIsExpanded);

  const adicionarPacienteHandler = (e) => {
    e.preventDefault();
  };

  return (
    <CadastrarContainer>
      <Header onClick={toggleSectionHandler}>
        {" "}
        <SectionTitle>Adicionar Novo Paciente</SectionTitle>
        {cadastroIsExpanded ? <ColapsarBtn /> : <ExpandirBtn />}
      </Header>

      {cadastroIsExpanded && (
        <CadastroForm onSubmit={adicionarPacienteHandler}>
          <Divider />
          <FormSection>
            <InputWrap>
              <Label>Nome Completo</Label>
              <Input></Input>
            </InputWrap>
            <InputWrap>
              <Label>Mat. Plano de Saúde</Label>
              <Input wd={200}></Input>
            </InputWrap>
            <InputWrap>
              <Label>CPF</Label>
              <Input wd={200}></Input>
            </InputWrap>
            <InputWrap>
              <Label>RG</Label>
              <Input wd={200}></Input>
            </InputWrap>
            <InputWrap>
              <Label>Telefone</Label>
              <Input wd={200}></Input>
            </InputWrap>

            <InputWrap>
              <Label>E-mail</Label>
              <Input wd={200}></Input>
            </InputWrap>
            <InputWrap>
              <Label>Data de Nascimento</Label>
              <Input type="date" wd={180}></Input>
            </InputWrap>
            <InputWrap>
              <Label>Data de Cadastro</Label>
              <Input type="date" wd={180}></Input>
            </InputWrap>
          </FormSection>
          <h3>Endereço</h3>
          <FormSection>
            <InputWrap>
              <Label>Logradouro</Label>
              <Input wd={200}></Input>
            </InputWrap>
            <InputWrap>
              <Label>Número</Label>
              <Input wd={100}></Input>
            </InputWrap>
            <InputWrap>
              <Label>Bairro</Label>
              <Input wd={200}></Input>
            </InputWrap>

            <InputWrap>
              <Label>CEP</Label>
              <Input wd={200}></Input>
            </InputWrap>
            <InputWrap>
              <Label>Complemento</Label>
              <Input></Input>
            </InputWrap>
          </FormSection>
          <Button type="success" width={"220px"}>
            Cadastrar Novo Paciente
          </Button>
        </CadastroForm>
      )}
    </CadastrarContainer>
  );
};

export default CadastrarPaciente;
