import React from 'react';
import IngredientsList from './IngredientsList';

const SideBar = ({ ingredients }) => {
  return (
    <div className="w-1/4 bg-indigo-800 text-indigo-100 flex flex-col">
      <div className="flex items-center h-20 border-gray-200 border-b text-2xl font-bold p-6">
        Ingredients List
      </div>
      <IngredientsList ingredients={ingredients} />
    </div>
  );
};

export default SideBar;
