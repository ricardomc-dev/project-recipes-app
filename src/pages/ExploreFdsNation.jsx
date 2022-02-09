import React from 'react';
import Footer from '../components/Footer';
import Header from '../components/Header';

function ExploreFdsNation() {
  const showSearchBtn = true;

  return (
    <>
      <Header
        showSearchBtn={ showSearchBtn }
      >
        Explore Nationalities
      </Header>
      <div className="footerExplorer">
        <Footer />
      </div>
    </>
  );
}

export default ExploreFdsNation;
