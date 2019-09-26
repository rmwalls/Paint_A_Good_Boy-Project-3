import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import './App.css';
import Navbar from './components/Navbar';
import ContainerMain from './components/ContainerMain';
import { Breakpoint, BreakpointProvider } from 'react-socks';
import { setDefaultBreakpoints } from 'react-socks';

setDefaultBreakpoints([{ m: 0 }, { l: 1260 }]);

// if(localStorage.getItem("jwtToken") === null) {

// logged in, first read json token if it exists, then logged in is true, otherwise logged in is false for loggedIn state

// then create a method that can set the state of loggedIn and pass it down to the logged in component

class App extends React.Component {
  state = {
    loggedIn: Boolean(localStorage.getItem('jwtToken')),
    userId: localStorage.getItem('userId')
  };

  updateLoginState = bool => {
    this.setState({ loggedIn: bool });
  };

  render() {
    return (
      <BreakpointProvider>
        <Router>
          <div>
            <Navbar
              loggedIn={this.state.loggedIn}
              updateLoginState={this.updateLoginState}
            />
            <ContainerMain
              loggedIn={this.state.loggedIn}
              updateLoginState={this.updateLoginState}
              userId={this.state.userId}
            />
          </div>
        </Router>
      </BreakpointProvider>
    );
  }
}

export default App;
