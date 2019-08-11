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
                        <Row>
                            <Col md="5" className="mb-3">
                                <div className="media">
                                    <div className="mr-3 icon-wrap"><span className="fa fa-phone"></span></div>
                                    <div className="media-body">
                                        <h5>+1 234 5633 342</h5>
                                        <p>Für nähere Informationen rufen Sie uns gerne einfach an.</p>
                                    </div>
                                </div>
                            </Col>
                            <Col md="3" className="mb-3">
                                <div className="media">
                                    <div className="mr-3 icon-wrap"><span className="fa fa-map-marker"></span></div>
                                    <div className="media-body">
                                        <h5>Göhren 14</h5>
                                        <p>91788 Pappenheim</p>
                                    </div>
                                </div>
                            </Col>
                            <Col md="3" className="mb-3">
                                <div className="media">
                                    <div className="mr-3 icon-wrap"><span className="fa fa-clock-o"></span></div>
                                    <div className="media-body">
                                        <h5>8:00 - 17:00 Uhr</h5>
                                        <p>Mon-Fri, Samstag</p>
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