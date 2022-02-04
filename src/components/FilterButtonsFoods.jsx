import React, { useContext } from 'react';
import RecipeContext from '../context/RecipesContext';
import Button from './Button';

function FilterButtonsFoods() {
  const FIVE = 5;
  const { newListFoods } = useContext(RecipeContext);

  const imprime = () => {
    console.log('Imprimiu');
  };

  return (
    <div className="filterButtons">
      <Button
        handleClick={ imprime }
      >
        All
      </Button>
      {newListFoods.slice(0, FIVE).map((categoryName) => (
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

export default FilterButtonsFoods;
