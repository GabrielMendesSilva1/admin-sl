import styled from 'styled-components';
import background from '../../../assets/insurance-bg.jpeg';

export const Container = styled.div`
  min-height: 100vh;
  width: 100vw;
  background: url(${background}) no-repeat center center fixed;
  background-size: cover;

  display: flex;
  justify-content: center;
  align-items: flex-start;
  padding: 4rem 2rem;
`;

export const Wrapper = styled.div`
  background: rgba(255, 255, 255, 0.95);
  padding: 2.5rem;
  border-radius: 16px;
  max-width: 1200px;
  width: 100%;
  box-shadow: 0 8px 20px rgba(0, 0, 0, 0.15);
`;

export const Title = styled.h1`
  font-size: 2rem;
  font-weight: bold;
  margin-bottom: 2rem;
  color: #003366;
  text-align: center;
`;
