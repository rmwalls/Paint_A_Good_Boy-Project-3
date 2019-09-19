import React from 'react';
import './style.css';

function ArtistCardFull(props) {
  return (
    <div className='card mb-3'>
      <div className='row no-gutters'>
        <div className='col-md-2'>
          <img
            src={props.pic}
            className='card-img'
            alt='...'
            height='200px'
            width='200px'
          ></img>
        </div>
        <div className='col-md-10'>
          <div className='card-body'>
            <h5 className='card-title'>{props.name}</h5>
            <p className='card-text'>{props.bioInfo}</p>
            <p className='card-text'>
              <small className='text-muted'>
                Registered artist since {props.year}
              </small>
            </p>
            <div className='d-flex'>
              <div className='justify-content-start'>
                <button className='btn btn-primary btn-sm'>
                  Meet With This Artist
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ArtistCardFull;
