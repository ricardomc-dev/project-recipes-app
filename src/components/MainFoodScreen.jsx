import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import RecipeContext from '../context/RecipesContext';

function MainFoodScreen() {
  const { mealsData } = useContext(RecipeContext);
  const TWELVE = 12;

  return (
    <>
      {mealsData.slice(0, TWELVE).map((meal, id) => (
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
    </>
  );
}

export default MainFoodScreen;
