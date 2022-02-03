import React from 'react';
import Header from '../components/Header';

function DoneRecipes() {
  const showSearchBtn = false;

  return (
    <Header
      showSearchBtn={ showSearchBtn }
    >
      Done Recipes
    </Header>
  );
}
export default DoneRecipes;
