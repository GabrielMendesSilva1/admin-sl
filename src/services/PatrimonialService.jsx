export const getPatrimonialByCpfCnpj = (cpfCnpj) => {
    const database = {
      '123.456.789-00': {
        seguradora: {
          nome: "Tokio Marine",
          apolice: "PAT-001",
          endoso: "END-123",
          vigencia: {
            inicio: "01/02/2025",
            fim: "01/02/2026"
          },
          local: {
            bairro: "Centro",
            cidade: "São Paulo"
          },
          item: "01",
          atividade: "Comércio Varejista"
        },
        importancias: [
          {
            cobertura: "Incêndio",
            is: "150.000,00",
            franquia: "5.000,00"
          },
          {
            cobertura: "Roubo",
            is: "50.000,00",
            franquia: "2.000,00"
          }
        ],
        premios: {
          indexador: "IPCA",
          dataCotacao: "05/01/2025",
          valor: "300,00",
          pagamento: "Boleto",
          parcelas: 4,
          liquido: "1.200,00",
          total: "1.300,00",
          observacoes: "Emitido com base na vistoria de 2025"
        },
        carnes: [
          { vencimento1: "05/02/2025", parcela1: "325,00", vencimento2: "05/03/2025", parcela2: "325,00" },
          { vencimento1: "05/04/2025", parcela1: "325,00", vencimento2: "05/05/2025", parcela2: "325,00" }
        ]
      }
    };
  
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve(database[cpfCnpj] || null);
      }, 300);
    });
  };
  