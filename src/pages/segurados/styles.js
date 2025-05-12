import styled from 'styled-components';
import background from '../../assets/insurance-bg.jpeg';

export const Container = styled.div`
  width: 100vw;
  min-height: 100vh;
  background: url(${background}) center/cover no-repeat fixed;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 2rem;
  box-sizing: border-box;
`;

export const FilterBox = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr) auto; /* 4 campos + botão */
  gap: 2rem;
  align-items: center;
  margin-bottom: 2rem;
  width: 100%;
  max-width: 1000px;
`;

export const Field = styled.div`
  display: flex;
  flex-direction: column;
`;

export const Label = styled.span`
  font-weight: 600;
  min-width: 140px;
  color: #222;
`;

export const LabelUF = styled.span`
  font-weight: 600;
  min-width: 140px;
  color: #222;
  margin-left: 158px;
`

export const LabelFilter = styled.span`
  font-weight: 600;
  min-width: 140px;
  color: #FFFF;
`;

export const Input = styled.input`
  width: 100%;
  padding: 0.5rem 0.75rem;
  border: 2px solid #ccc;
  border-radius: 8px;
  font-size: 1rem;
  outline: none;
  transition: border-color 0.2s;

  &:focus {
    border-color: #0077cc;
  }
`;

export const Button = styled.button`
  padding: 0.75rem 1.5rem;
  background: #0077cc;
  color: #fff;
  border: none;
  border-radius: 8px;
  cursor: pointer;
  font-size: 1rem;
  transition: background 0.2s;
  margin-top: 26px;
  margin-left: 12px;
  &:hover {
    background: #005fa3;
  }
`;

export const ButtonNavContainer = styled.div`
 display: flex;
 gap: 1rem; 
 margin-bottom: 1.5rem;;
`;

export const Panel = styled.div`
  width: 100%;
  max-width: 1000px;
  background: rgba(255,255,255,0.95);
  border-radius: 12px;
  padding: 2rem;
  box-shadow: 0 4px 12px rgba(0,0,0,0.1);
`;

export const Row = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 1rem 2rem;
  margin-bottom: 1rem;
  align-items: center;
  padding-bottom: 0.75rem;
  border-bottom: 1px solid rgba(0, 0, 0, 0.1);
`;

export const PageTitle = styled.h1`
  font-size: 1.5rem;
  font-weight: 700;
  color: #333;
  margin-bottom: 2rem;
  margin-top: 0rem;
  text-align: center;
`;

export const Value = styled.span`
  flex: 1;
  font-weight: 400;
  color: #444;
`;

export const ValueUF = styled.span`
  flex: 1;
  font-weight: 400;
  color: #444;
  margin-left: -99px;
`;