import React from "react";
// import { Link } from "react-router-dom";
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Container from 'react-bootstrap/Container';

function Header() {

  return (
    <React.Fragment>
      <Navbar bg="dark" data-bs-theme="dark" fixed="top">
        <Container>
          <Navbar.Brand href='/'>Memory Lane</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link href="/sign-in">Manage Your Dream Account</Nav.Link>
            <Nav.Link href="/">Align Spiritually</Nav.Link>
          </Nav>
        </Container>
      </Navbar>
    </React.Fragment>
  );
}

export default Header;