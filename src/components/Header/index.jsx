import React, { useState } from 'react';
import { Container, NavItem, NavGroup, Logout } from './styles';
import { useNavigate } from 'react-router-dom';
import { FiLogOut } from 'react-icons/fi';
import ModalCadastro from '../../pages/cadastro/components/ModalCadastro';

const Header = () => {
  const navigate = useNavigate();
  const [showModal, setShowModal] = useState(false);

  const handleOpenModal = () => {
    setShowModal(true);
  };

  return (
    <Container>
      <NavGroup>
        <NavItem onClick={() => navigate('/dashboard')}>Início</NavItem>
        <NavItem onClick={() => navigate('/segurados')}>Segurado</NavItem>
        <NavItem onClick={() => navigate('/seguradoras')}>Seguradora</NavItem>
        <NavItem onClick={handleOpenModal}>Cadastro</NavItem>
        <NavItem onClick={() => navigate('/relatorios/seguros-a-vencer')}>Relatório</NavItem>
        {/*<NavItem href="/apolice">Apólice</NavItem>*/}
        {showModal && <ModalCadastro onClose={() => setShowModal(false)} />}
      </NavGroup>

      <Logout onClick={() => navigate('/')}>
        <FiLogOut size={20} style={{ marginRight: 8 }} />
      </Logout>
    </Container>
  );
};

export default Header;