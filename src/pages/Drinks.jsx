import React, { Component } from 'react';
import Header from '../components/Header';

class Drinks extends Component {
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
        Drinks
      </Header>
    );
  }
}

export default Drinks;
