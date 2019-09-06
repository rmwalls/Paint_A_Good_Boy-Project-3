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
                  <h1 className="display-1 text-white">Give Them </h1>
                </Col>
              </Row>
            </Container>
          </Hero>
        </>
    )
}

export default Home;