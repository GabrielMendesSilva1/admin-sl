import React from "react";
import { Table } from "antd";
import type { ColumnsType } from "antd/es/table";
import type { Key } from "react";
import dayjs from "dayjs";

interface SeguroItem {
  data: string;
  nome: string;
  seguradora: string;
  tipo: string;
  houvesinistro: string;
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
      render: (date: string) => dayjs(date).format("DD/MM/YYYY"),
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
      onFilter: (value, record) => record.tipo === value,
    },
    {
      title: "Corretora",
      dataIndex: "corretora",
      key: "corretora",
      filters: [
      ],
      onFilter: (value, record) => record.tipo === value,
    },
    {
      title: "Houve Sinistro?",
      dataIndex: "houvesinistro",
      key: "houvesinistro",
      filters: [
        { text: "Sim", value: "Sim" },
        { text: "Não", value: "Não" },
      ],
      onFilter: (value, record) => record.houvesinistro === value,
    },
  ];


  return (
    <Table
      columns={columns}
      dataSource={dados}
      rowKey={(record) => `${record.tipo}-${record.nome}-${record.data}`}
      pagination={{ pageSize: 50 }}
      locale={{ emptyText: "Nenhum seguro a vencer nesse período" }}
    />
  );
};

export default TabelaSeguros;
