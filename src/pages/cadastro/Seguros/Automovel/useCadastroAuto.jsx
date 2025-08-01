import React, { useState, useEffect } from "react";
import { formatCPF, formatCNPJ } from "../../utils"; // As funções de formatação
import { postAutomovel } from "../../../../services/AutomovelService";
import { getSeguradoras } from '../../../../services/SeguradoraService';


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
            corretora: '',
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
            martelinho: '',
            pneu: '',
            rodas: '',
            pequenosReparos: '',
            franquia2: '',
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
                if (value.replace(/\D/g, '').length) {
                    value = formatCPF(value);
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

    const handleSubmit = async () => {
        const cpfcnpj = form?.pessoal?.cpfcnpj?.trim();

        if (!cpfcnpj) {
            alert('Informe o CPF ou CNPJ do segurado antes de salvar.');
            return;
        }

        const dadosParaSalvar = {
            cpfcnpj: form.pessoal.cpfcnpj,
            segurado: form.pessoal.nome || '',
            descricao: form.veiculo.descricao,
            anomodelo: form.veiculo.anoModelo,
            placa: form.veiculo.placa,
            chassi: form.veiculo.chassi,
            nomeseguradora: form.seguradora.nome,
            corretora: form.seguradora.corretora,
            apolice: form.seguradora.apolice,
            endoso: form.seguradora.endoso,
            dataendosso: form.seguradora.dataEndosso,
            vigenciainicio: form.vigencia.inicio,
            vigenciafim: form.vigencia.fim,
            cobertura: form.vigencia.cobertura,
            item: form.vigencia.item,
            importancias: form.importancias, // deve conter todos os campos esperados
            premios: form.premios,
            carnes: form.carnes,
        };

        try {
            await postAutomovel(dadosParaSalvar);
            alert('Cadastro realizado com sucesso!');

            // Reset do form aqui (opcional: extraia para uma função externa)
            setForm({
                pessoal: { nome: '', cpfcnpj: '' },
                veiculo: { descricao: '', anoModelo: '', placa: '', chassi: '' },
                seguradora: {
                    nome: '', apolice: '', endoso: '', dataEndosso: '', corretora: '',
                },
                vigencia: {
                    inicio: '', fim: '', cobertura: '', item: '',
                },
                importancias: {
                    casco: '', franquia: '', bonus: '', carroceria: '',
                    franquia2: '', dmateriais: '', acessorios: '',
                    assistencia24h: '', dpessoais: '', dmh: '',
                    appMorte: '', invalidez: '', outras: '',
                },
                premios: {
                    dataCotacao: '', valor: '', pagamento: '', parcelas: '',
                    liquido: '', total: '', observacoes: '',
                },
                carnes: [
                    { vencimento: '', valor: '', parcelas: 0 }
                ]
            });
        } catch (error) {
            console.error(error);
            alert('Erro ao cadastrar seguro automotivo. Verifique os dados e tente novamente.');
        }
    };

    const handleSetParcelas = (quantidade) => {
        const novasParcelas = Array.from({ length: quantidade }, () => ({
            vencimento: '',
            valor: 0,
        }));
        setForm(prev => ({
            ...prev,
            premios: {
                ...prev.premios,
                parcelas: quantidade,
            },
            carnes: novasParcelas,
        }));
    };

    const [seguradoras, setSeguradoras] = useState([]);

    useEffect(() => {
        async function fetchData() {
            try {
                const data = await getSeguradoras();
                setSeguradoras(data);
            } catch (err) {
                console.error(err);
            }
        }

        fetchData();
    }, []);


    return {
        form,
        handleChange,
        handleCarneChange,
        handleAddCarne,
        handleSubmit,
        handleSetParcelas,
        seguradoras, // <-- Faltava isso!
    };
};

