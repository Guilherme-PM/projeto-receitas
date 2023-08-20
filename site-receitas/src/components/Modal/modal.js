import React from 'react';
import Modal from 'react-modal';
import { BsStar, BsStarFill } from 'react-icons/bs';

Modal.setAppElement('#root');

function ModalRecipes({recipe, onClose}) {
  const [modalIsOpen, setIsOpen] = React.useState(false);

  function abrirModal() {
    setIsOpen(true);
  }

  function fecharModal() {
    setIsOpen(false);
  }

  return (
    <div>
      <button onClick={abrirModal}>Abrir modal</button>
      <Modal
        isOpen={modalIsOpen}
        onRequestClose={fecharModal}
        contentLabel="Modal de exemplo"
      >
        <h2>Olá</h2>
        <button onClick={fecharModal}>Fechar</button>
        <div>Eu sou uma modal não</div>
        <img src={recipe.url} alt={recipe.titulo} />
        <h3>{recipe.titulo}</h3>
        <p className="recipe-type">{recipe.tipo}</p>
        <p className="recipe-description">{recipe.descricao}</p>
        <div className="star-rating">
            {Array.from({ length: 5 }).map((_, index) => (
            index < recipe.estrelas ? (
                <BsStarFill key={index} className="star-icon" />
            ) : (
                <BsStar key={index} className="star-icon" />
            )
            ))}
        </div>
      </Modal>
    </div>
  );
}

export default ModalRecipes;