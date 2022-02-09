import React, { useContext } from 'react';
import RecipeContext from '../context/RecipesContext';
import Button from './Button';

function FilterButtonsDrinks() {
  const FIVE = 5;
  const { newListDrinks } = useContext(RecipeContext);
  console.log(newListDrinks);
  return (
    <div className="flex flex-wrap m-4">
      <div
        className="bg-indigo-500 text-white font-bold
          border rounded w-24 text-center m-1"
      >
        <Button>
          All
        </Button>
      </div>
      {newListDrinks.slice(0, FIVE).map((categoryName) => (
        <div
          className="bg-indigo-500 text-white font-bold
            border rounded w-24 text-center m-1"
          data-testid={ `${categoryName.strCategory}-category-filter` }
          key={ categoryName.strCategory }
        >
          <Button>
            {categoryName.strCategory}
          </Button>
        </div>
      ))}
    </div>
  );
}

export default FilterButtonsDrinks;
