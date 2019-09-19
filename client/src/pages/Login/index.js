import React, { Component } from 'react';
//import ReactDOM from 'react-dom';
import axios from 'axios';
import { Link } from 'react-router-dom';
import './Login.css';

class Login extends Component {
  constructor() {
    super();
    this.state = {
      email: '',
      password: '',
      message: ''
    };
  }
  onChange = e => {
    const state = this.state;
    state[e.target.name] = e.target.value;
    this.setState(state);
  };

  onSubmit = e => {
    e.preventDefault();

    const { email, password } = this.state;

    axios
      .post('/api/users/login', { email, password })
      .then(result => {
        localStorage.setItem('jwtToken', result.data.token);
        this.setState({ message: '' });
        this.props.history.push('/');
      })
      .catch(error => {
        if (error.response.status === 401) {
          this.setState({
            message: 'Login failed. email or password not match'
          });
        }
      });
  };

  render() {
    const { email, password, message } = this.state;
    return (
      <div class='container'>
        <br></br>
        <br></br>
        <br></br>
        <form class='form-signin' onSubmit={this.onSubmit}>
          {message !== '' && (
            <div class='alert alert-warning alert-dismissible' role='alert'>
              {message}
            </div>
          )}
          <h2 class='form-signin-heading'>Please Log In</h2>
          <label for='inputEmail' class='sr-only'>
            Email address
          </label>
          <input
            type='email'
            class='form-control'
            placeholder='Email address'
            name='email'
            value={email}
            onChange={this.onChange}
            required
          />
          <label for='inputPassword' class='sr-only'>
            Password
          </label>
          <input
            type='password'
            class='form-control'
            placeholder='Password'
            name='password'
            value={password}
            onChange={this.onChange}
            required
          />
          <button class='btn btn-lg btn-primary btn-block' type='submit'>
            Log In
          </button>
          <p>
            Not a member?{' '}
            <Link to='/register'>
              <span
                class='glyphicon glyphicon-plus-sign'
                aria-hidden='true'
              ></span>{' '}
              Sign Up here
            </Link>
          </p>
        </form>
      </div>
    );
  }
}

export default Login;
