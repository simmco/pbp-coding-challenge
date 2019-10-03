import React from 'react';

const Recipe = ({ recipe, selectRecipe, selectedRecipeNames }) => {
  const isSelected = selectedRecipeNames.includes(recipe.name);
  return (
    <div
      className={`transition-box-shadow-300 bg-white shadow rounded h-auto overflow-hidden hover:shadow-lg cursor-pointer border border-solid ${
        isSelected ? 'border-indigo-800' : ''
      }`}
      onClick={() => selectRecipe(recipe.name)}
    >
      <div className="flex flex-col">
        <div
          className={`flex items-center justify-center border-b h-12 text-xl ${
            isSelected ? 'bg-indigo-800 text-indigo-100' : ''
          }`}
        >
          {recipe.name}
        </div>
        <div className="flex flex-col p-6 text-gray-700">
          <div className="flex">
            <div className="flex-1">
              <div className="text-indigo-500">Type</div>
              <div className="font-medium">{recipe.type}</div>
            </div>
            <div className="flex-1">
              <div className="text-indigo-500">Cook time</div>
              <div className="font-medium">{recipe.cook_time}</div>
            </div>
          </div>
          <div>
            <div className="text-indigo-500  pt-3">Ingredients</div>
            <ul className="ingredients-grid list-disc px-4">
              {recipe.ingredients.map(ingredient => (
                <li key={ingredient} className="font-medium">
                  {ingredient}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Recipe;
