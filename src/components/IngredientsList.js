import React from 'react';

const IngredientsList = ({ ingredients }) => {
  return (
    <div className="flex flex-col overflow-auto">
      {ingredients.map(ingredient => (
        <div key={ingredient} className="px-6 py-3 font-medium border-b border-gray-200">
          {ingredient}
        </div>
      ))}
    </div>
  );
};

export default IngredientsList;
