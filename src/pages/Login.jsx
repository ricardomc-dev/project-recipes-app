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

  validateButton = () => {
    const { email, password } = this.state;
    const min = 6;

    if (this.validateEmail(email) && password.length > min) {
      this.setState({ disabled: false });
    } else {
      this.setState({ disabled: true });
    }
  };

  validateEmail = (email) => String(email)
    .toLowerCase().match(/^[^\s@]+@[^\s@]+\.[^\s@]+$/);
  // https://stackoverflow.com/questions/46155/whats-the-best-way-to-validate-an-email-address-in-javascript

  handleClick = () => {
    const { email } = this.state;
    const { history } = this.props;
    history.push('/foods');
    localStorage.setItem('mealsToken', 1);
    localStorage.setItem('cocktailsToken', 1);
    localStorage.setItem('user', JSON.stringify({ email }));
  }

  handleInputChange = ({ target: { name, value } }) => {
    this.setState({ [name]: value }, () => { this.validateButton(); });
  }

  render() {
    const { disabled, email, password } = this.state;

    return (
      <>
        <h1>Login</h1>
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

Login.propTypes = {
  history: PropTypes.string.isRequired,
};

export default Login;
