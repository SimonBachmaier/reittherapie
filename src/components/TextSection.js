import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

export default (props) => {
    return (
        <section className="site-section">
            <Container>
                <Row>
                    <Col md="12">
                        {props.headline ? <h2 className="mb-3">{props.headline}</h2> : ''}
                        {props.subheadline ? <p className="lead">{props.subheadline}</p> : ''}
                        {props.children}
                    </Col>
                </Row>
            </Container>
        </section>
    )
}
