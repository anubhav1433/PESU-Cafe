import React from 'react';
import { Navbar, Nav } from 'react-bootstrap';
import { LinkContainer } from 'react-router-bootstrap';
function Navigationbar() {
    return (
        <Navbar bg="dark" expand="lg" variant="dark">
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="mr-auto">
                    <LinkContainer to="/">
                        <Nav.Link>Home</Nav.Link>
                    </LinkContainer>
                    <LinkContainer to="/munchies">
                        <Nav.Link>Munchies</Nav.Link>
                    </LinkContainer>
                    <LinkContainer to="/order">
                        <Nav.Link>Snacks</Nav.Link>
                    </LinkContainer>
                    <LinkContainer to="/dessert">
                        <Nav.Link>Dessert</Nav.Link>
                    </LinkContainer>
                    <LinkContainer to="/beverage">
                        <Nav.Link>Beverage</Nav.Link>
                    </LinkContainer>
                    <LinkContainer to="/contact">
                        <Nav.Link>Contact</Nav.Link>
                    </LinkContainer>
                </Nav>
            </Navbar.Collapse>
        </Navbar>
    );
}
export default Navigationbar;