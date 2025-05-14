import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import {
    Container, Section, Title, Label, ValueRow, Value,
    Subsection, Grid,
    PageWrapper, SubsectionTitle
} from "./styles";
import { getAutomovelByCpfCnpj } from "../../../services/AutomovelService";
import Header from '../../../components/Header';
import Loading from "../../../components/Loading/loading";
import AlertMessage from "../../../components/ModalAlert";

const Automovel = () => {
    const { cpfCnpj } = useParams();
    const [dados, setDados] = useState(null);
    const [isLoading, setIsLoading] = useState(true);
    const [showAlert, setShowAlert] = useState(false);

    useEffect(() => {
        const fetchDados = async () => {
            try {
                setIsLoading(true)
                const dados = await getAutomovelByCpfCnpj(cpfCnpj);
                if (!dados) {
                    setShowAlert(true);
                } else {
                    setDados(dados);
                }
            } catch (error) {
                setShowAlert(true);
            } finally {
                setIsLoading(false);
            }
        };

        fetchDados();
    }, [cpfCnpj]);

    if (isLoading) {
        return (
            <Loading />
        );
    }

    if (showAlert) {
        return (
            <AlertMessage
                message="Nenhum Automóvel Encontrado."
                onClose={() => window.history.back()}
            />
        );
    }


    return (
        <>
            <Header />
            <PageWrapper>
                <Container>
                    <Title>Seguro Automóvel</Title>

                    <Section>
                        <Label>Segurado:</Label> <Value>{dados.segurado}</Value>
                    </Section>

                    <Section>
                        <Subsection>
                            <SubsectionTitle>Seguradora</SubsectionTitle>
                            <ValueRow><Label>Seguradora:</Label> <Value>{dados.seguradora.nome}</Value></ValueRow>
                            <ValueRow><Label>Apólice:</Label> <Value>{dados.seguradora.apolice}</Value></ValueRow>
                        </Subsection>

                        <Subsection>
                            <SubsectionTitle>Vigência</SubsectionTitle>
                            <ValueRow><Label>Início:</Label> <Value>{dados.vigencia.inicio}</Value></ValueRow>
                            <ValueRow><Label>Fim:</Label> <Value>{dados.vigencia.fim}</Value></ValueRow>
                            <ValueRow><Label>Cobertura:</Label> <Value>{dados.vigencia.cobertura}</Value></ValueRow>
                        </Subsection>
                    </Section>

                    <Section>
                        <Subsection>
                            <SubsectionTitle>Veículo</SubsectionTitle>
                            <ValueRow><Label>Modelo:</Label> <Value>{dados.veiculo.descricao}</Value></ValueRow>
                            <ValueRow><Label>Ano/Modelo:</Label> <Value>{dados.veiculo.anoModelo}</Value></ValueRow>
                            <ValueRow><Label>Placa:</Label> <Value>{dados.veiculo.placa}</Value></ValueRow>
                        </Subsection>
                    </Section>

                    <Section>
                        <Subsection>
                            <SubsectionTitle>Importâncias Seguradas</SubsectionTitle>
                            <Grid>
                                <ValueRow><Label>Casco:</Label> <Value>{dados.importancias.casco}</Value></ValueRow>
                                <ValueRow><Label>Franquia:</Label> <Value>{dados.importancias.franquia}</Value></ValueRow>
                                <ValueRow><Label>DMateriais:</Label> <Value>{dados.importancias.dmateriais}</Value></ValueRow>
                                <ValueRow><Label>DPessoais:</Label> <Value>{dados.importancias.dpessoais}</Value></ValueRow>
                                <ValueRow><Label>APP/Morte:</Label> <Value>{dados.importancias.appMorte}</Value></ValueRow>
                                <ValueRow><Label>Outras:</Label> <Value>{dados.importancias.outras}</Value></ValueRow>
                            </Grid>
                        </Subsection>
                    </Section>

                    <Section>
                        <Subsection>
                            <SubsectionTitle>Prêmios</SubsectionTitle>
                            <ValueRow><Label>Total:</Label> <Value>R$ {dados.premios.total}</Value></ValueRow>
                            <ValueRow><Label>Forma de Pagamento:</Label> <Value>{dados.premios.pagamento}</Value></ValueRow>
                            <ValueRow><Label>Parcelas:</Label> <Value>{dados.premios.parcelas}</Value></ValueRow>
                        </Subsection>
                    </Section>

                    <Section>
                        <Subsection>
                            <SubsectionTitle>Carnês</SubsectionTitle>
                            {dados.carnes.map((item, index) => (
                                <ValueRow key={index}>
                                    <Label>Vencimento:</Label> <Value>{item.vencimento}</Value>
                                    <Label>Valor:</Label> <Value>{item.valor}</Value>
                                </ValueRow>
                            ))}
                        </Subsection>
                    </Section>
                </Container>
            </PageWrapper>
        </>
    );
};

export default Automovel;
