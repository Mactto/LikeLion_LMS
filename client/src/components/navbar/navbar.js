import React from 'react'
import {Navbar, Nav} from 'react-bootstrap';
import RightNav from './Section/RightNav';


function navbar() {
    return (
        <div>
            <Navbar bg="dark" variant="dark">
                <Navbar.Brand>순천향대 멋쟁이사자처럼 9기 출석부</Navbar.Brand>
                <Nav className="mr-auto">
                </Nav>
                <RightNav />
            </Navbar>
        </div>
    )
}

export default navbar
