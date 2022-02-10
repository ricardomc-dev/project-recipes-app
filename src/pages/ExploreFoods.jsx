import React from 'react';
import Footer from '../components/Footer';
import Header from '../components/Header';

function ExploreFoods() {
  const showSearchBtn = false;

  return (
    <>
      <Header
        showSearchBtn={ showSearchBtn }
      >
        Explore Foods
      </Header>
      <Footer />
    </>
  );
}

export default ExploreFoods;
