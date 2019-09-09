import React from "react";
import Hero from "../components/Hero";
import Container from "../components/Container";
import Row from "../components/Row";
import Col from "../components/Col";

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
                  <button className="btn btn-primary">Set An Appointment Today</button>
                </Col>
              </Row>
            </Container>
          </Hero>
          <Container>
            <Row>
              <Col size="md-12">
              </Col>
            </Row>
          </Container>
        </>
    )
}

export default Home;