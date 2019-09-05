import React from 'react';
import { BrowserRouter as Router, Route} from "react-router-dom";
import './App.css';
import Navbar from "./components/Navbar"

function App() {
  return (
    // <Router>
    //   <>
        <Navbar />
    //       <Wrapper>
    //         <Route exact path="/" component={Home} />
    //         <Route exact path="/about" component={About} />
    //         <Route exact path="discover" component={Discover} />
    //         <Route exact path="/search" component={Search} />
    //       </Wrapper>
    //     <Footer />
    //   </>
    // </Router>
  );
}

export default App;
