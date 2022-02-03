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
      className,
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
          className={ className }
        />
      </label>
    );
  }
}

Input.propTypes = {
  placeholderInput: PropTypes.string,
  dataTestId: PropTypes.string,
  typeInput: PropTypes.string.isRequired,
  nameInput: PropTypes.string,
  handleInputChange: PropTypes.func,
  valueInput: PropTypes.string,
  idLabel: PropTypes.string,
  textLabel: PropTypes.string,
  className: PropTypes.string,
};

Input.defaultProps = {
  placeholderInput: '',
  nameInput: '',
  valueInput: '',
  dataTestId: '',
  idLabel: '',
  textLabel: '',
  className: '',
  handleInputChange: () => {},
};

export default Input;
