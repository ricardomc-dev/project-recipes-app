import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import RecipeContext from '../context/RecipesContext';

function MainFoodScreen() {
  const { mealsData } = useContext(RecipeContext);
  const TWELVE = 12;

  return (
    <main className="flex flex-wrap justify-evenly">
      {mealsData.slice(0, TWELVE).map((meal, id) => (
        <div
          className=" mb-4 drop-shadow-xl rounded-md"
          data-testid={ `${id}-recipe-card` }
          key={ meal.idMeal }
        >
          <Link to={ `/foods/${meal.idMeal}` }>
            <img
              src={ `${meal.strMealThumb}` }
              alt={ meal.strMeal }
              data-testid={ `${id}-card-img` }
              width="150"
              height="150"
            />
            <p data-testid={ `${id}-card-name` }>{meal.strMeal}</p>
          </Link>
        </div>
      ))}
    </main>
  );
}

export default MainFoodScreen;
