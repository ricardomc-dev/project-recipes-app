import React, { useContext } from 'react';
import RecipeContext from '../context/RecipesContext';

function FilterButtonsFoods() {
  const FIVE = 5;
  const { newListFoods } = useContext(RecipeContext);

  return (
    <div className="filterButtons">
      {newListFoods.slice(0, FIVE).map((categoryName) => (
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

export default FilterButtonsFoods;
