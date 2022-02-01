import React, { useContext } from 'react';
import Header from '../components/Header';
import RecipeContext from '../context/RecipesContext';

function Drinks() {
  const {
    handleClickDrinks,
  } = useContext(RecipeContext);

  const showSearchBtn = true;

  return (
    <Header
      showSearchBtn={ showSearchBtn }
      handleClick={ handleClickDrinks }
    >
      Drinks
    </Header>
  );
}

export default Drinks;
