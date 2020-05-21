import React from 'react'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Reveal from './Reveal'

const QuickInfo = () => {
    return (
        <Reveal className="quick-info" animationType="fadeInLeft">
            <Container>
                <Row>
                    <Col lg="8" className="bgcolor">
                        <Row className="irregular-row-width-fix">
                            <Col md="5" className="mb-3">
                                <div className="media">
                                    <div className="mr-3 icon-wrap"><span className="fa fa-phone"></span></div>
                                    <div className="media-body">
                                        <h5><a href="tel:09143 6518">09143 6518</a></h5>
                                        <p>Für nähere Informationen rufen Sie uns gerne direkt an.</p>
                                    </div>
                                </div>
                            </Col>
                            <Col md="3" className="mb-3">
                                <div className="media">
                                    <div className="mr-3 icon-wrap"><span className="fa fa-map-marker"></span></div>
                                        <div className="media-body">
                                            <h5>
                                                <a href="https://www.google.com/maps/search/?api=1&query=Göhren+14,+91788+Pappenheim" target="_blank" rel="noreferrer">
                                                    Göhren 14
                                                </a>
                                            </h5>
                                            <p>91788 Pappenheim</p>
                                        </div>
                                </div>
                            </Col>
                            <Col md="3" className="mb-3">
                                <div className="media">
                                    <div className="mr-3 icon-wrap"><span className="fa fa-envelope"></span></div>
                                    <div className="media-body">
                                        <h5><a href="mailto:reittherapie.bachmaier@gmail.com" target="_blank" rel="noreferrer">E-Mail</a></h5>
                                        <p>Klicken Sie <a href="mailto:reittherapie.bachmaier@gmail.com">hier</a>.</p>
                                    </div>
                                </div>
                            </Col>
                        </Row>
                    </Col>
                </Row>
            </Container>
        </Reveal>
    )
}

export default QuickInfo