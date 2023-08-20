import './receitas.css';
import React, { useState, useEffect } from 'react';
import { carregarReceitas } from '../../api/api';
import { BsStar, BsStarFill } from 'react-icons/bs';
import Modal from 'react-modal';

import { Container, Row, Col } from 'react-bootstrap';


function Home() {
  const [recipes, setRecipes] = useState([]);
  const [selectedRecipe, setSelectedRecipe] = useState(null);
  const [modalIsOpen, setIsOpen] = useState(false);
  const [searchTerm, setSearchTerm] = useState('');

  useEffect(() => {
    carregarReceitas()
      .then(data => setRecipes(data))
      .catch(error => console.error('Erro ao carregar receitas:', error));
  }, []);

  const filteredRecipes = recipes.filter(recipe => {
    const searchFields = [recipe.titulo, recipe.tipo, recipe.descricao];
    return searchFields.some(field =>
      field && field.toLowerCase().includes(searchTerm.toLowerCase())
    );
  });

  function abrirModal(recipe) {
    setSelectedRecipe(recipe);
    setIsOpen(true);
  }

  function fecharModal() {
    setIsOpen(false);
    setSelectedRecipe(null);
  }

  return (
    <div>
      <div className="background-container">
        <div className="content">
          <h2>Receitas</h2>
          <input className='botao-pesquisar'
            type="text"
            placeholder="Pesquisar receitas..."
            value={searchTerm}
            onChange={e => setSearchTerm(e.target.value)}/>
          <div className="recipes">
            {filteredRecipes.map(recipe => (
              <div key={recipe.id} className="recipe">
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
                <button onClick={() => abrirModal(recipe)} className='view-details-button'>
                  Visualizar Detalhes
                </button>
              </div>
            ))}
          </div>
        </div>
      </div>
      <Modal isOpen={modalIsOpen} onRequestClose={fecharModal} contentLabel="Detalhes da Receita"
        className="modal"
        overlayClassName="modal-overlay"
        ariaHideApp={false}>
        {selectedRecipe && (
          <Container>
            <Row>
              <Col xs={12} md={6} className='imagem'>
                <img src={selectedRecipe.url} alt={selectedRecipe.titulo} className="modal-image"/>
              </Col>
              <Col xs={12} md={6} className="modal-content">
                <h3>{selectedRecipe.titulo}</h3>
                <p className="recipe-type">{selectedRecipe.tipo}</p>
                <p className="recipe-description">{selectedRecipe.descricao}</p>
                <div className="star-rating">
                  {Array.from({ length: 5 }).map((_, index) => (
                    index < selectedRecipe.estrelas ? (
                      <BsStarFill key={index} className="star-icon" />
                    ) : (
                      <BsStar key={index} className="star-icon" />
                    )
                  ))}
                </div>
                <p className='itens'>Ingredientes: {selectedRecipe.ingredientes.join(", ")}</p>
                <hr/>
                <strong>Instruções:</strong>
                <ul>
                  {selectedRecipe.instrucoes.split('\n').map((step, index) => (
                    <li className='instrucoes' key={index}>{step}</li>
                  ))}
                </ul>
              </Col>
            </Row>
          </Container>
        )}
        <button className="modal-close-button" onClick={fecharModal}>Fechar</button>
      </Modal>
    </div>
  );
}

export default Home;
