import React, { Component } from 'react';
import Header from '../components/Header';

class FavoriteRecipes extends Component {
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
        Favorite Recipes
      </Header>
    );
  }
}

export default FavoriteRecipes;
