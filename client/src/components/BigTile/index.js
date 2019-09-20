import React from "react";
import "./style.css";

function BigTile(props) {
    return (
        <>  
             <div className="card my-2 bg-dark">
                <div className="card-body">
                    <a href="https://placeholder.com"><img className="rounded" src={props.image} width="100%" height="100%" alt=""/></a>
                    <h1 className="display-1">{props.bigText}</h1>
                </div>
            </div>
        </>
    )
}

export default BigTile;