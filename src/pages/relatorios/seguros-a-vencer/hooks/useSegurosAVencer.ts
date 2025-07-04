import { useState, useEffect } from "react";
import { supabase } from "../../../../lib/supaBaseClient";

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

export function useSegurosAVencer(mes: number, ano: number) {
  const [seguros, setSeguros] = useState<SeguroItem[]>([]);
  const [resumo, setResumo] = useState({
    automovel: 0,
    patrimonio: 0,
    total: 0,
  });

  useEffect(() => {
    async function buscarSeguros() {
      const { start, end } = getMonthRange(ano, mes);

      const [auto, patri] = await Promise.all([
        supabase
          .from("seguros_automotivos")
          .select("vigenciafim, segurado, nomeseguradora")
          .gte("vigenciafim", start)
          .lte("vigenciafim", end),

        supabase
          .from("seguros_patrimoniais")
          .select("vigenciafim, cpfcnpj, nomeseguradora")
          .gte("vigenciafim", start)
          .lte("vigenciafim", end),
      ]);

      const automovel: SeguroItem[] = (auto.data ?? []).map(item => ({
        data: item.vigenciafim,
        nome: item.segurado || "Não informado",
        seguradora: item.nomeseguradora || "Desconhecida",
        tipo: "Automóvel",
      }));

      const cpfs = patri.data?.map(p => p.cpfcnpj).filter(Boolean);
      let nomesSeguradosMap: Record<string, string> = {};

      if (cpfs?.length) {
        const { data: segurados } = await supabase
          .from("segurados")
          .select("cpfcnpj, nome")
          .in("cpfcnpj", cpfs);

        segurados?.forEach(s => {
          if (s.cpfcnpj) nomesSeguradosMap[s.cpfcnpj] = s.nome || "Desconhecido";
        });
      }

      const patrimonio: SeguroItem[] = (patri.data ?? []).map(item => ({
        data: item.vigenciafim,
        nome: nomesSeguradosMap[item.cpfcnpj] || item.cpfcnpj || "Desconhecido",
        seguradora: item.nomeseguradora || "Desconhecida",
        tipo: "Patrimônio",
      }));

      const todos = [...automovel, ...patrimonio];

      setSeguros(todos);
      setResumo({
        automovel: automovel.length,
        patrimonio: patrimonio.length,
        total: todos.length,
      });
    }

    if (mes && ano) buscarSeguros();
  }, [mes, ano]);

  return { seguros, resumo };
}
