import React from "react";
import "./style.css";

function BigTile(props) {
    return (
        <>
            <a href="https://placeholder.com"><img src={props.image} width="800px" height="800px"/></a>
        </>
    )
}

export default BigTile;