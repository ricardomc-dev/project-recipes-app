import React, { Component } from 'react';
import Header from '../components/Header';

class DoneRecipes extends Component {
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
        Done Recipes
      </Header>
    );
  }
}

export default DoneRecipes;
