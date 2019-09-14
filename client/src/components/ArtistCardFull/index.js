import React from "react";
import "./style.css";

function ArtistCardFull() {
    return (
        <div className="card mb-3">
            <div className="row no-gutters">
                <div className="col-md-2">
                    <img src="https://via.placeholder.com/150" class="card-img" alt="..." height="100%" width="100%"></img>
                </div>
                <div className="col-md-10">
                    <div className="card-body">
                        <h5 className="card-title">Artist Name</h5>
                        <p className="card-text">Phasellus egestas tellus rutrum tellus pellentesque eu tincidunt tortor aliquam. Ac turpis egestas sed tempus urna et pharetra. Nunc lobortis mattis aliquam faucibus purus in massa.</p>
                        <p className="card-text"><small className="text-muted">Registered artist since 2010</small></p>
                        <div className="d-flex">
                            <div className="justify-content-start">
                                <button className="btn btn-primary btn-sm">Meet With This Artist</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ArtistCardFull;