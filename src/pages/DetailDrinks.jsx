import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import copy from 'clipboard-copy';
import { detailDrinksApi } from '../service/ApiDrinks';
import { nameApi } from '../service/ApiFoods';
import StartContinueButton from '../components/StartContinueButton';
import {
  addIdToLocalSto,
  deleteIdFromLocalSto,
  getLocalStorageInfo } from '../service/localStorage';

import shareIcon from '../images/shareIcon.svg';
import whiteHeartIcon from '../images/whiteHeartIcon.svg';
import blackHeartIcon from '../images/blackHeartIcon.svg';

function DetailDrinks({ match }) {
  const [objDetail, setObjDetail] = useState([]);
  const [recomFood, setRecomFood] = useState([]);
  const [isLinkCopied, setIsLinkCopied] = useState(false);
  const [isFavorite, setIsFavorite] = useState(false);
  const whiteHeart = (
    <img
      data-testid="favorite-btn"
      src={ whiteHeartIcon }
      alt="whiteHeart"
    />
  );
  const blackHeart = (
    <img
      data-testid="favorite-btn"
      src={ blackHeartIcon }
      alt="blackHeartIcon"
    />
  );

  const copyToClipboard = async () => {
    await copy(window.location.href);
    return setIsLinkCopied(true);
  };

  const { params: { id } } = match;
  const idReceita = id;

  useEffect(() => {
    if (localStorage.getItem('favoriteRecipes')) {
      return setIsFavorite(getLocalStorageInfo('favoriteRecipes')
        .some((drink) => drink.id === idReceita));
    }
  }, [idReceita]);

  useEffect(() => {
    const apiFoodsRequest = async () => {
      const foods = await nameApi('');
      const SIX = 6;
      if (foods !== null) {
        return setRecomFood(foods.slice(0, SIX));
      }
    };
    apiFoodsRequest();
  }, []);

  useEffect(() => {
    const apiRequest = async () => {
      const detail = await detailDrinksApi(idReceita);
      setObjDetail(detail);
    };
    apiRequest();
  }, [idReceita]);

  if (objDetail.length === 0) return null;

  const QUINZE = 15;
  const arrayIngred = [];
  for (let i = 1; i <= QUINZE; i += 1) {
    if (objDetail[0][`strIngredient${i}`]) {
      arrayIngred.push(
        `- ${objDetail[0][`strIngredient${i}`]} - ${objDetail[0][`strMeasure${i}`]}`,
      );
    }
  }

  const { idDrink, strCategory, strAlcoholic, strDrink,
    strDrinkThumb } = objDetail[0];

  function handleFavoriteItem() {
    const favoriteRecipe = {
      id: idDrink,
      type: 'drink',
      nationality: '',
      category: strCategory,
      alcoholicOrNot: strAlcoholic,
      name: strDrink,
      image: strDrinkThumb,
    };
    if (isFavorite === false) {
      addIdToLocalSto(favoriteRecipe, 'favoriteRecipes');
      setIsFavorite(true);
    } else {
      deleteIdFromLocalSto(idReceita, 'favoriteRecipes');
      setIsFavorite(false);
    }
  }

  return (
    <div className="w-full h-full flex-col items-center truncate">
      <img
        src={ objDetail[0].strDrinkThumb }
        alt="drink"
        data-testid="recipe-photo"
        className="w-full"
      />
      <div className="w-full h-auto flex flex-col">
        <h2 data-testid="recipe-title">{ objDetail[0].strDrink }</h2>
        <button
          type="button"
          onClick={ () => copyToClipboard() }
        >
          <img data-testid="share-btn" src={ shareIcon } alt="share" />
        </button>
        <button
          type="button"
          onClick={ () => handleFavoriteItem() }
        >
          { isFavorite ? blackHeart : whiteHeart }
        </button>
        { isLinkCopied && <span>Link copied!</span> }
      </div>
      <p data-testid="recipe-category">{ objDetail[0].strAlcoholic }</p>
      <h4 data-testid="recipe-category">{ objDetail[0].strCategory }</h4>
      <h3>Ingredients</h3>
      <ul className="bg-gray-200">
        {arrayIngred.map((ingredient, i) => (
          <li
            className="ml-4"
            key={ i }
            data-testid={ `${i}-ingredient-name-and-measure` }
          >
            {ingredient}
          </li>
        ))}
      </ul>
      <h3>Instruction</h3>
      <p
        className="h-full w-full flex"
        data-testid="instructions"
      >
        { objDetail[0].strInstructions }
      </p>
      <h3>Recommended</h3>
      {recomFood && (
        <div className="h-full w-20 flex flex-wrap-nowrap overflow-x-scroll">
          { recomFood.map((food, index) => (
            <div
              data-testid={ `${index}-recomendation-card` }
              key={ food.idMeal }
            >
              <Link to={ `/foods/${food.idMeal}` }>
                <img
                  src={ `${food.strMealThumb}/preview` }
                  alt={ food.strMeal }
                />
                <h4 data-testid={ `${index}-recomendation-title` }>
                  { food.strMeal }
                </h4>
              </Link>
              <br />
            </div>
          ))}
        </div>
      )}
      <StartContinueButton />
    </div>
  );
}

DetailDrinks.propTypes = {
  match: PropTypes.shape({
    params: PropTypes.shape({
      id: PropTypes.string,
    }),
  }),
};

DetailDrinks.defaultProps = {
  match: {},
};

export default DetailDrinks;
