import React, { useState } from 'react';
import { useSegurado } from './useSegurado';
import Header from '../../../components/Header';
import ModalCadastroSugestao from '../components/ModalCadSugestao';
import {
    Container,
    Panel,
    PageTitle,
    FormRow,
    Field,
    Label,
    Input,
    Select,
    Option,
    ButtonRow,
    Button,
} from './styles';

const CadastroSegurado = () => {
    const [modalVisible, setModalVisible] = useState(false);
    const { form, handleChange, handleSubmitCustom } = useSegurado(() => {
        setModalVisible(true);
    });


    return (
        <><Header />
            <Container>
                <Panel>
                    <PageTitle>Cadastro de Segurado</PageTitle>

                    {/* DADOS BÁSICOS */}
                    <FormRow>
                        <Field>
                            <Label>Segurado:</Label>
                            <Input value={form.nome} onChange={e => handleChange('nome', e.target.value)} />
                        </Field>
                        <Field>
                            <Label>Data de Cadastro:</Label>
                            <Input
                                type="date"
                                value={form.datacadastro}
                                onChange={e => handleChange('datacadastro', e.target.value)} />
                        </Field>
                    </FormRow>

                    {/* ENDEREÇO */}
                    <FormRow>
                        <Field>
                            <Label>CEP:</Label>
                            <Input value={form.cep} onChange={e => handleChange('cep', e.target.value)} />
                        </Field>
                        <Field>
                            <Label>Endereço:</Label>
                            <Input value={form.endereco} onChange={e => handleChange('endereco', e.target.value)} />
                        </Field>
                        <Field>
                            <Label>Bairro:</Label>
                            <Input value={form.bairro} onChange={e => handleChange('bairro', e.target.value)} />
                        </Field>
                    </FormRow>
                    <FormRow>
                        <Field>
                            <Label>Cidade:</Label>
                            <Input value={form.cidade} onChange={e => handleChange('cidade', e.target.value)} />
                        </Field>
                        <Field>
                            <Label>UF:</Label>
                            <Input value={form.uf} onChange={e => handleChange('uf', e.target.value)} />
                        </Field>
                    </FormRow>

                    {/* CONTATO */}
                    <FormRow>
                        <Field>
                            <Label>Telefone 1:</Label>
                            <Input value={form.tel1} onChange={e => handleChange('tel1', e.target.value)} />
                        </Field>
                        <Field>
                            <Label>Telefone 2:</Label>
                            <Input value={form.tel2} onChange={e => handleChange('tel2', e.target.value)} />
                        </Field>
                    </FormRow>
                    <FormRow>
                        <Field>
                            <Label>E-mail:</Label>
                            <Input value={form.email} onChange={e => handleChange('email', e.target.value)} />
                        </Field>
                        <Field>
                            <Label>Contato:</Label>
                            <Input value={form.contato} onChange={e => handleChange('contato', e.target.value)} />
                        </Field>
                    </FormRow>

                    {/* DOCUMENTOS */}
                    <FormRow>
                        <Field>
                            <Label>Tipo Pessoa:</Label>
                            <Select
                                value={form.tipopessoa}
                                onChange={e => handleChange('tipopessoa', e.target.value)}
                            >
                                <Option value="" disabled hidden>Selecione</Option>
                                <Option value="Física">Física</Option>
                                <Option value="Jurídica">Jurídica</Option>
                            </Select>
                        </Field>
                        <Field>
                            <Label>CPF/CNPJ:</Label>
                            <Input value={form.cpfcnpj} onChange={e => handleChange('cpfcnpj', e.target.value)} />
                        </Field>
                        <Field>
                            <Label>RG:</Label>
                            <Input value={form.rg} onChange={e => handleChange('rg', e.target.value)} />
                        </Field>
                    </FormRow>

                    {/* PESSOAIS */}
                    <FormRow>
                        <Field>
                            <Label>Data Nascimento:</Label>
                            <Input type="date" value={form.datanascimento} onChange={e => handleChange('datanascimento', e.target.value)} />
                        </Field>
                        <Field>
                            <Label>Estado Civil:</Label>
                            <Select
                                value={form.estadocivil}
                                onChange={e => handleChange('estadocivil', e.target.value)}
                            >
                                <Option value="">Selecione</Option>
                                <Option value="solteiro">Solteiro(a)</Option>
                                <Option value="casado">Casado(a)</Option>
                                <Option value="divorciado">Divorciado(a)</Option>
                                <Option value="viuvo">Viúvo(a)</Option>
                                <Option value="uniaoEstavel">União Estável</Option>
                            </Select>
                        </Field>
                        <Field>
                            <Label>1ª Habilitação:</Label>
                            <Input type="date" value={form.habilitacao} onChange={e => handleChange('habilitacao', e.target.value)} />
                        </Field>
                    </FormRow>

                    {/* OBSERVAÇÕES */}
                    <FormRow>
                        <Field>
                            <Label>Observações:</Label>
                            <Input
                                value={form.observacao}
                                onChange={e => handleChange('observacao', e.target.value)}
                                style={{ width: '100%' }} />
                        </Field>
                    </FormRow>

                    <ButtonRow>
                        <Button onClick={handleSubmitCustom}>Salvar</Button>
                    </ButtonRow>
                </Panel>
            </Container>
            {modalVisible && (
                <ModalCadastroSugestao onClose={() => setModalVisible(false)} />
            )}
        </>
    );
};

export default CadastroSegurado;
