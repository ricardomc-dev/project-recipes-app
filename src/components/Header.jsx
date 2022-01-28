import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import profileIcon from '../images/profileIcon.svg';

class Header extends Component {
  render() {
    return (
      <>
        <Link to="/profile">
          <img
            src={ profileIcon }
            alt="imagem do usuário logado"
          />
        </Link>
        <h1>Teste</h1>
      </>
    );
  }
}

// data-testids="profile-top-btn"
// page-title
// search-top-btn

export default Header;
