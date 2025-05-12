import styled from 'styled-components';

export const Container = styled.div`
  height: 100vh;
  background: #f1f5f9;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

export const Title = styled.h1`
  margin-bottom: 2rem;
  color: #003366;
`;

export const Menu = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
`;

export const MenuItem = styled.button`
  padding: 1rem 2rem;
  background-color: #0077cc;
  color: white;
  font-size: 1.1rem;
  border: none;
  border-radius: 8px;
  cursor: pointer;
  transition: background 0.3s;

  &:hover {
    background-color: #005fa3;
  }
`;
