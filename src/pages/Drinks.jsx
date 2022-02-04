import React, { useContext, useEffect, useState } from 'react';
import { Link, useHistory } from 'react-router-dom';
import Header from '../components/Header';
import Footer from '../components/Footer';
import RecipeContext from '../context/RecipesContext';

function Drinks() {
  const [newArrayDrinks, setNewArrayDrinks] = useState([]);
  const {
    handleClickDrinks,
    arrayDrinks,
  } = useContext(RecipeContext);

  const showSearchBtn = true;
  const history = useHistory();

  useEffect(() => {
    const ONE = 1;
    if (arrayDrinks !== null && arrayDrinks.length === ONE) {
      return history.push(`/drinks/${arrayDrinks[0].idDrink}`);
    }
  }, [arrayDrinks, history]);

  useEffect(() => {
    const TWELVE = 12;
    if (arrayDrinks !== null && arrayDrinks) {
      return setNewArrayDrinks(arrayDrinks.slice(0, TWELVE));
    }
  }, [arrayDrinks]);

  return (
    <div className="w-full h-full flex-col items-center">
      <Header
        showSearchBtn={ showSearchBtn }
        handleClick={ handleClickDrinks }
      >
        Drinks
      </Header>
      <main>
        {newArrayDrinks.map((drink, id) => (
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
      </main>
      <Footer />
    </div>
  );
}

export default Drinks;
