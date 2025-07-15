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
import { formatCurrency, parseCurrency } from "../../utils";

const CadastroAuto = () => {
    const {
        form,
        handleChange,
        handleCarneChange,
        handleAddCarne,
        handleSubmit,
        handleSetParcelas
    } = useCadastroAuto();

    return (
        <>
            <Header />
            <Container>
                <Panel>
                    <PageTitle>Cadastro de Seguro Auto</PageTitle>
                    <form onSubmit={e => {
                        e.preventDefault();
                        handleSubmitCustom();
                    }}>
                        {/* DADOS DO SEGURADO */}
                        <FormRow>
                            <Field>
                                <Label>CPF/CNPJ do Segurado:</Label>
                                <Input
                                    value={form.pessoal.cpfcnpj}
                                    onChange={(e) => handleChange('pessoal', 'cpfcnpj', e.target.value)}
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
                                <Label>Corretora:</Label>
                                <Input
                                    value={form.seguradora.corretora}
                                    onChange={(e) => handleChange('seguradora', 'corretora', e.target.value)}
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
                                <Label>Franquia:</Label>
                                <Input
                                    value={formatCurrency(form.importancias.franquia)}
                                    onChange={(e) =>
                                        handleChange('importancias', 'franquia', parseCurrency(e.target.value))
                                    }
                                />
                            </Field>
                        </FormRow>

                        <FormRow>
                            <Field>
                                <Label>Carroceria:</Label>
                                <Input
                                    value={formatCurrency(form.importancias.carroceria)}
                                    onChange={(e) =>
                                        handleChange('importancias', 'carroceria', parseCurrency(e.target.value))
                                    }
                                />
                            </Field>
                            <Field>
                                <Label>Franquia Carroceria:</Label>
                                <Input
                                    value={formatCurrency(form.importancias.franquia2)}
                                    onChange={(e) =>
                                        handleChange('importancias', 'franquia2', parseCurrency(e.target.value))
                                    }
                                />
                            </Field>
                        </FormRow>

                        <FormRow>
                            <Field>
                                <Label>RCF MORAIS:</Label>
                                <Input
                                    value={formatCurrency(form.importancias.dmateriais)}
                                    onChange={(e) =>
                                        handleChange('importancias', 'dmateriais', parseCurrency(e.target.value))
                                    }
                                />
                            </Field>
                            <Field>
                                <Label>RCF MATERIAIS:</Label>
                                <Input
                                    value={formatCurrency(form.importancias.dpessoais)}
                                    onChange={(e) =>
                                        handleChange('importancias', 'dpessoais', parseCurrency(e.target.value))
                                    }
                                />
                            </Field>
                        </FormRow>

                        <FormRow>
                            <Field>
                                <Label>RCF CORPORAIS:</Label>
                                <Input
                                    value={formatCurrency(form.importancias.dmh)}
                                    onChange={(e) =>
                                        handleChange('importancias', 'dmh', parseCurrency(e.target.value))
                                    }
                                />
                            </Field>
                            <Field>
                                <Label>Bônus:</Label>
                                <Input
                                    value={formatCurrency(form.importancias.bonus)}
                                    onChange={(e) =>
                                        handleChange('importancias', 'bonus', parseCurrency(e.target.value))
                                    }
                                />
                            </Field>
                        </FormRow>

                        <FormRow>
                            <Field>
                                <Label>Acidente Pessoal:</Label>
                                <Input
                                    value={formatCurrency(form.importancias.appMorte)}
                                    onChange={(e) =>
                                        handleChange('importancias', 'appMorte', parseCurrency(e.target.value))
                                    }
                                />
                            </Field>
                            <Field>
                                <Label>APP INVALIDEZ:</Label>
                                <Input
                                    value={formatCurrency(form.importancias.invalidez)}
                                    onChange={(e) =>
                                        handleChange('importancias', 'invalidez', parseCurrency(e.target.value))
                                    }
                                />
                            </Field>
                        </FormRow>

                        <FormRow>
                            <Field>
                                <Label>Martelinho:</Label>
                                <Input
                                    value={formatCurrency(form.importancias.martelinho)}
                                    onChange={(e) =>
                                        handleChange('importancias', 'martelinho', parseCurrency(e.target.value))
                                    }
                                />
                            </Field>
                            <Field>
                                <Label>Pequenos Reparos:</Label>
                                <Input
                                    value={formatCurrency(form.importancias.pequenosReparos)}
                                    onChange={(e) =>
                                        handleChange('importancias', 'pequenosReparos', parseCurrency(e.target.value))
                                    }
                                />
                            </Field>
                        </FormRow>

                        <FormRow>
                            <Field>
                                <Label>Pneu:</Label>
                                <Input
                                    value={formatCurrency(form.importancias.pneu)}
                                    onChange={(e) =>
                                        handleChange('importancias', 'pneu', parseCurrency(e.target.value))
                                    }
                                />
                            </Field>
                            <Field>
                                <Label>Rodas:</Label>
                                <Input
                                    value={formatCurrency(form.importancias.rodas)}
                                    onChange={(e) =>
                                        handleChange('importancias', 'rodas', parseCurrency(e.target.value))
                                    }
                                />
                            </Field>
                        </FormRow>

                        <FormRow>
                            <Field>
                                <Label>Outras Importâncias:</Label>
                                <Input
                                    value={formatCurrency(form.importancias.outras)}
                                    onChange={(e) =>
                                        handleChange('importancias', 'outras', parseCurrency(e.target.value))
                                    }
                                />
                            </Field>
                            <Field>
                                <Label>Acessórios:</Label>
                                <Input
                                    value={formatCurrency(form.importancias.acessorios)}
                                    onChange={(e) =>
                                        handleChange('importancias', 'acessorios', parseCurrency(e.target.value))
                                    }
                                />
                            </Field>
                        </FormRow>

                        {/* PRÊMIOS */}
                        <PageTitle style={{ fontSize: 22 }}>Prêmios</PageTitle>
                        <FormRow>
                            <Field>
                                <Label>Valor do Prêmio:</Label>
                                <Input
                                    value={formatCurrency(form.premios.valor)}
                                    onChange={(e) =>
                                        handleChange('premios', 'valor', parseCurrency(e.target.value))
                                    }
                                />
                            </Field>
                        </FormRow>

                        <FormRow>
                            <Field>
                                <Label>Prêmio Líquido:</Label>
                                <Input
                                    value={formatCurrency(form.premios.liquido)}
                                    onChange={(e) =>
                                        handleChange('premios', 'liquido', parseCurrency(e.target.value))
                                    }
                                />
                            </Field>
                            <Field>
                                <Label>Prêmio Total:</Label>
                                <Input
                                    value={formatCurrency(form.premios.total)}
                                    onChange={(e) =>
                                        handleChange('premios', 'total', parseCurrency(e.target.value))
                                    }
                                />
                            </Field>
                            <Field>
                                <Label>Forma de Pagamento:</Label>
                                <Input
                                    value={form.premios.pagamento}
                                    onChange={(e) =>
                                        handleChange('premios', 'pagamento', (e.target.value))
                                    }
                                />
                            </Field>
                            <Field>
                                <Label>Parcelas:</Label>
                                <Input
                                    type="number"
                                    min="1"
                                    value={form.premios.parcelas || ''}
                                    onChange={(e) => handleSetParcelas(Number(e.target.value))}
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
                                        value={formatCurrency(carne.valor)}
                                        onChange={(e) =>
                                            handleCarneChange(index, 'valor', parseCurrency(e.target.value))
                                        }
                                    />
                                </Field>
                            </FormRow>
                        ))}
                        {/* BOTÃO DE SALVAR */}
                        <ButtonRow>
                            <Button onClick={handleSubmit}>Salvar</Button>
                        </ButtonRow>
                    </form>
                </Panel>
            </Container>
        </>

    );
};

export default CadastroAuto;
