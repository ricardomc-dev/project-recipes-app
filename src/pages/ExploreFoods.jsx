import React from 'react';
import Header from '../components/Header';

function ExploreFoods() {
  const showSearchBtn = false;

  return (
    <Header
      showSearchBtn={ showSearchBtn }
    >
      Explore Foods
    </Header>
  );
}

export default ExploreFoods;
