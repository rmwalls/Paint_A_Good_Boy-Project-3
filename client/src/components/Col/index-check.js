import React from "react";

function Col(props) {
    return <div className={`row${props.fluid ? "-fluid" : ""}`} {...props} />
}
export default Col;