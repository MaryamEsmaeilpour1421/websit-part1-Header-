import { Link } from 'gatsby'
import React from 'react'
import { Container , Navbar , Nav, NavLink  } from 'react-bootstrap'

export default () =>(
    <Navbar bg="light" expand="lg">
  <Container>
    <Navbar.Brand href="#home">BTA Group</Navbar.Brand>
    <Navbar.Toggle aria-controls="basic-navbar-nav" />
    <Navbar.Collapse id="basic-navbar-nav">
      <Nav className="me-auto">
        <Nav.Link href="#home">Home</Nav.Link>
        <Nav.Link href="#link">Project</Nav.Link>
        <Nav.Link href="#link">About Us</Nav.Link>
        <Nav.Link as={Link} to="Contact">Contact</Nav.Link>
      </Nav>
    </Navbar.Collapse>
  </Container>
</Navbar>
)