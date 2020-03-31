import React, { Component } from "react";

import Card from 'react-bootstrap/Card'
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
                        <Card  className="text-center" border="primary" style={{ width: '18rem' }}>
                            <Card.Header>Confirmed Cases</Card.Header>
                            <Card.Body>
                                <Card.Text>
                                    {confirmed}
                                </Card.Text>
                            </Card.Body>
                        </Card>
                        </Row>
                    </Col>
                    <Col sm="4">
                        <Row className="justify-content-center">
                            <Card  className="text-center" border="danger" style={{ width: '18rem' }}>
                                <Card.Header>Deaths</Card.Header>
                                <Card.Body>
                                    <Card.Text>
                                        {deaths}
                                    </Card.Text>
                                </Card.Body>
                            </Card>
                        </Row>
                    </Col>
                    <Col sm="4">
                        <Row className="justify-content-center">
                            <Card  className="text-center" border="success" style={{ width: '18rem' }}>
                                <Card.Header>Recovered</Card.Header>
                                <Card.Body>
                                    <Card.Text>
                                        {recovered}
                                    </Card.Text>
                                </Card.Body>
                            </Card>
                        </Row>
                    </Col>
                </Row>
            </Container>
            </>
        )
          }
    }
}