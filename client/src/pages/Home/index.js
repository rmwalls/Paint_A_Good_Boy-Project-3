import React from 'react';
import Hero from '../../components/Hero';
import Container from '../../components/Container';
import Row from '../../components/Row';
import Col from '../../components/Col';
import Cal from '../../components/Cal';
import ImageGallery from '../../components/ImageGallery';
import SelectBox from '../../components/SelectBox';
import './Home.css';

function Home() {
  return (
    <>
      <Hero backgroundImage='https://data.1freewallpapers.com/download/autumn-animals-leaves-grass-dogs-puppies-adventure-golden-retriever-fallen-high-quality.jpg'>
        <Container>
          <Row>
            <Col size='md-6'>
              <div className='splash-text my-5'>
                <h1 className='display-1 text-white'>Give Them</h1>
                <h1 className='display-1 text-white'>The Attention They</h1>
                <h1 className='display-1 text-white'>Deserve</h1>
                <SelectBox
                  width={400}
                  name='artist-specialty'
                  items={[
                    { value: 'Photograph', id: 1 },
                    { value: 'Painting', id: 2 },
                    { value: 'Video', id: 3 }
                  ]}
                />
              </div>
            </Col>
          </Row>
        </Container>
      </Hero>
      <br></br>
      <Container className='under-splash'>
        <Row>
          <Col size='md-12'>
            <h1 className='display-2 text-dark text-center'>
              Paint A Good Boy
            </h1>
            <h1 className=' text-dark text-center'>Meet Our Artists</h1>
          </Col>
        </Row>
      </Container>
      <ImageGallery />
      <Cal />
    </>
  );
}

export default Home;
