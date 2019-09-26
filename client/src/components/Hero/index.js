import React from "react";
import "./style.css";

function Hero(props) {
    return (
        <div className="hero text-center" style={{ backgroundImage: `url(${props.backgroundImage})`, height: `650px`, display: `flex` }}>
            {props.children}
        </div>
    )
}
export default Hero;