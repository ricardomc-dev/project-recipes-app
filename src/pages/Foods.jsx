import React, { useContext } from 'react';
import Header from '../components/Header';
import RecipeContext from '../context/RecipesContext';

function Foods() {
  const {
    handleClickFoods,
  } = useContext(RecipeContext);

  const showSearchBtn = true;

  return (
    <Header
      showSearchBtn={ showSearchBtn }
      handleClick={ handleClickFoods }
    >
      Foods
    </Header>
  );
}

export default Foods;
