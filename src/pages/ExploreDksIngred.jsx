import React from 'react';
import Footer from '../components/Footer';
import Header from '../components/Header';

function ExploreDksIngred() {
  const showSearchBtn = false;

  return (
    <>
      <Header
        showSearchBtn={ showSearchBtn }
      >
        Explore Ingredients
      </Header>
      <div className="footerExplorer">
        <Footer />
      </div>
    </>
  );
}

export default ExploreDksIngred;
