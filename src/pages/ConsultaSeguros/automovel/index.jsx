import React, { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import {
    Container, Section, Title, Label, ValueRow, Value,
    Subsection, Grid, PageWrapper, SubsectionTitle, ButtonNavContainer, Button, Input
} from "./styles";
import { getAutomovelBycpfcnpj } from "../../../services/AutomovelService";
import Header from '../../../components/Header';
import Loading from "../../../components/Loading/loading";
import AlertMessage from "../../../components/ModalAlert";
import EditAutomovel from "./editAutomovel";

const Automovel = () => {
    const { cpfcnpj } = useParams();
    const [veiculos, setVeiculos] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
    const [showAlert, setShowAlert] = useState(false);
    const [selectedIndex, setSelectedIndex] = useState(0);
    const navigate = useNavigate();
    const [modoEdicao, setModoEdicao] = useState(false);
    const selectedVeiculo = veiculos[selectedIndex]

    useEffect(() => {
        const fetchDados = async () => {
            try {
                setIsLoading(true);
                const resultado = await getAutomovelBycpfcnpj(cpfcnpj);
                if (!resultado || resultado.length === 0) {
                    setShowAlert(true);
                } else {
                    setVeiculos(resultado);
                }
            } catch (error) {
                console.error(error);
                setShowAlert(true);
            } finally {
                setIsLoading(false);
            }
        };

        fetchDados();
    }, [cpfcnpj]);

    const handleNavigatePatrimonial = () => {
        navigate(`/patrimonial/${cpfcnpj}`);
    };

    if (isLoading) return <Loading />;
    if (showAlert) {
        return (
            <AlertMessage
                message="Nenhum Automóvel Encontrado."
                onClose={() => window.history.back()}
            />
        );
    }

    const handleUpdate = (veiculoAtualizado) => {
        const novosVeiculos = [...veiculos];
        novosVeiculos[selectedIndex] = veiculoAtualizado;
        setVeiculos(novosVeiculos);
        setModoEdicao(false);
    };;

    const Modal = ({ children, onClose }) => (
        <div style={{
            position: 'fixed', top: 0, left: 0, right: 0, bottom: 0,
            backgroundColor: 'rgba(0,0,0,0.5)', display: 'flex',
            justifyContent: 'center', alignItems: 'center', zIndex: 1000
        }}>
            <div style={{
                backgroundColor: 'white', padding: 20, borderRadius: 8, maxHeight: '90vh', overflowY: 'auto',
                width: '90%', maxWidth: 600
            }}>
                <button onClick={onClose} style={{ float: 'right' }}>X</button>
                {children}
            </div>
        </div>
    );

    return (
        <>
            <Header />
            <PageWrapper>
                <ButtonNavContainer>
                    <Button onClick={() => navigate(`/automovel/${cpfcnpj}`)}>AUTOMÓVEL</Button>
                    <Button onClick={handleNavigatePatrimonial}>PATRIMONIAL</Button>

                    {selectedVeiculo && (
                        <Button onClick={() => setModoEdicao(true)}>Editar Dados</Button>
                    )}
                    {console.log("modoEdicao setado para true")}
                </ButtonNavContainer>

                <Container>
                    <Title>Selecione o Seguro Automóvel</Title>
                    <select
                        value={selectedIndex}
                        onChange={e => setSelectedIndex(Number(e.target.value))}
                    >
                        {veiculos.map((v, i) => (
                            <option key={v.id} value={i}>
                                {v.descricao} - {v.placa}
                            </option>
                        ))}
                    </select>
                </Container>

                {selectedVeiculo && (
                    <Container>
                        <Title>Detalhes do Seguro</Title>

                        <Section>
                            <Label>Segurado:</Label> <Value>{selectedVeiculo.segurado?.nome || 'Nome não disponível'}</Value>
                        </Section>

                        <Section>
                            <Subsection>
                                <SubsectionTitle>Seguradora</SubsectionTitle>
                                <ValueRow><Label>Seguradora:</Label> <Value>{selectedVeiculo.nomeseguradora}</Value></ValueRow>
                                <ValueRow><Label>Apólice:</Label> <Value>{selectedVeiculo.apolice}</Value></ValueRow>
                            </Subsection>

                            <Subsection>
                                <SubsectionTitle>Vigência</SubsectionTitle>
                                <ValueRow><Label>Início:</Label> <Value>{selectedVeiculo.vigenciainicio}</Value></ValueRow>
                                <ValueRow><Label>Fim:</Label> <Value>{selectedVeiculo.vigenciafim}</Value></ValueRow>
                                <ValueRow><Label>Cobertura:</Label> <Value>{selectedVeiculo.cobertura}</Value></ValueRow>
                            </Subsection>
                        </Section>

                        <Section>
                            <Subsection>
                                <SubsectionTitle>Veículo</SubsectionTitle>
                                <ValueRow><Label>Modelo:</Label> <Value>{selectedVeiculo.descricao}</Value></ValueRow>
                                <ValueRow><Label>Ano/Modelo:</Label> <Value>{selectedVeiculo.anomodelo}</Value></ValueRow>
                                <ValueRow><Label>Placa:</Label> <Value>{selectedVeiculo.placa}</Value></ValueRow>
                            </Subsection>
                        </Section>

                        <Section>
                            <Subsection>
                                <SubsectionTitle>Importâncias Seguradas</SubsectionTitle>
                                <Grid>
                                    <ValueRow><Label>Casco:</Label> <Value>{selectedVeiculo.importancias?.casco}</Value></ValueRow>
                                    <ValueRow><Label>Franquia:</Label> <Value>{selectedVeiculo.importancias?.franquia}</Value></ValueRow>
                                    <ValueRow><Label>DMateriais:</Label> <Value>{selectedVeiculo.importancias?.dmateriais}</Value></ValueRow>
                                    <ValueRow><Label>DPessoais:</Label> <Value>{selectedVeiculo.importancias?.dpessoais}</Value></ValueRow>
                                    <ValueRow><Label>APP/Morte:</Label> <Value>{selectedVeiculo.importancias?.appMorte}</Value></ValueRow>
                                    <ValueRow><Label>Outras:</Label> <Value>{selectedVeiculo.importancias?.outras}</Value></ValueRow>
                                </Grid>
                            </Subsection>
                        </Section>

                        <Section>
                            <Subsection>
                                <SubsectionTitle>Prêmios</SubsectionTitle>
                                <ValueRow><Label>Total:</Label> <Value>R$ {selectedVeiculo.premios?.total}</Value></ValueRow>
                                <ValueRow><Label>Forma de Pagamento:</Label> <Value>{selectedVeiculo.premios?.pagamento}</Value></ValueRow>
                                <ValueRow><Label>Parcelas:</Label> <Value>{selectedVeiculo.premios?.parcelas}</Value></ValueRow>
                            </Subsection>
                        </Section>

                        <Section>
                            <Subsection>
                                <SubsectionTitle>Carnês</SubsectionTitle>
                                {selectedVeiculo.carnes?.map((item, index) => (
                                    <ValueRow key={index}>
                                        <Label>Vencimento:</Label> <Value>{item.vencimento}</Value>
                                        <Label>Valor:</Label> <Value>{item.valor}</Value>
                                    </ValueRow>
                                ))}
                            </Subsection>
                        </Section>
                    </Container>
                )}

                {selectedVeiculo && modoEdicao && (
                    <Modal onClose={() => setModoEdicao(false)}>
                        <EditAutomovel
                            veiculo={selectedVeiculo}
                            onCancel={() => setModoEdicao(false)}
                            onUpdate={handleUpdate}
                        />
                    </Modal>
                )}

            </PageWrapper>
        </>
    );
};

export default Automovel;
