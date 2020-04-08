import React, { Component } from "react";

import Card from 'react-bootstrap/Card'
import { Container, Row, Col } from 'reactstrap';
import { RollBoxLoading } from 'react-loadingg';

import  commaNumber  from 'comma-number';

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
          series: {},
          options: {},
          labels: []
        };
      }

    componentDidMount() {
        // Global Total Count
        fetch('https://covidapi.info/api/v1/global')

        .then(res => res.json())

        .then(

            (result) => {
                // console.log(result);
              this.setState({
                isLoaded: true,
                date: result.date,
                confirmed: commaNumber(result.result.confirmed),
                deaths: commaNumber(result.result.deaths),
                recovered: commaNumber(result.result.recovered),                
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
        const { error, isLoaded, confirmed, deaths, recovered, date} = this.state;
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
                        <h3 className="text-center">GLOBAL COUNT</h3>
                        <p style={{fontSize:'10px'}} className="text-center">as of : {date}</p>
                    </Col>
                </Row>

                <Row>
                    <Col sm="4">
                        <Row className="justify-content-center">
                        <Card bg="primary" className="text-center" text="light" style={{ width: '18rem', margin: '5px' }}>
                            <Card.Header><b>CONFIRMED CASES</b></Card.Header>
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
                            <Card  bg="danger" className="text-center" text="light" style={{ width: '18rem', margin: '5px' }}>
                                <Card.Header><b>DEATHS</b></Card.Header>
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
                            <Card  bg="warning" className="text-center"  text="dark" style={{ width: '18rem', margin: '5px' }}>
                                <Card.Header><b>RECOVERED</b></Card.Header>
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