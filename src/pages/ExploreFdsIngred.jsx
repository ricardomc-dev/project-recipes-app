import React from 'react';
import Header from '../components/Header';

function ExploreFdsIngred() {
  const showSearchBtn = false;

  return (
    <Header
      showSearchBtn={ showSearchBtn }
    >
      Explore Ingredients
    </Header>
  );
}

export default ExploreFdsIngred;
