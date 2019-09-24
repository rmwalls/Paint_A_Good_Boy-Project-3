import React, { Component } from 'react';
import ArtistCardFull from '../../components/ArtistCardFull';
import axios from 'axios';
import Footer from '../../components/Footer';

class Artists extends Component {
  constructor() {
    super();
    this.state = {
      artists: [],
      // career: '',
      userId: localStorage.getItem('userId'),
      artistId: '',
      selectedDate: 'today'
    };
    this.handleClick = this.handleClick.bind(this);
  }

  componentDidMount() {
    this.loadAllArtists();
  }

  handleClick(e) {
    e.preventDefault();
    console.log('this is the current userID!: ' + this.state.userId);
    let selectedArtistId = this.state.ArtistId;
    let userId = this.state.userId;
    let selectedDate = this.state.selectedDate;

    axios.get(`/api/artists/${selectedArtistId}`).then(res => {
      console.log('selected artist: ' + res.data.name);
      let thisUser = userId;
      let appointment = {
        artist: res.data.name,
        date: selectedDate
      };
      axios
        .post(`/api/users/appointments/${thisUser}`, appointment)
        .then(res => console.log(res))
        .catch(err => console.log(err));
    });
  }

  // setCareer = career => {
  //   this.setState({ career: career }, this.loadArtistsByCareer);
  // };

  loadAllArtists = () => {
    axios
      .get(`/api/artists/`)
      .then(res => this.setState({ artists: res.data }))
      .catch(err => console.log(err));
  };

  // loadArtistsByCareer = () => {
  //   axios
  //     .get(`/api/artists/${this.state.career.value}`)
  //     .then(res => console.log(res) || this.setState({ artists: res.data }))
  //     .catch(err => console.log(err));
  // };

  render() {
    return (
      <>
        {/*The br's are to push the content below the navbar*/}
        <br></br>
        <br></br>
        <br></br>
        <div className='row'>
          <div className='col-md-12'>
            <h1 className='text-center'>Artist List</h1>
          </div>
        </div>

        {this.state.artists.length ? (
          this.state.artists.map(artist => (
            <div className='container'>
              <div className='row'>
                <div className='col-md-12'>
                  <ArtistCardFull
                    key={artist._id}
                    name={artist.name}
                    bioInfo={artist.bioInfo}
                    year={artist.career}
                    pic={artist.artistPhoto}
                    media={artist.media}
                    onClick={this.handleClick}
                  />
                </div>
              </div>
            </div>
          ))
        ) : (
          <h3>No Results to Display</h3>
        )}
        <Footer sticky-bottom='sticky-bottom' />
      </>
    );
  }
}

export default Artists;
