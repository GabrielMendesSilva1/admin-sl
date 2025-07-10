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
  