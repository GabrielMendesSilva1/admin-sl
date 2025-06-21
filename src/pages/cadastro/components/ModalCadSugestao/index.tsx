import React from 'react';
import { useNavigate } from 'react-router-dom';
import { ModalContainer, ModalContent, ModalTitle, OptionButton, CancelButton } from './styles';

const ModalCadastroSugestao = ({ onClose }) => {
  const navigate = useNavigate();

  const handleOptionClick = (path) => {
    navigate(path);
    onClose(); 
  };  

  return (
    <ModalContainer>
      <ModalContent>
        <ModalTitle>O que você deseja cadastrar?</ModalTitle>
        <OptionButton onClick={() => handleOptionClick('/cadastro/automovel')}>
          Automóvel
        </OptionButton>
        <OptionButton onClick={() => handleOptionClick('/cadastro/patrimonio')}>
          Patrimônio
        </OptionButton>
        <CancelButton onClick={onClose}>Cancelar</CancelButton>
      </ModalContent>
    </ModalContainer>
  );
};

export default ModalCadastroSugestao;
