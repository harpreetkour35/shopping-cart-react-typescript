import { Button, Container, Nav, Navbar as NavbarBs } from "react-bootstrap";
import { NavLink } from "react-router-dom";
import YourSvg from "../assets/react.svg";

const Navbar = () => {
  return (
    <NavbarBs sticky="top">
      <Container className="bg-white shadow-sm mb-3">
        <Nav className="me-auto">
          <Nav.Link as={NavLink} to="/">
            Home
          </Nav.Link>
          <Nav.Link as={NavLink} to="/store">
            Store
          </Nav.Link>
          <Nav.Link as={NavLink} to="/about">
            About
          </Nav.Link>
        </Nav>
        <Button
          variant="outline-secondary"
          style={{
            width: "3rem",
            height: "3rem",
            position: "relative",
          }}
          className="rounded-circle"
        >
          <img src={YourSvg} alt="Your SVG" />
          <div
            style={{
              color: "white",
              width: "1.5rem",
              height: "1.5 rem",
              position: "absolute",
              bottom: 0,
              right: 0,
              transform: "translate(25%, 25%)",
            }}
            className="rounded-circle bg-danger d-flex justify-content-center align-items-center"
          >
            3
          </div>
        </Button>
      </Container>
    </NavbarBs>
  );
};

export default Navbar;
