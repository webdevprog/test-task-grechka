import React from 'react';
import { Container } from 'react-bootstrap';
import './footer.scss';

export const Footer = (props) => {
    return (
        <footer className="footer-copyright text-center py-3 mt-5">
            <Container>
                <div>© 2020 Copyright</div>
            </Container>
        </footer>
    )
}