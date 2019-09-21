import React, { Component } from 'react';
import LightboxImage from 'react-image-lightbox';
import 'react-image-lightbox/style.css'; // This only needs to be imported once in your app
 

 
export default class LightboxExample extends Component {
  constructor(props) {
    super(props);
 
    this.state = {
      photoIndex: 0,
      isOpen: false,
      tempProps: props
    };
  }
  componentDidMount() {
    console.log(this.state.tempProps)
  }
  render() {
    const { photoIndex, isOpen } = this.state;
    const images = [
      this.state.tempProps.media[0],
      this.state.tempProps.media[1],
      this.state.tempProps.media[2],
      this.state.tempProps.media[3],
    ];
 
    return (
      <div>
        <button className="btn btn-secondary btn-sm" onClick={() => this.setState({ isOpen: true })}>
          View Their Work
        </button>
 
        {isOpen && (
          <LightboxImage
            mainSrc={images[photoIndex]}
            nextSrc={images[(photoIndex + 1) % images.length]}
            prevSrc={images[(photoIndex + images.length - 1) % images.length]}
            onCloseRequest={() => this.setState({ isOpen: false })}
            onMovePrevRequest={() =>
              this.setState({
                photoIndex: (photoIndex + images.length - 1) % images.length,
              })
            }
            onMoveNextRequest={() =>
              this.setState({
                photoIndex: (photoIndex + 1) % images.length,
              })
            }
          />
        )}
      </div>
    );
  }
}