import React from "react";
//import { Link } from 'react-router-dom';
import './style.css';
//import logo from './logo.png';
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
                        <a href="https://github.com/smrogers93" rel="noreferrer noopener" target='_blank' className='nav-link text-light'><img className="mx-2" src={githubLogo} width="35px" alt="github logo"></img>
                         Stephen Rogers<span className='sr-only'>(current)</span>
                        </a>
                    </li>
                    <li className='nav-item' style={{ width: '300px' }}>
                        <a href="https://rmwalls.github.io/" rel="noreferrer noopener" target='_blank' className='nav-link text-light'><img className="mx-2" src={githubLogo} width="35px" alt="github logo"></img>
                        Robbi Walls
                        </a>
                    </li>
                    <li className='nav-item' style={{ width: '300px' }}>
                        <a href="https://github.com/mwmcguire" rel="noreferrer noopener" target='_blank' className='nav-link text-light'><img className="mx-2" src={githubLogo} width="35px" alt="github logo"></img>
                        Mike McGuire
                        </a>
                    </li>
                    <li className='nav-item' style={{ width: '300px' }}>
                        <a href="https://github.com/lucasmdmartins" rel="noreferrer noopener" target='_blank' className='nav-link text-light'><img className="mx-2" src={githubLogo} width="35px" alt="github logo"></img>
                        Lucas Martins
                        </a>
                    </li>
                    </ul>
                </div>
            </nav>
        </>
    )
}

export default Footer;