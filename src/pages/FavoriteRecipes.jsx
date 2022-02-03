import React from 'react';
import Header from '../components/Header';

function FavoriteRecipes() {
  const showSearchBtn = false;

  return (
    <Header
      showSearchBtn={ showSearchBtn }
    >
      Favorite Recipes
    </Header>
  );
}

export default FavoriteRecipes;
