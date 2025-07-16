import React, { useState } from "react";
import dayjs, { Dayjs } from "dayjs";
import { useSegurosAVencer } from "./hooks/useSegurosAVencer";
import FiltroMesAno from "./components/FiltroMesAno";
import TabelaSeguros from "./components/TabelaSeguros";
import ResumoSeguros from "./components/ResumoSeguros";
import { Container, Wrapper, Title, PrintStyles } from './styles';
import Header from "../../../components/Header";

const SegurosAVencerPage: React.FC = () => {
  const [mesAno, setMesAno] = useState<Dayjs | null>(null); // INICIALIZA NULL

  const mes = mesAno ? mesAno.month() + 1 : undefined;
  const ano = mesAno ? mesAno.year() : undefined;

  const { seguros, resumo } = useSegurosAVencer(mes, ano);

  const handlePrint = () => {
    window.print();
  };

  return (
    <>
      <PrintStyles />  {/* IMPORTANTE */}
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

          <button
            onClick={handlePrint}
            style={{
              marginTop: '1rem',
              backgroundColor: '#333',       // tom escuro
              color: '#fff',                 // texto branco
              padding: '0.5rem 1rem',
              border: 'none',
              borderRadius: '4px',
              cursor: 'pointer',
            }}
          >
            Imprimir Relatório
          </button>
            
        </Wrapper>
      </Container>
    </>
  );
};

export default SegurosAVencerPage;
