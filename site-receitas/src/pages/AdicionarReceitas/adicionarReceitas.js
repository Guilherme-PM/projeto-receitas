import './adicionarReceitas.css';
import RecipeForm from '../../components/ReceitasFormulario/receitasFormulario';
import React, { useState, useEffect } from 'react';

const AdicionarReceitas = () => {
  const [recipe, setRecipe] = useState({ title: '', ingredients: '', instructions: '', image: '' });
  const [recipes, setRecipes] = useState([]);

  useEffect(() => {
    const savedRecipes = localStorage.getItem('recipes');
    if (savedRecipes) {
      setRecipes(JSON.parse(savedRecipes));
    }
  }, []);

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setRecipe((prevRecipe) => ({
      ...prevRecipe,
      [name]: value,
    }));
  };

  const handleRecipeSubmit = (newRecipe) => {
    setRecipes([...recipes, newRecipe]);
    localStorage.setItem('recipes', JSON.stringify([...recipes, newRecipe]));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    handleRecipeSubmit(recipe);
    setRecipe({ title: '', ingredients: '', instructions: '', image: '' });
  };

  return (
    <div className='caixa'>
      <h1 className='titulo'>Adicionar Receitas</h1>
      <RecipeForm
        onRecipeSubmit={handleRecipeSubmit}
        recipe={recipe}
        onInputChange={handleInputChange}
        onSubmit={handleSubmit}/>
      <h2>Receitas:</h2>
      <div className="recipes">
        <div className="recipe">
          <ul>
            {recipes.map((recipe, index) => (
              <li key={index}>
                <p className="recipe-type">{recipe.title}</p>
                <p className="recipe-description">Ingredientes: {recipe.ingredients}</p>
                <p className='instrucoes'>Instruções: {recipe.instructions}</p>
                <img src={recipe.image} alt=''/>
              </li>
            ))}
          </ul>    
        </div>
      </div>
    </div>
  );
};

export default AdicionarReceitas;
