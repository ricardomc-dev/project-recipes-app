import React, { Component } from 'react';
import Header from '../components/Header';

class ExploreFdsIngred extends Component {
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
        Explore Ingredients
      </Header>
    );
  }
}

export default ExploreFdsIngred;
