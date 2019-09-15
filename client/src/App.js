import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import './App.css';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import Artists from './pages/Artists';
import Register from './pages/Register';
import Login from './pages/Login';

class App extends React.Component {
  render() {
    return (
      <Router>
        <>
          <Navbar />
          {/* <Wrapper> */}
          <Route exact path='/' component={Home} />
          <Route exact path='/artists' component={Artists} />
          <Route exact path='/login' component={Login} />
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
