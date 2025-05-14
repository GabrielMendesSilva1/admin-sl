import React from "react";

// Função de formatação de CPF
export const formatCPF = (cpf) => {
    return cpf.replace(/\D/g, '')
              .replace(/(\d{3})(\d)/, '$1.$2')
              .replace(/(\d{3})(\d)/, '$1.$2')
              .replace(/(\d{3})(\d{1,2})$/, '$1-$2');
};

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
