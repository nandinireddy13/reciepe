// src/components/IngredientPage.jsx
import React, { useState } from 'react';
import { useLocation } from 'react-router-dom';
import recipes from '../data/recipes'; // Import your recipes data
import './IngredientPage.css';

const IngredientPage = () => {
  const location = useLocation();
  const params = new URLSearchParams(location.search);
  const category = params.get('category');
  const [inputIngredients, setInputIngredients] = useState('');
  const [filteredRecipes, setFilteredRecipes] = useState([]);
  const [hasSearched, setHasSearched] = useState(false); // New state to track if search was done

  const handleInputChange = (e) => {
    setInputIngredients(e.target.value);
  };

  const handleRecipeSearch = () => {
    setHasSearched(true); // Set this to true when the search is performed
    const ingredientsArray = inputIngredients.split(',').map(ingredient => ingredient.trim().toLowerCase());
    const availableRecipes = recipes[category] || [];
    const matchingRecipes = availableRecipes.filter(recipe =>
      recipe.ingredients.some(ingredient => ingredientsArray.includes(ingredient.toLowerCase()))
    );

    setFilteredRecipes(matchingRecipes);
  };

  return (
    <div className="ingredient-page">
      <div className="ingredient-container">
        <h1>Enter Available Ingredients</h1>
        <p>You selected: {category.charAt(0).toUpperCase() + category.slice(1)} Recipes</p>
        <input 
          type="text" 
          placeholder="Enter ingredients (comma-separated)" 
          value={inputIngredients}
          onChange={handleInputChange}
        />
        <button onClick={handleRecipeSearch}>Get Recipe</button>

        {/* Only show the results if a search has been made */}
        {hasSearched && (
          <div>
            {filteredRecipes.length > 0 ? (
              <div>
                <h2>Matching Recipes</h2>
                <ul>
                  {filteredRecipes.map((recipe, index) => (
                    <li key={index}>
                      <h3>{recipe.name}</h3>
                      <p><strong>Ingredients:</strong> {recipe.ingredients.join(', ')}</p>
                      <p><strong>Preparation:</strong> {recipe.preparation}</p>
                    </li>
                  ))}
                </ul>
              </div>
            ) : (
              <p>No recipes match the entered ingredients.</p>
            )}
          </div>
        )}
      </div>
    </div>
  );
};

export default IngredientPage;
