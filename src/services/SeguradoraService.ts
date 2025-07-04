import { supabase } from "../lib/supaBaseClient";

// Tipagem opcional (recomendada)
export interface Seguradora {
  id?: string; // gerado automaticamente
  nome?: string;
  endereco?: string;
  bairro?: string;
  cidade?: string;
  uf?: string;
  cep?: string;
  fone1?: string;
  fone2?: string;
  contato?: string;
  cgc?: string;
  email?: string;
}

/**
 * Buscar todas as seguradoras (GET)
 */
export async function getSeguradoras(): Promise<Seguradora[]> {
  const { data, error } = await supabase
    .from("seguradoras")
    .select("*")
    .order("nome", { ascending: true });

  if (error) {
    console.error("Erro ao buscar seguradoras:", error.message);
    throw new Error("Não foi possível buscar seguradoras.");
  }

  return data || [];
}

/**
 * Inserir nova seguradora (POST)
 */
export async function insertSeguradora(seguradora: Seguradora): Promise<void> {
  const { error } = await supabase
    .from("seguradoras")
    .insert([seguradora]);

  if (error) {
    console.error("Erro ao inserir seguradora:", error.message);
    throw new Error("Erro ao cadastrar seguradora.");
  }
}
