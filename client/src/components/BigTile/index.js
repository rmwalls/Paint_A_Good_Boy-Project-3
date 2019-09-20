import React from "react";
import "./style.css";

function BigTile(props) {
    return (
        <>  
             <div className="card my-2 bg-dark">
                <div className="card-body">
                    <a href="https://placeholder.com/979E93/f6f6f6"><img className="rounded" src={props.image} width="100%" height="100%" alt=""/></a>
                </div>
            </div>
        </>
    )
}

export default BigTile;