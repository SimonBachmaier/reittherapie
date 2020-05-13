import React from 'react';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { Link, useStaticQuery, graphql } from 'gatsby';
import { sortPageEdgesByNavOrder } from '../shared/pageSort';

export default (props) => {
    const data = useStaticQuery(graphql`
        query FeaturesQuery {
            allMarkdownRemark(filter: {frontmatter: {templateKey: {eq: "feature"}}}) {
                edges {
                    node {
                        frontmatter {
                            name
                            description
                            navigationOrder
                        }
                        fields {
                            slug
                        }
                    }
                }
            }
        }
    `);

    let featurePageEdges = data.allMarkdownRemark.edges;
    sortPageEdgesByNavOrder(featurePageEdges);
    let rows = [];
    for (let i = 0; i < (Math.ceil(featurePageEdges.length / 3)); i++) {
        let children = [];
        for (let j = 0; j < 3; j++) {
            let item = featurePageEdges[i*3 + j]
            if (item) {
                children.push(
                    <Col md="4" key={item.node.fields.slug}>
                        <Link className="media d-block media-feature text-center" to={item.node.fields.slug}>
                            <div className="mr-3 icon-wrap"><span className="custom-icon flaticon-scissors-1"></span></div>
                            <div className="media-body">
                                <h3>{item.node.frontmatter.name}</h3>
                                <p>{item.node.frontmatter.description}</p>
                            </div>
                        </Link>
                    </Col>
                );  
            }          
        }
        rows.push(<Row className="justify-content-center" key={i}>{children}</Row>);
    }
    return (
        <React.Fragment>
            {rows}
            {/* <Row className="justify-content-center">
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
            </Row> */}
        </React.Fragment>
    )
};
