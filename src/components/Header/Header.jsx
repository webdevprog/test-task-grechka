import React from 'react';
import { Container } from 'react-bootstrap';
import { NavbarSite } from './Navbar/Navbar';


export const Header = (props) => {
    return (
        <div className="header">
            <Container>
                <NavbarSite />
            </Container>
        </div>
    );
}