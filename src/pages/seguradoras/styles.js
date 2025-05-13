import styled from 'styled-components';
import background from '../../assets/insurance-bg.jpeg';

export const PageWrapper = styled.div`
  background: url(${background}) center/cover no-repeat fixed;
  min-height: 100vh;
  width: 100%;
  overflow-x: hidden;
`;

export const Container = styled.div`
  padding: 32px;
  max-width: 960px;
  margin: 60px auto;
  background: #ffffffcc;
  border-radius: 16px;
  box-shadow: 0 4px 16px rgba(0,0,0,0.08);
  border: 1px solid #e6e8eb;
  overflow-x: hidden;
`;

export const Title = styled.h1`
  font-size: 28px;
  font-weight: 700;
  color: #1a1a1a;
  margin-bottom: 32px;
  border-bottom: 2px solid #f0f0f0;
  padding-bottom: 12px;
`;

export const Section = styled.section`
  margin-bottom: 32px;
  padding: 20px 24px;
  background: #f9fafa;
  border: 1px solid #e1e4e8;
  border-radius: 12px;
`;

export const Subsection = styled.div`
  margin-top: 24px;
  margin-bottom: 16px;
  padding-bottom: 16px;
  border-bottom: 1px solid #e0e0e0;
`;

export const SubsectionTitle = styled.h3`
  font-size: 18px;
  font-weight: 600;
  color: #333;
  margin-bottom: 12px;
  border-left: 4px solid #0077cc;
  padding-left: 12px;
`;

export const Label = styled.span`
    font-weight: 600;
    font-size: 1rem;
    color: #000000;
    margin-bottom: 4px;
`;

export const Value = styled.span`
  color: #555;
  font-weight: 400;
`;

export const ValueRow = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 12px;
  margin: 8px 0;
`;

export const Grid = styled.div`
    display: grid;
    grid-template-columns: ${({ columns }) => `repeat(${columns}, 1fr)`};
    gap: 16px;
    margin-top: 16px;

    div {
        display: flex;
        flex-direction: column;
    }
`;

/* Adaptando o Input e Select no mesmo estilo */
export const Input = styled.input`
  width: 100%;
  padding: 12px;
  border: 1px solid #ccc;
  border-radius: 8px;
  font-size: 1rem;
  color: #333;
  background-color: #fff;
  box-sizing: border-box;

  &:focus {
    border-color: #0077cc;
    outline: none;
    box-shadow: 0 0 4px rgba(0, 119, 204, 0.3);
  }

  &::placeholder {
    color: #aaa;
  }
`;

export const Select = styled.select`
  width: 100%;
  padding: 12px;
  border: 1px solid #ccc;
  border-radius: 8px;
  font-size: 1rem;
  color: #333;
  background-color: #fff;
  box-sizing: border-box;

  &:focus {
    border-color: #0077cc;
    outline: none;
    box-shadow: 0 0 4px rgba(0, 119, 204, 0.3);
  }
`;

export const Button = styled.button`
  padding: 14px 24px;
  background-color: #0077cc;
  color: #fff;
  border: none;
  border-radius: 10px;
  font-size: 1rem;
  font-weight: 600;
  cursor: pointer;
  transition: background 0.3s ease;

  &:hover {
    background-color: #005fa3;
  }

  &:active {
    background-color: #004b82;
  }
`;
