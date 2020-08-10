import React from 'react';
import { Container } from 'react-bootstrap';
import { NavbarSite } from './Navbar/Navbar';
import './header.scss';


export const Header = (props) => {
    return (
        <div className="header mb-5">
            <Container>
                <NavbarSite />
            </Container>
        </div>
    );
}