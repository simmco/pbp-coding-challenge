import React from 'react';
import IngredientsList from './IngredientsList';

const SideBar = ({ ingredients }) => {
  return (
    <div className="md:w-1/4 lg:w-1/4 xl:w-1/4 bg-indigo-800 text-indigo-100 flex flex-col">
      <div className="flex items-center h-20 border-gray-200 border-b text-2xl font-medium p-6">
        Ingredients List
      </div>
      <IngredientsList ingredients={ingredients} />
    </div>
  );
};

export default SideBar;
