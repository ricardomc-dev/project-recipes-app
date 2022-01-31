import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';
import PropTypes from 'prop-types';

import './Header.css';

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
    this.setState((prev) => ({
      ...prev, showInput: !showInput }));
    // if (showInput === false) {
    //   this.setState({ showInput: true });
    // } else {
    //   this.setState({ showInput: false });
    // }
  }

  handleInputChange = ({ target: { name, value } }) => {
    this.setState({ [name]: value });
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
        <div className="input-container">
          { showInput && (
            <Input
              dataTestId="search-input"
              idLabel="searchInput"
              nameInput="searchInput"
              placeholderInput="Search Recipe"
              handleInputChange={ this.handleInputChange }
              typeInput="searchInput"
              valueInput={ searchInput }
            />
          ) }
        </div>
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
