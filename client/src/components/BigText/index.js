import React from "react";
import "./style.css";

function BigText() {
    return (
        <>
            <div className="card my-2 bg-info text-white">
                <div className="card-body">

                    <h1 className="display-1 text-black card-text text-left">We Love Them Like Our Kids</h1>
                    <h2 className="text-black card-text text-left">Let's Record Some Memories</h2>
                    <p className="card-text">Our artists can meet your needs for photography, videography, paintings and/or other art. Read their bios, look at samples of their work and then schedule some time to discuss your wishes and get a quote. You'll be so glad you did!</p>
                    <br></br>
                    <h1 className="display-1 text-black card-text text-left">Dogs, Cats, Birds...</h1>
                    <h2 className=" text-black card-text text-left">and More!</h2>
                    <p className="card-text">Most of our artists love to capture you and your dogs or cats. Some will also work with "exotic" pets such as hamsters, guinea pigs, snakes or turtles. It never hurts to ask, right? Other options to consider: 
                    <ul>
                        <li>Inside or Outside</li>
                        <li>Still or Action</li>
                        <li>You <strong>and</strong> your pets, or just your pets</li>
                        <li>One medium or multiple</li>
                    </ul>
                    Decide what you think you want and discuss it with an artist. Our service puts you in touch with the artists and together you create your project and budget.
                    </p>
                </div>
            </div>
        </>
    )
}

export default BigText;