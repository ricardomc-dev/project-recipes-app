import React, { useContext } from 'react';
import RecipeContext from '../context/RecipesContext';
import Button from './Button';

function FilterButtonsDrinks() {
  const FIVE = 5;
  const { newListDrinks } = useContext(RecipeContext);
  console.log(newListDrinks);
  return (
    <div className="filterButtons">
      <Button>
        All
      </Button>
      {newListDrinks.slice(0, FIVE).map((categoryName) => (
        <div
          className="newList"
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
