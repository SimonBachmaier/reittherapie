import React from 'react';
import AliceCarousel from 'react-alice-carousel';
import 'react-alice-carousel/lib/scss/alice-carousel.scss';
import { Link } from 'gatsby';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

export default (props) => {
    let Carousel;
    return (
        <Row className={props.className}>
            <Col md="4" className="pr-5">
                <h2 className="mb-3">Unsere Therapiepferde</h2>
                <p className="mb-5">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quam facere a excepturi quod impedit rerum ipsum totam incidunt, necessitatibus id veritatis maiores quos saepe dolore commodi magnam fugiat. Incidunt, omnis.</p>
                
                <div className="mb-3 custom-nav">
                <button className="btn btn-primary btn-sm custom-prev mr-2 mb-2" onClick={() => Carousel.slidePrev()}><span className="fa fa-arrow-left"></span></button> 
                <button className="btn btn-primary btn-sm custom-next mr-2 mb-2" onClick={() => Carousel.slideNext()}><span className="fa fa-arrow-right"></span></button>
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
                                items: 1
                            },
                            1024: {
                                items: 3
                            }
                        }}>
                            <div>
                                <Link to="/" className="img-bg" style={{'backgroundImage': "url('https://www.hanaeleh.org/wp-content/uploads/2018/01/Tamahome-12-24-17-768x1024.jpg')"}}>
                                    <div className="text">
                                        {/* <span className="icon custom-icon flaticon-scissors"></span> */}
                                        <h2>Duna</h2>
                                        <p>Mehr über mich</p>
                                    </div>
                                </Link>
                            </div>
                            <div>
                                <Link to="/" className="img-bg" style={{'backgroundImage': "url('https://www.hanaeleh.org/wp-content/uploads/2018/01/Tamahome-12-24-17-768x1024.jpg')"}}>
                                    <div className="text">
                                        <h2>Einstein</h2>
                                        <p>Mehr über mich</p>
                                    </div>
                                </Link>
                            </div>
                            <div>
                                <Link to="/" className="img-bg" style={{'backgroundImage': "url('https://www.hanaeleh.org/wp-content/uploads/2018/01/Tamahome-12-24-17-768x1024.jpg')"}}>
                                    <div className="text">
                                        <h2>Missy</h2>
                                        <p>Mehr über mich</p>
                                    </div>
                                </Link>
                            </div>
                            <div>
                                <Link to="/" className="img-bg" style={{'backgroundImage': "url('https://www.hanaeleh.org/wp-content/uploads/2018/01/Tamahome-12-24-17-768x1024.jpg')"}}>
                                    <div className="text">
                                        <h2>Pferd</h2>
                                        <p>Mehr über mich</p>
                                    </div>
                                </Link>
                            </div>
                            <div>
                                <Link to="/" className="img-bg" style={{'backgroundImage': "url('https://www.hanaeleh.org/wp-content/uploads/2018/01/Tamahome-12-24-17-768x1024.jpg')"}}>
                                    <div className="text">
                                        <h2>Pferd</h2>
                                        <p>Mehr über mich</p>
                                    </div>
                                </Link>
                            </div>
                            <div>
                                <Link to="/" className="img-bg" style={{'backgroundImage': "url('https://www.hanaeleh.org/wp-content/uploads/2018/01/Tamahome-12-24-17-768x1024.jpg')"}}>
                                    <div className="text">
                                        <h2>Pferd</h2>
                                        <p>Mehr über mich</p>
                                    </div>
                                </Link>
                            </div>
                        </AliceCarousel>
                    </Col>
                </Row>
            </Col>
        </Row>
    );
}