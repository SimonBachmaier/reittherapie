import React from 'react';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

export default (props) => {
    let className = props.className ? props.className : '';
    let md = props.centered ? '8' : '12';
    let colClassNames = props.centered ? 'text-center' : '';
    return (
        <Row className={className + (props.centered ? ' justify-content-center' : '')}>
            <Col md={md} className={colClassNames}>
                {props.headline ? <h2 className="mb-3">{props.headline}</h2> : ''}
                {props.subheadline ? <p className="lead">{props.subheadline}</p> : ''}
                {props.children}
                <div dangerouslySetInnerHTML={{ __html: props.html }}></div>
            </Col>
        </Row>
    )
}
