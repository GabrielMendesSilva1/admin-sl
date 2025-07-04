import React, { useState } from "react";
import dayjs, { Dayjs } from "dayjs";
import { useSegurosAVencer } from "./hooks/useSegurosAVencer";
import FiltroMesAno from "./components/FiltroMesAno";
import TabelaSeguros from "./components/TabelaSeguros";
import ResumoSeguros from "./components/ResumoSeguros";
import { Container, Wrapper, Title } from './styles';
import Header from "../../../components/Header";


const SegurosAVencerPage: React.FC = () => {
  const [mesAno, setMesAno] = useState<Dayjs | null>(dayjs());
  const mes = mesAno?.month()! + 1;
  const ano = mesAno?.year()!;

  const { seguros, resumo } = useSegurosAVencer(mes, ano);

  return (
    <>
      <Header />
      <Container>
        <Wrapper>
          <Title>Relatório - Seguros a Vencer</Title>

          <FiltroMesAno mesAno={mesAno} onChange={setMesAno} />

          <ResumoSeguros
            automovel={resumo.automovel}
            patrimonio={resumo.patrimonio}
            total={resumo.total}
          />

          <TabelaSeguros dados={seguros} />
        </Wrapper>
      </Container>
    </>
  );
};

export default SegurosAVencerPage;
