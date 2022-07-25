import { Nav, Navbar, Container } from "react-bootstrap";
import { NavLink } from "@remix-run/react";
import ProgressiveImage from "react-progressive-graceful-image";

const Header = () => (
    <Navbar
      bg="dark"
      className="shadow"
      sticky="top"
      variant="dark"
      expand="lg"
    >
      <Container fluid>
        <Navbar.Brand>
        <ProgressiveImage
            src="brooke-logo.png"
            placeholder="tiny-brooke-logo.png"
          >
            {(src, loading) => <img src={src} style={{ filter: loading ? 'blur(1rem)' : ''}} width={80} height={80} alt="Remix.run Logo" />}
          </ProgressiveImage>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="header-navbar" />
        <Navbar.Collapse id="header-navbar">
          <Nav className="me-auto">
            <NavLink to="/" className="nav-link">
              Home
            </NavLink>
            <NavLink to="about" className="nav-link">
              About
            </NavLink>
            <NavLink to="contact" className="nav-link">
              Contact
            </NavLink>
            <NavLink to="resume" className="nav-link">
              Resume
            </NavLink>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );

export default Header;
