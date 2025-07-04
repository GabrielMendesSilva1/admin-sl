import { useState, useEffect } from "react";
import { supabase } from "../../../../lib/supaBaseClient";

interface Segurado {
  nome: string;
  cpfcnpj: string;
}

interface SeguroItemRaw {
  vigenciafim: string;
  nomeseguradora: string;
  segurado?: Segurado;  // objeto único, não array
}

interface SeguroItem {
  data: string;
  nome: string;
  seguradora: string;
  tipo: string;
}

function getMonthRange(ano: number, mes: number) {
  const start = new Date(ano, mes - 1, 1).toISOString().split("T")[0];
  const end = new Date(ano, mes, 0).toISOString().split("T")[0];
  return { start, end };
}

export function useSegurosAVencer(mes?: number, ano?: number) {
  const [seguros, setSeguros] = useState<SeguroItem[]>([]);
  const [resumo, setResumo] = useState({
    automovel: 0,
    patrimonio: 0,
    total: 0,
  });

  useEffect(() => {
    if (!mes || !ano) return;  // NÃO busca se mês ou ano não estiverem definidos

    async function buscarSeguros() {
      const { start, end } = getMonthRange(ano, mes);

      const [auto, patri] = await Promise.all([
        supabase
          .from("seguros_automotivos")
          .select("vigenciafim, nomeseguradora, segurado:segurados(nome, cpfcnpj)")
          .gte("vigenciafim", start)
          .lte("vigenciafim", end),

        supabase
          .from("seguros_patrimoniais")
          .select("vigenciafim, nomeseguradora, segurado:segurados(nome, cpfcnpj)")
          .gte("vigenciafim", start)
          .lte("vigenciafim", end),
      ]);

      const automovel: SeguroItem[] = (auto.data ?? []).map(
        (item: SeguroItemRaw) => ({
          data: item.vigenciafim,
          nome: item.segurado?.nome || "Não informado",
          seguradora: item.nomeseguradora || "Desconhecida",
          tipo: "Automóvel",
        })
      );

      const patrimonio: SeguroItem[] = (patri.data ?? []).map(
        (item: SeguroItemRaw) => ({
          data: item.vigenciafim,
          nome: item.segurado?.nome || "Não informado",
          seguradora: item.nomeseguradora || "Desconhecida",
          tipo: "Patrimônio",
        })
      );

      const todos = [...automovel, ...patrimonio];

      setSeguros(todos);
      setResumo({
        automovel: automovel.length,
        patrimonio: patrimonio.length,
        total: todos.length,
      });
    }

    buscarSeguros();
  }, [mes, ano]);

  return { seguros, resumo };
}
