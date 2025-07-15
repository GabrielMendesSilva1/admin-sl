import styled, {createGlobalStyle} from "styled-components";
import background from '../../../assets/insurance-bg.jpeg';

export const PageWrapper = styled.div`
  background: url(${background}) center/cover no-repeat fixed;
  min-height: 100vh;
  width: 100%;
  overflow-x: hidden;
`;

export const Container = styled.div`
  padding: 32px;
  max-width: 960px;
  margin: 0 auto;
  background: #ffffffcc;
  border-radius: 16px;
  box-shadow: 0 4px 16px rgba(0,0,0,0.08);
  border: 1px solid #e6e8eb;
  margin-top: 60px;
  margin-bottom: 60px;
  overflow-x: hidden;  /* Impede rolagem lateral */
`;
export const PrintStyles = createGlobalStyle`
  @media print {
    body * {
      visibility: hidden;
    }
    #printable-panel, #printable-panel * {
      visibility: visible;
    }
    #printable-panel {
      position: absolute;
      left: 0;
      top: 0;
      width: 100%;
    }
  }
`;

export const Input = styled.input`
  padding: 8px 12px;
  font-size: 1rem;
  border: 1px solid #ccc;
  border-radius: 6px;
  width: 100%;
  box-sizing: border-box;
  &:focus {
    outline: none;
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
 margin-bottom: -30px;
 margin-left: 400px;
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
  font-weight: 700;
  color: #222;
  margin-right: 6px;
  display: inline-block;
  min-width: 140px;
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
  grid-template-columns: repeat(auto-fill, minmax(180px, 1fr));
  gap: 16px;
  width: 100%;
  box-sizing: border-box;  /* Certifique-se de que o box-sizing está configurado para evitar overflow */
  padding: 0;  /* Remova ou ajuste o padding */
`;

