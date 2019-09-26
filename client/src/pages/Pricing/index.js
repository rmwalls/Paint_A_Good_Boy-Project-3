//Pricing page - for artists, not users
import React from "react";
import Footer from "../../components/Footer";
import ArtistPricing from "../../components/ArtistPricing";
import Container from "../../components/Container";
import Row from '../../components/Row';
import Col from '../../components/Col';
import BigTile from "../../components/BigTile";
import "./Pricing.css";

function Pricing() {
    return (
        <>
            <Container className='pricebody'>
                <Row>
                    <Col size='md-12'>
                        <div>
                            <ArtistPricing />
                        </div>
                    </Col>
                </Row>
                <Row>
                    <Col size='md-6'>
                        <p>We have three membership options. <a href="mailto:groovyrlm@gmail.com">Contact Us</a> for more information on what we provide! Our success is interlinked with yours!</p>
                        <div id="cf">
                            <img class="bottom" src="../../img/other/prints2.png" alt="paw prints" align="right" width="100%"></img>
                            <img class="top" src="../../img/other/prints3.png" alt="paw prints" align="right" width="100%"></img>
                        </div>
                    </Col>
                    <Col size='md-6'>
                        <img src="../../img/other/prints.png" alt="paw prints" align="right" width="50%"></img>
                        <p>Monthly Fee plus:</p>
                        <ol>
                            <li>Fee per lead</li>
                            <li>Fee per booking</li>
                            <li>Fee per click</li>
                        </ol>
                    </Col>
                </Row>
                <Row>
                    <Col size='md-6'>
                        <BigTile image="../../img/other/APPA_stats.jpg" />
                    </Col>
                    <Col size='md-6'>
                        <h3>More about the industry</h3>
                        <ul>
                            <li> <a href="https://www.ibtimes.com/pet-industry-spending-trends-expected-2019-2746276">https://www.ibtimes.com/pet-industry-spending-trends-expected-2019-2746276</a> </li>
                            <li> <a href="https://www.businessinsider.com/pet-care-industry-grows-as-millennials-elevate-pets-2019-5">https://www.businessinsider.com/pet-care-industry-grows-as-millennials-elevate-pets-2019-5</a> </li>
                            <li> <a href="https://zoomroom.com/franchise/pet-services-industry/">https://zoomroom.com/franchise/pet-services-industry/</a> </li>
                        </ul>
                        <BigTile image="../../img/other/APPA_stats2.jpg" />
                        <div id="cf2">
                    <img class="bottom" src="../../img/other/prints4.png" alt="paw prints" align="right" width="100%"></img>
                    <img class="top" src="../../img/other/prints5.png" alt="paw prints" align="right" width="100%"></img>
                </div>
                    </Col>
                </Row>
            </Container>
            <Footer sticky-bottom='sticky-bottom' />
        </>
    )
}
export default Pricing;