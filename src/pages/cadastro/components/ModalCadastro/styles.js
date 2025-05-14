import styled from 'styled-components';

export const ModalContainer = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.6);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 1000;
`;

export const ModalContent = styled.div`
  background: #fff;
  padding: 40px 30px;
  border-radius: 10px;
  text-align: center;
  max-width: 400px;
  width: 100%;
`;

export const ModalTitle = styled.h2`
  font-size: 22px;
  font-weight: bold;
  color: #333;
  margin-bottom: 25px;
`;

export const OptionButton = styled.button`
  background: #007bff;
  color: white;
  padding: 12px 20px;
  border: none;
  border-radius: 6px;
  margin: 10px 0;
  width: 100%;
  font-size: 16px;
  cursor: pointer;

  &:hover {
    background: #0056b3;
  }
`;

export const CancelButton = styled(OptionButton)`
  background: #ccc;
  color: #333;

  &:hover {
    background: #aaa;
  }
`;
