import React from "react";
import { Link } from 'react-router-dom';
import './style.css';
import logo from './logo.png';
import githubLogo from './githubLogo.png'

function Footer(props) {
    return (
        <>
            <nav className="navbar navbar-expand-lg navbar-light bg-dark">
             
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
                    <li className='nav-item' style={{ width: '300px' }}>
                        <Link to='/' className='nav-link text-light'><img className="mx-2" src={githubLogo} width="35px"></img>
                         Stephen Rogers<span className='sr-only'>(current)</span>
                        </Link>
                    </li>
                    <li className='nav-item' style={{ width: '300px' }}>
                        <Link to='/artists' className='nav-link text-light'><img className="mx-2" src={githubLogo} width="35px"></img>
                        Robbi Walls
                        </Link>
                    </li>
                    <li className='nav-item' style={{ width: '300px' }}>
                        <Link to='/pricing' className='nav-link text-light'><img className="mx-2" src={githubLogo} width="35px"></img>
                        Mike McGuire
                        </Link>
                    </li>
                    <li className='nav-item' style={{ width: '300px' }}>
                        <Link to='/login' className='nav-link text-light'><img className="mx-2" src={githubLogo} width="35px"></img>
                        Lucas Martins
                        </Link>
                    </li>
                    </ul>
                </div>
            </nav>
        </>
    )
}

export default Footer;