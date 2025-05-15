import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
//import { useSegurado } from './use-segurado';
import {
  Container, FilterBox, Field, Label, Input, Button,
  Panel, Row, Value, LabelUF, ValueUF, PageTitle,
  LabelFilter, ButtonNavContainer
} from './styles';
import Header from '../../components/Header';
import { formatCPF } from '../cadastro/utils';
import { getSegurados } from '../../services/SeguradoService';

const Segurado = () => {
  const navigate = useNavigate();
  const [placa, setPlaca] = useState('');
  const [nome, setNome] = useState('');
  const [apolice, setApolice] = useState('');
  const [cpfcnpj, setCpfCnpj] = useState('');
  const [resultado, setResultado] = useState(null);
  const [loading, setLoading] = useState(false);
  const handleBuscar = async () => {
    setLoading(true);

    try {
      const response = await getSegurados({
        placa,
        nome,
        apolice,
        cpfcnpj,
      });

      setResultado(response[0] || null); // pega o primeiro encontrado
    } catch (error) {
      console.error("Erro ao buscar segurado:", error);
      setResultado(null);
    }

    setLoading(false);
  };


  const handleNavigateAutomovel = () => {
    try {
      if (resultado) {
        navigate(`/automovel/${resultado.cpfcnpj}`);
      }
    } catch (e) {
      console.error("Erro inesperado", e)
      return
    };
  };

  const handleNavigatePatrimonial = () => {
    try {
      if (resultado) {
        navigate(`/patrimonial/${resultado.cpfcnpj}`);
      }
    } catch (e) {
      console.error("Erro inesperado", e)
      return
    };
  };

  return (
    <><Header />
      <Container>
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
            <Input value={cpfcnpj} onChange={e => setCpfCnpj(formatCPF(e.target.value))} />
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
              <Button onClick={() => handleNavigateAutomovel()}>AUTOMÓVEL</Button>
              <Button onClick={() => handleNavigatePatrimonial()}>PATRIMONIAL</Button>
            </ButtonNavContainer>
            <Panel>
              <PageTitle>Dados do Segurado</PageTitle>
              {/* DADOS BÁSICOS */}
              <Row>
                <Label>Segurado:</Label> <Value>{resultado.nome}</Value>
                <Label>Data de Cadastro:</Label> <Value>{resultado.datacadastro}</Value>
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
                <Label>Tipo Pessoa:</Label> <Value>{resultado.tipopessoa}</Value>
                <Label>CPF/CNPJ:</Label> <Value>{resultado.cpfcnpj}</Value>
                <Label>RG:</Label> <Value>{resultado.rg}</Value>
              </Row>

              {/* PESSOAIS */}
              <Row>
                <Label>Data Nascimento:</Label> <Value>{resultado.datanascimento}</Value>
                <Label>Estado Civil:</Label> <Value>{resultado.estadocivil}</Value>
                <Label>1ª Habilitação:</Label> <Value>{resultado.habilitacao}</Value>
              </Row>
              {/* OBSERVACOES */}
              <Row>
                <Label>Observações:</Label> <Value>{resultado.observacao}</Value>
              </Row>
            </Panel></>

        )}
      </Container></>
  );
};


export default Segurado;
