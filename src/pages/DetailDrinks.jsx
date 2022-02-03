import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import { nameApi } from '../service/ApiFoods';
import { detailDrinksApi } from '../service/ApiDrinks';
import shareIcon from '../images/shareIcon.svg';
import whiteHeartIcon from '../images/whiteHeartIcon.svg';

import '../Css/Detail.css';

function DetailDrinks({ match }) {
  const [objDetail, setObjDetail] = useState([]);
  const [recomFood, setRecomFood] = useState([]);

  const { params: { id } } = match;
  const idReceita = Number(id);
  console.log(`idReceita: ${idReceita}`);

  useEffect(() => {
    const apiDrinksRequest = async () => {
      const foods = await nameApi('');
      const SIX = 6;
      if (foods !== null) {
        return setRecomFood(foods.slice(0, SIX));
      }
    };
    apiDrinksRequest();
  }, []);

  useEffect(() => {
    const apiRequest = async () => {
      const detail = await detailDrinksApi(idReceita);
      console.log(`detail: ${detail}`);
      setObjDetail(detail);
    };
    apiRequest();
  }, [idReceita]);

  console.log(`objDetail: ${objDetail}`);

  if (objDetail.length === 0) return null;

  return (
    <div>
      <img
        src={ objDetail[0].strDrinkThumb }
        alt="drink"
        data-testid="recipe-photo"
        className="w-full"
      />
      <div>
        <h2 data-testid="recipe-title">{ objDetail[0].strDrink }</h2>
        <button type="button" data-testid="share-btn">{shareIcon}</button>
        <button type="button" data-testid="favorite-btn">{whiteHeartIcon}</button>
      </div>
      <h4 data-testid="recipe-category">{objDetail[0].strCategory}</h4>
      <h3>Ingredients</h3>
      <ul>
        { Object.entries(objDetail[0])
          .filter((item) => item[0].includes('strIngredient') && item[1] !== '')
          .map((ingredient, i) => (
            <li
              key={ i }
              data-testid={ `${i}-ingredient-name-and-measure` }
            >
              {ingredient[1]}
            </li>
          ))}
      </ul>
      <h3>Instruction</h3>
      <p data-testid="instructions">{objDetail[0].strInstructions}</p>
      <h3>Recommended</h3>
      {recomFood && (
        <div>
          {recomFood.map((food, index) => (
            <div data-testid={ `${index}-recomendation-card` } key={ food.idMeal }>
              <Link to={ `/foods/${food.idMeal}` }>
                <div>
                  <img
                    src={ `${food.strMealThumb}/preview` }
                    alt={ food.strMeal }
                  />
                  <p>{food.strAlcoholic}</p>
                  <h4>{food.strMeal}</h4>
                </div>
              </Link>
              <br />
            </div>
          ))}
        </div>
      )}
      <button
        data-testid="start-recipe-btn"
        type="button"
      >
        Start Recipe
      </button>
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
