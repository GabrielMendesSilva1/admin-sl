import styled, { createGlobalStyle } from 'styled-components';
import { AutoComplete } from 'antd';
import background from '../../assets/insurance-bg.jpeg';

export const Container = styled.div`
  width: 100vw;
  min-height: 100vh;
  background: url(${background}) center/cover no-repeat fixed;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 2rem;
  box-sizing: border-box;
`;

export const FilterBox = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr) auto; /* 4 campos + botão */
  gap: 2rem;
  align-items: center;
  margin-bottom: 2rem;
  width: 100%;
  max-width: 1000px;
`;

export const Field = styled.div`
  display: flex;
  flex-direction: column;
`;

export const Label = styled.span`
  font-weight: 600;
  min-width: 140px;
  color: #222;
`;

export const LabelUF = styled.span`
  font-weight: 600;
  min-width: 140px;
  color: #222;
  margin-left: 158px;
`;

export const LabelFilter = styled.span`
  font-weight: 600;
  min-width: 140px;
  color: #FFFF;
`;

export const Input = styled.input`
  width: 100%;
  padding: 0.5rem 0.75rem;
  border: 2px solid #ccc;
  border-radius: 8px;
  font-size: 1rem;
  outline: none;
  transition: border-color 0.2s;
  background-color: #fffff

  &:focus {
    border-color: #0077cc;
  }
`;

// AutoCompleteStyled deve copiar TODAS as regras acima:
export const AutoCompleteStyled = styled(AutoComplete)`
  width: 115%;
    height: 40px;

  .ant-select-selector {
    /* mesmas propriedades do Input */
    padding: 0.5rem 0.75rem !important;
    border: 2px solid #ccc !important;
    border-radius: 8px !important;
    font-size: 1rem !important;
    transition: border-color 0.2s;

    &:hover,
    &.ant-select-focused {
      border-color: #0077cc !important;
    }
  }
`;

export const Button = styled.button`
  padding: 0.75rem 1.5rem;
  background: #0077cc;
  color: #fff;
  border: none;
  border-radius: 8px;
  cursor: pointer;
  font-size: 1rem;
  transition: background 0.2s;
  margin-top: 26px;
  margin-left: 12px;

  &:hover {
    background: #005fa3;
  }
`;

export const ButtonNavContainer = styled.div`
  display: flex;
  gap: 1rem;
  margin-bottom: 1.5rem;
`;

// Coloque este id no seu JSX: <Panel id="painel-segurado">
export const Panel = styled.div`
  width: 100%;
  max-width: 1000px;
  background: rgba(255,255,255,0.95);
  border-radius: 12px;
  padding: 2rem;
  box-shadow: 0 4px 12px rgba(0,0,0,0.1);
`;

export const Row = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 1rem 2rem;
  margin-bottom: 1rem;
  align-items: center;
  padding-bottom: 0.75rem;
  border-bottom: 1px solid rgba(0, 0, 0, 0.1);
`;

export const PageTitle = styled.h1`
  font-size: 1.5rem;
  font-weight: 700;
  color: #333;
  margin-bottom: 2rem;
  margin-top: 0rem;
  text-align: center;
`;

export const Value = styled.span`
  flex: 1;
  font-weight: 400;
  color: #444;
`;

export const ValueUF = styled.span`
  flex: 1;
  font-weight: 400;
  color: #444;
  margin-left: -99px;
`;

// ESTILOS GLOBAIS PARA IMPRESSÃO
export const PrintStyles = createGlobalStyle`
  @media print {
    body * {
      visibility: hidden !important;
    }

    #painel-segurado, 
    #painel-segurado * {
      visibility: visible !important;
    }

    #painel-segurado {
      position: absolute;
      left: 0;
      top: 0;
      width: 100vw;
      max-width: none;
      box-shadow: none !important;
      background: white !important;
      margin: 0;
      padding: 0;
      overflow: visible;
    }
  }
`;
