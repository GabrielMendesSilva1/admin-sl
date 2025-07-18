import { supabase } from '../lib/supaBaseClient';

export const getSegurados = async ({ placa, nome, apolice, cpfcnpj }) => {
  const query = supabase.from('segurados').select('*');

  if (placa) {
    query.ilike('placa', `%${placa}%`);
  }
  if (nome) {
    query.ilike('nome', `%${nome}%`);
  }
  if (apolice) {
    query.ilike('apolice', `%${apolice}%`);
  }
  if (cpfcnpj) {
    query.ilike('cpfcnpj', `%${cpfcnpj}%`);
  }

  const { data, error } = await query;

  if (error) {
    console.error('Erro ao buscar segurados:', error);
    return [];
  }

  return data;
};


export const postSegurado = async (segurado) => {
  const { data, error } = await supabase
    .from('segurados')
    .insert([segurado]);

  if (error) {
    console.error('Erro ao cadastrar segurado:', error.message);
    throw error;
  }

  return data;
};

export const updateSegurado = async (cpfcnpj, dadosAtualizados) => {
  const { data, error } = await supabase
    .from('segurados')
    .update(dadosAtualizados)
    .eq('cpfcnpj', cpfcnpj);

  if (error) {
    console.error('Erro ao atualizar segurado:', error.message);
    throw error;
  }

  return data;
};