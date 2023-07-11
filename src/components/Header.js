import React from "react";
import { Link } from "react-router-dom";
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Container from 'react-bootstrap/Container';

function Header() {



  return (
    <React.Fragment>
      <Navbar bg="dark" data-bs-theme="dark">
        <Container>
          <Navbar.Brand href='/'>Memory Lane</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link>
            <Link to='/sign-in'>Manage your Dream Account</Link>
            </Nav.Link>
            <Nav.Link>
            <Link to=''>Align Spiritually</Link>
            </Nav.Link>
            {/* <ul>
              <li>
                <Link to='/'> Dreams of Home Page </Link>
              </li>
              <li>
                <Link to=''> Align Spiritually </Link>
              </li>
              <li>
                <Link to='/sign-in'>Manage your Dream Account</Link>
              </li>
            </ul> */}
      
          </Nav>
        </Container>
      </Navbar>
    </React.Fragment>
  );
}

export default Header;