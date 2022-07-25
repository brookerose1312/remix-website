/* eslint-disable import/no-unresolved */
import { Nav, Navbar, Container } from "react-bootstrap";
import { NavLink } from "@remix-run/react";
import brandPic from "public/brooke-logo.png";

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
          <img
            src={brandPic}
            width={80}
            height={80}
            alt="Brooke Rose Baer Personal Logo"
          />
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
