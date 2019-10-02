import React from 'react';

const IngredientsList = ({ ingredients }) => {
  return (
    <div className="flex flex-col overflow-auto">
      {ingredients.map(ingredient => (
        <div className="px-6 py-3 border-white border-b font-medium">{ingredient}</div>
      ))}
    </div>
  );
};

export default IngredientsList;
