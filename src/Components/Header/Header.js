import React from 'react';
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';

const Header = () => {
    return (
        <div>
            <Navbar bg="dark" variant="dark" sticky="top">
                <Container>
                    <Navbar.Brand href="#home">
                        Mangrove Assesment
                    </Navbar.Brand>
                </Container>
            </Navbar>
        </div>
    );
};

export default Header;