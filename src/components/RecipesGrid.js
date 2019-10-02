import React from 'react';

const RecipesGrid = ({ recipes, selectRecipe, selectedRecipeNames }) => {
  return (
    <div className="recipes-grid p-6">
      {recipes.map(recipe => (
        <div
          className={`bg-white shadow rounded h-auto overflow-hidden hover:shadow-md cursor-pointer ${
            selectedRecipeNames.includes(recipe.name) ? 'bg-indigo-100' : 'bg-white'
          }`}
          onClick={() => selectRecipe(recipe.name)}
        >
          <div className="flex flex-col">
            <div className="flex items-center justify-center border-b h-12 text-xl">
              {recipe.name}
            </div>
            <div className="flex flex-col p-6 text-gray-700">
              <div className="flex">
                <div className="flex-1">
                  <div className="text-indigo-500">Type</div>
                  <div className="font-medium">{recipe.type}</div>
                </div>
                <div className="flex-1">
                  <div className="text-indigo-500">Time</div>
                  <div className="font-medium">{recipe.cook_time}</div>
                </div>
              </div>
              <div>
                <div className="text-indigo-500  pt-2">Ingredients</div>
                <ul className="ingredients-grid list-disc px-4 py-1">
                  {recipe.ingredients.map(ingredient => (
                    <li className="font-medium">{ingredient}</li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default RecipesGrid;
