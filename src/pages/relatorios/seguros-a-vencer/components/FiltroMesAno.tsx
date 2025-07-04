import React from "react";
import { DatePicker } from "antd";
import type { Dayjs } from "dayjs";

interface Props {
  mesAno: Dayjs | null;
  onChange: (date: Dayjs | null) => void;
}

const FiltroMesAno: React.FC<Props> = ({ mesAno, onChange }) => {
  return (
    <DatePicker
      picker="month"
      value={mesAno}
      onChange={onChange}
      style={{ marginBottom: 16 }}
      placeholder="Selecione o mês e ano"
    />
  );
};

export default FiltroMesAno;
