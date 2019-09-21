////instructions for the home page for artists
import React from 'react';
import './style.css';

function InstructionArtist() {
    return (
        <>
            <div className="card my-2 text-white">
                <div className="card-body">

                    <h1 className="display-1 text-black card-text text-left">Do You Love Photographing Pets?</h1>
                    <h2 className="text-black card-text text-left">Let's Record Some Memories</h2>
                    <p className="card-text">Our customers are looking for YOU. They want to have quality images of their pets. Join our team! You'll be so glad you did!</p>
                    <br></br>
                    <h1 className="display-1 text-black card-text text-left">Showcase Your Work!</h1>
                    <h2 className=" text-black card-text text-left">Find new customers!</h2>
                    <p className="card-text">We're looking for artists who specialize in working with pets.
                    <ul>
                        <li>Photographs</li>
                        <li>Paintings</li>
                        <li>Video</li>
                        <li>Sculpture or other!</li>
                    </ul>
                    Show what you can do. Get leads. Work with clients to create their projects and budgets.
                    </p>
                </div>
            </div>
        </>
    )
}
export default InstructionArtist;