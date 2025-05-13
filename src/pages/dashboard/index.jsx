import React from 'react';
import { Container, Grid, Card, Title } from './styles';
import { FiLogOut } from 'react-icons/fi';

const Dashboard = () => {
  const cards = [
    { title: 'Segurados', icon: '🧑‍🤝‍🧑', path: '/segurados' },
    { title: 'Seguradoras', icon: '🏢', path: '/seguradoras' },
    { title: 'Cadastro', icon: '📝', path: '/cadastro' },
    { title: 'Sair', icon: <FiLogOut size={24} />, path: '/' },
  ];

  return (
    <Container>
      <Title>SL Assistência de Seguros</Title>
      <Grid>
        {cards.map((card, idx) => (
          <Card key={idx} onClick={() => window.location.href = card.path}>
            <span className="icon">{card.icon}</span>
            <h3>{card.title}</h3>
          </Card>
        ))}
      </Grid>
    </Container>
  );
};

export default Dashboard;
