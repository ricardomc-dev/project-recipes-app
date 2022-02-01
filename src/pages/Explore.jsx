import React from 'react';
import Header from '../components/Header';

function Explore() {
  const showSearchBtn = false;

  return (
    <Header
      showSearchBtn={ showSearchBtn }
    >
      Explore
    </Header>
  );
}

export default Explore;
