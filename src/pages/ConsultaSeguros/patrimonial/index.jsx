import React, { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import {
  Container, Section, Title, Label, ValueRow, Value,
  Subsection, Grid, PageWrapper, SubsectionTitle, ButtonNavContainer, Button
} from "./styles";
import { getPatrimonialByCpfCnpj } from "../../../services/PatrimonialService";
import Header from '../../../components/Header';
import Loading from "../../../components/Loading/loading";

const Patrimonial = () => {
  const { cpfCnpj } = useParams();
  const [dados, setDados] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchDados = async () => {
      const resultado = await getPatrimonialByCpfCnpj(cpfCnpj);
      setDados(resultado);
    };
    fetchDados();
  }, [cpfCnpj]);

  if (!dados) return <Loading />;

  const handleNavigateAutomovel = () => {
    try {
      if (dados) {
        navigate(`/automovel/${dados.cpfCnpj}`);
        console.log(dados)
      }
    } catch (e) {
      console.error("Erro inesperado", e)
      return
    };
  };

  return (
    <>
      <Header />
      <PageWrapper>
        <ButtonNavContainer>
          <Button onClick={() => handleNavigateAutomovel()}>AUTOMÓVEL</Button>
          <Button onClick={() => handleNavigatePatrimonial()}>PATRIMONIAL</Button>
        </ButtonNavContainer>
        <Container>
          <Title>Seguro Patrimonial</Title>

          <Section>
            <Subsection>
              <SubsectionTitle>Seguradora</SubsectionTitle>
              <ValueRow><Label>Seguradora:</Label> <Value>{dados.seguradora.nome}</Value></ValueRow>
              <ValueRow><Label>Apólice:</Label> <Value>{dados.seguradora.apolice}</Value></ValueRow>
              <ValueRow><Label>Endoso:</Label> <Value>{dados.seguradora.endoso}</Value></ValueRow>
              <ValueRow><Label>Vigência:</Label> <Value>{dados.seguradora.vigencia.inicio} até {dados.seguradora.vigencia.fim}</Value></ValueRow>
              <ValueRow><Label>Local Segurado:</Label> <Value>Bairro: {dados.seguradora.local.bairro} - Cidade: {dados.seguradora.local.cidade}</Value></ValueRow>
              <ValueRow><Label>Item:</Label> <Value>{dados.seguradora.item}</Value></ValueRow>
              <ValueRow><Label>Atividade:</Label> <Value>{dados.seguradora.atividade}</Value></ValueRow>
            </Subsection>
          </Section>

          <Section>
            <Subsection>
              <SubsectionTitle>Importâncias Seguradas</SubsectionTitle>
              {dados.importancias.map((item, idx) => (
                <ValueRow key={idx}>
                  <Label>Cobertura:</Label> <Value>{item.cobertura}</Value>
                  <Label>IS:</Label> <Value>{item.is}</Value>
                  <Label>Franquia:</Label> <Value>{item.franquia}</Value>
                </ValueRow>
              ))}
            </Subsection>
          </Section>

          <Section>
            <Subsection>
              <SubsectionTitle>Prêmios</SubsectionTitle>
              <ValueRow><Label>Indexador:</Label> <Value>{dados.premios.indexador}</Value></ValueRow>
              <ValueRow><Label>Data Cotação:</Label> <Value>{dados.premios.dataCotacao}</Value></ValueRow>
              <ValueRow><Label>Valor:</Label> <Value>R$ {dados.premios.valor}</Value></ValueRow>
              <ValueRow><Label>Forma de Pagamento:</Label> <Value>{dados.premios.pagamento}</Value></ValueRow>
              <ValueRow><Label>Parcelas:</Label> <Value>{dados.premios.parcelas}</Value></ValueRow>
              <ValueRow><Label>P. Líquido:</Label> <Value>R$ {dados.premios.liquido}</Value></ValueRow>
              <ValueRow><Label>P. Total:</Label> <Value>R$ {dados.premios.total}</Value></ValueRow>
              <ValueRow><Label>Observações:</Label> <Value>{dados.premios.observacoes}</Value></ValueRow>
            </Subsection>
          </Section>

          <Section>
            <Subsection>
              <SubsectionTitle>Carnês</SubsectionTitle>
              {dados.carnes.map((item, index) => (
                <ValueRow key={index}>
                  <Label>Venc. 1:</Label> <Value>{item.vencimento1}</Value>
                  <Label>Parcela 1:</Label> <Value>{item.parcela1}</Value>
                  <Label>Venc. 2:</Label> <Value>{item.vencimento2}</Value>
                  <Label>Parcela 2:</Label> <Value>{item.parcela2}</Value>
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
