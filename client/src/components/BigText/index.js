import React from "react";
import "./style.css";

function BigText() {
    return (
        <>
            <div className="card my-2 text-white">
                <div className="card-body">
                    <h1 className="display-1 text-black card-text text-left"></h1>
                    <h2 className="text-black card-text text-left"></h2>
                    <p className="card-text"></p>
                    <br></br>
                    <h1 className="display-1 text-black card-text text-left"></h1>
                    <h2 className=" text-black card-text text-left"></h2>
                    <p className="card-text">
                        <ul>
                            <li></li>
                            <li></li>
                            <li></li>
                            <li></li>
                        </ul>
                    </p>
                </div>
            </div>
        </>
    )
}
export default BigText;