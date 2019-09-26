import React from 'react';
import { Link } from 'react-router-dom';
import './style.css';
import logo from './logo.png';

class Navbar extends React.Component {
  // state = {
  //   logInChage: false;
  // }
  logout = () => {
    localStorage.removeItem('jwtToken');
    localStorage.removeItem('userId');
    this.props.updateLoginState(false);
    window.location.reload();
  };

  // showProtectedRoutes = () => {
  //   if(localStorage.getItem("jwtToken") === null) {
  //     console.log("testing navbar items");
  //     return (
  //   }
  // }

  render() {
    return (
      <nav className='navbar fixed-top navbar-expand-lg navbar-light bg-dark '>
        <img
          src={logo}
          style={{ width: '45px', height: '50px' }}
          className='navbar-brand'
          href='#'
          alt=''
        ></img>
        <Link to='/' className='navbar-brand text-light'>
          Paint A Good Boy
        </Link>
        <button
          className='navbar-toggler'
          type='button'
          data-toggle='collapse'
          data-target='#navbarNav'
          aria-controls='navbarNav'
          aria-expanded='false'
          aria-label='Toggle navigation'
        >
          <span className='navbar-toggler-icon'></span>
        </button>
        <div className='collapse navbar-collapse' id='navbarNav'>
          <ul className='navbar-nav mx-auto'>
            <li className='nav-item active' style={{ width: '150px' }}>
              <Link to='/' className='nav-link text-light'>
                Home <span className='sr-only'>(current)</span>
              </Link>
            </li>
            <li className='nav-item' style={{ width: '150px' }}>
              <Link to='/artists' className='nav-link text-light'>
                Artists
              </Link>
            </li>
            <li className='nav-item' style={{ width: '150px' }}>
              <Link to='/appointments' className='nav-link text-light'>
                Appointments
              </Link>
            </li>
            <li className='nav-item' style={{ width: '150px' }}>
              <Link to='/pricing' className='nav-link text-light'>
                Pricing
              </Link>
            </li>
            {this.props.loggedIn ? (
              <li className='nav-item' style={{ width: '150px' }}>
                <Link
                  to='/'
                  className='nav-link text-light'
                  onClick={this.logout}
                >
                  Log Out
                </Link>
              </li>
            ) : (
              <li className='nav-item' style={{ width: '150px' }}>
                <Link to='/login' className='nav-link text-light'>
                  Log In
                </Link>
              </li>
            )}
          </ul>
        </div>
      </nav>
    );
  }
}
export default Navbar;
