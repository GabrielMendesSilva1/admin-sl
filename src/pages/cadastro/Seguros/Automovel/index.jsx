import React from 'react';
import { useCadastroAuto } from './useCadastroAuto';
import Header from '../../../../components/Header';
import {
    Container,
    Panel,
    PageTitle,
    FormRow,
    Field,
    Label,
    Input,
    ButtonRow,
    Button,
} from './styles';

const CadastroAuto = () => {
    const {
        form,
        handleChange,
        handleCarneChange,
        handleAddCarne,
        handleSubmit,
    } = useCadastroAuto();

    return (
        <>
            <Header />
            <Container>
                <Panel>
                    <PageTitle>Cadastro de Seguro Auto</PageTitle>

                    {/* DADOS DO SEGURADO */}
                    <FormRow>
                        <Field>
                            <Label>Nome do Segurado:</Label>
                            <Input
                                value={form.segurado}
                                onChange={(e) => handleChange('segurado', e.target.value)}
                            />
                        </Field>
                    </FormRow>

                    {/* VEÍCULO */}
                    <PageTitle style={{ fontSize: 22 }}>Veículo</PageTitle>
                    <FormRow>
                        <Field>
                            <Label>Descrição do Veículo:</Label>
                            <Input
                                value={form.veiculo.descricao}
                                onChange={(e) => handleChange('veiculo', 'descricao', e.target.value)}
                            />
                        </Field>
                        <Field>
                            <Label>Ano/Modelo:</Label>
                            <Input
                                value={form.veiculo.anoModelo}
                                onChange={(e) => handleChange('veiculo', 'anoModelo', e.target.value)}
                            />
                        </Field>
                    </FormRow>
                    <FormRow>
                        <Field>
                            <Label>Placa:</Label>
                            <Input
                                value={form.veiculo.placa}
                                onChange={(e) => handleChange('veiculo', 'placa', e.target.value)}
                            />
                        </Field>
                        <Field>
                            <Label>Chassi:</Label>
                            <Input
                                value={form.veiculo.chassi}
                                onChange={(e) => handleChange('veiculo', 'chassi', e.target.value)}
                            />
                        </Field>
                    </FormRow>

                    {/* SEGURADORA */}
                    <PageTitle style={{ fontSize: 22 }}>Seguradora</PageTitle>
                    <FormRow>
                        <Field>
                            <Label>Nome da Seguradora:</Label>
                            <Input
                                value={form.seguradora.nome}
                                onChange={(e) => handleChange('seguradora', 'nome', e.target.value)}
                            />
                        </Field>
                        <Field>
                            <Label>Apolice:</Label>
                            <Input
                                value={form.seguradora.apolice}
                                onChange={(e) => handleChange('seguradora', 'apolice', e.target.value)}
                            />
                        </Field>
                    </FormRow>
                    <FormRow>
                        <Field>
                            <Label>Endoso:</Label>
                            <Input
                                value={form.seguradora.endoso}
                                onChange={(e) => handleChange('seguradora', 'endoso', e.target.value)}
                            />
                        </Field>
                        <Field>
                            <Label>Data do Endosso:</Label>
                            <Input
                                type="date"
                                value={form.seguradora.dataEndosso}
                                onChange={(e) => handleChange('seguradora', 'dataEndosso', e.target.value)}
                            />
                        </Field>
                    </FormRow>

                    {/* VIGÊNCIA */}
                    <PageTitle style={{ fontSize: 22 }}>Vigência do Seguro</PageTitle>
                    <FormRow>
                        <Field>
                            <Label>Início da Vigência:</Label>
                            <Input
                                type="date"
                                value={form.vigencia.inicio}
                                onChange={(e) => handleChange('vigencia', 'inicio', e.target.value)}
                            />
                        </Field>
                        <Field>
                            <Label>Fim da Vigência:</Label>
                            <Input
                                type="date"
                                value={form.vigencia.fim}
                                onChange={(e) => handleChange('vigencia', 'fim', e.target.value)}
                            />
                        </Field>
                    </FormRow>
                    <FormRow>
                        <Field>
                            <Label>Tipo de Cobertura:</Label>
                            <Input
                                value={form.vigencia.cobertura}
                                onChange={(e) => handleChange('vigencia', 'cobertura', e.target.value)}
                            />
                        </Field>
                        <Field>
                            <Label>Item:</Label>
                            <Input
                                value={form.vigencia.item}
                                onChange={(e) => handleChange('vigencia', 'item', e.target.value)}
                            />
                        </Field>
                    </FormRow>

                    {/* IMPORTÂNCIAS */}
                    <PageTitle style={{ fontSize: 22 }}>Importâncias</PageTitle>
                    <FormRow>
                        <Field>
                            <Label>Casco:</Label>
                            <Input
                                value={form.importancias.casco}
                                onChange={(e) => handleChange('importancias', 'casco', e.target.value)}
                            />
                        </Field>
                        <Field>
                            <Label>Franquia:</Label>
                            <Input
                                value={form.importancias.franquia}
                                onChange={(e) => handleChange('importancias', 'franquia', e.target.value)}
                            />
                        </Field>
                    </FormRow>
                    <FormRow>
                        <Field>
                            <Label>Bônus:</Label>
                            <Input
                                value={form.importancias.bonus}
                                onChange={(e) => handleChange('importancias', 'bonus', e.target.value)}
                            />
                        </Field>
                        <Field>
                            <Label>Carroceria:</Label>
                            <Input
                                value={form.importancias.carroceria}
                                onChange={(e) => handleChange('importancias', 'carroceria', e.target.value)}
                            />
                        </Field>
                    </FormRow>
                    <FormRow>
                        <Field>
                            <Label>Franquia 2:</Label>
                            <Input
                                value={form.importancias.franquia2}
                                onChange={(e) => handleChange('importancias', 'franquia2', e.target.value)}
                            />
                        </Field>
                        <Field>
                            <Label>Dan. Materiais:</Label>
                            <Input
                                value={form.importancias.dmateriais}
                                onChange={(e) => handleChange('importancias', 'dmateriais', e.target.value)}
                            />
                        </Field>
                    </FormRow>
                    <FormRow>
                        <Field>
                            <Label>Acessórios:</Label>
                            <Input
                                value={form.importancias.acessorios}
                                onChange={(e) => handleChange('importancias', 'acessorios', e.target.value)}
                            />
                        </Field>
                        <Field>
                            <Label>Assistência 24h:</Label>
                            <Input
                                value={form.importancias.assistencia24h}
                                onChange={(e) => handleChange('importancias', 'assistencia24h', e.target.value)}
                            />
                        </Field>
                    </FormRow>
                    <FormRow>
                        <Field>
                            <Label>Dan. Pessoais:</Label>
                            <Input
                                value={form.importancias.dpessoais}
                                onChange={(e) => handleChange('importancias', 'dpessoais', e.target.value)}
                            />
                        </Field>
                        <Field>
                            <Label>Dan. Materiais (H):</Label>
                            <Input
                                value={form.importancias.dmh}
                                onChange={(e) => handleChange('importancias', 'dmh', e.target.value)}
                            />
                        </Field>
                    </FormRow>
                    <FormRow>
                        <Field>
                            <Label>Acidente Pessoal:</Label>
                            <Input
                                value={form.importancias.appMorte}
                                onChange={(e) => handleChange('importancias', 'appMorte', e.target.value)}
                            />
                        </Field>
                        <Field>
                            <Label>Invalidez:</Label>
                            <Input
                                value={form.importancias.invalidez}
                                onChange={(e) => handleChange('importancias', 'invalidez', e.target.value)}
                            />
                        </Field>
                    </FormRow>
                    <FormRow>
                        <Field>
                            <Label>Outras Importâncias:</Label>
                            <Input
                                value={form.importancias.outras}
                                onChange={(e) => handleChange('importancias', 'outras', e.target.value)}
                            />
                        </Field>
                    </FormRow>

                    {/* PRÊMIOS */}
                    <PageTitle style={{ fontSize: 22 }}>Prêmios</PageTitle>
                    <FormRow>
                        <Field>
                            <Label>Data da Cotação:</Label>
                            <Input
                                type="date"
                                value={form.premios.dataCotacao}
                                onChange={(e) => handleChange('premios', 'dataCotacao', e.target.value)}
                            />
                        </Field>
                        <Field>
                            <Label>Valor do Prêmio:</Label>
                            <Input
                                value={form.premios.valor}
                                onChange={(e) => handleChange('premios', 'valor', e.target.value)}
                            />
                        </Field>
                    </FormRow>
                    <FormRow>
                        <Field>
                            <Label>Forma de Pagamento:</Label>
                            <Input
                                value={form.premios.pagamento}
                                onChange={(e) => handleChange('premios', 'pagamento', e.target.value)}
                            />
                        </Field>
                        <Field>
                            <Label>Número de Parcelas:</Label>
                            <Input
                                type="number"
                                value={form.premios.parcelas}
                                onChange={(e) => handleChange('premios', 'parcelas', e.target.value)}
                            />
                        </Field>
                    </FormRow>
                    <FormRow>
                        <Field>
                            <Label>Prêmio Líquido:</Label>
                            <Input
                                value={form.premios.liquido}
                                onChange={(e) => handleChange('premios', 'liquido', e.target.value)}
                            />
                        </Field>
                        <Field>
                            <Label>Prêmio Total:</Label>
                            <Input
                                value={form.premios.total}
                                onChange={(e) => handleChange('premios', 'total', e.target.value)}
                            />
                        </Field>
                    </FormRow>
                    <FormRow>
                        <Field style={{ flex: 1 }}>
                            <Label>Observações:</Label>
                            <Input
                                value={form.premios.observacoes}
                                onChange={(e) => handleChange('premios', 'observacoes', e.target.value)}
                            />
                        </Field>
                    </FormRow>

                    {/* CARNÊS */}
                    <PageTitle style={{ fontSize: 22 }}>Carnê (Parcelas)</PageTitle>
                    {form.carnes.map((carne, index) => (
                        <FormRow key={index}>
                            <Field>
                                <Label>Vencimento da Parcela {index + 1}:</Label>
                                <Input
                                    type="date"
                                    value={carne.vencimento}
                                    onChange={(e) => handleCarneChange(index, 'vencimento', e.target.value)}
                                />
                            </Field>
                            <Field>
                                <Label>Valor da Parcela {index + 1}:</Label>
                                <Input
                                    value={carne.valor}
                                    onChange={(e) => handleCarneChange(index, 'valor', e.target.value)}
                                />
                            </Field>
                        </FormRow>
                    ))}

                    {/* BOTÃO DE SALVAR */}
                    <ButtonRow>
                        <Button onClick={handleSubmit}>Salvar</Button>
                    </ButtonRow>
                </Panel>
            </Container>
        </>

    );
};

export default CadastroAuto;
