import React, { useState, useContext } from 'react';
import { Redirect } from 'react-router-dom';
import PropTypes from 'prop-types';
import RecipesContext from '../context/RecipesContext';

import './Header.css';

import Input from './Input';
import profileIcon from '../images/profileIcon.svg';
import searchIcon from '../images/searchIcon.svg';

function Header(props) {
  const [showInput, setShowInput] = useState(false);
  const [redirect, setRedirect] = useState(false);

  const {
    searchInput,
    setSearchInput,
    setSearchRadio,
  } = useContext(RecipesContext);

  const handleInputChange = ({ target: { value } }) => {
    setSearchInput(value);
  };

  const handleRadioChange = ({ target: { id, checked } }) => {
    if (checked) {
      setSearchRadio(id);
    }
  };

  const handleShowInput = () => {
    setShowInput(!showInput);
  };

  const sendToProfile = () => {
    setRedirect(true);
  };

  const { showSearchBtn, children, handleClick } = props;

  return (
    <>
      <div className="header-container">
        <button
          onClick={ sendToProfile }
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
            onClick={ handleShowInput }
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
        <div className="flex flex-col center bg-gray-200">
          <div>
            <Input
              classInput="w-5/6 m-3 border rounded border-gray-500"
              dataTestId="search-input"
              idLabel="searchInput"
              nameInput="searchInput"
              placeholderInput="Search Recipe"
              handleInputChange={ handleInputChange }
              typeInput="text"
              valueInput={ searchInput }
            />
          </div>
          <div>
            <Input
              classInput="checked:bg-gray-900
                checked:border-transparent m-3"
              dataTestId="ingredient-search-radio"
              typeInput="radio"
              idLabel="ingredient"
              nameInput="search-radio"
              textLabel="Ingredient"
              handleInputChange={ handleRadioChange }
            />
            <Input
              classInput="checked:bg-gray-900
                checked:border-transparent m-3"
              dataTestId="name-search-radio"
              typeInput="radio"
              idLabel="name"
              nameInput="search-radio"
              textLabel="Name"
              handleInputChange={ handleRadioChange }
            />
            <Input
              classInput="checked:bg-gray-900
                checked:border-transparent m-3"
              dataTestId="first-letter-search-radio"
              typeInput="radio"
              idLabel="first-letter"
              nameInput="search-radio"
              textLabel="First letter"
              handleInputChange={ handleRadioChange }
            />
          </div>
          <div>
            <button
              className="bg-gray-400 text-white font-bold
              border rounded w-24 text-center m-3 p-2"
              type="button"
              onClick={ handleClick }
              data-testid="exec-search-btn"
            >
              Search
            </button>
          </div>
        </div>
      )}
    </>
  );
}

Header.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node,
  ]).isRequired,
  showSearchBtn: PropTypes.bool,
  handleClick: PropTypes.func,
};

Header.defaultProps = {
  showSearchBtn: true,
  handleClick: () => {},
};

export default Header;
