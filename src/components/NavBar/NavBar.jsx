import React from 'react';
import Container from 'react-bootstrap/Container'; 
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import CartWidget from '../CartWidget/CartWidget';
import Logo from "../Logo"
import { Link } from 'react-router-dom';

function NavBar() {
  return (
    <>
      <Navbar bg="dark" variant="dark">
        <Container>
          <Navbar.Brand href="#home"><Logo/></Navbar.Brand>
          <Nav className="mr-auto">
            <Nav.Link as={Link} to="/">Inicio</Nav.Link>
            <Nav.Link as={Link} to="/category1">Descartables</Nav.Link>
            <Nav.Link as={Link} to="/category2">Sales</Nav.Link>
          </Nav>
          <Nav>
            <Nav.Link as={Link} to="#"><CartWidget/></Nav.Link>
          </Nav>
        </Container>
      </Navbar>
    </>
  );
}

export default NavBar;