import React from 'react';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { Link } from 'gatsby';
import Container from 'react-bootstrap/Container';


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
    let dropDown1 = {
        route: 'test',
        label: 'Test'
    };
    return (
        <header role="banner">
            <Navbar bg="light" variant="dark" expand="md">
                <Container>
                    <Link className="navbar-brand" to="/" style={{ textTransform: 'unset' }}>Reittherapie Bachmaier</Link>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />

                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="ml-auto pl-lg-5 pl-0">
                            <NavLink to="/" label="Home" />
                            <NavLink to="https://www.google.com" external={true} label="Google" />
                            <NavDropdown title={dropDown1.label} id="nav-dropdown" active={(typeof window !== 'undefined' && (window.location.pathname.indexOf(dropDown1.route) > -1)) ? true : false}>
                                <NavDropdownLink to="/" label="Home" />
                                <NavDropdownLink to="/test" label="Test" />
                                <NavDropdown.Divider />
                                <NavDropdownLink to="https://www.google.com" external={true} label="Google" />
                            </NavDropdown>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </header>
    )
};

export default Header;