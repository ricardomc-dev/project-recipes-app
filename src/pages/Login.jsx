import React, { Component } from 'react';
import PropTypes from 'prop-types';

import Button from '../components/Button';
import Input from '../components/Input';

class Login extends Component {
  constructor() {
    super();

    this.state = {
      disabled: true,
      email: '',
      password: '',
    };
  }

  render() {
    const { disabled, email, password } = this.state;

    return (
      <>
        <Input
          dataTestId="email-input"
          idLabel="email"
          textLabel="email"
          nameInput="email"
          placeholderInput="Digite seu email"
          handleInputChange={ this.handleInputChange }
          typeInput="email"
          valueInput={ email }
        />
        <Input
          dataTestId="password-input"
          idLabel="password"
          textLabel="password"
          nameInput="password"
          placeholderInput="Digite seu password"
          handleInputChange={ this.handleInputChange }
          typeInput="password"
          valueInput={ password }
        />
        <Button
          dataTestId="login-submit-btn"
          disabled={ disabled }
          handleClick={ this.handleClick }
          typeBtn="button"
        >
          Entrar
        </Button>
      </>
    );
  }
}

export default Login;
