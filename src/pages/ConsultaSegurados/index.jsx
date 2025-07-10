import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import {
  Container, FilterBox, Field, LabelFilter, Input, Button,
  Panel, Row, Value, LabelUF, ValueUF, PageTitle,
  ButtonNavContainer, Label
} from './styles';
import Header from '../../components/Header';
import { formatCPF } from '../cadastro/utils';
import { getSegurados } from '../../services/SeguradoService';
import EditSegurado from './editSegurado';

const ConsultaSegurado = () => {
  const navigate = useNavigate();

  const [placa, setPlaca] = useState('');
  const [nome, setNome] = useState('');
  const [apolice, setApolice] = useState('');
  const [cpfcnpj, setcpfcnpj] = useState('');
  const [resultado, setResultado] = useState(null);
  const [loading, setLoading] = useState(false);
  const [modoEdicao, setModoEdicao] = useState(false);

  const handleBuscar = async () => {
    setLoading(true);
    try {
      const response = await getSegurados({ placa, nome, apolice, cpfcnpj });
      setResultado(response[0] || null);
      setModoEdicao(false);
    } catch (error) {
      console.error('Erro ao buscar segurado:', error);
      setResultado(null);
      setModoEdicao(false);
    }
    setLoading(false);
  };

  const handleNavigateAutomovel = () => {
    if (resultado) navigate(`/automovel/${resultado.cpfcnpj}`);
  };

  const handleNavigatePatrimonial = () => {
    if (resultado) navigate(`/patrimonial/${resultado.cpfcnpj}`);
  };

  const handleUpdate = (seguradoAtualizado) => {
    setResultado(seguradoAtualizado);
    setModoEdicao(false);
  };

  return (
    <>
      <Header />
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
            <Input value={cpfcnpj} onChange={e => setcpfcnpj(formatCPF(e.target.value))} />
          </Field>
          <Button onClick={handleBuscar}>Buscar</Button>
        </FilterBox>

        {loading && <Value style={{ color: '#fff' }}>Carregando...</Value>}
        {!loading && resultado === null && (
          <Value style={{ color: '#fff' }}>Nenhum segurado encontrado.</Value>
        )}

        {resultado && !modoEdicao && (
          <>
            <ButtonNavContainer>
              <Button onClick={handleNavigateAutomovel}>AUTOMÓVEL</Button>
              <Button onClick={handleNavigatePatrimonial}>PATRIMONIAL</Button>
              <Button onClick={() => setModoEdicao(true)}>Editar Dados</Button>
            </ButtonNavContainer>

            <Panel>
              <PageTitle>Dados do Segurado</PageTitle>
              <Row>
                <Label>Segurado:</Label> <Value>{resultado.nome}</Value>
                <Label>Data de Cadastro:</Label> <Value>{resultado.datacadastro}</Value>
              </Row>
              <Row>
                <Label>Endereço:</Label> <Value>{resultado.endereco}</Value>
                <Label>Bairro:</Label> <Value>{resultado.bairro}</Value>
              </Row>
              <Row>
                <Label>Cidade:</Label> <Value>{resultado.cidade}</Value>
                <LabelUF>UF:</LabelUF> <ValueUF>{resultado.uf}</ValueUF>
                <Label>CEP:</Label> <ValueUF>{resultado.cep}</ValueUF>
              </Row>
              <Row>
                <Label>Telefone 1:</Label> <Value>{resultado.tel1}</Value>
                <Label>Telefone 2:</Label> <Value>{resultado.tel2}</Value>
              </Row>
              <Row>
                <Label>E-mail:</Label> <Value>{resultado.email}</Value>
              </Row>
              <Row>
                <Label>Tipo Pessoa:</Label> <Value>{resultado.tipopessoa}</Value>
                <Label>CPF/CNPJ:</Label> <Value>{resultado.cpfcnpj}</Value>
              </Row>
              <Row>
                <Label>Data Nascimento:</Label> <Value>{resultado.datanascimento}</Value>
                <Label>Estado Civil:</Label> <Value>{resultado.estadocivil}</Value>
              </Row>
              <Row>
                <Label>Observações:</Label> <Value>{resultado.observacao}</Value>
              </Row>
            </Panel>
          </>
        )}

        {resultado && modoEdicao && (
          <EditSegurado
            segurado={resultado}
            onCancel={() => setModoEdicao(false)}
            onUpdate={handleUpdate}
          />
        )}
      </Container>
    </>
  );
};

export default ConsultaSegurado;
