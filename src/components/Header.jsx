import { NavLink } from "react-router-dom";
import DarkModeButton from "./DarkModeButton";
import { Container, Nav, NavItem, Navbar } from "react-bootstrap";
import { HashLink as Link } from 'react-router-hash-link';

export default function Header(props) {
  const theme = props.theme;

  return (
    <header className={theme}>
      <Navbar
        expand="lg" data-bs-theme={theme}
      >
        <Container>
        <Navbar.Brand href="https://github.com/annieherieau/"><img src='src/assets/tools/github.svg'/></Navbar.Brand>
          <Navbar.Toggle aria-controls="navbarTop" />
          <Navbar.Collapse id="navbarTop">
            <Nav className="navbar-nav me-auto">
              <NavItem>
                <NavLink className="nav-link" to="/">
                  Annie Hérieau
                </NavLink>
              </NavItem>
              <NavItem>
                <Link className="nav-link" to="/#works">
                  Projets
                </Link>
              </NavItem>
              <NavItem>
                <Link className="nav-link" to="/#contact">
                  Contact
                </Link>
              </NavItem>
            </Nav>
          </Navbar.Collapse>
          <DarkModeButton />
        </Container>
      </Navbar>
    </header>
  );
}
