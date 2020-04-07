import React, { Component } from 'react';
import { Container } from 'reactstrap';

// import "../styles/Header.css";

import Jumbotron from 'react-bootstrap/Jumbotron';

export default class Header extends Component {
  render() {
    return (
      <Jumbotron fluid>
        <Container>
          <h1 className="text-center">COVID - 19</h1>
          <p>
            This is a modified jumbotron that occupies the entire horizontal space of
            its parent.
          </p>
        </Container>
      </Jumbotron>
    )
  }
}
