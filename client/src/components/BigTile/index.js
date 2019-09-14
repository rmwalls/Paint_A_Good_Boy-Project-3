import React from "react";
import "./style.css";

function BigTile(props) {
    return (
        <>  <div className="card">
                <div className="card-body">
                    <a href="https://placeholder.com"><img src={props.image} width="100%" height="100%" alt="artist images"/></a>
                </div>
            </div>
        </>
    )
}

export default BigTile;