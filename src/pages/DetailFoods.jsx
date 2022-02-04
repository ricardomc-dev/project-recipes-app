import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import { nameDrinksApi } from '../service/ApiDrinks';
import { detailApi } from '../service/ApiFoods';
import shareIcon from '../images/shareIcon.svg';
import whiteHeartIcon from '../images/whiteHeartIcon.svg';

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
    <div className="w-full h-full flex-col items-center truncate">
      <img
        src={ objDetail[0].strMealThumb }
        alt="meal"
        data-testid="recipe-photo"
        className="w-full"
      />
      <div className="w-full h-auto flex flex-col">
        <h2 data-testid="recipe-title">{ objDetail[0].strMeal }</h2>
        <button type="button" data-testid="share-btn">{shareIcon}</button>
        <button type="button" data-testid="favorite-btn">{whiteHeartIcon}</button>
      </div>
      <h4 data-testid="recipe-category">{objDetail[0].strCategory}</h4>
      <h3>Ingredients</h3>
      <ul className="bg-gray-200">
        { Object.entries(objDetail[0])
          .filter((item) => item[0].includes('strIngredient') && item[1] !== '')
          .map((ingredient, i) => (
            <li
              className="ml-4"
              key={ i }
              data-testid={ `${i}-ingredient-name-and-measure` }
            >
              {ingredient[1]}
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
        width="420"
        height="315"
        src={ objDetail[0].strYoutube.replace('watch?v=', 'embed/') }
      />
      <h3>Recommended</h3>
      {recomDrink && (
        <div className="h-full w-40 flex flex-wrap-nowrap overflow-x-scroll">
          {recomDrink.map((drink, index) => (
            <div data-testid={ `${index}-recomendation-card` } key={ drink.idDrink }>
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
          ))}
        </div>
      )}
      <div>
        <button
          className="w-full fixed bottom-0 bg-blue-500 hover:bg-blue-700
          text-white font-bold
          py-2 border border-blue-700 rounded"
          data-testid="start-recipe-btn"
          type="button"
          // onClick={ ()=> {} }
        >
          Start Recipe
        </button>
      </div>
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
