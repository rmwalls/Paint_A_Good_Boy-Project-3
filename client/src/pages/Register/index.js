import React, { Component } from 'react';
//import ReactDOM from 'react-dom';
import axios from 'axios';
//import { Link } from 'react-router-dom';
import './Login.css';

class Create extends Component {
  constructor() {
    super();
    this.state = {
      email: '',
      password: ''
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

    axios.post('/api/users/register', { email, password }).then(result => {
      localStorage.setItem('jwtToken', result.data.token);
      this.props.history.push('/');
    });
  };

  render() {
    const { email, password } = this.state;
    return (
      <div class='container'>
        {/* The br's are to push the content below the navbar */}
        <br></br>
        <br></br>
        <br></br>
        <form class='form-signin' onSubmit={this.onSubmit}>
          <h2 class='form-signin-heading'>Sign Up</h2>
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
            Sign Up
          </button>
        </form>
      </div>
    );
  }
}
export default Create;