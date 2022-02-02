import React from 'react';
import Footer from '../components/Footer';
import Header from '../components/Header';

function Explore() {
  const showSearchBtn = false;

  return (
    <>
      <Header
        showSearchBtn={ showSearchBtn }
      >
        Explore
      </Header>
      <Footer />
    </>
  );
}

export default Explore;
