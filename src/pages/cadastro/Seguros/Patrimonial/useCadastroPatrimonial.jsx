import React, { useState } from "react";

export const useCadastroPatrimonial = (onSave) => {
    const [form, setForm] = useState({
        pessoal: {
            nome: '',
            cpf: '',
        },
        imovel: {
            descricao: '',
            tipo: '',
            endereco: '',
            area: '',
        },
        seguradora: {
            nome: '',
            apolice: '',
            endoso: '',
            dataEndosso: '',
        },
        vigencia: {
            inicio: '',
            fim: '',
            cobertura: '',
        },
        valores: {
            avaliacao: '',
            cobertura: '',
        },
        premios: {
            dataCotacao: '',
            valor: '',
            pagamento: '',
            parcelas: '',
            liquido: '',
            total: '',
            observacoes: '',
        },
    });

    const handleChange = (section, field, value) => {
        if (section === 'valores') {
            setForm(prev => ({ ...prev, valores: value }));
        } else if (typeof form[section] === 'object') {
            if (field === 'cpf') {
                value = value.replace(/\D/g, '').length <= 11 ? formatCPF(value) : value;
            }

            setForm(prev => ({
                ...prev,
                [section]: {
                    ...prev[section],
                    [field]: value,
                },
            }));
        }
    };

    const handleSubmit = () => {
        if (onSave) {
            onSave(form);
        } else {
            alert(JSON.stringify(form, null, 2));
        }

        setForm({
            pessoal: {
                nome: '',
                cpf: '',
            },
            imovel: {
                descricao: '',
                tipo: '',
                endereco: '',
                area: '',
            },
            seguradora: {
                nome: '',
                apolice: '',
                endoso: '',
                dataEndosso: '',
            },
            vigencia: {
                inicio: '',
                fim: '',
                cobertura: '',
            },
            valores: {
                avaliacao: '',
                cobertura: '',
            },
            premios: {
                dataCotacao: '',
                valor: '',
                pagamento: '',
                parcelas: '',
                liquido: '',
                total: '',
                observacoes: '',
            },
        });
    };

    return {
        form,
        handleChange,
        handleSubmit,
    };
};
