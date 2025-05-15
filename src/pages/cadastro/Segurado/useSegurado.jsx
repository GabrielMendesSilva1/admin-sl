import { useState } from 'react';
import {
    formatCPF,
    formatRG,
    formatTelefone,
    formatCEP,
    validateEmail
} from '../utils';
import { postSegurado } from '../../../services/SeguradoService';

export const useSegurado = (onSave) => {
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
    });

    const [emailError, setEmailError] = useState('');

    const handleChange = (field, value) => {
        let formattedValue = value;

        // Formatando os campos de acordo com o tipo
        if (field === 'cpfcnpj') {
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

    const handleSubmit = async () => {
        try {
            const dados = {
                ...form
            };

            await postSegurado(dados);
            alert('Segurado cadastrado com sucesso!');

            // Limpa o formulário após cadastro
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
                tipopessoa: 'Física',
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
        handleSubmit,
        handleEmailBlur,
        emailError,
    };
};
