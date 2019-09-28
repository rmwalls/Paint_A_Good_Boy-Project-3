import React, { Component } from 'react';
import DayPickerInput from 'react-day-picker/DayPickerInput';
import 'react-day-picker/lib/style.css';
import toaster from 'toasted-notes';
import 'toasted-notes/src/styles.css';
import ArtistCardFull from '../../components/ArtistCardFull';
import axios from 'axios';
import Footer from '../../components/Footer';
import './style.css';

class Artists extends Component {
  constructor(props) {
    super(props);
    this.state = {
      artists: [],
      userId: localStorage.getItem('userId'),
      selectedDay: '',
      isEmpty: true,
      isDisabled: false
    };

    this.selectArtist = this.selectArtist.bind(this);
    this.handleDayChange = this.handleDayChange.bind(this);
  }

  componentDidMount() {
    this.loadAllArtists();
  }

  handleDayChange(selectedDay, modifiers, dayPickerInput) {
    const input = dayPickerInput.getInput();
    this.setState({
      selectedDay,
      isEmpty: !input.value.trim(),
      isDisabled: modifiers.disabled === true
    });
  }

  selectArtist(id) {
    axios
      .post('/api/appointments', {
        artist: id,
        user: this.state.userId,
        date: this.state.selectedDay
      })
      .then(res => console.log(res))
      .catch(err => console.log(err));

    toaster.notify(
      <h4>
        Appointment confirmed for:
        <h3>{this.state.selectedDay.toLocaleDateString()}</h3>
      </h4>,
      {
        duration: 2000
      }
    );
  }

  loadAllArtists = () => {
    axios
      .get(`/api/artists/`)
      .then(res => this.setState({ artists: res.data }))
      .catch(err => console.log(err));
  };

  render() {
    const { selectedDay, isDisabled, isEmpty } = this.state;
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
                <div className='col-md-10'>
                  <ArtistCardFull
                    key={artist._id}
                    name={artist.name}
                    bioInfo={artist.bioInfo}
                    year={artist.career}
                    pic={artist.artistPhoto}
                    media={artist.media}
                    buttonState='d-none'
                    buttonText='Meet With This Artist'
                  />
                </div>
                <div className='col-md-2'>
                  <p>
                    {isEmpty && 'Please type or pick a day'}
                    {!isEmpty && !selectedDay && 'This day is invalid'}
                    {selectedDay && isDisabled && 'This day is disabled'}
                    {selectedDay &&
                      !isDisabled &&
                      `You chose ${selectedDay.toLocaleDateString()}`}
                  </p>
                  <DayPickerInput
                    value={selectedDay}
                    onDayChange={this.handleDayChange}
                    dayPickerProps={{
                      selectedDays: selectedDay,
                      disabledDays: {
                        daysOfWeek: [0, 6]
                      }
                    }}
                  />
                  <button
                    className='btn btn-primary btn-sm mt-1'
                    onClick={e => {
                      e.preventDefault();
                      this.selectArtist(artist._id);
                    }}
                  >
                    Meet With This Artist
                  </button>
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
