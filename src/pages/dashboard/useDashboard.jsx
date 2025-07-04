import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

export const useDashboard = () => {
  const [showModal, setShowModal] = useState(false);
  const navigate = useNavigate();

  const cards = [
    { title: 'Segurados', icon: '🧑‍🤝‍🧑', path: '/segurados' },
    { title: 'Seguradoras', icon: '🏢', path: '/seguradoras' },
    { title: 'Relatórios', icon: '📊', path: '/relatorios/seguros-a-vencer' }, // adicionado
    { title: 'Cadastro', icon: '📝', isModal: true },
    { title: 'Sair', icon: '/', iconComponent: 'logout', path: '/' },
  ];

  const handleCardClick = (card) => {
    if (card.isModal) {
      setShowModal(true);
    } else {
      navigate(card.path);
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
