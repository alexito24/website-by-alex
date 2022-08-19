import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import Form from "react-bootstrap/Form";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";

function NavScrollExample() {
  return (
    <Navbar sticky="top" expand="lg">
      <Container fluid>
        <Navbar.Brand href="#">Navbar scroll</Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="me-auto my-2 my-lg-0 justify-content-end flex-grow-1"
            style={{ maxHeight: "100px" }}
            navbarScroll
          >
            <Nav.Link href="/home">Home</Nav.Link>
            <NavDropdown title="Services" id="navbarScrollingDropdown">
              <NavDropdown.Item href="/allServices">
                All Services
              </NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="/service1">Service1</NavDropdown.Item>
              <NavDropdown.Item href="/service2">Service2</NavDropdown.Item>
              <NavDropdown.Item href="/service3">service3</NavDropdown.Item>
            </NavDropdown>
            <Nav.Link href="/contact">Contact Us</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavScrollExample;
