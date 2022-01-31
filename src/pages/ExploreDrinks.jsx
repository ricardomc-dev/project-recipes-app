import React, { Component } from 'react';
import Header from '../components/Header';

class ExploreDrinks extends Component {
  constructor() {
    super();

    this.state = {
      showSearchBtn: false,
    };
  }

  render() {
    const { showSearchBtn } = this.state;

    return (
      <Header
        showSearchBtn={ showSearchBtn }
      >
        Explore Drinks
      </Header>
    );
  }
}

export default ExploreDrinks;
