//This component maps over the artists listed in the artists.json file to display them in the carousel in the ImageGallery component
//clickedIds can be used to do something when an artist is clicked. This is not currently being done (RMW)
import React from 'react';
import './style.css';

function ArtistCard(props) {
  return (
    <div className='Display'>
      <div className='grid-container'>
        <div className='grid-item'>
          <img
            src={props.artists.image}
            width='150px'
            height='150px'
            alt='artist pic'
          />
        </div>
      </div>
    </div>
  );
}

//will likely use clickedIds for appointment scheduling and/or displaying artists' work samples
export default ArtistCard;
