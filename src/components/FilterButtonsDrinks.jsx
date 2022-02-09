import React, { useContext } from 'react';
import RecipeContext from '../context/RecipesContext';
import Button from './Button';

function FilterButtonsDrinks() {
  const FIVE = 5;
  const {
    arrayDrinks,
    filtedDrinks,
    setFiltedDrinks,
    newListDrinks } = useContext(RecipeContext);

  function filterByCategory(cat) {
    if (filtedDrinks.every((item) => item.strCategory === cat)) {
      return setFiltedDrinks(arrayDrinks);
    }
    if (cat) {
      return setFiltedDrinks(arrayDrinks.filter((recipe) => recipe.strCategory === cat));
    }
    setFiltedDrinks(arrayDrinks);
  }

  return (
    <div className="flex flex-wrap m-4">
      <div
        className="bg-indigo-500 text-white font-bold
          border rounded w-24 text-center m-1"
      >
        <Button
          dataTestId="All-category-filter"
          handleClick={ () => filterByCategory() }
        >
          All
        </Button>
      </div>
      {newListDrinks.slice(0, FIVE).map((categoryName) => (
        <div
          className="bg-indigo-500 text-white font-bold
            border rounded w-24 text-center m-1"
          key={ categoryName.strCategory }
        >
          <Button
            dataTestId={ `${categoryName.strCategory}-category-filter` }
            handleClick={ () => filterByCategory(categoryName.strCategory) }
          >
            {categoryName.strCategory}
          </Button>
        </div>
      ))}
    </div>
  );
}

export default FilterButtonsDrinks;
