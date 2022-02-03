import React, { useContext } from 'react';
import RecipeContext from '../context/RecipesContext';

function FilterButtonsDrinks() {
  const FIVE = 5;
  const { newListDrinks } = useContext(RecipeContext);
  console.log(newListDrinks);
  return (
    <div className="filterButtons">
      {newListDrinks.slice(0, FIVE).map((categoryName) => (
        <div
          data-testid={ `${categoryName.strCategory}-category-filter` }
          key={ categoryName.strCategory }
        >
          <button
            type="button"
          >
            {categoryName.strCategory}
          </button>
        </div>
      ))}
    </div>
  );
}

export default FilterButtonsDrinks;
