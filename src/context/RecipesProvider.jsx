import React, { useState } from 'react';
import PropTypes from 'prop-types';
import RecipeContext from './RecipesContext';
import { ingredientApi, nameApi, firstLetterApi } from '../service/ApiFoods';
import {
  ingredientDrinksApi,
  nameDrinksApi,
  firstLetterDrinksApi,
} from '../service/ApiDrinks';

function RecipeProvider({ children }) {
  const [searchInput, setSearchInput] = useState('');
  const [searchRadio, setSearchRadio] = useState('');
  const [arrayMeals, setArrayMeals] = useState([]);
  const [arrayDrinks, setArrayDrinks] = useState([]);

  const verifyLength = (param) => {
    if (param === null || !param) {
      return global.alert('Sorry, we haven\'t found any recipes for these filters.');
    }
  };

  const handleClickFoods = async () => {
    if (searchRadio === 'ingredient') {
      const meals = await ingredientApi(searchInput);
      verifyLength(meals);
      setArrayMeals(meals);
    }
    if (searchRadio === 'name') {
      const meals = await nameApi(searchInput);
      verifyLength(meals);
      setArrayMeals(meals);
    }
    if (searchRadio === 'first-letter') {
      const ONE = 1;
      if (searchInput.length > ONE) {
        return global.alert('Your search must have only 1 (one) character');
      }
      const meals = await firstLetterApi(searchInput);
      verifyLength(meals);
      setArrayMeals(meals);
    }
  };

  const handleClickDrinks = async () => {
    if (searchRadio === 'ingredient') {
      const drinks = await ingredientDrinksApi(searchInput);
      verifyLength(drinks);
      setArrayDrinks(drinks);
    }
    if (searchRadio === 'name') {
      const drinks = await nameDrinksApi(searchInput);
      verifyLength(drinks);
      setArrayDrinks(drinks);
    }
    if (searchRadio === 'first-letter') {
      const ONE = 1;
      if (searchInput.length > ONE) {
        return global.alert('Your search must have only 1 (one) character');
      }
      const drinks = await firstLetterDrinksApi(searchInput);
      verifyLength(drinks);
      setArrayDrinks(drinks);
    }
  };

  const contextValue = {
    searchInput,
    searchRadio,
    arrayMeals,
    arrayDrinks,
    setSearchInput,
    setSearchRadio,
    handleClickFoods,
    handleClickDrinks,
  };

  return (
    <RecipeContext.Provider value={ contextValue }>
      {children}
    </RecipeContext.Provider>
  );
}

RecipeProvider.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node,
  ]).isRequired,
};

export default RecipeProvider;
