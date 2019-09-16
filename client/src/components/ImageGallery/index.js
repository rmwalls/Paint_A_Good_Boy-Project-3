import React from "react";
//import Col from "../Col";
import ArtistCard from "../ArtistCard"
import "./style.css";

function ImageGallery() {
  return (
    <div className='bs-example'>
      <div id='myCarousel' className='carousel slide' data-ride='carousel'>
        <ol className='carousel-indicators'>
          <li data-target='#myCarousel' data-slide-to='0' className='active'></li>
          <li data-target='#myCarousel' data-slide-to='1'></li>
          <li data-target='#myCarousel' data-slide-to='2'></li>
        </ol>

        <div id="myCarousel" className="carousel slide" data-ride="carousel">

          <ol className="carousel-indicators">
            <li data-target="#myCarousel" data-slide-to="0" className="active"></li>
            <li data-target="#myCarousel" data-slide-to="1"></li>
            <li data-target="#myCarousel" data-slide-to="2"></li>
          </ol>

          <div className="carousel-inner">
            <div className="carousel-item active">
              <ArtistCard></ArtistCard>
            </div>
            <div className="carousel-item">
              <ArtistCard></ArtistCard>
            </div>
            <div className="carousel-item">
              <ArtistCard></ArtistCard>
            </div>
          </div>

        <a className='carousel-control-prev' href='#myCarousel' data-slide='prev'>
          <span className='carousel-control-prev-icon'></span>
        </a>
        <a className='carousel-control-next' href='#myCarousel' data-slide='next'>
          <span className='carousel-control-next-icon'></span>
        </a>

      </div>

      <a
        className='carousel-control-prev'
        href='#myCarousel'
        data-slide='prev'
      >
        <span className='carousel-control-prev-icon'></span>
      </a>
      <a
        className='carousel-control-next'
        href='#myCarousel'
        data-slide='next'
      >
        <span className='carousel-control-next-icon'></span>
      </a>
    </div>
  );
}

export default ImageGallery;
