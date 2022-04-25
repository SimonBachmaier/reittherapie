import React from 'react';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Img from 'gatsby-image';
import * as marked from 'marked';

export default (props) => {
    let className = props.className ? props.className : '';
    let imageRight = props.imageRight ? true : false;

    return (
        <Row className={className}>
            {imageRight ? <React.Fragment>
                <Col md="6" className="pl-md-5 textImage-align-right">
                    {props.headline ? <h3>{props.headline}</h3> : ''}
                    {props.subheadline ? <p className="lead">{props.subheadline}</p> : ''}
                    {props.children}
                    <div dangerouslySetInnerHTML={{ __html: marked(props.html) }}></div>
                </Col>
                <Col md="6" className="video-wrap mb-5">
                    {props.fluidImage ? (<Img alt="Mensch und Natur" className="img-fluid" fluid={props.fluidImage} />): ''}
                    
                </Col>
            </React.Fragment> : <React.Fragment>
                <Col md="6" className="video-wrap mb-5">
                    {props.fluidImage ? (<Img alt="Mensch und Natur" className="img-fluid" fluid={props.fluidImage} />): ''}
                    
                </Col>
                <Col md="6" className="pl-md-5">
                    {props.headline ? <h3>{props.headline}</h3> : ''}
                    {props.subheadline ? <p className="lead">{props.subheadline}</p> : ''}
                    {props.children}
                    <div dangerouslySetInnerHTML={{ __html: marked(props.html) }}></div>
                </Col>
            </React.Fragment>}
        </Row>
    )
}
