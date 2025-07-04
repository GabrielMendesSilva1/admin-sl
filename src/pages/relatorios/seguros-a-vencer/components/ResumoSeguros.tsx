import React from "react";
import { Card, Statistic, Row, Col } from "antd";

interface Props {
  automovel: number;
  patrimonio: number;
  total: number;
}

const ResumoSeguros: React.FC<Props> = ({ automovel, patrimonio, total }) => (
  <Row gutter={16} style={{ marginBottom: 24 }}>
    <Col span={8}>
      <Card>
        <Statistic title="Automóvel" value={automovel} />
      </Card>
    </Col>
    <Col span={8}>
      <Card>
        <Statistic title="Patrimônio" value={patrimonio} />
      </Card>
    </Col>
    <Col span={8}>
      <Card>
        <Statistic title="Total Geral" value={total} />
      </Card>
    </Col>
  </Row>
);

export default ResumoSeguros;
