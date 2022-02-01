import React, { useContext, useEffect, useState } from 'react';
import { Link, useHistory } from 'react-router-dom';
import Header from '../components/Header';
import RecipeContext from '../context/RecipesContext';

function Foods() {
  const [newArrayMeals, setNewArrayMeals] = useState([]);
  const {
    handleClickFoods,
    arrayMeals,
  } = useContext(RecipeContext);

  const showSearchBtn = true;
  const history = useHistory();

  useEffect(() => {
    const ONE = 1;
    if (arrayMeals.length === ONE) {
      return history.push(`/foods/${arrayMeals[0].idMeal}`);
    }
  }, [arrayMeals, history]);

  useEffect(() => {
    const TWELVE = 12;
    setNewArrayMeals(arrayMeals.slice(0, TWELVE));
  }, [arrayMeals]);

  return (
    <>
      <Header
        showSearchBtn={ showSearchBtn }
        handleClick={ handleClickFoods }
      >
        Foods
      </Header>
      <main>
        {newArrayMeals.map((meal, id) => (
          <div data-testid={ `${id}-recipe-card` } key={ meal.idMeal }>
            <Link to={ `/foods/${meal.idMeal}` }>
              <div>
                <img
                  src={ `${meal.strMealThumb}/preview` }
                  alt={ meal.strMeal }
                  data-testid={ `${id}-card-img` }
                />
                <p data-testid={ `${id}-card-name` }>{meal.strMeal}</p>
              </div>
            </Link>
            <br />
          </div>
        ))}
      </main>
    </>
  );
}

export default Foods;
