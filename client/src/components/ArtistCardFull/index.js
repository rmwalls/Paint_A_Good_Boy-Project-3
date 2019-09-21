import React from 'react';
import DayPickerInput from 'react-day-picker/DayPickerInput';
import 'react-day-picker/lib/style.css';
import Lightbox from '../../components/Lightbox';
import './style.css';

function ArtistCardFull(props) {
  return (
    <div className='card mb-3'>
      <div className='row no-gutters'>
        <div className='col-md-2'>
          <img
            src={props.pic}
            className='card-img img-thumbnail'
            alt='...'
            height='100%'
            width='100%'
          ></img>
        </div>
        <div className='col-md-10'>
          <div className='card-body'>
            <h5 className='card-title'>{props.name}</h5>
            <p className='card-text'>{props.bioInfo}</p>
            <p className='card-text'></p>
            <div className='d-flex'>
              <div className='justify-content-start'>
                <button className='btn btn-primary btn-sm'>
                  Meet With This Artist
                </button>
                <DayPickerInput
                  component={props => <input {...props} />}
                  placeholder='DD/MM/YYYY'
                  format='DD/MM/YYYY'
                />
                <Lightbox></Lightbox>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ArtistCardFull;
