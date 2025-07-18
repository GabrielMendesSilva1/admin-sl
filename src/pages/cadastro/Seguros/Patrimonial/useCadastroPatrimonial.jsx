import React, { useState, useEffect } from "react";
import { formatCPF, formatCNPJ, formatCEP } from "../../utils";
import { postPatrimonial } from "../../../../services/PatrimonialService";
import { getSeguradoras } from '../../../../services/SeguradoraService';

export const useCadastroPatrimonial = (onSave) => {
    const [isEditingPrimeiraData, setIsEditingPrimeiraData] = useState(false);

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

    const [form, setForm] = useState({
        pessoal: {
            nome: "",
            cpf: "",
            cpfcnpj: "",
        },
        imovel: {
            cep: "",
            descricao: "",
            tipo: "",
            endereco: "",
            area: "",
            bairro: "",
            cidade: "",
        },
        seguradora: {
            nome: "",
            apolice: "",
            endoso: "",
            dataEndosso: "",
        },
        vigencia: {
            inicio: "",
            fim: "",
            cobertura: "",
        },
        valores: {
            avaliacao: "",
            cobertura: "",
        },
        premios: {
            dataCotacao: "",
            valor: "",
            pagamento: "",
            parcelas: 1,
            liquido: "",
            total: "",
            observacoes: "",
        },
        carnes: [
            { vencimento: "", valor: "" }
        ],
    });

    // Remove completamente o efeito que recalculava parcelas automaticamente
    // (Aqui não precisa mais desse useEffect)

    const handleSetParcelas = (quantidade) => {
        const novasParcelas = Array.from({ length: quantidade }, () => ({
            vencimento: '',
            valor: '',
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

    const handleCarneChange = (index, field, value) => {
        setForm((prev) => {
            const novasCarnes = [...prev.carnes];
            novasCarnes[index][field] = value;
            return { ...prev, carnes: novasCarnes };
        });
    };

    const handleChange = (section, field, value) => {
        if (section === "pessoal" && field === "cpf") {
            value = formatCPF(value);
        }

        if (section === "pessoal" && field === "cpfcnpj") {
            const digits = value.replace(/\D/g, "");
            if (digits.length <= 11) {
                value = formatCPF(digits);
            } else if (digits.length <= 14) {
                value = formatCNPJ(digits);
            }
        }

        if (section === "imovel" && field === "cep") {
            value = formatCEP(value);
            setForm((prev) => ({
                ...prev,
                imovel: {
                    ...prev.imovel,
                    cep: value,
                },
            }));

            const cleaned = value.replace(/\D/g, "");
            if (cleaned.length === 8) {
                fetch(`https://viacep.com.br/ws/${cleaned}/json/`)
                    .then((res) => res.json())
                    .then((data) => {
                        if (!data.erro) {
                            setForm((prev) => ({
                                ...prev,
                                imovel: {
                                    ...prev.imovel,
                                    endereco: data.logradouro,
                                    bairro: data.bairro,
                                    cidade: data.localidade,
                                },
                            }));
                        }
                    });
            }
            return;
        }

        if (typeof form[section] === "object") {
            setForm((prev) => ({
                ...prev,
                [section]: {
                    ...prev[section],
                    [field]: value,
                },
            }));
        }
    };

    const handleSubmit = async () => {
        try {
            const payload = {
                cpfcnpj: form.pessoal.cpfcnpj,
                nomeseguradora: form.seguradora.nome,
                apolice: form.seguradora.apolice,
                endoso: form.seguradora.endoso,
                vigenciainicio: form.vigencia.inicio,
                vigenciafim: form.vigencia.fim,
                bairro: form.imovel.bairro,
                cidade: form.imovel.cidade,
                item: form.imovel.tipo,
                atividade: form.imovel.descricao,
                importancias: {
                    avaliacao: Number(form.valores.avaliacao) || 0,
                    cobertura: Number(form.valores.cobertura) || 0,
                },
                premios: {
                    dataCotacao: form.premios.dataCotacao,
                    valor: Number(form.premios.valor) || 0,
                    pagamento: form.premios.pagamento,
                    parcelas: Number(form.premios.parcelas) || 1,
                    liquido: Number(form.premios.liquido) || 0,
                    total: Number(form.premios.total) || 0,
                    observacoes: form.premios.observacoes,
                },
                carnes: form.carnes.map((carne) => ({
                    vencimento: carne.vencimento,
                    valor: Number(carne.valor) || 0,
                })),
            };

            const response = await postPatrimonial(payload);

            if (response.status === 200) {
                alert("Cadastro realizado com sucesso!");
                // reset do form...
                setForm({
                    pessoal: {
                        nome: "",
                        cpf: "",
                        cpfcnpj: "",
                    },
                    imovel: {
                        cep: "",
                        descricao: "",
                        tipo: "",
                        endereco: "",
                        area: "",
                        bairro: "",
                        cidade: "",
                    },
                    seguradora: {
                        nome: "",
                        apolice: "",
                        endoso: "",
                        dataEndosso: "",
                    },
                    vigencia: {
                        inicio: "",
                        fim: "",
                        cobertura: "",
                    },
                    valores: {
                        avaliacao: "",
                        cobertura: "",
                    },
                    premios: {
                        dataCotacao: "",
                        valor: "",
                        pagamento: "",
                        parcelas: 1,
                        liquido: "",
                        total: "",
                        observacoes: "",
                    },
                    carnes: [{ vencimento: "", valor: "" }],
                });
            } else {
                alert("Erro ao salvar. Verifique os dados e tente novamente.");
            }
        } catch (err) {
            console.error(err);
            alert("Erro inesperado no cadastro.");
        }
    };

    return {
        form,
        handleChange,
        handleSubmit,
        handleCarneChange,
        handleSetParcelas,
        seguradoras,
    };
};
