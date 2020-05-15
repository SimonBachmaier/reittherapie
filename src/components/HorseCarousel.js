import React from 'react';
import AliceCarousel from 'react-alice-carousel';
import 'react-alice-carousel/lib/scss/alice-carousel.scss';
import { Link, useStaticQuery, graphql } from 'gatsby';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { sortPageEdgesByNavOrder } from '../shared/pageSort';

export default (props) => {
    const data = useStaticQuery(graphql`
        query HorseCarouselQuery {
            allMarkdownRemark(filter: {frontmatter: {templateKey: {eq: "horse"}}}) {
                edges {
                    node {
                        frontmatter {
                            name
                            image {
                                childImageSharp {
                                    fluid(maxWidth: 512, quality: 90) {
                                    ...GatsbyImageSharpFluid_noBase64
                                    }
                                }
                            }
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

    let horsePageEdges = data.allMarkdownRemark.edges;
    sortPageEdgesByNavOrder(horsePageEdges);
    
    let Carousel;
    return (
        <Row className={props.className}>
            <Col md="4" className="pr-5">
                <h2 className="mb-3">Unsere Therapiepferde</h2>
                <p className="mb-5">Unsere Therapiepferde haben ein ausgeglichenes und ruhiges Wesen. Sie leben in einer Herde mit 7 Pferden artgerecht und zufrieden in einem großen Offenstall und auf einer sehr großen Koppel.</p>
                
                <div className="mb-3 custom-nav">
                {props.noButtons ? (
                    ''
                ) : (
                    <React.Fragment>
                        <button className="btn btn-primary btn-sm custom-prev mr-2 mb-2" onClick={() => Carousel.slidePrev()} aria-label="Vorheriges Pferd"><span className="fa fa-arrow-left"></span></button> 
                        <button className="btn btn-primary btn-sm custom-next mr-2 mb-2" onClick={() => Carousel.slideNext()} aria-label="Nächstes Pferd"><span className="fa fa-arrow-right"></span></button>
                    </React.Fragment>
                )}
                
                </div>
            </Col>
            <Col md="8">
                <Row>
                    <Col md="12" className="slider-wrap">
                        <AliceCarousel 
                            mouseDragEnabled
                            dotsDisabled={true}
                            buttonsDisabled={true}
                            infinite={false}
                            ref={(el) => (Carousel = el)}
                            responsive={{
                            0: {
                                items: 2
                            },
                            320: {
                                items: 2
                            },
                            1024: {
                                items: 3
                            }
                        }}>
                            {horsePageEdges.map((item, index) => {
                                return(
                                    <div key={index}>
                                        <Link to={item.node.fields.slug} className="img-bg" style={{'backgroundImage': "url('" + item.node.frontmatter.image.childImageSharp.fluid.src + "')"}}>
                                            <div className="text">
                                                <h2>{item.node.frontmatter.name}</h2>
                                                <p>Mehr über mich</p>
                                            </div>
                                        </Link>
                                    </div>
                                );
                            })}
                        </AliceCarousel>
                    </Col>
                </Row>
            </Col>
        </Row>
    );
}