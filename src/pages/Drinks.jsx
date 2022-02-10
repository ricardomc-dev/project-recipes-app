import React, { useContext } from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import RecipeContext from '../context/RecipesContext';
import MainDrinkScreen from '../components/MainDrinkScreen';
import FilterButtonsDrinks from '../components/FilterButtonsDrinks';

function Drinks() {
  const {
    handleClickDrinks,
    showPage,
  } = useContext(RecipeContext);

  const showSearchBtn = true;

  return (
    <div className="w-full h-full flex-col items-center">
      <Header
        showSearchBtn={ showSearchBtn }
        handleClick={ handleClickDrinks }
      >
        Drinks
      </Header>
      <FilterButtonsDrinks />
      { showPage && <MainDrinkScreen /> }
      <Footer />
    </div>
  );
}

export default Drinks;
