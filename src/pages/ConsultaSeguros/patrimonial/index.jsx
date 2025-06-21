import React, { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import {
  Container, Section, Title, Label, ValueRow, Value,
  Subsection, Grid, PageWrapper, SubsectionTitle, ButtonNavContainer, Button
} from "./styles";
import { getPatrimonialBycpfcnpj } from "../../../services/PatrimonialService";
import Header from '../../../components/Header';
import Loading from "../../../components/Loading/loading";
import AlertMessage from "../../../components/ModalAlert";

const Patrimonial = () => {
  const { cpfcnpj } = useParams();
  const [seguros, setSeguros] = useState([]);
  const [seguroSelecionadoIndex, setSeguroSelecionadoIndex] = useState(0);
  const [isLoading, setIsLoading] = useState(true);
  const [showAlert, setShowAlert] = useState(false);
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
      <AlertMessage
        message="Nenhum Patrimonial Encontrado."
        onClose={() => window.history.back()}
      />
    );
  }

  const dados = seguros[seguroSelecionadoIndex];

  const handleChangeSeguro = (event) => {
    setSeguroSelecionadoIndex(Number(event.target.value));
  };

  const handleNavigateAutomovel = () => {
    navigate(`/automovel/${dados.cpfcnpj}`);
  };

  return (
    <>
      <Header />
      <PageWrapper>
        <ButtonNavContainer>
          <Button onClick={handleNavigateAutomovel}>AUTOMÓVEL</Button>
          <Button disabled>PATRIMONIAL</Button>
        </ButtonNavContainer>

        <Container>
          <Title>Seguro Patrimonial</Title>

          <Container>
            <Title>Selecione o Seguro Patrimonial</Title>
            <select
              value={seguroSelecionadoIndex}
              onChange={(e) => setSeguroSelecionadoIndex(Number(e.target.value))}
            >
              {seguros.map((s, i) => (
                <option key={s.id} value={i}>
                  {s.nomeseguradora} - Apólice {s.apolice}
                </option>
              ))}
            </select>
          </Container>

          <Section>
            <Subsection>
              <ValueRow><Label>Seguradora:</Label> <Value>{dados.nomeseguradora}</Value></ValueRow>
              <ValueRow><Label>Apólice:</Label> <Value>{dados.apolice}</Value></ValueRow>
              <ValueRow><Label>Endoso:</Label> <Value>{dados.endoso}</Value></ValueRow>
              <ValueRow><Label>Vigência:</Label> <Value>{dados.vigenciainicio} até {dados.vigenciafim}</Value></ValueRow>
              <ValueRow><Label>Local Segurado:</Label> <Value>Bairro: {dados.bairro} - Cidade: {dados.cidade}</Value></ValueRow>
              <ValueRow><Label>Item:</Label> <Value>{dados.item}</Value></ValueRow>
              <ValueRow><Label>Atividade:</Label> <Value>{dados.atividade}</Value></ValueRow>
            </Subsection>
          </Section>

          <Section>
            <Subsection>
              <SubsectionTitle>Importâncias Seguradas</SubsectionTitle>
              <ValueRow>
                <Label>Avaliação:</Label> <Value>{dados.importancias?.avaliacao}</Value>
                <Label>Cobertura:</Label> <Value>{dados.importancias?.cobertura}</Value>
              </ValueRow>
            </Subsection>
          </Section>

          <Section>
            <Subsection>
              <SubsectionTitle>Prêmios</SubsectionTitle>
              <ValueRow><Label>Data Cotação:</Label> <Value>{dados.premios?.dataCotacao}</Value></ValueRow>
              <ValueRow><Label>Valor:</Label> <Value>R$ {dados.premios?.valor}</Value></ValueRow>
              <ValueRow><Label>Forma de Pagamento:</Label> <Value>{dados.premios?.pagamento}</Value></ValueRow>
              <ValueRow><Label>Parcelas:</Label> <Value>{dados.premios?.parcelas}</Value></ValueRow>
              <ValueRow><Label>P. Líquido:</Label> <Value>R$ {dados.premios?.liquido}</Value></ValueRow>
              <ValueRow><Label>P. Total:</Label> <Value>R$ {dados.premios?.total}</Value></ValueRow>
              <ValueRow><Label>Observações:</Label> <Value>{dados.premios?.observacoes}</Value></ValueRow>
            </Subsection>
          </Section>

          <Section>
            <Subsection>
              <SubsectionTitle>Carnês</SubsectionTitle>
              {dados.carnes?.map((item, index) => (
                <ValueRow key={index}>
                  <Label>Vencimento {index + 1}:</Label> <Value>{item.vencimento}</Value>
                  <Label>Valor:</Label> <Value>R$ {item.valor}</Value>
                </ValueRow>
              ))}
            </Subsection>
          </Section>
        </Container>
      </PageWrapper>
    </>
  );
};

export default Patrimonial;
