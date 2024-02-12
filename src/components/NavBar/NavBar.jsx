import Container from 'react-bootstrap/Container'; 
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import CartWidget from '../CartWidget/CartWidget';
import Logo from "../Logo"



function NavBar() {
  return (
    <>
      <Navbar bg="dark" data-bs-theme="dark">
        <Container>
          <Navbar.Brand href="#home"><Logo/></Navbar.Brand>
          <Nav className="navbar">
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