import React, { useState } from 'react';
import { Container, NavItem, NavGroup, Logout } from './styles';
import { useNavigate } from 'react-router-dom';
import { FiLogOut } from 'react-icons/fi';
import ModalCadastro from '../../pages/Cadastro/components/ModalCadastro';

const Header = () => {
  const navigate = useNavigate();
  const [showModal, setShowModal] = useState(false);

  const handleOpenModal = () => {
    setShowModal(true);
  };

  return (
    <Container>
      <NavGroup>
        <NavItem href="/dashboard">Home</NavItem>
        <NavItem href="/segurados">Segurado</NavItem>
        <NavItem href="/seguradoras">Seguradora</NavItem>
        <NavItem onClick={handleOpenModal}>Cadastro</NavItem>
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