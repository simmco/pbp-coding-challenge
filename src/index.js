import React from 'react';
import ReactDOM from 'react-dom';
import SideBar from './components/SideBar';
import Main from './components/Main';
import recipes from './recipes.json';

import './styles/tailwind.css';

function App() {
  const [selectedRecipeNames, setSelectedRecipeNames] = React.useState([]);
  const ingredientsFromSelection = recipes
    .filter(recipe => selectedRecipeNames.includes(recipe.name))
    .flatMap(recipe => recipe.ingredients);
  const sortedIngredients = [...new Set(ingredientsFromSelection)].sort();

  const handleSelectRecipe = name => {
    setSelectedRecipeNames(
      selectedRecipeNames.includes(name)
        ? selectedRecipeNames.filter(rec => rec !== name)
        : [...selectedRecipeNames, name]
    );
  };

  return (
    <div className="flex h-screen">
      <SideBar ingredients={sortedIngredients} />
      <Main
        recipes={recipes}
        selectRecipe={handleSelectRecipe}
        selectedRecipeNames={selectedRecipeNames}
      />
    </div>
  );
}

const rootElement = document.getElementById('root');
ReactDOM.render(<App />, rootElement);
