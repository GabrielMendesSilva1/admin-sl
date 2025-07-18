import React, { useState, useEffect } from "react";
import {
    PageWrapper,
    Container,
    Title,
    Section,
    Label,
    ValueRow,
    SubsectionTitle,
    Value,
    Grid
} from "./styles";
import { getSeguradoras } from "../../services/SeguradoraService";
import Header from "../../components/Header";

const Seguradoras = () => {
    const [seguradoras, setSeguradoras] = useState([]);
    const [selected, setSelected] = useState(null);

    useEffect(() => {
        getSeguradoras()
            .then(data => setSeguradoras(data))
            .catch(err => {
                console.error('Erro ao carregar seguradoras:', err.message);
                alert('Erro ao carregar seguradoras.');
            });
    }, []);    

    const handleChange = (e) => {
        const selectedId = e.target.value;
        const seguradora = seguradoras.find((s) => s.id === selectedId);
        setSelected(seguradora);
    };

    return (
        <>
            <Header />
            <PageWrapper>
                <Container>
                    <Title>Consulta de Seguradoras</Title>

                    <Section>
                        <label htmlFor="seguradora-select" style={{ fontWeight: 600 }}>
                            Selecione uma seguradora:
                        </label>
                        <select
                            id="seguradora-select"
                            onChange={handleChange}
                            defaultValue=""
                            style={{
                                width: "100%",
                                padding: "0.75rem 1rem",
                                border: "1px solid #ccc",
                                borderRadius: "8px",
                                fontSize: "1rem",
                                marginTop: "8px",
                            }}
                        >
                            <option value="" disabled>Selecione...</option>
                            {seguradoras.map((s) => (
                                <option key={s.id} value={s.id}>{s.nome}</option>
                            ))}
                        </select>
                    </Section>

                    {selected && (
                        <Section>
                            <SubsectionTitle>Dados da Seguradora</SubsectionTitle>

                            {/* Nome e Endereço */}
                            <Grid columns={1}>
                                <div>
                                    <Label>Nome:</Label>
                                    <Value>{selected.nome.toUpperCase()}</Value>
                                </div>
                                <div>
                                    <Label>Endereço:</Label>
                                    <Value>{selected.endereco.toUpperCase()}</Value>
                                </div>
                            </Grid>

                            {/* Localização */}
                            <Grid columns={4}>
                                <div>
                                    <Label>Bairro:</Label>
                                    <Value>{selected.bairro.toUpperCase()}</Value>
                                </div>
                                <div>
                                    <Label>Cidade:</Label>
                                    <Value>{selected.cidade.toUpperCase()}</Value>
                                </div>
                                <div>
                                    <Label>UF:</Label>
                                    <Value>{selected.uf.toUpperCase()}</Value>
                                </div>
                                <div>
                                    <Label>CEP:</Label>
                                    <Value>{selected.cep}</Value>
                                </div>
                            </Grid>

                            {/* Contato */}
                            <Grid columns={3}>
                                <div>
                                    <Label>Fone 1:</Label>
                                    <Value>{selected.fone1}</Value>
                                </div>
                                <div>
                                    <Label>Fone 2:</Label>
                                    <Value>{selected.fone2}</Value>
                                </div>
                                <div>
                                    <Label>Contato:</Label>
                                    <Value>{selected.contato}</Value>
                                </div>
                            </Grid>

                            {/* CGC e Email */}
                            <Grid columns={2}>
                                <div>
                                    <Label>CGC:</Label>
                                    <Value>{selected.cgc.toUpperCase()}</Value>
                                </div>
                                <div>
                                    <Label>Email:</Label>
                                    <Value>{selected.email.toUpperCase()}</Value>
                                </div>
                            </Grid>
                        </Section>
                    )}

                </Container>
            </PageWrapper>
        </>
    );
};

export default Seguradoras;
