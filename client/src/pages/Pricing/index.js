//Pricing page - for artists
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
                        <BigTile image="../../img/other/APPA_stats.jpg" />
                    </Col>
                    <Col size='md-6'>
                        <BigTile image="../../img/other/APPA_stats2.jpg" />
                    </Col>
                </Row>
            </Container>
                <Footer sticky-bottom='sticky-bottom' />
        </>
    )
}
export default Pricing;
