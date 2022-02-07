import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { detailApi } from '../service/ApiFoods';
import shareIcon from '../images/shareIcon.svg';
import whiteHeartIcon from '../images/whiteHeartIcon.svg';

function FoodsInProgress({ match }) {
  const [objDetail, setObjDetail] = useState([]);

  const { params: { id } } = match;
  const idReceita = Number(id);
  console.log(`idReceita: ${idReceita}`);

  useEffect(() => {
    const apiRequest = async () => {
      const detail = await detailApi(idReceita);
      console.log(`detail: ${detail}`);
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
        {arrayIngred.map((ingredient, i) => (
          <li
            className="ml-4"
            key={ i }
            data-testid={ `${i}-ingredient-step` }
          >
            {ingredient}
          </li>
        ))}
      </ul>
      <h3>Instruction</h3>
      <span
        className="h-full w-full flex"
        data-testid="instructions"
      >
        {objDetail[0].strInstructions}
      </span>
      <div>
        <button
          className="w-full fixed bottom-0 bg-blue-500 hover:bg-blue-700
          text-white font-bold
          py-2 border border-blue-700 rounded"
          data-testid="finish-recipe-btn"
          type="button"
        >
          Finish Recipe
        </button>
      </div>
    </div>
  );
}

FoodsInProgress.propTypes = {
  match: PropTypes.shape({
    params: PropTypes.shape({
      id: PropTypes.string,
    }),
  }),
};

FoodsInProgress.defaultProps = {
  match: {},
};

export default FoodsInProgress;
