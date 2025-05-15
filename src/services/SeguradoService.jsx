import { supabase } from '../lib/supaBaseClient';

export const getSegurados = async ({ placa, nome, apolice, cpfCnpj }) => {
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
  if (cpfCnpj) {
    query = query.ilike('cpfcnpj', `%${cpfCnpj}%`);
  }

  const { data, error } = await query;

  if (error) {
    console.error('Erro ao buscar segurados:', error);
    return [];
  }

  return data;
};
