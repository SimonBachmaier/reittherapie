import React from 'react'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import { Link } from 'gatsby';

const Footer = () => {
    return (
        <footer className="site-footer">
            <Container>
                <Row className="mb-5">
                    <Col md="4">
                        <h3 className="mb-4">Kontakt</h3>
                        <p className="mb-4">Reittherapie in Göhren mit Petra Bachmaier:<br />Professionelle Begleitung in allen Lebenslagen.</p>
                        <ul className="list-unstyled ">
                        <li className="d-flex"><span className="mr-3"><span className="fa fa-map-marker"></span></span><span className=""><a href="https://www.google.com/maps/search/?api=1&query=Göhren+14,+91788+Pappenheim" target="_blank" rel="noreferrer">Göhren 14, 91788 Pappenheim</a></span></li>
                        <li className="d-flex"><span className="mr-3"><span className="fa fa-phone"></span></span><span className=""><a href="tel:09143 6518">09143 6518</a></span></li>
                        <li className="d-flex"><span className="mr-3"><span className="fa fa-envelope"></span></span><a href="mailto:reittherapie.bachmaier@gmail.com">reittherapie.bachmaier@gmail.com</a></li>
                        </ul>
                    </Col>
                    <Col md="3" className="offset-md-3">
                        <h3 className="mb-4">Sonstiges</h3>
                        <ul className="list-unstyled ">
                            <li><Link to="/impressum">Impressum</Link></li>
                            <li><Link to="/datenschutz">Datenschutzerklärung</Link></li>
                        </ul>
                    </Col>
                </Row>
                <Row className="justify-content-center">
                <Col md="7" className="text-center" style={{ opacity: 0.7}}>
                    Copyright &copy;{new Date().getFullYear()} All rights reserved | This template is made with <i className="fa fa-heart-o" aria-hidden="true"></i> by <a href="https://colorlib.com" target="_blank" rel="noopener noreferrer">Colorlib</a>
                </Col>
                </Row>
            </Container>
        </footer>
    );
}

export default Footer;