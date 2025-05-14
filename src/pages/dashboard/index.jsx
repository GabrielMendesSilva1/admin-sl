import React from 'react';
import { Container, Grid, Card, Title } from './styles';
import { FiLogOut } from 'react-icons/fi';
import ModalCadastro from '../Cadastro/components/ModalCadastro';
import { useDashboard } from './useDashboard';

const Dashboard = () => {
  const { cards, showModal, handleCardClick, closeModal } = useDashboard();

  return (
    <Container>
      <Title>SL Assistência de Seguros</Title>
      <Grid>
        {cards.map((card, idx) => (
          <Card key={idx} onClick={() => handleCardClick(card)}>
            <span className="icon">
              {card.iconComponent === 'logout' ? <FiLogOut size={24} /> : card.icon}
            </span>
            <h3>{card.title}</h3>
          </Card>
        ))}
      </Grid>

      {showModal && <ModalCadastro onClose={closeModal} />}
    </Container>
  );
};

export default Dashboard;
