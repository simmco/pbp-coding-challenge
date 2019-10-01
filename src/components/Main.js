import React from 'react';
import RecipesGrid from './RecipesGrid';

const Main = () => {
  return (
    <div className="w-3/4 flex flex-col">
      <div className="shadow z-10 h-20">Head</div>
      <RecipesGrid />
    </div>
  );
};

export default Main;
