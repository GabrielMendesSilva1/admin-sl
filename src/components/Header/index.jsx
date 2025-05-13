import React from 'react';
import { Container, NavItem, NavGroup, Logout } from './styles';
import { useNavigate } from 'react-router-dom';
import { FiLogOut } from 'react-icons/fi';

const Header = () => {
  const navigate = useNavigate();

  return (
    <Container>
      <NavGroup>
        <NavItem href="/dashboard">Home</NavItem>
        <NavItem href="/segurados">Segurado</NavItem>
        <NavItem href="/seguradoras">Seguradora</NavItem>
        <NavItem href="/cadastro">Cadastro</NavItem>
        <NavItem href="/apolice">Apólice</NavItem>
      </NavGroup>

      <Logout onClick={() => navigate('/')}>
        <FiLogOut size={20} style={{ marginRight: 8 }} />
      </Logout>
    </Container>
  );
};

export default Header;