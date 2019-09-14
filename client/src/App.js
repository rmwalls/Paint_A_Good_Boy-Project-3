import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import './App.css';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import Artists from './pages/Artists';
import Register from './pages/Register';

class App extends React.Component {
  state = {
    career: ''
  };

  setCareer = career => {
    this.setState({ career: career });
  };
  render() {
    return (
      <Router>
        <>
          <Navbar />
          {/* <Wrapper> */}
          <Route
            exact
            path='/'
            render={routerProps => (
              <Home {...routerProps} setCareer={this.setCareer} />
            )}
          />
          <Route
            exact
            path='/artists'
            render={routerProps => (
              <Artists {...routerProps} career={this.state.career} />
            )}
          />
          <Route exact path='/register' component={Register} />
          {/* <Route exact path="/about" component={About} />
            <Route exact path="/discover" component={Discover} />
            <Route exact path="/search" component={Search} /> */}
          {/* </Wrapper> */}
          {/* <Footer /> */}
        </>
      </Router>
    );
  }
}

export default App;
