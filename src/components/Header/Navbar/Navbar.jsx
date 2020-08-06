import React from 'react';
import { Nav, Navbar } from 'react-bootstrap';

export const NavbarSite = (props) => {
    return (
        <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
            <Navbar.Brand href="#home">News-Site</Navbar.Brand>
            <Navbar.Toggle aria-controls="responsive-navbar-nav" />
            <Navbar.Collapse id="responsive-navbar-nav">
                <Nav className="mr-auto">
                    <Nav.Link href="/" >Home</Nav.Link>
                    <Nav.Link href="/news" >News</Nav.Link>
                </Nav>
                <Nav>
                    <Nav.Link href="/author">Authors</Nav.Link>
                </Nav>
            </Navbar.Collapse>
        </Navbar>
    )
}