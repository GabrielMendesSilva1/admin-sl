import { supabase } from '../lib/supaBaseClient';

export async function postAutomovel(dados) {
  const { error } = await supabase
    .from('seguros_automotivos')
    .insert([dados]);

  if (error) throw error;
}

export async function getAutomovelBycpfcnpj(cpfcnpj) {
  const { data, error } = await supabase
    .from('seguros_automotivos')
    .select(`
      *,
      segurado:segurados (
        nome
      )
    `)
    .eq('cpfcnpj', cpfcnpj);

  if (error && error.code !== 'PGRST116') throw error;
  return data;
}

export async function updateAutomovel(id, dados) {
  const { error } = await supabase
    .from('seguros_automotivos')
    .update(dados)
    .eq('id', id);

  if (error) throw error;
}

export async function deleteAutomovel(id) {
  const { error } = await supabase
    .from('seguros_automotivos')
    .delete()
    .eq('id', id);

  if (error) throw error;
}
