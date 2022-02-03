import React, { useContext, useEffect, useState } from 'react';
import { Link, useHistory } from 'react-router-dom';
import Header from '../components/Header';
import RecipeContext from '../context/RecipesContext';
import MainFoodScreen from '../components/MainFoodScreen';
import FilterButtonsFoods from '../components/FilterButtonsFoods';

function Foods() {
  const TWELVE = 12;

  const [newArrayMeals, setNewArrayMeals] = useState([]);

  const {
    handleClickFoods,
    arrayMeals,
    showPage,
  } = useContext(RecipeContext);

  const showSearchBtn = true;
  const history = useHistory();

  useEffect(() => {
    const ONE = 1;
    if (arrayMeals !== null && arrayMeals.length === ONE) {
      return history.push(`/foods/${arrayMeals[0].idMeal}`);
    }
  }, [arrayMeals, history]);

  useEffect(() => {
    if (arrayMeals !== null) {
      return setNewArrayMeals(arrayMeals.slice(0, TWELVE));
    }
  }, [arrayMeals]);

  return (
    <>
      <Header
        showSearchBtn={ showSearchBtn }
        handleClick={ handleClickFoods }
      >
        Foods
      </Header>
      <FilterButtonsFoods />
      <main>
        { showPage && <MainFoodScreen /> }
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
          </div>
        ))}
      </main>
    </>
  );
}

export default Foods;
