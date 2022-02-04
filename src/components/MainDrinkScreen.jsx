import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import RecipeContext from '../context/RecipesContext';

function MainFoodScreen() {
  const { drinksData } = useContext(RecipeContext);
  const TWELVE = 12;

  return (
    <>
      {drinksData.slice(0, TWELVE).map((drink, id) => (
        <div data-testid={ `${id}-recipe-card` } key={ drink.idDrink }>
          <Link to={ `/drinks/${drink.idDrink}` }>
            <div>
              <img
                src={ `${drink.strDrinkThumb}/preview` }
                alt={ drink.strDrink }
                data-testid={ `${id}-card-img` }
              />
              <p data-testid={ `${id}-card-name` }>{drink.strDrink}</p>
            </div>
          </Link>
          <br />
        </div>
      ))}
    </>
  );
}

export default MainFoodScreen;
