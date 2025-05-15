import React, { useState } from "react";
import { formatCPF, formatCNPJ } from "../../utils"; // As funções de formatação

export const useCadastroAuto = (onSave) => {
    const [form, setForm] = useState({
        pessoal: {
            nome: '',
            cpfcnpj: '',
        },
        veiculo: {
            descricao: '',
            anoModelo: '',
            placa: '',
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
            item: '',
        },
        importancias: {
            casco: '',
            franquia: '',
            bonus: '',
            carroceria: '',
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
        carnes: [
            { vencimento: '', valor: '', parcelas: 0 }
        ]
    });

    const handleChange = (section, field, value) => {
        if (section === 'carnes') {
            setForm(prev => ({ ...prev, carnes: value }));
        } else if (typeof form[section] === 'object') {
            if (field === 'cpfcnpj') {
                if (value.replace(/\D/g, '').length <= 11) {
                    value = formatCPF(value);
                } else {
                    value = formatCNPJ(value);
                }
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

    const handleAddCarne = () => {
        setForm(prev => ({
            ...prev,
            carnes: [...prev.carnes, { vencimento: '', valor: '' }],
        }));
    };

    const handleCarneChange = (index, field, value) => {
        const updated = [...form.carnes];
        updated[index][field] = value;
        handleChange('carnes', null, updated);
    };

    const handleSubmit = () => {
        if (onSave) {
            onSave(form); // Salva os dados, se a função onSave for fornecida
        } else {
            alert(JSON.stringify(form, null, 2)); // Exibe os dados se onSave não for fornecido
        }

        // Limpa o formulário após salvar
        setForm({
            pessoal: {
                nome: '',
                cpfcnpj: '',
            },
            veiculo: {
                descricao: '',
                anoModelo: '',
                placa: '',
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
                item: '',
            },
            importancias: {
                casco: '',
                franquia: '',
                bonus: '',
                carroceria: '',
                franquia2: '',
                dmateriais: '',
                acessorios: '',
                assistencia24h: '',
                dpessoais: '',
                dmh: '',
                appMorte: '',
                invalidez: '',
                outras: '',
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
            carnes: [
                {
                    vencimento: '',
                    valor: '',
                    parcelas: 0
                }
            ]
        });
    };

    return {
        form,
        handleChange,
        handleCarneChange,
        handleAddCarne,
        handleSubmit,
    };
};

