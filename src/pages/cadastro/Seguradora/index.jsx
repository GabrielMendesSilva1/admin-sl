import React from 'react';
import { useCadastroSeguradora } from './useCadastroSeguradora';
import Header from '../../../components/Header';
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

const CadastroSeguradora = () => {
    const {
        form,
        handleChange,
        handleSubmit,
        handleEmailBlur,
        emailError,
        loadingCep,
        cepError
    } = useCadastroSeguradora();

    return (
        <>
            <Header />
            <Container>
                <Panel>
                    <PageTitle>Cadastro de Seguradora</PageTitle>

                    {/* DADOS BÁSICOS */}
                    <FormRow>
                        <Field>
                            <Label>Seguradora:</Label>
                            <Input value={form.nome} onChange={e => handleChange('nome', e.target.value)} />
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
                            <Input value={form.fone1} onChange={e => handleChange('fone1', e.target.value)} />
                        </Field>
                        <Field>
                            <Label>Telefone 2:</Label>
                            <Input value={form.fone2} onChange={e => handleChange('fone2', e.target.value)} />
                        </Field>
                    </FormRow>
                    <FormRow>
                        <Field>
                            <Label>Contato:</Label>
                            <Input value={form.contato} onChange={e => handleChange('contato', e.target.value)} />
                        </Field>
                    </FormRow>

                    {/* DOCUMENTOS */}
                    <FormRow>
                        <Field>
                            <Label>CNPJ:</Label>
                            <Input value={form.cgc} onChange={e => handleChange('cgc', e.target.value)} />
                        </Field>
                    </FormRow>

                    {/* E-MAIL */}
                    <FormRow>
                        <Field>
                            <Label>E-mail:</Label>
                            <Input
                                value={form.email}
                                onChange={e => handleChange('email', e.target.value)}
                                onBlur={handleEmailBlur}
                            />
                            {emailError && <div style={{ color: 'red' }}>{emailError}</div>}
                        </Field>
                    </FormRow>

                    <ButtonRow>
                        <Button onClick={handleSubmit}>Salvar</Button>
                    </ButtonRow>
                </Panel>
            </Container>
        </>
    );
};

export default CadastroSeguradora;