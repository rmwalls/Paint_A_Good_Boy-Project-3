import React from 'react';
import Hero from '../../components/Hero';
import Container from '../../components/Container';
import Row from '../../components/Row';
import Col from '../../components/Col';
//import Cal from '../../components/Cal';
import ImageGallery from '../../components/ImageGallery';
import BigTile from '../../components/BigTile';
import BigText from '../../components/BigText';
import CatImage from '../../cat-image.jpg';
import Footer from '../../components/Footer';
import './Home.css';
import { Breakpoint } from 'react-socks';

function Home() {
  return (
    <>
    <br></br>
    <Breakpoint l only>
      <Hero backgroundImage='https://data.1freewallpapers.com/download/autumn-animals-leaves-grass-dogs-puppies-adventure-golden-retriever-fallen-high-quality.jpg'>
          <Container>
            <Row>
              <Col size='md-6'>
                <div className='splash-text my-5'>
                  <h1 className='display-1 text-white text-left'>Give Them</h1>
                  <h1 className='display-1 text-white text-left'>The Attention</h1>
                  <h1 className='display-1 text-white text-left'>They</h1>
                  <h1 className='display-1 text-white text-left'>Deserve</h1>
                </div>
              </Col>
              <div className='col-md-6 d-flex my-5'>
                <button className='btn btn-block btn-lg btn-info'>Set An Appointment Today</button>
              </div>
            </Row>
          </Container>
        </Hero>
      </Breakpoint>
      <br></br>
      <Breakpoint m only>
          <div className="row">
            <div className="col-md-12">
              <div className="card text-white text-center">
                <img className="card-img rounded" src="https://naturallivingfamily.com/wp-content/uploads/2018/01/How-to-Use-Essential-Oils-for-Dogs-and-Other-Pets.jpg" alt="Doggy"></img>
                <div className="card-img-overlay">
                <br></br>
                  <h1 className="display-3 card-title text-center">Give Them The Attention</h1>
                  <h1 className="display-1 card-title text-center">They Deserve</h1>
                  <button className='btn btn-lg btn-info'>Set An Appointment Today</button>  
                </div>
              </div>
            </div>
          </div>
      </Breakpoint>
      <Container className='under-splash'>
        <Row>
          <Col size='md-12'>
            <h1 className='display-2 text-dark text-center'>Paint A Good Boy</h1>
            <h1 className=' text-dark text-center'>Meet Our Artists</h1>
          </Col>
        </Row>
      </Container>
      <Breakpoint l only>
      <ImageGallery />
      </Breakpoint>
      <Breakpoint l only>
      <Container className='no-padding'>
        <Row>
          <div className='col-md-6 d-flex'>
            <BigTile image={CatImage} />
          </div>
          <div className='col-md-6 d-flex'>
            <BigText />
          </div>
        </Row>
        <Row>
          <div className='col-md-6 d-flex'>
            <BigText />
          </div>
          <div className='col-md-6 d-flex'>
            <BigTile image='https://naturallivingfamily.com/wp-content/uploads/2018/01/How-to-Use-Essential-Oils-for-Dogs-and-Other-Pets.jpg' />
          </div>
        </Row>
        <br></br>
        <br></br>
      </Container>
      </Breakpoint>
            <Footer />
    </>
  );
}

export default Home;