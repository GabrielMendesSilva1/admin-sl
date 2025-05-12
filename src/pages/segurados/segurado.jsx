import React, { useState } from 'react';
import { useSegurado } from './use-segurado';
import {
  Container, FilterBox, Field, Label, Input, Button,
  Panel, Row, Value, LabelUF, ValueUF, PageTitle,
  LabelFilter, ButtonNavContainer
} from './styles';
import Header from '../../components/Header';

const Segurado = () => {
  const { segurados, loading } = useSegurado();
  const [placa, setPlaca] = useState('');
  const [nome, setNome] = useState('');
  const [apolice, setApolice] = useState('');
  const [cpfCnpj, setCpfCnpj] = useState('');
  const [resultado, setResultado] = useState(null);


  const handleBuscar = () => {
    const found = segurados.find(item => {
      return (
        (!placa || item.placa.toLowerCase().includes(placa.toLowerCase())) &&
        (!nome || item.nome.toLowerCase().includes(nome.toLowerCase())) &&
        (!apolice || item.apolice.toLowerCase().includes(apolice.toLowerCase())) &&
        (!cpfCnpj || item.cpfCnpj.toLowerCase().includes(cpfCnpj.toLowerCase()))
      );
    });
    setResultado(found || null);
  };

  return (
    <Container>
      <Header />
      <FilterBox>
        <Field>
          <LabelFilter>PLACA:</LabelFilter>
          <Input value={placa} onChange={e => setPlaca(e.target.value)} />
        </Field>
        <Field>
          <LabelFilter>NOME:</LabelFilter>
          <Input value={nome} onChange={e => setNome(e.target.value)} />
        </Field>
        <Field>
          <LabelFilter>APÓLICE:</LabelFilter>
          <Input value={apolice} onChange={e => setApolice(e.target.value)} />
        </Field>
        <Field>
          <LabelFilter>CPF/CNPJ:</LabelFilter>
          <Input value={cpfCnpj} onChange={e => setCpfCnpj(e.target.value)} />
        </Field>
        <Button
          onClick={handleBuscar}>Buscar</Button>
      </FilterBox>

      {loading && <Value style={{ color: '#fff' }}>Carregando...</Value>}
      {!loading && resultado === null && (
        <Value style={{ color: '#fff' }}>Nenhum segurado encontrado.</Value>
      )}

      {resultado && (
        <>
          <ButtonNavContainer>
            <Button onClick={() => alert('Navegar para Automóvel')}>AUTOMÓVEL</Button>
            <Button onClick={() => alert('Navegar para Patrimonial')}>PATRIMONIAL</Button>
          </ButtonNavContainer>
          <Panel>
            <PageTitle>Dados do Segurado</PageTitle>
            {/* DADOS BÁSICOS */}
            <Row>
              <Label>Segurado:</Label> <Value>{resultado.nome}</Value>
              <Label>Data de Cadastro:</Label> <Value>{resultado.dataCadastro}</Value>
            </Row>

            {/* ENDEREÇO */}
            <Row>
              <Label>Endereço:</Label> <Value>{resultado.endereco}</Value>
              <Label>Bairro:</Label> <Value>{resultado.bairro}</Value>
            </Row>
            <Row>
              <Label>Cidade:</Label> <Value>{resultado.cidade}</Value>
              <LabelUF>UF:</LabelUF> <ValueUF>{resultado.uf}</ValueUF>
              <Label>CEP:</Label> <ValueUF>{resultado.cep}</ValueUF>
            </Row>

            {/* CONTATO */}
            <Row>
              <Label>Telefone 1:</Label> <Value>{resultado.tel1}</Value>
              <Label>Telefone 2:</Label> <Value>{resultado.tel2}</Value>
            </Row>
            <Row>
              <Label>E-mail:</Label> <Value>{resultado.email}</Value>
              <Label>Contato:</Label> <Value>{resultado.contato}</Value>
            </Row>

            {/* DOCUMENTOS */}
            <Row>
              <Label>Tipo Pessoa:</Label> <Value>{resultado.tipoPessoa}</Value>
              <Label>CPF/CNPJ:</Label> <Value>{resultado.cpfCnpj}</Value>
              <Label>RG:</Label> <Value>{resultado.rg}</Value>
            </Row>

            {/* PESSOAIS */}
            <Row>
              <Label>Data Nascimento:</Label> <Value>{resultado.dataNascimento}</Value>
              <Label>Estado Civil:</Label> <Value>{resultado.estadoCivil}</Value>
              <Label>1ª Habilitação:</Label> <Value>{resultado.habilitacao}</Value>
            </Row>
            {/* OBSERVACOES */}
            <Row>
              <Label>Observações:</Label> <Value>{resultado.observacao}</Value>
            </Row>
          </Panel></>

      )}
    </Container>
  );
};


export default Segurado;
