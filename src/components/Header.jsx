import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';
import PropTypes from 'prop-types';
import { ingredientApi, nameApi, firstLetterApi } from '../service/Api';

import './Header.css';

import Input from './Input';
import profileIcon from '../images/profileIcon.svg';
import searchIcon from '../images/searchIcon.svg';

class Header extends Component {
  constructor() {
    super();

    this.state = {
      searchInput: '',
      searchRadio: '',
      showInput: false,
      redirect: false,
      arrayMeals: [],
    };
  }

  handleShowInput = () => {
    const { showInput } = this.state;
    this.setState((prev) => ({
      ...prev, showInput: !showInput }));
  }

  handleInputChange = ({ target: { name, value } }) => {
    this.setState({ [name]: value });
  }

  handleRadioChange = ({ target: { id, checked } }) => {
    if (checked) {
      this.setState({ searchRadio: id });
    }
  }

  handleClick = async () => {
    const { searchInput, searchRadio } = this.state;
    if (searchRadio === 'ingredient') {
      const meals = await ingredientApi(searchInput);
      this.setState((prev) => ({
        ...prev, arrayMeals: meals,
      }));
    }
    if (searchRadio === 'name') {
      const meals = await nameApi(searchInput);
      this.setState((prev) => ({
        ...prev, arrayMeals: meals,
      }));
    }
    if (searchRadio === 'first-letter') {
      const ONE = 1;
      if (searchInput.length > ONE) {
        return global.alert('Your search must have only 1 (one) character');
      }
      const meals = await firstLetterApi(searchInput);
      this.setState((prev) => ({
        ...prev, arrayMeals: meals,
      }));
    }
  }

  sendToPage2 = () => {
    this.setState((prev) => ({ ...prev, redirect: true }));
  }

  render() {
    const { searchInput, showInput, redirect } = this.state;
    const { children, showSearchBtn } = this.props;

    return (
      <>
        <div className="header-container">
          <button
            onClick={ this.sendToPage2 }
            type="button"
          >
            <img
              data-testid="profile-top-btn"
              alt="profileIcon"
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
              type="button"
              onClick={ this.handleShowInput }
            >
              <img
                data-testid="search-top-btn"
                alt="SearchIcon"
                src={ searchIcon }
              />
            </button>
          ) }
        </div>

        { showInput && (
          <div>
            <Input
              dataTestId="search-input"
              idLabel="searchInput"
              nameInput="searchInput"
              placeholderInput="Search Recipe"
              handleInputChange={ this.handleInputChange }
              typeInput="text"
              valueInput={ searchInput }
              className="appearance-none border-none w-full
                text-blue-700 mr-3 py-1 px-2 leading-tight focus:outline-none"
            />
            <div>
              <Input
                dataTestId="ingredient-search-radio"
                typeInput="radio"
                idLabel="ingredient"
                nameInput="search-radio"
                textLabel="Ingredient"
                handleInputChange={ this.handleRadioChange }
              />
              <Input
                dataTestId="name-search-radio"
                typeInput="radio"
                idLabel="name"
                nameInput="search-radio"
                textLabel="Name"
                handleInputChange={ this.handleRadioChange }
              />
              <Input
                dataTestId="first-letter-search-radio"
                typeInput="radio"
                idLabel="first-letter"
                nameInput="search-radio"
                textLabel="First letter"
                handleInputChange={ this.handleRadioChange }
              />
            </div>
            <button
              type="button"
              onClick={ this.handleClick }
              data-testid="exec-search-btn"
            >
              Search
            </button>
          </div>
        )}
      </>
    );
  }
}

Header.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node,
  ]).isRequired,
  showSearchBtn: PropTypes.bool,
};

Header.defaultProps = {
  showSearchBtn: true,
};

export default Header;
