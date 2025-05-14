import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

export const useDashboard = () => {
  const [showModal, setShowModal] = useState(false);
  const navigate = useNavigate(); // Adicionando o hook navigate

  const cards = [
    { title: 'Segurados', icon: '🧑‍🤝‍🧑', path: '/segurados' },
    { title: 'Seguradoras', icon: '🏢', path: '/seguradoras' },
    { title: 'Cadastro', icon: '📝', isModal: true },
    { title: 'Sair', icon: '/', iconComponent: 'logout', path: '/' },
  ];

  const handleCardClick = (card) => {
    if (card.isModal) {
      setShowModal(true);
    } else if (card.title === 'Sair') {
      navigate(card.path); // Usando navigate para a navegação
    } else {
      navigate(card.path); // Usando navigate para as outras navegações
    }
  };

  const closeModal = () => setShowModal(false);

  return {
    cards,
    showModal,
    handleCardClick,
    closeModal,
  };
};
