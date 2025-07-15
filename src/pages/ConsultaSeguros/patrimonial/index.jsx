import React, { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import Header from "../../../components/Header";
import Loading from "../../../components/Loading/loading";
import AlertMessage from "../../../components/ModalAlert";
import EditPatrimonial from "../patrimonial/editPatrimonial"

import {
  Container,
  Section,
  Title,
  Label,
  ValueRow,
  Value,
  Subsection,
  SubsectionTitle,
  ButtonNavContainer,
  Button,
  PageWrapper,
  PrintStyles
} from "./styles";
import { getPatrimonialBycpfcnpj } from "../../../services/PatrimonialService";
import { formatCurrency, formatDateBR } from "../../cadastro/utils";

const Patrimonial = () => {
  const { cpfcnpj } = useParams();
  const [seguros, setSeguros] = useState([]);
  const [seguroSelecionadoIndex, setSeguroSelecionadoIndex] = useState(0);
  const [isLoading, setIsLoading] = useState(true);
  const [showAlert, setShowAlert] = useState(false);
  const [modoEdicao, setModoEdicao] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchDados = async () => {
      try {
        setIsLoading(true);
        const resultado = await getPatrimonialBycpfcnpj(cpfcnpj);
        if (!resultado || resultado.length === 0) {
          setShowAlert(true);
        } else {
          setSeguros(resultado);
        }
      } catch (error) {
        console.error("Erro ao buscar dados patrimoniais:", error);
        setShowAlert(true);
      } finally {
        setIsLoading(false);
      }
    };
    fetchDados();
  }, [cpfcnpj]);

  if (isLoading) return <Loading />;

  if (showAlert) {
    return (
      <AlertMessage message="Nenhum Patrimonial Encontrado." onClose={() => window.history.back()} />
    );
  }

  const dados = seguros[seguroSelecionadoIndex];

  const handleChangeSeguro = (event) => {
    setSeguroSelecionadoIndex(Number(event.target.value));
  };

  const handleAtualizacao = (dadosAtualizados) => {
    const novosSeguros = [...seguros];
    novosSeguros[seguroSelecionadoIndex] = dadosAtualizados;
    setSeguros(novosSeguros);
    setModoEdicao(false);
  };

  const Modal = ({ children, onClose }) => (
    <div
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        backgroundColor: "rgba(0,0,0,0.5)",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        zIndex: 1000,
      }}
    >
      <div
        style={{
          backgroundColor: "white",
          padding: 20,
          borderRadius: 8,
          maxHeight: "90vh",
          overflowY: "auto",
          width: "90%",
          maxWidth: 600,
        }}
      >
        <button onClick={onClose} style={{ float: "right" }}>
          X
        </button>
        {children}
      </div>
    </div>
  );

  const handleNavigateAutomovel = () => {
    navigate(`/automovel/${dados.cpfcnpj}`);
  };

  return (
    <>
      <PrintStyles />
      <Header />
      <PageWrapper>
        <ButtonNavContainer>
          <Button onClick={handleNavigateAutomovel}>AUTOMÓVEL</Button>
          <Button disabled>PATRIMONIAL</Button>
          {!modoEdicao && (
            <Button onClick={() => setModoEdicao(true)}>Editar Seguro</Button>
          )}
          <Button onClick={() => window.print()}>Imprimir</Button>
        </ButtonNavContainer>

        <Container>
          <Title>Seguro Patrimonial</Title>

          <Container>
            <Title>Selecione o Seguro Patrimonial</Title>
            <select value={seguroSelecionadoIndex} onChange={handleChangeSeguro}>
              {seguros.map((s, i) => (
                <option key={s.id} value={i}>
                  {s.nomeseguradora} - Apólice {s.apolice}
                </option>
              ))}
            </select>
          </Container>
          <div id="printable-panel">  {/* <-- Aqui */}

            <Section>
              <Label>Segurado:</Label> <Value>{dados.segurado?.nome || "Nome não disponível"}</Value>
            </Section>

            <Section>
              <Subsection>
                <ValueRow>
                  <Label>Seguradora:</Label> <Value>{dados.nomeseguradora}</Value>
                </ValueRow>
                <ValueRow>
                  <Label>Apólice:</Label> <Value>{dados.apolice}</Value>
                </ValueRow>
                <ValueRow>
                  <Label>Endoso:</Label> <Value>{dados.endoso}</Value>
                </ValueRow>
                <ValueRow>
                  <Label>Vigência:</Label>{" "}
                  <Value>
                    {formatDateBR(dados.vigenciainicio)} até {formatDateBR(dados.vigenciafim)}
                  </Value>
                </ValueRow>
                <ValueRow>
                  <Label>Local Segurado:</Label>{" "}
                  <Value>
                    Bairro: {dados.bairro} - Cidade: {dados.cidade}
                  </Value>
                </ValueRow>
                <ValueRow>
                  <Label>Item:</Label> <Value>{dados.item}</Value>
                </ValueRow>
                <ValueRow>
                  <Label>Atividade:</Label> <Value>{dados.atividade}</Value>
                </ValueRow>
              </Subsection>
            </Section>

            <Section>
              <Subsection>
                <SubsectionTitle>Importâncias Seguradas</SubsectionTitle>
                <ValueRow>
                  <Label>Avaliação:</Label>{" "}
                  <Value>{formatCurrency(dados.importancias?.avaliacao)}</Value>
                </ValueRow>
                <ValueRow>
                  <Label>Cobertura:</Label>{" "}
                  <Value>{formatCurrency(dados.importancias?.cobertura)}</Value>
                </ValueRow>
              </Subsection>
            </Section>

            <Section>
              <Subsection>
                <SubsectionTitle>Prêmios</SubsectionTitle>
                <ValueRow>
                  <Label>Data Cotação:</Label>{" "}
                  <Value>{formatDateBR(dados.premios?.dataCotacao)}</Value>
                </ValueRow>
                <ValueRow>
                  <Label>Valor:</Label> <Value>{formatCurrency(dados.premios?.valor)}</Value>
                </ValueRow>
                <ValueRow>
                  <Label>Forma de Pagamento:</Label> <Value>{dados.premios?.pagamento}</Value>
                </ValueRow>
                <ValueRow>
                  <Label>Parcelas:</Label> <Value>{dados.premios?.parcelas}</Value>
                </ValueRow>
                <ValueRow>
                  <Label>Prêmio Líquido:</Label> <Value>{formatCurrency(dados.premios?.liquido)}</Value>
                </ValueRow>
                <ValueRow>
                  <Label>Prêmio Total:</Label> <Value>{formatCurrency(dados.premios?.total)}</Value>
                </ValueRow>
                {/* <ValueRow>
                <Label>Observações:</Label> <Value>{dados.premios?.observacoes}</Value>
              </ValueRow> */}

              </Subsection>

            </Section>

            <Section>
              <Subsection>
                <SubsectionTitle>Carnês</SubsectionTitle>
                {dados.carnes?.map((item, index) => (
                  <ValueRow key={index}>
                    <Label>Vencimento {index + 1}:</Label>{" "}
                    <Value>{formatDateBR(item.vencimento)}</Value>
                    <Label>Valor:</Label> <Value>{formatCurrency(item.valor)}</Value>
                  </ValueRow>
                ))}
              </Subsection>
            </Section>
          </div>
        </Container>

        {modoEdicao && (
          <Modal onClose={() => setModoEdicao(false)}>
            <EditPatrimonial
              seguro={seguros[seguroSelecionadoIndex]}
              onClose={() => setModoEdicao(false)}
              onAtualizado={handleAtualizacao}
            />
          </Modal>
        )}
      </PageWrapper>
    </>
  );
};

export default Patrimonial;
