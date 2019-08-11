import React from 'react';
import Container from 'react-bootstrap/Container';

export default (props) => {
    let className = props.className ? props.className : '';

    return (
        <section className={className + (props.noMargin ? "" : 'site-section')}>
            <Container>
                {props.children}
            </Container>
        </section>
    )
};
