import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import { nameDrinksApi } from '../service/ApiDrinks';
import { detailApi } from '../service/ApiFoods';
import shareIcon from '../images/shareIcon.svg';
import whiteHeartIcon from '../images/whiteHeartIcon.svg';

import '../Css/Detail.css';

function DetailFoods({ match }) {
  const [objDetail, setObjDetail] = useState([]);
  const [recomDrink, setRecomDrink] = useState([]);

  const { params: { id } } = match;
  const idReceita = Number(id);
  console.log(`idReceita: ${idReceita}`);

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
      console.log(`detail: ${detail}`);
      setObjDetail(detail);
    };
    apiRequest();
  }, [idReceita]);

  console.log(`objDetail: ${objDetail[0]}`);

  if (objDetail.length === 0) return null;

  return (
    <div>
      <img
        src={ objDetail[0].strMealThumb }
        alt="meal"
        data-testid="recipe-photo"
        className="w-full"
      />
      <div>
        <h2 data-testid="recipe-title">{ objDetail[0].strMeal }</h2>
        <button type="button" data-testid="share-btn">{shareIcon}</button>
        <button type="button" data-testid="favorite-btn">{whiteHeartIcon}</button>
      </div>
      <h4 data-testid="recipe-category">{objDetail[0].strCategory}</h4>
      <h3>Ingredients</h3>
      <ul className="ingredient">
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
      <h3>Video</h3>
      <iframe
        data-testid="video"
        title="video"
        width="420"
        height="315"
        src={ objDetail[0].strYoutube.replace('watch?v=', 'embed/') }
      />
      <h3>Recommended</h3>
      {recomDrink && (
        <div>
          {recomDrink.map((drink, index) => (
            <div data-testid={ `${index}-recomendation-card` } key={ drink.idDrink }>
              <Link to={ `/drinks/${drink.idDrink}` }>
                <div>
                  <img
                    src={ `${drink.strDrinkThumb}/preview` }
                    alt={ drink.strDrink }
                  />
                  <p>{drink.strAlcoholic}</p>
                  <h4>{drink.strDrink}</h4>
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
