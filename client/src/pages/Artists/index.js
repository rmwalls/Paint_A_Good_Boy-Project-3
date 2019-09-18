import React, { Component } from 'react';
import ArtistCardFull from '../../components/ArtistCardFull';
import SelectBox from '../../components/SelectBox';
import axios from 'axios';
import Footer from '../../components/Footer';

class Artists extends Component {
  state = {
    artists: [],
    career: ''
  };

  componentDidMount() {
    this.loadAllArtists();
  }

  setCareer = career => {
    this.setState({ career: career }, this.loadArtistsByCareer());
  };

  loadAllArtists = () => {
    axios
      .get(`/api/artists/`)
      .then(res => console.log(res) || this.setState({ artists: res.data }))
      .catch(err => console.log(err));
  };

  loadArtistsByCareer = () => {
    axios
      .get(`/api/artists/${this.state.career.value}`)
      .then(res => console.log(res) || this.setState({ artists: res.data }))
      .catch(err => console.log(err));
  };

  render() {
    return (
      <>
      {/*The br's are to push the content below the navbar*/}
      <br></br>
      <br></br>
      <br></br>
        <h1>Artist List</h1>;
        <SelectBox
          width={400}
          name='artist-specialty'
          items={[
            { value: 'Photograph', id: 1 },
            { value: 'Painting', id: 2 },
            { value: 'Video', id: 3 }
          ]}
          onChange={this.setCareer}
        />
        {this.state.artists.length ? (
          this.state.artists.map(artist => (
            <div className='container'>
              <div className='row'>
                <div className='col-md-12'>
                  <ArtistCardFull name={artist.name}></ArtistCardFull>
                  <ArtistCardFull bioInfo={artist.bioInfo}></ArtistCardFull>
                </div>
              </div>
            </div>
          ))
        ) : (
          <h3>No Results to Display</h3>
        )}
        <Footer sticky-bottom="sticky-bottom" />
      </>
    );
  }
}

export default Artists;
