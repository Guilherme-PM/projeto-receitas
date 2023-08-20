import './home.css';
import React, { useState, useEffect } from 'react';
import { carregarReceitas } from '../../api/api';

function Home(){
  const [recipes, setRecipes] = useState([]);

  useEffect(() => {
    carregarReceitas()
      .then(data => setRecipes(data))
      .catch(error => console.error('Error fetching recipes:', error));
  }, []);

  return (
    <div>
      <div className="background-container">
        <div className="content">
          <h2>Receitas</h2>
          <div className="recipes">
            {recipes.map(recipe => (
              <div key={recipe.id} className="recipe">
                <img src={recipe.url} alt={recipe.titulo} />
                <h3>{recipe.titulo}</h3>
                <p>Ingredients: {recipe.ingredientes.join(", ")}</p>
                <p>Instructions: {recipe.instrucoes}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;

