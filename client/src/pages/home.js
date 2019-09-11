import React from "react";
import Hero from "../components/Hero";
import Container from "../components/Container";
import Row from "../components/Row";
import Col from "../components/Col";
import BigTile from "../components/BigTile";
import BigText from "../components/BigText";
// import Cal from "../components/Cal";
import ImageGallery from "../components/ImageGallery";
import "./Home.css"
import CatImage from "../cat-image.jpg";

function Home() {
    return (
        <>
          <Hero backgroundImage="https://data.1freewallpapers.com/download/autumn-animals-leaves-grass-dogs-puppies-adventure-golden-retriever-fallen-high-quality.jpg">
            <Container>
              <Row>
                <Col size="md-6">
                  <div className="splash-text my-5">
                    <h1 className="display-1 text-white text-left">Give Them</h1>
                    <h1 className="display-1 text-white text-left">The Attention</h1>
                    <h1 className="display-1 text-white text-left">They</h1>
                    <h1 className="display-1 text-white text-left">Deserve</h1>
                  </div>
                </Col>
                <div className="col-md-6 d-flex my-5">
                  <button className="btn btn-block btn-lg btn-info">Set An Appointment Today</button>
                </div>
              </Row>
            </Container>
          </Hero>
          <br></br>
          <Container className="under-splash">
            <Row>
              <Col size="md-12">
                <h1 className="display-2 text-dark text-center">Paint A Good Boy</h1>
                <h1 className=" text-dark text-center">Meet Our Artists</h1>
              </Col>
            </Row>
          </Container>
          <ImageGallery />
          <Container className="no-padding">
            <Row>
              <Col size="md-6">
                <BigTile image={CatImage} />
              </Col>
              <Col size="md-6">
                <BigText />
              </Col>  
            </Row>
            <Row>
              <Col size="md-6">
                <BigText />
              </Col>
              <Col size="md-6">
                <BigTile image="https://naturallivingfamily.com/wp-content/uploads/2018/01/How-to-Use-Essential-Oils-for-Dogs-and-Other-Pets.jpg" />
              </Col>  
            </Row>
          </Container>
        </>
    )
}

export default Home;