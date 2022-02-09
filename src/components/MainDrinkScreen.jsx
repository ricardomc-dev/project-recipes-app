import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import RecipeContext from '../context/RecipesContext';

function MainFoodScreen() {
  const { drinksData } = useContext(RecipeContext);
  const TWELVE = 12;

  return (
    <main className="flex flex-wrap justify-evenly">
      {drinksData.slice(0, TWELVE).map((drink, id) => (
        <div
          className=" mb-4 drop-shadow-xl rounded-md"
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
            <p data-testid={ `${id}-card-name` }>{drink.strDrink}</p>
          </Link>
          <br />
        </div>
      ))}
    </main>
  );
}

export default MainFoodScreen;
