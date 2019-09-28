import React, { Component } from 'react';
import ArtistCardFull from '../../components/ArtistCardFull';
import toaster from 'toasted-notes';
import 'toasted-notes/src/styles.css';
import axios from 'axios';
import Footer from '../../components/Footer';
import './Appointments.css';

class Appointments extends Component {
  constructor() {
    super();
    this.state = {
      appointments: [],
      userId: localStorage.getItem('userId')
    };
  }

  componentDidMount() {
    this.loadAppointments();
  }

  removeAppointment(id) {
    axios
      .post(`/api/appointments/delete/${id}`, {
        appointment: id
      })
      .then(res => this.setState({ appointments: res.data }))
      .catch(err => console.log(err));
    this.loadAppointments();
    toaster.notify(<h4>Appointment cancelled!</h4>, {
      duration: 2000
    });
  }

  loadAppointments = () => {
    axios
      .get(`/api/appointments/${this.state.userId}`)
      .then(
        res =>
          console.log(res.data) || this.setState({ appointments: res.data })
      )
      .catch(err => console.log(err));
  };

  render() {
    return (
      <>
        {/*The br's are to push the content below the navbar*/}
        <br></br>
        <br></br>
        <br></br>
        <div className='row'>
          <div className='col-md-12'>
            <h1 className='text-center'>Appointment List</h1>
          </div>
        </div>

        {this.state.appointments.length ? (
          this.state.appointments.map(appointment => (
            <div className='container'>
              <div className='row'>
                <div className='col-md-12'>
                  <ArtistCardFull
                    key={appointment.artist._id}
                    name={appointment.artist.name}
                    pic={appointment.artist.artistPhoto}
                    media={appointment.artist.media}
                    cardText={'Appointment scheduled for: ' + appointment.date}
                    buttonText='Cancel Appointment'
                    onClick={e => {
                      e.preventDefault();
                      this.removeAppointment(appointment._id);
                    }}
                  />
                </div>
              </div>
            </div>
          ))
        ) : (
          <h3>No Appointments to Display</h3>
        )}
        <Footer sticky-bottom='sticky-bottom' />
      </>
    );
  }
}

export default Appointments;
