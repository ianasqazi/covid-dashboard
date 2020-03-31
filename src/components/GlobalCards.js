import React, { Component } from "react";

import { Container, Row, Col } from 'reactstrap';
import { RollBoxLoading } from 'react-loadingg';

import "../styles/GlobalCards.css";

export default class GlobalCards extends Component {

    constructor(props) {
        super(props);
        this.state = {
          error: null,
          isLoaded: false,
          date:'',
          confirmed: '',
          deaths: '',
          recovered:'',
        };
      }

    componentDidMount() {
        fetch('https://covidapi.info/api/v1/global')

        .then(res => res.json())

        .then(

            (result) => {
                console.log(result);
              this.setState({
                isLoaded: true,
                date: result.date,
                confirmed: result.result.confirmed,
                deaths: result.result.deaths,
                recovered: result.result.recovered
              });
            },
            (error) => {
              this.setState({
                isLoaded: true,
                error
              });
            }
          )
    }


    render() {
        const { error, isLoaded, confirmed, deaths, recovered } = this.state;
        if (error) {
            return <div>Error: {error.message}</div>;
          } else if (!isLoaded) {
            return <div><RollBoxLoading /></div>;
          } else {
        return (
            <>
            <Container>
                <Row className="justify-content-center">
                    <Col>
                GLOBAL COUNT
                    </Col>
                </Row>

                <Row>
                    <Col sm="4">
                        <Row className="justify-content-center">
                            Confirmed
                        </Row>
                        <Row className="justify-content-center">
                            {confirmed}
                        </Row>
                    </Col>
                    <Col sm="4">
                        <Row className="justify-content-center">
                            Deaths
                        </Row>
                        <Row className="justify-content-center">
                            {deaths}
                        </Row>
                    </Col>
                    <Col sm="4">
                        <Row className="justify-content-center">
                            Recovered
                        </Row>
                        <Row className="justify-content-center">
                            {recovered}
                        </Row>
                    </Col>
                </Row>
            </Container>
            </>
        )
          }
    }
}