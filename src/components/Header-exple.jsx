import { Container, Nav, NavDropdown, NavItem, Navbar } from "react-bootstrap";
import { Link } from "react-router-dom";

export default function HeaderExple() {
  return (
    <header>
      <Navbar
        expand="lg"
        className="navbar navbar-expand-lg bg-primary"
        data-bs-theme="dark"
      >
        <Container className="container-fluid">
          <Link className="navbar-brand" to="/">
            Portfolio
          </Link>
          <Navbar.Toggle aria-controls="navbarTop" />
          <Navbar.Collapse id="navbarTop">
            <Nav className="navbar-nav me-auto">
              <NavItem className="nav-item">
                <Link className="nav-link" to="/contact">
                  Contact
                </Link>
              </NavItem>
              <NavItem className="nav-item">
                <Link
                  className="nav-link"
                  to="/book/le-club-des-incorrigibles-optimistes"
                >
                  Book
                </Link>
              </NavItem>
              <NavDropdown title="Dropdown Menu">
                <NavDropdown.Item>
                  <Link className="nav-link active" to="/contact">
                    Contact
                  </Link>
                </NavDropdown.Item>
                <NavDropdown.Item>
                  <Link
                    className="nav-link"
                    to="/book/le-club-des-incorrigibles-optimistes"
                  >
                    Book
                  </Link>
                </NavDropdown.Item>
              </NavDropdown>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </header>
  );
}
