import { supabase } from '../lib/supaBaseClient';

export const getPatrimonialBycpfcnpj = async (cpfcnpj) => {
  const { data, error } = await supabase
    .from('seguros_patrimoniais')
    .select('*')
    .eq('cpfcnpj', cpfcnpj);

  if (error) {
    console.error('Erro ao buscar seguro patrimonial:', error);
    return [];
  }

  return data || [];
};

export const postPatrimonial = async (data) => {
  const { error } = await supabase
    .from('seguros_patrimoniais')
    .insert([data]);

  if (error) {
    console.error('Erro ao cadastrar seguro patrimonial:', error);
    return { status: 400, message: 'Erro ao cadastrar seguro patrimonial.' };
  }

  return { status: 200, message: 'Cadastro patrimonial salvo com sucesso.' };
};

export const updatePatrimonial = async (id, dadosAtualizados) => {
  const { data, error } = await supabase
    .from('seguros_patrimoniais')
    .update(dadosAtualizados)
    .eq('id', id);

  if (error) {
    console.error('Erro ao atualizar seguro patrimonial:', error.message);
    throw error;
  }

  return data;
};