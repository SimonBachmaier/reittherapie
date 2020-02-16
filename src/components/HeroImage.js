import React from 'react'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
// import { graphql, useStaticQuery } from 'gatsby'
// import { Waypoint } from 'react-waypoint'
import Reveal from './Reveal'

const HeroImage = (props) => {
    // const data = useStaticQuery(
    //     graphql`
    //         query {
    //             file(relativePath: { regex: "/header-image.jpg/" }) {
    //                 childImageSharp {
    //                     fluid(maxWidth: 1920, maxHeight: 1080) {
    //                     ...GatsbyImageSharpFluid_noBase64
    //                     }
    //                 }
    //             }
    //         }
    //     `
    // )
    return (
        <React.Fragment>
                { !props.hideImage && props.image ? (
                    <section className="site-hero overlay" data-stellar-background-ratio="0.5" style={{'backgroundImage': 'url(' + props.image.fluid.src /*data.file.childImageSharp.fluid.src*/ + ')'}}>
                        <Container>
                                <Row className="align-items-center site-hero-inner justify-content-center">
                                    <Col md="8" className="text-center">
                                        <Reveal className="mb-5" tag="div">
                                            <h1 className={props.fancyFont ? 'site-title-fancy' : ''}>{props.title}</h1>
                                        </Reveal>
                                    </Col>
                                </Row>
                        </Container>
                    </section>
                ) : (
                    <section style={{ padding: '150px', background: 'grey' }}>
                        <Container>
                                <Row className="align-items-center site-hero-inner justify-content-center">
                                    <Col md="8" className="text-center">
                                        <Reveal className="mb-5" tag="div">
                                            <h1>{props.title}</h1>
                                        </Reveal>
                                    </Col>
                                </Row>
                        </Container>
                    </section>
                )}
        </React.Fragment>
    )
}

export default HeroImage