import React from 'react';
import RecipesGrid from './RecipesGrid';

const Main = ({ recipes, selectRecipe, selectedRecipeNames }) => {
  return (
    <div className="w-3/4 flex flex-col overflow-hidden">
      <div className="flex items-center shadow z-10 h-20 text-2xl font-bold pl-6">Recipes</div>
      <div className="flex-1 bg-gray-100 overflow-auto">
        <RecipesGrid
          recipes={recipes}
          selectedRecipeNames={selectedRecipeNames}
          selectRecipe={selectRecipe}
        />
      </div>
    </div>
  );
};

export default Main;
