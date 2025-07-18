import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import {
  Container, FilterBox, Field, LabelFilter, Input, Button,
  Panel, Row, Value, LabelUF, ValueUF, PageTitle,
  ButtonNavContainer, PrintStyles, Label
} from './styles';
import Header from '../../components/Header';
import { formatCPF, formatDateBR } from '../cadastro/utils';
import { getSegurados } from '../../services/SeguradoService';
import EditSegurado from './editSegurado';
import { AutoCompleteStyled } from './styles';

const ConsultaSegurado = () => {
  const navigate = useNavigate();

  const [placa, setPlaca] = useState('');
  const [nome, setNome] = useState('');
  const [apolice, setApolice] = useState('');
  const [cpfcnpj, setcpfcnpj] = useState('');
  const [resultado, setResultado] = useState(null);
  const [loading, setLoading] = useState(false);
  const [modoEdicao, setModoEdicao] = useState(false);
  const [sugestoesNome, setSugestoesNome] = useState([]);

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

  const handleSubmit = (e) => {
    e.preventDefault();
    handleBuscar();
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
      <PrintStyles />
      <Header />
      <Container>
        <form onSubmit={handleSubmit}>
          <FilterBox>
            <Field>
              <LabelFilter>PLACA:</LabelFilter>
              <Input
                value={placa.toUpperCase()}
                onChange={e => setPlaca(e.target.value)}
                placeholder="Digite a placa..."
              />
            </Field>

            <Field>
              <LabelFilter>NOME:</LabelFilter>
              <AutoCompleteStyled
                value={nome.toUpperCase()}
                onChange={setNome}
                onSearch={async (valor) => {
                  setNome(valor);
                  if (valor.length >= 2) {
                    const resultados = await getSegurados({ nome: valor });
                    const nomesUnicos = [...new Set(resultados.map(s => s.nome.trim()))];
                    setSugestoesNome(nomesUnicos.map(nome => ({ value: nome })));
                  } else {
                    setSugestoesNome([]);
                  }
                }}
                options={sugestoesNome}
                placeholder="Digite o nome..."
              />
            </Field>

            <Field>
              <LabelFilter>APÓLICE:</LabelFilter>
              <Input
                value={apolice.toUpperCase()}
                onChange={e => setApolice(e.target.value)}
                placeholder="Digite a apolice..."
              />
            </Field>

            <Field>
              <LabelFilter>CPF/CNPJ:</LabelFilter>
              <Input
                value={cpfcnpj}
                onChange={e => setcpfcnpj(formatCPF(e.target.value))}
                placeholder="Digite o CPF/CNPJ..."
              />
            </Field>

            <Button type="submit">Buscar</Button>
          </FilterBox>
        </form>

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
              <Button onClick={() => window.print()}>Imprimir</Button>
            </ButtonNavContainer>

            <Panel id="painel-segurado">
              <PageTitle>Dados do Segurado</PageTitle>
              <Row>
                <Label>Segurado:</Label> <Value>{resultado.nome.toUpperCase()}</Value>
                <Label>Data de Cadastro:</Label> <Value>{formatDateBR(resultado.datacadastro)}</Value>
              </Row>
              <Row></Row>
              <Row>
                <Label>Endereço:</Label> <Value>{resultado.endereco.toUpperCase()}</Value>
                <Label>Bairro:</Label> <Value>{resultado.bairro.toUpperCase()}</Value>
              </Row>
              <Row>
                <Label>Numero:</Label> <Value>{resultado.numero}</Value>
                <Label>Complemento:</Label> <Value>{resultado.complemento.toUpperCase()}</Value>
              </Row>
              <Row>
                <Label>Cidade:</Label> <Value>{resultado.cidade.toUpperCase()}</Value>
                <LabelUF>UF:</LabelUF> <ValueUF>{resultado.uf.toUpperCase()}</ValueUF>
                <Label>CEP:</Label> <ValueUF>{resultado.cep}</ValueUF>
              </Row>
              <Row></Row>
              <Row>
                <Label>Telefone 1:</Label> <Value>{resultado.tel1}</Value>
                <Label>Telefone 2:</Label> <Value>{resultado.tel2}</Value>
              </Row>
              <Row>
                <Label>E-mail:</Label> <Value>{resultado.email.toUpperCase()}</Value>
              </Row>
              <Row>
                <Label>Tipo Pessoa:</Label> <Value>{resultado.tipopessoa.toUpperCase()}</Value>
                <Label>CPF/CNPJ:</Label> <Value>{resultado.cpfcnpj}</Value>
              </Row>
              <Row>
                <Label>Data Nascimento:</Label> <Value>{formatDateBR(resultado.datanascimento)}</Value>
                <Label>Estado Civil:</Label> <Value>{resultado.estadocivil.toUpperCase()}</Value>
              </Row>
              <Row>
                <Label>Observações:</Label> <Value>{resultado.observacao.toUpperCase()}</Value>
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
