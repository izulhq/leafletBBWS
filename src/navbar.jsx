import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import Container from "react-bootstrap/Container";
import "bootstrap/dist/css/bootstrap.min.css";
import React from "react";

function Header() {
  function MouseOver(event) {
    event.target.style.color = "#a7c7e7";
  }
  function MouseOut(event) {
    event.target.style.color = "";
  }
  return (
    <Navbar
      sticky="top"
      bg="light"
      expand="lg"
      style={{
        fontFamily: "Poppins, sans-serif",
        fontWeight: "600",
        fontSize: "0.9rem",
        borderBottom: "2px solid black",
        height: "50px", // Ensure consistent height
      }}
    >
      <Container>
        <Navbar.Brand href="/home">
          <img
            src="./src/icon/longLogo.png"
            width="auto"
            height="35px"
            className="d-inline-block align-top"
            alt="Logo"
          />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav" className="justify-content-end">
          <Nav
            variant="pills"
            defaultActiveKey="/home"
            style={{
              "--bs-nav-pills-link-active-color": "white", // White color for active state
              "--bs-nav-pills-link-active-bg": "#a7c7e7", // Black background for active state
            }}
          >
            <Nav.Item>
              <Nav.Link
                href="/"
                onMouseOver={MouseOver}
                onMouseOut={MouseOut}
                style={{
                  color: "black", // Default color for inactive state
                }}
              >
                Maps View
              </Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link
                href="/table-view"
                onMouseOver={MouseOver}
                onMouseOut={MouseOut}
                style={{
                  color: "black", // Default color for inactive state
                }}
              >
                Table View
              </Nav.Link>
            </Nav.Item>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Header;
