import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';
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
      redirect: false,
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

  sendToPage2 = () => {
    this.setState({ redirect: true });
  }

  render() {
    const { searchInput, showInput, redirect } = this.state;
    const { children, showSearchBtn } = this.props;

    return (
      <>
        <div>
          <button
            data-testid="profile-top-btn"
            onClick={ this.sendToPage2 }
            type="button"
          >
            <img
              alt="imagem do usuário logado"
              src={ profileIcon }
            />
            { redirect && <Redirect to="/profile" />}
          </button>
          <h1
            data-testid="page-title"
          >
            {children}
          </h1>
          { showSearchBtn && (
            <button
              data-testid="search-top-btn"
              type="button"
              onClick={ this.handleShowInput }
            >
              <img
                alt="botão de busca"
                src={ searchIcon }
              />
            </button>
          ) }
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
  showSearchBtn: PropTypes.bool.isRequired,
};

export default Header;
