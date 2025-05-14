import { useState } from 'react';

export const useDashboard = () => {
  const [showModal, setShowModal] = useState(false);

  const cards = [
    { title: 'Segurados', icon: '🧑‍🤝‍🧑', path: '/segurados' },
    { title: 'Seguradoras', icon: '🏢', path: '/seguradoras' },
    { title: 'Cadastro', icon: '📝', isModal: true },
    { title: 'Sair', icon: '/', iconComponent: 'logout' },
  ];

  const handleCardClick = (card) => {
    if (card.isModal) {
      setShowModal(true);
    } else {
      window.location.href = card.path;
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
