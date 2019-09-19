import React, { Component } from "react";
import "./style.css";
import data from '../../artists.json';

class ArtistCard extends Component {
    state = {
        data,
        clickedIds: []
    }
    componentDidMount() {
        this.setState({
            data: data,
            clickedIds: [],
        })
    }
    handleButtonClicks = id => {
        let clickedIds = this.state.clickedIds;
        //write code to go to page for artist clicked
    }
    render() {
        return (
            <div className="Display" >
                <div className="grid-container">
                    {   //map over the images array and display each in a grid cell. When one is clicked, handle it
                        this.state.data.map(item => (  
                            <div className="grid-item">
                                <img src={item.image} width="150px" height="150px" id={item.id} alt="artist pic" onClick={() => this.handleButtonClicks(item.id)} />
                            </div>
                        ))
                    }
                </div>
            </div>
        )
    }
}

//will likely use clickedIds for appointment scheduling
export default ArtistCard;