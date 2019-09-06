import React from "react";
import "./style.css";
import logo from "./logo.png"


function Navbar() {
    return (
        <nav className="navbar navbar-expand-lg navbar-light bg-dark">
            <img src={logo} style={{width: "45px", height: "50px"}} className="navbar-brand" href="#"></img>
            <a className="navbar-brand text-light">Paint A Good Boy</a>
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarNav">
                <ul className="navbar-nav mx-auto">
                <li className="nav-item active" style={{width: "150px"}}>
                    <a className="nav-link text-light" href="#">Home <span className="sr-only">(current)</span></a>
                </li>
                <li className="nav-item" style={{width: "150px"}}>
                    <a className="nav-link text-light" href="#">Features</a>
                </li>
                <li className="nav-item" style={{width: "150px"}}>
                    <a className="nav-link text-light" href="#">Pricing</a>
                </li>
                <li className="nav-item" style={{width: "150px"}}>
                    <a className="nav-link text-light" href="#">Disabled</a>
                </li>
                </ul>
            </div>
        </nav>
    )
}

export default Navbar;