import { useState } from 'react';
import {
    formatCNPJ,
    formatTelefone,
    validateEmail,
    formatCEP
} from '../utils';

export const useCadastroSeguradora = () => {
    const [form, setForm] = useState({
        nome: '',
        endereco: '',
        bairro: '',
        cidade: '',
        uf: '',
        cep: '',
        fone1: '',
        fone2: '',
        contato: '',
        cgc: '',
        email: '',
    });

    const [emailError, setEmailError] = useState('');
    const [loadingCep, setLoadingCep] = useState(false);
    const [cepError, setCepError] = useState('');

    const handleChange = (field, value) => {
        let formattedValue = value;

        if (field === 'cgc') {
            formattedValue = formatCNPJ(value);
        } else if (field === 'fone1' || field === 'fone2') {
            formattedValue = formatTelefone(value);
        } else if (field === 'cep') {
            formattedValue = formatCEP(value);
        }

        setForm(prev => ({ ...prev, [field]: formattedValue }));

        if (field === 'cep' && value.replace(/\D/g, '').length === 8) {
            setLoadingCep(true);
            setCepError('');
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
                    } else {
                        setCepError('CEP não encontrado!');
                    }
                })
                .catch(err => {
                    setCepError('Erro ao buscar CEP');
                    console.error('Erro ao buscar CEP:', err);
                })
                .finally(() => {
                    setLoadingCep(false);
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
            await postSeguradora(form);
            alert('Seguradora cadastrada com sucesso!');
            setForm({
                nome: '',
                endereco: '',
                bairro: '',
                cidade: '',
                uf: '',
                cep: '',
                fone1: '',
                fone2: '',
                contato: '',
                cgc: '',
                email: '',
            });
        } catch (error) {
            console.error('Erro ao cadastrar seguradora:', error.message);
            alert('Erro ao cadastrar seguradora.');
        }
    };

    return {
        form,
        handleChange,
        handleSubmit,
        handleEmailBlur,
        emailError,
        loadingCep,
        cepError,
    };
};
