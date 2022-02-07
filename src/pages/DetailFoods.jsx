import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import copy from 'clipboard-copy';
import { detailApi } from '../service/ApiFoods';
import { nameDrinksApi } from '../service/ApiDrinks';
import StartContinueButton from '../components/StartContinueButton';
import {
  addIdToLocalSto,
  deleteIdFromLocalSto,
  getLocalStorageInfo } from '../service/localStorage';

import shareIcon from '../images/shareIcon.svg';
import whiteHeartIcon from '../images/whiteHeartIcon.svg';
import blackHeartIcon from '../images/blackHeartIcon.svg';

function DetailFoods({ match }) {
  const [objDetail, setObjDetail] = useState([]);
  const [recomDrink, setRecomDrink] = useState([]);
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
        .some((meal) => meal.id === idReceita));
    }
  }, [idReceita]);

  useEffect(() => {
    const apiDrinksRequest = async () => {
      const drinks = await nameDrinksApi('');
      const SIX = 6;
      if (drinks !== null) {
        return setRecomDrink(drinks.slice(0, SIX));
      }
    };
    apiDrinksRequest();
  }, []);

  useEffect(() => {
    const apiRequest = async () => {
      const detail = await detailApi(idReceita);
      setObjDetail(detail);
    };
    apiRequest();
  }, [idReceita]);

  if (objDetail.length === 0) return null;

  const VINTE = 20;
  const arrayIngred = [];
  for (let i = 1; i <= VINTE; i += 1) {
    if (objDetail[0][`strIngredient${i}`]) {
      arrayIngred.push(
        `- ${objDetail[0][`strIngredient${i}`]} - ${objDetail[0][`strMeasure${i}`]}`,
      );
    }
  }

  const { idMeal, strCategory, strMeal, strArea,
    strMealThumb } = objDetail[0];

  function handleFavoriteItem() {
    const favoriteRecipe = {
      id: idMeal,
      type: 'food',
      nationality: strArea,
      category: strCategory,
      alcoholicOrNot: '',
      name: strMeal,
      image: strMealThumb,
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
        src={ objDetail[0].strMealThumb }
        alt="meal"
        data-testid="recipe-photo"
        className="w-full"
      />
      <div className="w-full h-auto flex flex-col">
        <h2 data-testid="recipe-title">{ objDetail[0].strMeal }</h2>
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
      <h4 data-testid="recipe-category">{objDetail[0].strCategory}</h4>
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
        {objDetail[0].strInstructions}
      </p>
      <h3>Video</h3>
      <iframe
        data-testid="video"
        title="video"
        width="360"
        height="240"
        src={ objDetail[0].strYoutube.replace('watch?v=', 'embed/') }
      />
      <h3>Recommended</h3>
      { recomDrink && (
        <div className="h-full w-40 flex flex-wrap-nowrap overflow-x-scroll">
          { recomDrink.map((drink, index) => (
            <div
              data-testid={ `${index}-recomendation-card` }
              key={ drink.idDrink }
            >
              <Link to={ `/drinks/${drink.idDrink}` }>
                <div>
                  <img
                    src={ `${drink.strDrinkThumb}/preview` }
                    alt={ drink.strDrink }
                  />
                  <p>{drink.strAlcoholic}</p>
                  <h4 data-testid={ `${index}-recomendation-title` }>
                    {drink.strDrink}
                  </h4>
                </div>
              </Link>
              <br />
            </div>
          )) }
        </div>
      ) }
      <StartContinueButton />
    </div>
  );
}

DetailFoods.propTypes = {
  match: PropTypes.shape({
    params: PropTypes.shape({
      id: PropTypes.string,
    }),
  }),
};

DetailFoods.defaultProps = {
  match: {},
};

export default DetailFoods;
