import React, { Component } from "react";

import {
  Container,
  Row,
  Col,
  Card,
  CardHeader,
  CardBody,
  CardText
} from "reactstrap";

// import "bootstrap/dist/css/bootstrap.css";

import "../App.css";

import { RollBoxLoading } from "react-loadingg";

import commaNumber from "comma-number";

export default class GlobalCards extends Component {
  constructor(props) {
    super(props);
    this.state = {
      error: null,
      isLoaded: false,
      date: "",
      confirmed: "",
      deaths: "",
      recovered: "",
      series: {},
      options: {},
      labels: []
    };
  }

  componentDidMount() {
    // Global Total Count
    fetch("https://covidapi.info/api/v1/global")
      .then(res => res.json())

      .then(
        result => {
          // console.log(result);
          this.setState({
            isLoaded: true,
            date: result.date,
            confirmed: commaNumber(result.result.confirmed),
            deaths: commaNumber(result.result.deaths),
            recovered: commaNumber(result.result.recovered)
          });
        },
        error => {
          this.setState({
            isLoaded: true,
            error
          });
        }
      );
  }

  render() {
    const { error, isLoaded, confirmed, deaths, recovered, date } = this.state;
    if (error) {
      return <div>Error: {error.message}</div>;
    } else if (!isLoaded) {
      return (
        <div>
          <RollBoxLoading />
        </div>
      );
    } else {
      return (
        <>
          <Container fluid>
            <Row className="justify-content-center">
              <Col>
                <h3 className="text-center">GLOBAL COUNT</h3>
                <p
                  style={{
                    fontFamily: "Monda",
                    fontSize: "12px"
                  }}
                  className="text-center"
                >
                  as of : {date}
                </p>
              </Col>
            </Row>

            <Row>
              <Col sm="4">
                <Row className="justify-content-center">
                  <Card
                    color="primary"
                    className="text-center"
                    style={{
                      fontFamily: "Monda",
                      fontSize: "25px",
                      width: "18rem",
                      margin: "5px"
                    }}
                  >
                    <CardHeader>
                      <b>CONFIRMED</b>
                    </CardHeader>
                    <CardBody>
                      <CardText
                        style={{ fontFamily: "Monda", fontSize: "30px" }}
                      >
                        {confirmed}
                      </CardText>
                    </CardBody>
                  </Card>
                </Row>
              </Col>
              <Col sm="4">
                <Row className="justify-content-center">
                  <Card
                    color="danger"
                    className="text-center"
                    style={{
                      fontFamily: "Monda",
                      fontSize: "25px",
                      width: "18rem",
                      margin: "5px"
                    }}
                  >
                    <CardHeader>
                      <b>DEATHS</b>
                    </CardHeader>
                    <CardBody>
                      <CardText
                        style={{ fontFamily: "Monda", fontSize: "30px" }}
                      >
                        {deaths}
                      </CardText>
                    </CardBody>
                  </Card>
                </Row>
              </Col>
              <Col sm="4">
                <Row className="justify-content-center">
                  <Card
                    color="warning"
                    className="text-center"
                    style={{
                      fontFamily: "Monda",
                      fontSize: "25px",
                      width: "18rem",
                      margin: "5px"
                    }}
                  >
                    <CardHeader>
                      <b>RECOVERED</b>
                    </CardHeader>
                    <CardBody>
                      <CardText
                        style={{ fontFamily: "Monda", fontSize: "30px" }}
                      >
                        {recovered}
                      </CardText>
                    </CardBody>
                  </Card>
                </Row>
              </Col>
            </Row>
          </Container>
        </>
      );
    }
  }
}
