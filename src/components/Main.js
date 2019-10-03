import React from 'react';
import Recipe from './Recipe';

const Main = ({ recipes, selectRecipe, selectedRecipeNames }) => {
  return (
    <div className="md:w-3/4 lg:w-3/4 xl:w-3/4 flex flex-col overflow-hidden">
      <div className="flex items-center shadow z-10 h-20 text-2xl font-medium pl-6">Recipes</div>
      <div className="flex-1 bg-gray-100 overflow-auto">
        <div className="recipes-grid p-6">
          {recipes.map(recipe => (
            <Recipe
              key={recipe.name}
              recipe={recipe}
              selectedRecipeNames={selectedRecipeNames}
              selectRecipe={selectRecipe}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Main;
