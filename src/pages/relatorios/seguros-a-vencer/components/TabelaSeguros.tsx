import React from "react";
import { Table } from "antd";
import type { ColumnsType } from "antd/es/table";
import type { Key } from "react";

interface SeguroItem {
  data: string;
  nome: string;
  seguradora: string;
  tipo: string;
}

interface Props {
  dados: SeguroItem[];
}

const TabelaSeguros: React.FC<Props> = ({ dados }) => {
  const columns: ColumnsType<SeguroItem> = [
    {
      title: "Data de Vencimento",
      dataIndex: "data",
      key: "data",
      render: (date: string) => new Date(date).toLocaleDateString("pt-BR"),
      sorter: (a, b) => new Date(a.data).getTime() - new Date(b.data).getTime(),
    },
    {
      title: "Nome do Cliente",
      dataIndex: "nome",
      key: "nome",
      sorter: (a, b) => a.nome.localeCompare(b.nome),
    },
    {
      title: "Seguradora",
      dataIndex: "seguradora",
      key: "seguradora",
      sorter: (a, b) => a.seguradora.localeCompare(b.seguradora),
    },
    {
      title: "Tipo de Seguro",
      dataIndex: "tipo",
      key: "tipo",
      filters: [
        { text: "Automóvel", value: "Automóvel" },
        { text: "Patrimônio", value: "Patrimônio" },
      ],
      onFilter: (value: boolean | Key, record) => {
        if (typeof value === "string") {
          return record.tipo === value;
        }
        return true;
      },
    },
  ];

  return (
    <Table
      columns={columns}
      dataSource={dados}
      rowKey={(record) => `${record.tipo}-${record.nome}-${record.data}`}
      pagination={{ pageSize: 10 }}
      locale={{ emptyText: "Nenhum seguro a vencer nesse período" }}
    />
  );
};

export default TabelaSeguros;
