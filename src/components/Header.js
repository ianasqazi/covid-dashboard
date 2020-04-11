import React, { Component } from "react";
import { Container, Row, Col, Jumbotron } from "reactstrap";

import "../App.css";

export default class Header extends Component {
  render() {
    return (
      <>
        <Jumbotron className="jumbotron">
          <Container>
            <Row>
              <Col>
                <h1 className="text-center">COVID-19 DASHBOARD</h1>
              </Col>
            </Row>
            <Row className="justify-content-center">
              <Col>
                <blockquote>
                  " &nbsp;&nbsp; To ALL of the wonderful, much-needed,
                  most-appreciated{" "}
                  <span style={{ color: "red" }}>
                    <b>medical community </b>{" "}
                  </span>
                  from the front desk administrators taking all the calls from
                  people in a panic to the ground-zero doctors, nurses, cleaning
                  crew, to the medical industrial makers/suppliers/deliverers...
                  &nbsp;&nbsp; "
                  <br />
                  <p className="text-right">
                    <b>
                      <span className="thankyou">THANK YOU</span> ... from all
                      my &nbsp;&nbsp;
                      <span role="img" aria-label="Heart">
                        ❤️
                      </span>
                    </b>
                  </p>
                </blockquote>
              </Col>
            </Row>
          </Container>
        </Jumbotron>
      </>
    );
  }
}
