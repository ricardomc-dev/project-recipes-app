import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Button extends Component {
  render() {
    const {
      disabled,
      handleClick,
      children,
      dataTestId,
      typeBtn,
    } = this.props;
    return (
      <button
        type={ typeBtn ? 'submit' : 'button' }
        onClick={ handleClick }
        disabled={ disabled }
        data-testid={ dataTestId }
      >
        {children}
      </button>
    );
  }
}

Button.propTypes = {
  children: PropTypes.string.isRequired,
  handleClick: PropTypes.func.isRequired,
  disabled: PropTypes.bool.isRequired,
  dataTestId: PropTypes.string.isRequired,
  typeBtn: PropTypes.string.isRequired,
};

export default Button;
