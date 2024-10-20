import React, { useState } from 'react';
import './App.css';

const recipesData = {
  Breakfast: [
    {
      name: 'Pancakes',
      ingredients: ['flour', 'milk', 'eggs', 'sugar', 'baking powder'],
      instructions: 'Mix all ingredients and cook on a hot griddle until golden brown.'
    },
    {
      name: 'Oatmeal',
      ingredients: ['oats', 'water', 'salt', 'milk', 'honey'],
      instructions: 'Boil water, add oats and salt, and cook until thick. Serve with milk and honey.'
    },
    {
      name: 'Avocado Toast',
      ingredients: ['bread', 'avocado', 'salt', 'pepper', 'lemon juice'],
      instructions: 'Toast the bread, mash avocado with salt, pepper, and lemon juice, and spread on top.'
    }
  ],
  Salads: [
    {
      name: 'Caesar Salad',
      ingredients: ['romaine lettuce', 'croutons', 'parmesan cheese', 'Caesar dressing'],
      instructions: 'Toss all ingredients together and serve chilled.'
    },
    {
      name: 'Greek Salad',
      ingredients: ['cucumber', 'tomato', 'olive oil', 'feta cheese', 'red onion', 'olives'],
      instructions: 'Chop vegetables and mix with olive oil, feta cheese, and olives.'
    },
    {
      name: 'Caprese Salad',
      ingredients: ['tomatoes', 'mozzarella cheese', 'basil', 'olive oil', 'balsamic vinegar'],
      instructions: 'Layer tomatoes and mozzarella, sprinkle with basil, drizzle with olive oil and balsamic vinegar.'
    }
  ],
  Appetizers: [
    {
      name: 'Bruschetta',
      ingredients: ['bread', 'tomato', 'basil', 'garlic'],
      instructions: 'Toast bread and top with a mixture of diced tomato, basil, and garlic.'
    },
    {
      name: 'Stuffed Mushrooms',
      ingredients: ['mushrooms', 'cream cheese', 'garlic', 'herbs', 'bread crumbs'],
      instructions: 'Stuff mushrooms with a mixture of cream cheese, garlic, and herbs, then bake until golden.'
    },
    {
      name: 'Spring Rolls',
      ingredients: ['rice paper', 'shrimp', 'lettuce', 'carrots', 'peanut sauce'],
      instructions: 'Wrap shrimp and vegetables in rice paper and serve with peanut sauce.'
    }
  ],
  Soups: [
    {
      name: 'Tomato Soup',
      ingredients: ['tomatoes', 'onion', 'garlic', 'vegetable broth', 'cream'],
      instructions: 'Sauté onions and garlic, add tomatoes and broth, simmer, then blend and add cream.'
    },
    {
      name: 'Minestrone Soup',
      ingredients: ['vegetable broth', 'pasta', 'beans', 'carrots', 'celery', 'tomatoes'],
      instructions: 'Cook vegetables in broth, add pasta and beans, and simmer until cooked.'
    },
    {
      name: 'Chicken Noodle Soup',
      ingredients: ['chicken', 'noodles', 'carrots', 'celery', 'broth'],
      instructions: 'Cook chicken and vegetables in broth, add noodles, and simmer until everything is tender.'
    }
  ],
  Desserts: [
    {
      name: 'Chocolate Cake',
      ingredients: ['flour', 'cocoa powder', 'sugar', 'eggs', 'butter', 'baking powder'],
      instructions: 'Mix ingredients and bake at 350°F (175°C) for 30-35 minutes.'
    },
    {
      name: 'Cheesecake',
      ingredients: ['cream cheese', 'sugar', 'eggs', 'vanilla', 'graham cracker crust'],
      instructions: 'Blend ingredients and pour into crust, bake at 325°F (160°C) for 50 minutes.'
    },
    {
      name: 'Fruit Salad',
      ingredients: ['mixed fruits', 'honey', 'lime juice'],
      instructions: 'Chop fruits, mix with honey and lime juice, and serve chilled.'
    }
  ],
  Main: [
    {
      name: 'Spaghetti Carbonara',
      ingredients: ['spaghetti', 'eggs', 'parmesan cheese', 'bacon', 'black pepper'],
      instructions: 'Cook spaghetti, mix with beaten eggs and cheese, then stir in cooked bacon and pepper.'
    },
    {
      name: 'Chicken Curry',
      ingredients: ['chicken', 'curry powder', 'coconut milk', 'onions', 'garlic'],
      instructions: 'Sauté onions and garlic, add chicken and curry powder, then stir in coconut milk and simmer.'
    },
    {
      name: 'Vegetable Stir Fry',
      ingredients: ['mixed vegetables', 'soy sauce', 'ginger', 'garlic', 'sesame oil'],
      instructions: 'Stir-fry vegetables with ginger and garlic in sesame oil, and add soy sauce before serving.'
    }
  ],
  Beverages: [
    {
      name: 'Mango Smoothie',
      ingredients: ['mango', 'yogurt', 'milk', 'honey'],
      instructions: 'Blend all ingredients until smooth and serve chilled.'
    },
    {
      name: 'Lemonade',
      ingredients: ['lemons', 'water', 'sugar', 'ice'],
      instructions: 'Mix lemon juice with water and sugar, stir well, and serve over ice.'
    },
    {
      name: 'Iced Coffee',
      ingredients: ['coffee', 'milk', 'ice', 'sugar'],
      instructions: 'Brew coffee, let cool, then mix with milk and serve over ice with sugar.'
    }
  ],
  Snacks: [
    {
      name: 'Popcorn',
      ingredients: ['corn kernels', 'butter', 'salt'],
      instructions: 'Pop corn kernels in a pot, then toss with melted butter and salt.'
    },
    {
      name: 'Nachos',
      ingredients: ['tortilla chips', 'cheese', 'jalapeños', 'salsa'],
      instructions: 'Top tortilla chips with cheese and jalapeños, bake until cheese is melted, and serve with salsa.'
    },
    {
      name: 'Fruit and Nut Mix',
      ingredients: ['mixed nuts', 'dried fruit', 'chocolate chips'],
      instructions: 'Mix all ingredients in a bowl and enjoy as a healthy snack.'
    }
  ]
};

const categories = Object.keys(recipesData);

function App() {
  const [selectedCategory, setSelectedCategory] = useState('');

  const handleCategoryClick = (category) => {
    setSelectedCategory(category);
  };

  const renderRecipes = () => {
    if (selectedCategory) {
      return recipesData[selectedCategory].map((recipe, index) => (
        <div key={index} className="recipe-card">
          <h2>{recipe.name}</h2>
          <p><strong>Ingredients:</strong> {recipe.ingredients.join(', ')}</p>
          <p><strong>Instructions:</strong> {recipe.instructions}</p>
        </div>
      ));
    }
    return <p>Please select a category to see recipes.</p>;
  };

  return (
    <div className="App">
      <h1>Recipe Categories</h1>
      <div className="categories">
        {categories.map((category, index) => (
          <button key={index} onClick={() => handleCategoryClick(category)}>
            {category}
          </button>
        ))}
      </div>
      <div className="recipe-results">
        {renderRecipes()}
      </div>
    </div>
  );
}

export default App;
