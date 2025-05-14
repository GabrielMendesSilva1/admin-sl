import { useState } from 'react';
import {
    formatCNPJ,
    formatTelefone,
    validateEmail,
    formatCEP
} from '../utils';

export const useCadastroSeguradora = (onSave) => {
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
    const [loadingCep, setLoadingCep] = useState(false); // Estado para indicar que está buscando o CEP
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

        // Quando o campo for CEP e tiver 8 dígitos, chama o ViaCEP
        if (field === 'cep' && value.replace(/\D/g, '').length === 8) {
            setLoadingCep(true); // Inicia o carregamento
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
                    setLoadingCep(false); // Finaliza o carregamento
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
        if (onSave) onSave(form); // Passa para a função onSave, caso exista.
        else alert('Cadastro enviado: ' + JSON.stringify(form, null, 2));

        // Limpa o formulário após o envio
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
    };

    return {
        form,
        handleChange,
        handleSubmit,
        handleEmailBlur,
        emailError,
        loadingCep, // Estado que indica o carregamento
        cepError,   // Para exibir erros no CEP
    };
};
