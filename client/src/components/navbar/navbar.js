import React from 'react'
import {Navbar, Nav} from 'react-bootstrap';
import RightNav from './Section/RightNav';


function navbar() {
    return (
        <div>
            <Navbar bg="dark" variant="dark">
                <Navbar.Brand href="#home">Navbar</Navbar.Brand>
                <Nav className="mr-auto">
                <Nav.Link href="#home">Home</Nav.Link>
                <Nav.Link href="#features">Features</Nav.Link>
                <Nav.Link href="#pricing">Pricing</Nav.Link>
                </Nav>
                <RightNav />
            </Navbar>
        </div>
    )
}

export default navbar
