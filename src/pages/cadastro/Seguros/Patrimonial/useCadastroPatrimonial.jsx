import React, { useState, useEffect } from "react";
import { formatCPF, formatCNPJ, formatCEP } from "../../utils";
import { postPatrimonial } from "../../../../services/PatrimonialService";

export const useCadastroPatrimonial = (onSave) => {
    const [isEditingPrimeiraData, setIsEditingPrimeiraData] = useState(false);

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
            { vencimento: "", valor: "" } // vazio no início, usuário escolhe
        ],
    });

    useEffect(() => {
        if (isEditingPrimeiraData) return;

        const parcelasNum = parseInt(form.premios.parcelas, 10) || 1;
        const valorTotal = parseFloat(form.premios.valor) || 0;
        const valorParcela = (valorTotal / parcelasNum).toFixed(2); // Ex: 2000 / 10 = 200.00
        const primeiraDataStr = form.carnes[0]?.vencimento;

        const isValidDateString = (str) => /^\d{4}-\d{2}-\d{2}$/.test(str);
        if (!primeiraDataStr || !isValidDateString(primeiraDataStr)) return;

        if (parcelasNum <= 1) {
            if (form.carnes.length !== 1 || form.carnes[0].valor !== valorParcela) {
                setForm(prev => ({
                    ...prev,
                    carnes: [{ vencimento: primeiraDataStr, valor: valorParcela }],
                }));
            }
            return;
        }

        const [year, month, day] = primeiraDataStr.split('-').map(Number);
        let dataBase = new Date(year, month - 1, day);

        const novasCarnes = [];

        for (let i = 0; i < parcelasNum; i++) {
            const vencimentoFormatado = formatDateToInput(dataBase);
            novasCarnes.push({
                vencimento: vencimentoFormatado,
                valor: valorParcela,
            });
            dataBase.setMonth(dataBase.getMonth() + 1);
        }

        const isEqual =
            novasCarnes.length === form.carnes.length &&
            novasCarnes.every(
                (carne, i) =>
                    carne.vencimento === form.carnes[i]?.vencimento &&
                    carne.valor === form.carnes[i]?.valor
            );

        if (!isEqual) {
            setForm((prev) => ({ ...prev, carnes: novasCarnes }));
        }
    }, [
        form.premios.parcelas,
        form.premios.valor,
        form.carnes[0]?.vencimento,
        isEditingPrimeiraData,
    ]);

    // Função para formatar a data local para o input
    function formatDateToInput(date) {
        const ano = date.getFullYear();
        const mes = String(date.getMonth() + 1).padStart(2, "0");
        const dia = String(date.getDate()).padStart(2, "0");
        return `${ano}-${mes}-${dia}`;
    }

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

    useEffect(() => {
        if (isEditingPrimeiraData) {
            const timeout = setTimeout(() => {
                setIsEditingPrimeiraData(false);
            }, 500); // meio segundo sem digitar = terminou de editar

            return () => clearTimeout(timeout);
        }
    }, [form.carnes[0]?.vencimento]);

    const handleCarneChange = (index, field, value) => {
        if (index === 0 && field === "vencimento") {
            setIsEditingPrimeiraData(true);
        }

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

        // Atualiza o campo normalmente
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
                    avaliacao: form.valores.avaliacao,
                    cobertura: form.valores.cobertura,
                },
                premios: {
                    dataCotacao: form.premios.dataCotacao,
                    valor: form.premios.valor,
                    pagamento: form.premios.pagamento,
                    parcelas: form.premios.parcelas,
                    liquido: form.premios.liquido,
                    total: form.premios.total,
                    observacoes: form.premios.observacoes,
                },
                carnes: form.carnes,
            };

            const response = await postPatrimonial(payload);

            if (response.status === 200) {
                alert("Cadastro realizado com sucesso!");
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
                    carnes: [
                        { vencimento: "", valor: "" }
                    ],
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
    };
};
