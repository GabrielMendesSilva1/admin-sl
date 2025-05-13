import styled, { keyframes } from "styled-components";

// Animação do spinner
const spin = keyframes`
  0% { transform: rotate(0deg); }
  100% { transform: rotate(360deg); }
`;

// Container que ocupa a tela inteira, com fundo branco
export const LoadingWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(255, 255, 255, 0.8);  // Opacidade para efeito de overlay
  z-index: 9999;
  height: 100vh;
`;

// O spinner vai ser um círculo com animação de rotação
export const Spinner = styled.div`
  border: 8px solid #f3f3f3;  // Cor de fundo do círculo
  border-top: 8px solid #0077cc; // Cor do topo do círculo, dando o efeito de rotação
  border-radius: 50%;
  width: 50px;
  height: 50px;
  animation: ${spin} 2s linear infinite;  // Animação de rotação contínua
`;

// Mensagem "CARREGANDO..." logo abaixo do spinner
export const Message = styled.div`
  font-size: 16px;
  font-weight: 600;
  color: #333;
  margin-top: 16px;
  text-align: center;
`;
