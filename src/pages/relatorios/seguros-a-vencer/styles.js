// styles.ts (ou onde estiver seus estilos)

import styled, { createGlobalStyle } from 'styled-components';
import background from '../../../assets/insurance-bg.jpeg';

export const Container = styled.div`
  min-height: 100vh;
  width: 100vw;
  background: url(${background}) no-repeat center center fixed;
  background-size: cover;

  display: flex;
  justify-content: center;
  align-items: flex-start;
  padding: 4rem 2rem;
`;

export const Wrapper = styled.div`
  background: rgba(255, 255, 255, 0.95);
  padding: 2.5rem;
  border-radius: 16px;
  max-width: 1200px;
  width: 100%;
  box-shadow: 0 8px 20px rgba(0, 0, 0, 0.15);
`;

export const Title = styled.h1`
  font-size: 2rem;
  font-weight: bold;
  margin-bottom: 2rem;
  color: #003366;
  text-align: center;
`;

// Global style para impressão
export const PrintStyles = createGlobalStyle`
  @media print {
    body {
      margin: 1cm;
      font-size: 12pt;
      background: white !important;
    }

    /* Esconder o background da página */
    ${Container} {
      background: none !important;
      padding: 0 !important;
      min-height: auto !important;
      width: 100% !important;
      display: block !important;
      justify-content: unset !important;
      align-items: unset !important;
    }

    /* Ajustar o wrapper para ocupar 100% */
    ${Wrapper} {
      background: white !important;
      box-shadow: none !important;
      border-radius: 0 !important;
      padding: 0 !important;
      max-width: 100% !important;
      width: 100% !important;
    }

    /* Esconder elementos que não devem aparecer na impressão, exemplo botão, header */
    button, header {
      display: none !important;
    }

    /* Ajuste geral para a tabela */
    table {
      width: 100% !important;
      border-collapse: collapse !important;
      font-size: 12pt !important;
    }
  }
`;
