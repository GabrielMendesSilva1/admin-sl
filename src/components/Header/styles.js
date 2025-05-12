import styled from 'styled-components';

export const Container = styled.header`
  width: 100vw;
  height: 60px;
  background-color: #0077cc;
  color: white;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 2rem;
  box-shadow: 0 2px 4px rgba(0,0,0,0.1);
  margin-top: -35px;
  margin-bottom: 20px;
`;

export const NavGroup = styled.nav`
  display: flex;
  gap: 2rem;
`;

export const NavItem = styled.a`
  color: white;
  text-decoration: none;
  font-weight: 500;
  cursor: pointer;
  margin-left: 200px;
  align-items: center;
  &:hover {
    text-decoration: underline;
  }
`;

export const Logout = styled.button`
  background: none;
  border: none;
  color: white;
  font-weight: bold;
  cursor: pointer;

  &:hover {
    text-decoration: underline;
  }
`;
