import styled from 'styled-components';
import background from '../../assets/insurance-bg.jpeg';

export const Container = styled.div`
  min-height: 100vh;
  width: 100vw;
  background: url(${background}) no-repeat center center fixed;
  background-size: cover;

  display: flex;
  justify-content: flex-end;    /* empurra o grid para a direita */
  align-items: flex-start;      /* empurra para o topo */
  padding: 2rem;
  overflow-x: hidden;
`;

export const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr); /* sempre 2 colunas */
  gap: 1.5rem;
  width: 100%;
  max-width: 600px;      /* ajuste conforme preferir */
  margin-top: 8rem;      /* espaçamento do topo */
  margin-right: 5rem;
`;

export const Card = styled.div`
  background: rgba(255, 255, 255, 0.55);
  border-radius: 12px;
  padding: 1.5rem;
  cursor: pointer;
  box-shadow: 0 2px 6px rgba(0,0,0,0.1);
  transition: transform 0.3s ease, box-shadow 0.3s ease;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  &:hover {
    background: #e0f0ff;
    transform: translateY(-5px);
    box-shadow: 0 4px 12px rgba(0,0,0,0.15);
  }

  .icon {
    font-size: 2.5rem;
    margin-bottom: 0.75rem;
  }

  h3 {
    font-size: 1.1rem;
    font-weight: 600;
    color: #000;
  }
`;

export const Title = styled.h1`
  margin-bottom: 2rem;
  color: #fff;              /* branco para contrastar com o fundo */
  font-size: 2.5rem;
  font-weight: bold;
  text-shadow: 0 2px 4px rgba(0,0,0,0.5);
  margin-left: 12%;
`;
