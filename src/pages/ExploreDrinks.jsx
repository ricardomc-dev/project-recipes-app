import React from 'react';
import Header from '../components/Header';

function ExploreDrinks() {
  const showSearchBtn = false;

  return (
    <Header
      showSearchBtn={ showSearchBtn }
    >
      Explore Drinks
    </Header>
  );
}

export default ExploreDrinks;
