import React from 'react';
import Lightbox from '../../components/Lightbox';
import './style.css';

function ArtistCardFull(props) {
  // console.log(props);

  return (
    <div className='card bg-light mb-3'>
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
            <p className='card-text'>{props.cardText}</p>
            <div className='d-inline-flex'>
              <button
                className='btn btn-primary btn-sm mr-1'
                onClick={props.onClick}
              >
                {props.buttonText}
              </button>


              <Lightbox media={props.media}></Lightbox>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
export default ArtistCardFull;