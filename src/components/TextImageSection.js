import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

export default () => {
    return (
        <section className="site-section">
            <Container>
                <Row>
                    <Col md="6" className="video-wrap mb-5">
                        <img src="https://cdn.pixabay.com/photo/2016/05/30/19/09/little-girl-1425573_960_720.jpg" alt="Mensch und Natur" className="img-fluid" />
                    </Col>
                    <Col md="6" className="pl-md-5">
                        <h3>In sicheren Händen</h3>
                        <p className="lead">Mensch und Tier in Harmonie</p>
                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quam facere a excepturi quod impedit rerum ipsum totam incidunt, necessitatibus id veritatis maiores quos saepe dolore commodi magnam fugiat. Incidunt, omnis.</p>
                        <p>Nobis quae eaque facere architecto eligendi, voluptas quasi, blanditiis aperiam possimus inventore quis nam! Cupiditate necessitatibus, voluptatem excepturi placeat exercitationem quos vitae ut vero dolorem, provident sit odio porro facere.</p>
                    </Col>
                </Row>
            </Container>
        </section>
    )
}
