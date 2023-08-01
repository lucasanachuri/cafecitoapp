import { Navbar, Container, Nav } from "react-bootstrap";
import { NavLink, Link } from "react-router-dom";

const Menu = () => {
  return (
    <Navbar bg="danger" variant="dark" expand="lg">
      <Container>
        <Navbar.Brand as={Link} to={"/"}>
          Cafecito
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto">
            <NavLink end to="/" className="nav-link">
              Inicio
            </NavLink>
            <Nav.Link end to="registro" className="nav-link">
              Registro
            </Nav.Link>
            <Nav.Link end to="administrador" className="nav-link">
              Administrador
            </Nav.Link>
            <Nav.Link end to="login" className="nav-link">
              Login
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Menu;
