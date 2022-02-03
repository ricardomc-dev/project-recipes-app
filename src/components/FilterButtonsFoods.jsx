import React, { useContext } from 'react';
import RecipeContext from '../context/RecipesContext';
import Button from './Button';

function FilterButtonsFoods() {
  const FIVE = 5;
  const { newListFoods } = useContext(RecipeContext);

  return (
    <div className="filterButtons">
      <Button>
        All
      </Button>
      {newListFoods.slice(0, FIVE).map((categoryName) => (
        <div
          className="newList"
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
