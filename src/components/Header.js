import React from 'react';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { Link } from 'gatsby';
import Container from 'react-bootstrap/Container';
import { Location } from '@reach/router';


const NavLink = (props) => {
    return (
        <li className="nav-item">
            { props.external ? (
                <a className="nav-link" href={props.to}>{props.label}</a>
            ) : (
                <Link className="nav-link" activeClassName="active" to={props.to}>{props.label}</Link>
            )}
        </li>
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
                                    console.log('location',location)
                                    return (
                                        <React.Fragment>
                                            <NavLink to="/" label="Home" />
                                            <NavDropdown title="Leistungen" id="nav-dropdown" active={location.pathname.indexOf('leistungen') > -1}>
                                                <NavDropdownLink to="/leistungen/" label="Reittherapie" />
                                                <NavDropdownLink to="/leistungen/" label="Hippotherapie" />
                                                <NavDropdownLink to="/leistungen/" label="Ergotherapie" />
                                                <NavDropdownLink to="/leistungen/" label="Pädagogische Förderung" />
                                            </NavDropdown>
                                            <NavLink to="/ueber-mich" label="Über mich" />
                                            <NavDropdown title="Pferde" id="nav-dropdown" active={location.pathname.indexOf('pferde') > -1}>
                                                <NavDropdownLink to="/pferde/" label="Duna" />
                                                <NavDropdownLink to="/pferde/" label="Einstein" />
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