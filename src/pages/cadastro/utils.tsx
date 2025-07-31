import React from "react";

// Função de formatação de RG
export const formatRG = (rg) => {
    return rg.replace(/\D/g, '')
             .replace(/(\d{2})(\d)/, '$1.$2')
             .replace(/(\d{3})(\d)/, '$1.$2')
             .replace(/(\d{3})(\d{1,2})$/, '$1-$2');
};

// Função de formatação de telefone
export const formatTelefone = (tel) => {
    return tel.replace(/\D/g, '')
              .replace(/^(\d{2})(\d{5})(\d{4})$/, '($1) $2-$3');
};
// Exemplo simples de formatDateBR:
export function formatDateBR(dateStr) {
  if (!dateStr) return "";
  const [yyyy, mm, dd] = dateStr.split("-");
  return `${dd}/${mm}/${yyyy}`;
}

// Função de formatação de CEP
export const formatCEP = (cep) => {
    return cep.replace(/\D/g, '')
              .replace(/^(\d{5})(\d{3})$/, '$1-$2');
};

// Função de validação de e-mail
export const validateEmail = (email) => {
    const re = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    return re.test(String(email).toLowerCase());
};

// Função de validação de CNPJ
export function formatCPF(value) {
    value = value.replace(/\D/g, '');
    return value
        .replace(/(\d{3})(\d)/, '$1.$2')
        .replace(/(\d{3})(\d)/, '$1.$2')
        .replace(/(\d{3})(\d{1,2})$/, '$1-$2');
}

export function formatCNPJ(value) {
    value = value.replace(/\D/g, '');
    return value
        .replace(/^(\d{2})(\d)/, '$1.$2')
        .replace(/^(\d{2})\.(\d{3})(\d)/, '$1.$2.$3')
        .replace(/\.(\d{3})(\d)/, '.$1/$2')
        .replace(/(\d{4})(\d)/, '$1-$2');
}

// utils/formatCurrency.js
export const formatCurrency = (value) => {
    if (value === '' || value == null) return '';
    const number = Number(value.toString().replace(/\D/g, '')) / 100;
    return number.toLocaleString('pt-BR', {
      style: 'currency',
      currency: 'BRL',
    });
  };
  
  export const parseCurrency = (formattedValue) => {
    return formattedValue.replace(/\D/g, '');
  };
  
  export function formatCpfCnpj(valor) {
    if (!valor) return '';
  
    const digits = valor.replace(/\D/g, ''); // Remove tudo que não for número
  
    if (digits.length === 11) {
      // Formata como CPF
      return digits.replace(/(\d{3})(\d{3})(\d{3})(\d{2})/, '$1.$2.$3-$4');
    }
  
    if (digits.length === 14) {
      // Formata como CNPJ
      return digits.replace(/(\d{2})(\d{3})(\d{3})(\d{4})(\d{2})/, '$1.$2.$3/$4-$5');
    }
  
    // Se não for nenhum dos dois, retorna como está
    return valor;
  }
  
  
  