import styled from 'styled-components';
import background from '../../../../assets/insurance-bg.jpeg'; 

// Container principal
export const Container = styled.div`
  display: flex;
  background: url(${background}) center/cover no-repeat fixed;
  justify-content: center;
  align-items: center;
  padding: 20px;
  width: 100vw;         /* Garante que ocupe toda a largura da viewport */
`;

// Painel de conteúdo
export const Panel = styled.div`
  background-color: #fff;
  padding: 20px;
  border-radius: 8px;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
  width: 100%;
  max-width: 800px;
`;

// Título da página
export const PageTitle = styled.h1`
  font-size: 24px;
  color: #333;
  margin-bottom: 20px;
  text-align: center;
  position: relative;

  &::before {
    content: '';
    position: absolute;
    top: -10px; /* Distância entre a linha e o título */
    left: 0;
    width: 100%;
    height: 2px; /* Espessura da linha */
    background-color: #ddd; /* Cor da linha */
  }
`;
// Formulário de linha (Flexbox para alinhamento)
export const FormRow = styled.div`
  display: flex;
  flex-wrap: wrap;
  margin-bottom: 20px;
  gap: 16px;
`;

// Campo de formulário (cada label + input dentro de uma coluna)
export const Field = styled.div`
  flex: 1;
  min-width: 250px;
  max-width: 100%;
`;

// Label para os campos
export const Label = styled.label`
  font-size: 16px;
  color: #444;
  margin-bottom: 8px;
  display: block;
  font-weight: 600;
  transition: 0.3s ease-in-out;
`;

// Input (com estilo simplificado e mais clean)
export const Input = styled.input`
  width: 100%;
  padding: 12px;
  border-radius: 4px;
  border: 1px solid #ddd;
  font-size: 14px;
  color: #333;
  background-color: #f9f9f9;
  box-sizing: border-box;
  transition: 0.3s ease-in-out;
  appearance: none; /* Evita interferência de aparência nativa em alguns browsers */

  &::placeholder {
    color: #aaa;
  }

  &:focus {
    border-color: #4d90fe;
    background-color: #fff;
    outline: none;
  }

  // Garante que o ícone do calendário apareça corretamente
  &[type='date'] {
    background-color: white;
    color: #00000;
    padding-right: 10px;
  }
`;

// Select (dropdown) para o tipo de pessoa
export const Select = styled.select`
  width: 100%;
  padding: 12px;
  border-radius: 4px;
  border: 1px solid #ddd;
  font-size: 14px;
  color: #333;
  background-color: #f9f9f9;
  box-sizing: border-box;
  transition: 0.3s ease-in-out;
  
  &:focus {
    border-color: #4d90fe;
    background-color: #fff;
    outline: none;
  }
`;

// Option para o Select
export const Option = styled.option``;

// Botão de salvar
export const ButtonRow = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 20px;
`;

export const Button = styled.button`
  padding: 12px 24px;
  font-size: 16px;
  background-color: #4d90fe;
  color: white;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  transition: background-color 0.3s;

  &:hover {
    background-color: #357ae8;
  }
`;

