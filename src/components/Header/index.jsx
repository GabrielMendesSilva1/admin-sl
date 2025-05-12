import React from 'react';
import { Container, NavItem, NavGroup, Logout } from './styles';
import { useNavigate } from 'react-router-dom';

const Header = ({ onLogout }) => {
  const navigate = useNavigate();

  return (
    <Container>
      <NavGroup>
        <NavItem href="/dashboard">Home</NavItem>
        <NavItem href="/segurados">Segurado</NavItem>
        <NavItem href="/cadastro">Cadastro</NavItem>
        <NavItem href="/apolice">Apólice</NavItem>
      </NavGroup>
      <Logout onClick={() => navigate('/')}>Sair</Logout>
    </Container>
  );
};

export default Header;
