import React, { Component } from "react";

import Card from 'react-bootstrap/Card'
import { Container, Row, Col } from 'reactstrap';
import { RollBoxLoading } from 'react-loadingg';

import ReactApexChart from 'react-apexcharts';

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
                confirmed: result.result.confirmed,
                deaths: result.result.deaths,
                recovered: result.result.recovered,

                series: [{
                    data: [result.result.confirmed, result.result.deaths, result.result.recovered]
                  }],
                options: {
                chart: {
                    type: 'bar',
                    height: 300,
                },
                plotOptions: {
                    bar: {
                    vertical: true,
                    endingShape: 'rounded',
                    columnWidth: '50%',
                    distributed: true,

                    }
                },
                dataLabels: {
                    enabled: false
                },
                xaxis: {
                    categories: ['Confirmed', 'Deaths', 'Recovered'],
                }
                },
                
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
        const { error, isLoaded, confirmed, deaths, recovered} = this.state;
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
                            <Card  bg="warning" className="text-center"  text="light" style={{ width: '18rem', margin: '5px' }}>
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

                <Row className="justify-content-center">
                    <Col>
                        {/* <ReactApexChart options={this.state.options} series={this.state.series} type="bar" height={350} /> */}
                    </Col>
                </Row>
            </Container>
            </>
        )
          }
    }
}