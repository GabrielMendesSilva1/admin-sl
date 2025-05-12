import styled from 'styled-components';
import bgImage from '../../assets/insurance-bg.jpg'; // Coloque a imagem na pasta /assets

export const Container = styled.div`
  position: relative;
  width: 100vw;
  height: 100vh;
`;

export const Background = styled.div`
  background-image: url(${bgImage});
  background-size: cover;
  background-position: center;
  filter: blur(4px);
  position: absolute;
  width: 100%;
  height: 100%;
  z-index: 0;
`;

export const LoginBox = styled.div`
  position: relative;
  z-index: 1;
  width: 350px;
  margin: auto;
  top: 25%;
  padding: 2rem;
  background-color: rgba(255, 255, 255, 0.9);
  border-radius: 12px;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.2);
  display: flex;
  flex-direction: column;
  gap: 1rem;
`;

export const Logo = styled.h1`
  text-align: center;
  font-size: 1.5rem;
  color: #003366;
`;

export const Input = styled.input`
  padding: 0.75rem;
  border-radius: 8px;
  border: 1px solid #ccc;
  font-size: 1rem;
`;

export const Button = styled.button`
  background-color: #0077cc;
  color: white;
  padding: 0.75rem;
  border: none;
  border-radius: 8px;
  font-size: 1rem;
  cursor: pointer;
  transition: background 0.3s;
  
  &:hover {
    background-color: #005fa3;
  }
`;
