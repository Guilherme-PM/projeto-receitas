import React, { useState } from 'react';
import './receitasFormulario.css';

const RecipeForm = ({ onRecipeSubmit }) => {
  const [recipe, setRecipe] = useState({ title: '', ingredients: '', instructions: '', image: '' });

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setRecipe((prevRecipe) => ({
      ...prevRecipe,
      [name]: value,
    }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    onRecipeSubmit(recipe);
    setRecipe({ title: '', ingredients: '', instructions: '', image: '' });
  };

  return (
    <form onSubmit={handleSubmit}>
      <div className='caixa'>
        <label>Título:</label>
        <br/>
        <input className='campo-input' type="text" placeholder="Título"name="title" value={recipe.title} onChange={handleInputChange} />
        <br/>
        <label>Ingredientes:</label>
        <br/>
        <textarea className='campo-input' type="text" placeholder="Ingredientes..." name="ingredients" value={recipe.ingredients} onChange={handleInputChange} />
        <br/>
        <label>Instruções:</label>
        <br/>
        <textarea className='campo-input' type="text" name="instructions" placeholder="Instruções..."value={recipe.instructions} onChange={handleInputChange} />
        <br/>
        <label>Imagem:</label>
        <br/>
        <textarea className='campo-input'name="image" placeholder="URL da imagem..." value={recipe.image} onChange={handleInputChange} />
        <br/>
        <button className='view-details-button2' type="submit">Salvar Receita</button>
      </div>
    </form>
  );
};

export default RecipeForm;