import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import './App.css';

import Navbar from './components/Navbar';
import ContainerMain from './components/ContainerMain';

const App = () => (
      <Router>
        <div>
          <Navbar />
          <ContainerMain />
        </div>  
      </Router>
    );

export default App;
