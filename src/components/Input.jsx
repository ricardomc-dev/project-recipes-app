import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Input extends Component {
  render() {
    const {
      idLabel,
      textLabel,
      dataTestId,
      nameInput,
      placeholderInput,
      handleInputChange,
      typeInput,
      valueInput,
    } = this.props;
    return (
      <label htmlFor={ idLabel }>
        { textLabel }
        <input
          data-testid={ dataTestId }
          id={ idLabel }
          name={ nameInput }
          placeholder={ placeholderInput }
          onChange={ handleInputChange }
          type={ typeInput }
          value={ valueInput }
        />
      </label>
    );
  }
}

Input.propTypes = {
  placeholderInput: PropTypes.string.isRequired,
  dataTestId: PropTypes.string.isRequired,
  typeInput: PropTypes.string.isRequired,
  nameInput: PropTypes.string.isRequired,
  handleInputChange: PropTypes.func.isRequired,
  valueInput: PropTypes.string.isRequired,
  idLabel: PropTypes.string.isRequired,
  textLabel: PropTypes.string.isRequired,
};

export default Input;
