import React, { Component } from 'react';
import ArtistCardFull from "../../components/ArtistCardFull";
import axios from 'axios';

class Artists extends Component {
  state = {
    artists: []
  };

  componentDidMount() {
    this.loadArtists();
  }

  loadArtists = () => {
    axios
      .get('/api/artists', (req, res) => {
        console.log(res.data);
      })
      .then(res => this.setState({ artists: res.data }))
      .catch(err => console.log(err));
  };

  render() {
    return (
      <>
        <h1>Artist List</h1>;
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <ArtistCardFull></ArtistCardFull>
            </div>
          </div>
        </div>
        {/* <div>
          {this.state.artists.length ? (
            <ul>
              {this.state.artists.map(artist => (
                <li key={artist._id}>
                  <a href={'/artists/' + artist._id}>
                    <strong>{artist.name}</strong>
                  </a>
                </li>
              ))}
            </ul>
          ) : (
            <h3>No Results to Display</h3>
          )}
        </div> */}
      </>
    );
  }
}

export default Artists;
