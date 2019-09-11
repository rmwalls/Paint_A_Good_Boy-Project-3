import React from "react";
import Hero from "../components/Hero";
import Container from "../components/Container";
import Row from "../components/Row";
import Col from "../components/Col";
import ImageGallery from "../components/ImageGallery";

function Home() {
    return (
        <>
          <Hero backgroundImage="https://data.1freewallpapers.com/download/autumn-animals-leaves-grass-dogs-puppies-adventure-golden-retriever-fallen-high-quality.jpg">
            <Container>
              <Row>
                <Col size="md-6">
                  <h1 className="display-1 text-white">Give Them</h1>
                  <h1 className="display-1 text-white">The Attention They</h1>
                  <h1 className="display-1 text-white">Deserve</h1>
                </Col>
                <Col size="md-6">
                  <button className="btn btn-info">Set An Appointment Today</button>
                </Col>
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
        </>
    )
}

export default Home;