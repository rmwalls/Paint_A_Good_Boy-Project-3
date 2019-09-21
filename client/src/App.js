import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import './App.css';

import Navbar from './components/Navbar';
import ContainerMain from './components/ContainerMain';
import { Breakpoint, BreakpointProvider } from 'react-socks';
import { setDefaultBreakpoints } from 'react-socks';

setDefaultBreakpoints([
  { m: 0},
  { l: 1260 }
])

const App = () => (
      <BreakpointProvider>
        <Router>
          <div>
            <Navbar />
            <ContainerMain />
          </div>  
        </Router>
      </BreakpointProvider>
    );

export default App;
