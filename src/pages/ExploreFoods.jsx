import React, { Component } from 'react';
import Header from '../components/Header';

class ExploreFoods extends Component {
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
        Explore Foods
      </Header>
    );
  }
}

export default ExploreFoods;
