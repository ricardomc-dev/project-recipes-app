import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

import Input from './Input';
import profileIcon from '../images/profileIcon.svg';
import searchIcon from '../images/searchIcon.svg';

class Header extends Component {
  constructor() {
    super();

    this.state = {
      searchInput: '',
      showInput: false,
    };
  }

  handleShowInput = () => {
    const { showInput } = this.state;
    console.log('clicou');
    if (showInput === false) {
      this.setState({ showInput: true });
    } else {
      this.setState({ showInput: false });
    }
  }

  handleInputChange = ({ target: { name, value } }) => {
    this.setState({ [name]: value });
  }

  render() {
    const { searchInput, showInput } = this.state;
    const { children } = this.props;

    return (
      <>
        <div>
          <Link to="/profile">
            <img
              alt="imagem do usuário logado"
              data-testid="profile-top-btn"
              src={ profileIcon }
            />
          </Link>
          <h1
            data-testid="page-title"
          >
            {children}
          </h1>
          <button
            data-testid="search-top-btn"
            type="button"
            onClick={ this.handleShowInput }
          >
            <img
              alt="imagem do usuário logado"
              data-testid="profile-top-btn"
              src={ searchIcon }
            />
          </button>
        </div>
        { showInput && (
          <Input
            dataTestId="search-input"
            idLabel="searchInput"
            textLabel="searchInput"
            nameInput="searchInput"
            placeholderInput="Search Recipe"
            handleInputChange={ this.handleInputChange }
            typeInput="searchInput"
            valueInput={ searchInput }
          />
        ) }
      </>
    );
  }
}

Header.propTypes = {
  children: PropTypes.string.isRequired,
};

export default Header;
