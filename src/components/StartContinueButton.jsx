import React from 'react';
import { useHistory, useParams } from 'react-router-dom';

function StartContinueButton() {
  const history = useHistory();
  const { location: { pathname } } = history;
  const { id } = useParams();

  console.log(pathname, id);

  // function redirectByCategory(path) {
  //   if (path === `/foods/${id}`) {
  //     return history.push(`${path}/in-progress`);
  //   }
  // }

  return (
    <div>
      <button
        className="w-full fixed bottom-0 bg-blue-500 hover:bg-blue-700
          text-white font-bold py-2 border border-blue-700 rounded"
        data-testid="start-recipe-btn"
        type="button"
        onClick={ () => { history.push(`${pathname}/in-progress`); } }
      >
        Start Recipe
      </button>
    </div>
  );
}

export default StartContinueButton;
