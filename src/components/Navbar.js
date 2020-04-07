import React, { Component } from "react";

import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import Form from 'react-bootstrap/Form';
import FormControl from 'react-bootstrap/FormControl';
import Button from 'react-bootstrap/Button';
import NavDropdown from 'react-bootstrap/NavDropdown';


export default class GlobalCards extends Component {

    render() {
        return (

<Navbar bg="dark" variant="dark" expand="md">
  <Navbar.Brand href="/">COVID-19</Navbar.Brand>
  <Navbar.Toggle aria-controls="basic-navbar-nav" />
  <Navbar.Collapse id="basic-navbar-nav">
    <Nav className="mr-auto">
      {/* <Nav.Link href="/">Home</Nav.Link>
      <Nav.Link href="#link">Link</Nav.Link> */}
    </Nav>

    <Nav>
      <Nav.Link href="https://github.com/ianasqazi/covid-dashboard" target="_blank">GitHub Repo</Nav.Link>
      <Nav.Link href="https://ianasqazi.ca" target="_blank">My Portfolio</Nav.Link>
    </Nav>
   
  </Navbar.Collapse>
</Navbar>
        )
    }
}

const NavStyles={
  padding:"red"
}