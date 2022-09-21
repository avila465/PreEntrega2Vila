import CartWidget from "../CartWidget/CartWidget";
import 'bootstrap/dist/css/bootstrap.min.css';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

const NavBar = () =>{
  return (
    <Navbar bg="light" expand="lg">
      <Container>
        <Navbar.Brand href="#home">IV Technology</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="mx-auto">
            <Nav.Link href="#almacenamiento">Almacenamiento</Nav.Link>
            <Nav.Link href="#perifericos">Perifericos</Nav.Link>
            <Nav.Link href="#gabinetes">Gabinetes</Nav.Link>
            <Nav.Link href="#monitores">Monitores</Nav.Link>
            <Nav.Link href="#impresoras">Impresoras</Nav.Link>
          </Nav> 
          <CartWidget/>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavBar;