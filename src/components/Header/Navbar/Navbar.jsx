import React from 'react';
import { Nav, Navbar } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';

export const NavbarSite = (props) => {
    return (
        <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
            <Navbar.Brand to="/" as={NavLink}>News-Site</Navbar.Brand>
            <Navbar.Toggle aria-controls="responsive-navbar-nav" />
            <Navbar.Collapse id="responsive-navbar-nav">
                <Nav className="mr-auto">
                    <Nav.Link as={NavLink} to="/" exact>Home</Nav.Link>
                    <Nav.Link as={NavLink} to="/news">News</Nav.Link>
                </Nav>
            </Navbar.Collapse>
        </Navbar>
    )
}