import React from "react";
// import { Link } from "react-router-dom";
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Container from 'react-bootstrap/Container';
import CatcherGif from './../img/dreamcather-series.gif'

function Header() {

  return (
    <React.Fragment>
      <Navbar bg="dark" data-bs-theme="dark" fixed="top">
        <Container>
          <Navbar.Brand href='/'>Memory Lane</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link href="/sign-in">Manage Your Dream Account</Nav.Link>
            <Nav.Link href="/rem-info">Align Spiritually</Nav.Link>
          </Nav>
          <img style={{width: 50, height: 50}} src={CatcherGif} alt="a series of dreamcatchers"/>
        </Container>
      </Navbar>
    </React.Fragment>
  );
}

export default Header;