import { supabase } from '../lib/supaBaseClient';

export const getSegurados = async ({ placa, nome, apolice, cpfcnpj }) => {
  let query = supabase.from('segurados').select('*');

  if (placa) {
    query = query.ilike('placa', `%${placa}%`);
  }
  if (nome) {
    query = query.ilike('nome', `%${nome}%`);
  }
  if (apolice) {
    query = query.ilike('apolice', `%${apolice}%`);
  }
  if (cpfcnpj) {
    query = query.ilike('cpfcnpj', `%${cpfcnpj}%`);
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