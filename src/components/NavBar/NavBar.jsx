import Container from 'react-bootstrap/Container'; 
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import CartWidget from '../CartWidget/CartWidget';
import logo from "../logo/logo"

function NavBar() {
  return (
    <>
      <Navbar bg="dark" data-bs-theme="dark">
        <Container>
          <Navbar.Brand href="#home"><logo/></Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link href="#home">Inicio</Nav.Link>
            <Nav.Link href="#features">Descartables</Nav.Link>
            <Nav.Link href="#pricing">Sales</Nav.Link>
            <Nav.Link href="#pricing"><CartWidget/></Nav.Link>
          </Nav>
        </Container>
      </Navbar>
      </>
  );
}

export default NavBar