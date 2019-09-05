import React from "react";
import "./style.css";

function Hero(props) {
    return (
        <div className="hero text-center" style={{ backgroundImage: `url(${props.backgroundImage})`, height:`700px`, display:`flex`}}>
            {props.children}
        </div>
    )    
}

export default Hero;