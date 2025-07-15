import { useState } from 'react';
import {
    formatCPF,
    formatRG,
    formatTelefone,
    formatCEP,
    validateEmail
} from '../utils'
import { postSegurado } from '../../../services/SeguradoService';

export const useSegurado = (onSuccess) => {
    const [form, setForm] = useState({
        nome: '',
        datacadastro: '',
        endereco: '',   
        bairro: '',
        cidade: '',
        uf: '',
        cep: '',
        tel1: '',
        tel2: '',
        email: '',
        contato: '',
        tipopessoa: '',
        cpfcnpj: '',
        rg: '',
        datanascimento: '',
        estadocivil: '',
        habilitacao: '',
        observacao: '',
        numero: '',
        complemento: '',
    });

    const [emailError, setEmailError] = useState('');

    const handleChange = (field, value) => {
        let formattedValue = value;

        if (field === 'cpfcnpj') {
            formattedValue = formatCPF(value);
        } else if (field === 'rg') {
            formattedValue = formatRG(value);
        } else if (field === 'cep') {
            formattedValue = formatCEP(value);
        } else if (field === 'tel1' || field === 'tel2') {
            formattedValue = formatTelefone(value);
        }

        setForm(prev => ({ ...prev, [field]: formattedValue }));

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

    const handleSubmitCustom = async () => {
        try {
            const dados = { ...form };

            await postSegurado(dados);
            alert('Segurado cadastrado com sucesso!');

            if (onSuccess) onSuccess();  // chama callback sem argumento

            // limpa o formulário
            setForm({
                nome: '',
                datacadastro: '',
                endereco: '',
                bairro: '',
                cidade: '',
                uf: '',
                cep: '',
                tel1: '',
                tel2: '',
                email: '',
                contato: '',
                tipopessoa: '',
                cpfcnpj: '',
                rg: '',
                datanascimento: '',
                estadocivil: '',
                habilitacao: '',
                observacao: '',
            });

        } catch (error) {
            alert('Erro ao cadastrar segurado.');
            console.error(error);
        }
    };

    return {
        form,
        handleChange,
        handleSubmitCustom,
        handleEmailBlur,
        emailError,
    };
};
