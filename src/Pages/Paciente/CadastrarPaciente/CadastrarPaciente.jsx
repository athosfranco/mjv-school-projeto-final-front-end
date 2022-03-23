import React from "react";
import { Divider, SectionTitle } from "../../Pages.styles";
import { CadastrarContainer, CadastroForm, Input, InputWrap, FormSection, Label } from "./CadastrarPaciente.styles";

const CadastrarPaciente = () => {
  return (
    <CadastrarContainer>
      <SectionTitle>Adicionar Novo Paciente</SectionTitle>
      <Divider />
      <CadastroForm>
        <FormSection>
          <InputWrap>
            <Label>Nome Completo</Label>
            <Input></Input>
          </InputWrap>
          <InputWrap>
            <Label>Mat. Plano de Saúde</Label>
            <Input></Input>
          </InputWrap>
          <InputWrap>
            <Label>CPF</Label>
            <Input></Input>
          </InputWrap>
          <InputWrap>
            <Label>RG</Label>
            <Input></Input>
          </InputWrap>
          <InputWrap>
            <Label>Telefone</Label>
            <Input></Input>
          </InputWrap>

          <InputWrap>
            <Label>E-mail</Label>
            <Input></Input>
          </InputWrap>
          <InputWrap>
            <Label>Data de Nascimento</Label>
            <Input type="date"></Input>
          </InputWrap>
          <InputWrap>
            <Label>Data de Cadastro</Label>
            <Input type="date"></Input>
          </InputWrap>
        </FormSection>
        <h3>Endereço</h3>
        <FormSection>
          <InputWrap>
            <Label>Logradouro</Label>
            <Input></Input>
          </InputWrap>
          <InputWrap>
            <Label>Número</Label>
            <Input></Input>
          </InputWrap>
          <InputWrap>
            <Label>Bairro</Label>
            <Input></Input>
          </InputWrap>

          <InputWrap>
            <Label>CEP</Label>
            <Input></Input>
          </InputWrap>
          <InputWrap>
            <Label>Complemento</Label>
            <Input></Input>
          </InputWrap>
        </FormSection>
      </CadastroForm>
    </CadastrarContainer>
  );
};

export default CadastrarPaciente;
