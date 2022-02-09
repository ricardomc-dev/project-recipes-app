import React from 'react';
import Footer from '../components/Footer';
import Header from '../components/Header';

function ExploreDrinks() {
  const showSearchBtn = false;

  return (
    <>
      <Header
        showSearchBtn={ showSearchBtn }
      >
        Explore Drinks
      </Header>
      <div className="footerExplorer">
        <Footer />
      </div>
    </>
  );
}

export default ExploreDrinks;
