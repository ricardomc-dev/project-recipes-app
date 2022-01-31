import React, { Component } from 'react';
import Header from '../components/Header';

class ExploreFdsNation extends Component {
  constructor() {
    super();

    this.state = {
      showSearchBtn: true,
    };
  }

  render() {
    const { showSearchBtn } = this.state;

    return (
      <Header
        showSearchBtn={ showSearchBtn }
      >
        Explore Nationalities
      </Header>
    );
  }
}

export default ExploreFdsNation;
