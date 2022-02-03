import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import RecipeContext from './RecipesContext';
import {
  ingredientApi,
  nameApi,
  firstLetterApi,
  defaultMealsApi,
  filterFoodButtons,
} from '../service/ApiFoods';
import {
  ingredientDrinksApi,
  nameDrinksApi,
  firstLetterDrinksApi,
  defaultDrinksApi,
  filterDrinkButtons,
} from '../service/ApiDrinks';

function RecipeProvider({ children }) {
  const [searchInput, setSearchInput] = useState('');
  const [searchRadio, setSearchRadio] = useState('');
  const [arrayMeals, setArrayMeals] = useState([]);
  const [arrayDrinks, setArrayDrinks] = useState([]);
  const [mealsData, setMealsData] = useState([]);
  const [drinksData, setDrinkssData] = useState([]);
  const [showPage, setShowPage] = useState(true);
  const [newListDrinks, setNewListDrinks] = useState([]);
  const [newListFoods, setNewListFoods] = useState([]);

  const verifyLength = (param) => {
    if (param === null || !param) {
      return global.alert('Sorry, we haven\'t found any recipes for these filters.');
    }
  };

  useEffect(() => {
    defaultMealsApi()
      .then((newData) => setMealsData(newData));
  }, []);

  useEffect(() => {
    defaultDrinksApi()
      .then((newData) => setDrinkssData(newData));
  }, []);

  const showMainPage = () => {
    setShowPage(!showPage);
  };

  useEffect(() => {
    filterDrinkButtons()
      .then((newData) => setNewListDrinks(newData));
  }, []);

  useEffect(() => {
    filterFoodButtons()
      .then((newData) => setNewListFoods(newData));
  }, []);

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
    showMainPage();
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
    showMainPage();
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
    mealsData,
    showPage,
    drinksData,
    newListDrinks,
    newListFoods,
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
