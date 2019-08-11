import React from 'react';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { Link } from 'gatsby';

export default (props) => {

    return (
        <React.Fragment>
            <Row className="justify-content-center">
                <Col md="4">
                    <Link className="media d-block media-feature text-center" to="leistungen">
                        <div className="mr-3 icon-wrap"><span className="custom-icon flaticon-scissors-1"></span></div>
                        <div className="media-body">
                            <h3>Reittherapie</h3>
                            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Corrupti, assumenda rem nulla odio iure animi repellat voluptates ullam omnis enim?</p>
                        </div>
                    </Link>
                </Col>
                <Col md="4">
                    <Link className="media d-block media-feature text-center" to="leistungen">
                        <div className="mr-3 icon-wrap"><span className="custom-icon flaticon-scissors-1"></span></div>
                        <div className="media-body">
                            <h3>Hippotherapie</h3>
                            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Corrupti, assumenda rem nulla odio iure animi repellat voluptates ullam omnis enim?</p>
                        </div>
                    </Link>
                </Col>
                <Col md="4">
                    <Link className="media d-block media-feature text-center" to="leistungen">
                        <div className="mr-3 icon-wrap"><span className="custom-icon flaticon-scissors-1"></span></div>
                        <div className="media-body">
                            <h3>Ergotherapie</h3>
                            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Corrupti, assumenda rem nulla odio iure animi repellat voluptates ullam omnis enim?</p>
                        </div>
                    </Link>
                </Col>
            </Row>

            <Row className="justify-content-center">
                <Col md="4">
                    <Link className="media d-block media-feature text-center" to="leistungen">
                        <div className="mr-3 icon-wrap"><span className="custom-icon flaticon-scissors-1"></span></div>
                        <div className="media-body">
                            <h3>Pferdesport für Menschen mit Behinderung</h3>
                            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Corrupti, assumenda rem nulla odio iure animi repellat voluptates ullam omnis enim?</p>
                        </div>
                    </Link>
                </Col>
                <Col md="4">
                    <Link className="media d-block media-feature text-center" to="leistungen">
                        <div className="mr-3 icon-wrap"><span className="custom-icon flaticon-scissors-1"></span></div>
                        <div className="media-body">
                            <h3>Qualifizierte Unterstützung</h3>
                            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Corrupti, assumenda rem nulla odio iure animi repellat voluptates ullam omnis enim?</p>
                        </div>
                    </Link>
                </Col>
                <Col md="4">
                    <Link className="media d-block media-feature text-center" to="leistungen">
                        <div className="mr-3 icon-wrap"><span className="custom-icon flaticon-scissors-1"></span></div>
                        <div className="media-body">
                            <h3>Pädagogoschische Förderung</h3>
                            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Corrupti, assumenda rem nulla odio iure animi repellat voluptates ullam omnis enim?</p>
                        </div>
                    </Link>
                </Col>
            </Row>
        </React.Fragment>
    )
}
