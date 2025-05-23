import styled from 'styled-components';
import bgImage from '../../assets/insurance-bg.jpeg';

export const Container = styled.div`
  position: relative;
  width: 100vw;
  height: 100vh;
`;

export const Background = styled.div`
  background-image: url(${bgImage});
  background-size: cover;
  background-position: center;
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
  background-color: rgba(255, 255, 255, 0.25); /* super leve */
  backdrop-filter: blur(6px);
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

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  padding: 2rem;
  background-color: rgba(255, 255, 255, 0.25); 
  backdrop-filter: blur(6px);
  border-radius: 12px;
  max-width: 350px;
  margin: 0 auto;
  position: relative;
  top: 25%;
  z-index: 1;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.2);
`;

export const Title = styled.h1`
  text-align: center;
  font-size: 1.8rem;
  color: #003366;
`;

