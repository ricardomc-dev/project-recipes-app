import React, { useContext, useEffect } from 'react';
import { Link, useHistory } from 'react-router-dom';
import Header from '../components/Header';
import RecipeContext from '../context/RecipesContext';

function Foods() {
  const {
    handleClickFoods,
    arrayMeals,
  } = useContext(RecipeContext);

  const showSearchBtn = true;
  const history = useHistory();

  const handleOneItem = () => {
    const ONE = 1;
    if (arrayMeals.length === ONE) {
      return history.push(`/foods/${arrayMeals[0].idMeal}`);
    }
  };

  useEffect(() => {
    handleOneItem();
  });

  return (
    <>
      <Header
        showSearchBtn={ showSearchBtn }
        handleClick={ handleClickFoods }
      >
        Foods
      </Header>
      <main>
        {arrayMeals.map((meal) => (
          <div key={ meal.idMeal }>
            <p>{meal.strMeal}</p>
            <img src={ `${meal.strMealThumb}/preview` } alt={ meal.strMeal } />
            <Link to={ `/foods/${meal.idMeal}` }>Detalhes</Link>
          </div>
        ))}
      </main>
    </>
  );
}

export default Foods;
