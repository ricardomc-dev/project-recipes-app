import React from 'react';
import Header from '../components/Header';

function ExploreFdsNation() {
  const showSearchBtn = true;

  return (
    <Header
      showSearchBtn={ showSearchBtn }
    >
      Explore Nationalities
    </Header>
  );
}

export default ExploreFdsNation;
