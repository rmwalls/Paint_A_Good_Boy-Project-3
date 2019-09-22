import React from "react";
import "./style.css";

function NewFooter() {
    return (
        <>
            <div className="card my-2 bg-dark">
                <div className="card-body">
                    <a href="https://placeholder.com"><img className="rounded" src={props.image} width="100%" height="100%" /></a>
                </div>
            </div>
        </>
    )
}
export default NewFooter;