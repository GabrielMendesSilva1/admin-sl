// cadastro/Segurado/useCadastroSegurado.js

import { useState } from 'react';
import {
    formatCPF,
    formatRG,
    formatTelefone,
    formatCEP,
    validateEmail
} from '../utils';

export const useSegurado = (onSave) => {
    const [form, setForm] = useState({
        nome: '',
        dataCadastro: '',
        endereco: '',
        bairro: '',
        cidade: '',
        uf: '',
        cep: '',
        tel1: '',
        tel2: '',
        email: '',
        contato: '',
        tipoPessoa: 'Física',
        cpfCnpj: '',
        rg: '',
        dataNascimento: '',
        estadoCivil: '',
        habilitacao: '',
        observacao: '',
    });

    const [emailError, setEmailError] = useState('');

    const handleChange = (field, value) => {
        let formattedValue = value;

        // Formatando os campos de acordo com o tipo
        if (field === 'cpfCnpj') {
            formattedValue = formatCPF(value);
        } else if (field === 'rg') {
            formattedValue = formatRG(value);
        } else if (field === 'cep') {
            formattedValue = formatCEP(value);
        } else if (field === 'tel1' || field === 'tel2') {
            formattedValue = formatTelefone(value);
        }

        // Atualiza o estado do formulário
        setForm(prev => ({ ...prev, [field]: formattedValue }));

        // Quando o campo for CEP e tiver 8 dígitos, chama o ViaCEP
        if (field === 'cep' && value.replace(/\D/g, '').length === 8) {
            fetch(`https://viacep.com.br/ws/${value}/json/`)
                .then(res => res.json())
                .then(data => {
                    if (!data.erro) {
                        setForm(prev => ({
                            ...prev,
                            endereco: data.logradouro || '',
                            bairro: data.bairro || '',
                            cidade: data.localidade || '',
                            uf: data.uf || '',
                        }));
                    }
                })
                .catch(err => {
                    console.error('Erro ao buscar CEP:', err);
                });
        }
    };

    const handleEmailBlur = () => {
        if (!validateEmail(form.email)) {
            setEmailError('E-mail inválido!');
        } else {
            setEmailError('');
        }
    };

    const handleSubmit = () => {
        if (onSave) onSave(form); // Chama a função de salvar, caso exista.
        else alert('Cadastro enviado: ' + JSON.stringify(form, null, 2));

        // Limpa o formulário após o envio
        setForm({
            nome: '',
            dataCadastro: '',
            endereco: '',
            bairro: '',
            cidade: '',
            uf: '',
            cep: '',
            tel1: '',
            tel2: '',
            email: '',
            contato: '',
            tipoPessoa: 'Física',
            cpfCnpj: '',
            rg: '',
            dataNascimento: '',
            estadoCivil: '',
            habilitacao: '',
            observacao: '',
        });
    };

    return {
        form,
        handleChange,
        handleSubmit,
        handleEmailBlur,
        emailError,
    };
};
