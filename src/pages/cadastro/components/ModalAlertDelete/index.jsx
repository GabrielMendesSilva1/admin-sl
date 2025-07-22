import React from 'react';
import {
  ModalContainer,
  ModalContent,
  ModalTitle,
  OptionButton,
  CancelButton
} from './styles';

const ModalConfirmarExclusao = ({ onConfirm, onCancel }) => {
  return (
    <ModalContainer>
      <ModalContent>
        <ModalTitle>Deseja realmente excluir este segurado?</ModalTitle>
        <OptionButton onClick={onConfirm}>Sim, excluir</OptionButton>
        <CancelButton onClick={onCancel}>Cancelar</CancelButton>
      </ModalContent>
    </ModalContainer>
  );
};

export default ModalConfirmarExclusao;