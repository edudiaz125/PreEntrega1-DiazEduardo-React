import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';

import { CartWidget } from "./CartWidget";

export const NavBar = () => {
    return (
    <Navbar expand="lg" className="bg-body-tertiary">
      <Container fluid>
        <Navbar.Brand href="#">SOUNDTECH</Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="me-auto my-2 my-lg-0"
            style={{ maxHeight: '100px' }}
            navbarScroll
          >
            <Nav.Link href="#action1">Guitarras</Nav.Link>
            <Nav.Link href="#action2">Bajos</Nav.Link>
            <NavDropdown title="Percusion" id="navbarScrollingDropdown">
              <NavDropdown.Item href="#action3">Baterias</NavDropdown.Item>
              <NavDropdown.Item href="#action4">
                Platillos
              </NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action5">
                Accesorios
              </NavDropdown.Item>
            </NavDropdown>
            <Nav.Link href="#action6">Pianos&Teclados</Nav.Link>
            <Nav.Link href="#" disabled>
              Amplificadores
            </Nav.Link>
          </Nav>
          <Form className="d-flex">
            <Form.Control
              type="search"
              placeholder="Search"
              className="me-2"
              aria-label="Search"
            />
            <Button variant="outline-success">Buscar</Button>
          </Form>
        </Navbar.Collapse>
        <CartWidget/>
      </Container>
    </Navbar>
    )
};