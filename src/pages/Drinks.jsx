import React, { useContext, useEffect } from 'react';
import { Link, useHistory } from 'react-router-dom';
import Header from '../components/Header';
import RecipeContext from '../context/RecipesContext';

function Drinks() {
  const {
    handleClickDrinks,
    arrayDrinks,
  } = useContext(RecipeContext);

  const showSearchBtn = true;
  const history = useHistory();

  const handleOneItem = () => {
    const ONE = 1;
    if (arrayDrinks.length === ONE) {
      return history.push(`/drinks/${arrayDrinks[0].idDrink}`);
    }
  };

  useEffect(() => {
    handleOneItem();
  });

  return (
    <>
      <Header
        showSearchBtn={ showSearchBtn }
        handleClick={ handleClickDrinks }
      >
        Drinks
      </Header>
      <main>
        {arrayDrinks.map((drink) => (
          <div key={ drink.idDrink }>
            <p>{drink.strDrink}</p>
            <img src={ `${drink.strDrinkThumb}/preview` } alt={ drink.strDrink } />
            <Link to={ `/drinks/${drink.idDrink}` }>Detalhes</Link>
          </div>
        ))}
      </main>
    </>
  );
}

export default Drinks;
