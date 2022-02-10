import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import RecipeContext from '../context/RecipesContext';

function MainFoodScreen() {
  const { filtedDrinks } = useContext(RecipeContext);
  const TWELVE = 12;

  return (
    <main className="flex flex-wrap justify-evenly">
      {filtedDrinks.slice(0, TWELVE).map((drink, id) => (
        <div
          className="bg-white flex justify-center my-4 max-w-2/4 shadow-lg rounded-md"
          data-testid={ `${id}-recipe-card` }
          key={ drink.idDrink }
        >
          <Link to={ `/drinks/${drink.idDrink}` }>
            <img
              src={ `${drink.strDrinkThumb}/preview` }
              alt={ drink.strDrink }
              data-testid={ `${id}-card-img` }
              width="150"
              height="150"
            />
            <p
              className="flex justify-center m-1"
              data-testid={ `${id}-card-name` }
            >
              {drink.strDrink}
            </p>
          </Link>
          <br />
        </div>
      ))}
    </main>
  );
}

export default MainFoodScreen;
