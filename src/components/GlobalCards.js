import React, { Component } from "react";

import { Card, Button, CardHeader, CardFooter, CardBody,
    CardTitle, CardText } from 'reactstrap';

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
                        <h3 style={{fontSize:'35px'}} className="text-center">GLOBAL COUNT</h3>
                        <p style={{fontSize:'10px'}} className="text-center">as of : {date}</p>
                    </Col>
                </Row>

                <Row>
                    <Col sm="4">
                        <Row className="justify-content-center">
                        <Card bg="primary" className="text-center" text="light" style={{ fontSize: '25px', width: '18rem', margin: '5px' }}>
                            <CardHeader><b>CONFIRMED</b></CardHeader>
                            <CardBody>
                                <CardText>
                                    {confirmed}
                                </CardText>
                            </CardBody>
                        </Card>
                        </Row>
                    </Col>
                    <Col sm="4">
                        <Row className="justify-content-center">
                            <Card  bg="danger" className="text-center" text="light" style={{ fontSize: '25px', width: '18rem', margin: '5px' }}>
                                <CardHeader><b>DEATHS</b></CardHeader>
                                <CardBody>
                                    <CardText>
                                        {deaths}
                                    </CardText>
                                </CardBody>
                            </Card>
                        </Row>
                    </Col>
                    <Col sm="4">
                        <Row className="justify-content-center">
                            <Card  bg="warning" className="text-center"  text="dark" style={{ fontSize: '25px', width: '18rem', margin: '5px' }}>
                                <CardHeader><b>RECOVERED</b></CardHeader>
                                <CardBody>
                                    <CardText>
                                        {recovered}
                                    </CardText>
                                </CardBody>
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