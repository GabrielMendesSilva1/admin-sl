export const getAutomovelByCpfCnpj = (cpfCnpj) => {
    const database = {
      '123.456.789-00': { // João da Silva
        segurado: "João da Silva",
        cpfCnpj:"123.456.789-00",
        veiculo: {
          descricao: "FIAT PALIO FIRE 1.0 FLEX ECONOMY",
          anoModelo: "2013/2014",
          placa: "ABC-1234"
        },
        seguradora: {
          nome: "Azul Seguros",
          apolice: "AUTO-001",
          endoso: "",
          dataEndosso: ""
        },
        vigencia: {
          inicio: "01/01/2025",
          fim: "01/01/2026",
          cobertura: "COMPREENSIVA",
          item: "01"
        },
        importancias: {
          casco: "100%",
          franquia: "2.116,00",
          bonus: "10",
          carroceria: "0,00",
          franquia2: "0,00",
          dmateriais: "100.000,00",
          acessorios: "0,00",
          assistencia24h: "500KM",
          dpessoais: "100.000,00",
          dmh: "5.000,00",
          appMorte: "5.000,00",
          invalidez: "5.000,00",
          outras: "VIDROS COMPLETOS//15 DIAS"
        },
        premios: {
          dataCotacao: "06/02/2025",
          valor: "175,16",
          pagamento: "CARTAO DE CREDITO",
          parcelas: 6,
          liquido: "978,39",
          total: "1050,60",
          observacoes: "14/02 - Apolice por Email de Kycia"
        },
        carnes: [
          { vencimento: "06/03/2025", valor: "175,08" },
          { vencimento: "06/04/2025", valor: "175,08" },
          { vencimento: "06/05/2025", valor: "175,08" }
        ]
      },
      '987.654.321-00': {
        segurado: "Ana Pereira",
        veiculo: {
          descricao: "FORD KA SE 1.0 FLEX",
          anoModelo: "2019/2019",
          placa: "XYZ-5678"
        },
        seguradora: {
          nome: "Porto Seguro",
          apolice: "AUTO-002"
        },
        vigencia: {
          inicio: "15/03/2025",
          fim: "15/03/2026",
          cobertura: "COMPREENSIVA",
          item: "01"
        },
        importancias: {
          casco: "90%",
          franquia: "1.800,00",
          bonus: "8",
          assistencia24h: "300KM"
        },
        premios: {
          dataCotacao: "10/02/2025",
          valor: "210,45",
          pagamento: "BOLETO",
          parcelas: 5,
          liquido: "980,00",
          total: "1052,25"
        },
        carnes: [
          { vencimento: "15/04/2025", valor: "210,45" },
          { vencimento: "15/05/2025", valor: "210,45" }
        ]
      }
    };
  
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve(database[cpfCnpj] || null);
      }, 300);
    });
  };
  