import React, { useState, Component } from 'react';
import { Container, Row, Col } from 'reactstrap';

import { toast } from 'react-toastify';

// import "../styles/Header.css";

import Jumbotron from 'react-bootstrap/Jumbotron';

export default class Header extends Component {
  toastId = null;

  notify = () => this.toastId = toast("Hello", { delay: 1000 });
  update = () => toast.update(this.toastId, { type: toast.TYPE.INFO, autoClose: 5000 });


  render() {
    return (
      <>
      <Jumbotron fluid>
        <Container>
          <Row>
            <Col>
            <button onClick={this.notify}>Notify</button>
            <button onClick={this.update}>Update</button>


          <h1 className="text-center">COVID - 19</h1>
          <p>
            This is a modified jumbotron that occupies the entire horizontal space of
            its parent.
          </p>
          
          </Col>
          </Row>
        </Container>
      </Jumbotron>
      </>
    )
  }
}
