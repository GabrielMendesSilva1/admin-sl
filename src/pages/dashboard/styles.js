import styled from 'styled-components';
import background from '../../assets/insurance-bg.jpeg';

export const Container = styled.div`
  /* ocupa toda a viewport sem scroll horizontal */
  width: 100vw;              
  min-height: 100vh;
  box-sizing: border-box;    /* faz o padding entrar no cálculo de largura */
  overflow-x: hidden;        /* elimina qualquer scroll lateral */

  /* fundo de tela */
  background: url(${background}) no-repeat center center fixed;
  background-size: cover;

  /* layout flex empurrando tudo para cima e esticando na largura */
  display: flex;
  flex-direction: column;
  align-items: flex-start;   /* agora alinha tudo à esquerda */
  padding: 2rem;             /* padding interno mas sem ultrapassar a largura */
`;

export const FilterBox = styled.div`
  width: 100%;
  /* se quiser que o filtro também ocupe 100% sem limitação, remova o max-width */
  /* max-width: 600px; */
  margin-bottom: 2rem;
`;

export const Input = styled.input`
  width: 100%;
  padding: 0.75rem 1rem;
  font-size: 1rem;
  border: 2px solid #ccc;
  border-radius: 8px;
  outline: none;
  transition: border-color 0.2s;

  &:focus {
    border-color: #0077cc;
  }
`;

export const Panel = styled.div`
  width: 100%;
  /* removido max-width para ocupar toda a largura disponível */
  /* max-width: 600px; */
  background: #ffffff;
  border-radius: 12px;
  padding: 2rem;
  box-shadow: 0 4px 12px rgba(0,0,0,0.1);
`;

export const Row = styled.div`
  display: flex;
  flex-wrap: wrap;
  margin-bottom: 1rem;
`;

export const Col = styled.div`
  flex: ${({ full }) => (full ? '1 1 100%' : '1 1 45%')};
  display: flex;
  flex-direction: column;
  margin-right: ${({ full }) => (full ? '0' : '2rem')};

  &:last-child {
    margin-right: 0;
  }
`;

export const Label = styled.span`
  font-weight: 600;
  margin-bottom: 0.25rem;
  color: #333;
`;

export const Value = styled.span`
  font-weight: 400;
  color: #555;
`;
