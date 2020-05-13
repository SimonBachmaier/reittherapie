import React from 'react';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { Link, useStaticQuery, graphql } from 'gatsby';
import Container from 'react-bootstrap/Container';
import { Location } from '@reach/router';
import { getPageEdgesByUrlPart, sortPageEdgesByNavOrder } from '../shared/pageSort';


const NavLink = (props) => {
    return (
        <div className="nav-item">
            { props.external ? (
                <a className="nav-link" href={props.to}>{props.label}</a>
            ) : (
                <Link className="nav-link" activeClassName="active" to={props.to}>{props.label}</Link>
            )}
        </div>
    )
};
const NavDropdownLink = (props) => {
    return (
        <React.Fragment>
        { props.external ? (
            <a className="dropdown-item" href={props.to}>{props.label}</a>
        ) : (
            <Link className="dropdown-item" to={props.to}>{props.label}</Link>
        )}
        </React.Fragment>
    )
};

const Header = () => {
    const data = useStaticQuery(graphql`
        query HeaderQuery {
            allMarkdownRemark(filter: {frontmatter: {templateKey: {in: ["horse", "feature"]}}}) {
                edges {
                    node {
                        frontmatter {
                            name
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
    let pageEdges = data.allMarkdownRemark.edges;
    let horsePageEdges = getPageEdgesByUrlPart(pageEdges, '/pferde/');
    let featurePageEdges = getPageEdgesByUrlPart(pageEdges, '/leistungen/');
    sortPageEdgesByNavOrder(horsePageEdges);
    sortPageEdgesByNavOrder(featurePageEdges);

    return (
        <header role="banner">
            <Navbar bg="light" variant="dark" expand="md">
                <Container>
                    <Link className="navbar-brand" to="/" style={{ textTransform: 'unset' }}>Reittherapie Bachmaier</Link>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />

                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="ml-auto pl-lg-5 pl-0">
                            <Location>
                                {({ location }) => {
                                    return (
                                        <React.Fragment>
                                            <NavLink to="/" label="Home" />
                                            <NavDropdown title="Therapien" id="nav-dropdown" active={location.pathname.indexOf('/leistungen/') > -1}>
                                                {featurePageEdges.map((item, index)=> {
                                                    return (
                                                        <NavDropdownLink to={item.node.fields.slug} label={item.node.frontmatter.name} key={index} />
                                                    );
                                                })}
                                            </NavDropdown>
                                            <NavLink to="/ueber-mich" label="Über mich" />
                                            <NavDropdown title="Pferde" id="nav-dropdown" active={location.pathname.indexOf('/pferde/') > -1}>
                                                {horsePageEdges.map((item, index)=> {
                                                    return (
                                                        <NavDropdownLink to={item.node.fields.slug} label={item.node.frontmatter.name} key={index} />
                                                    );
                                                })}
                                            </NavDropdown>
                                        </React.Fragment>
                                    )
                                }}
                            </Location>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </header>
    )
};

export default Header;