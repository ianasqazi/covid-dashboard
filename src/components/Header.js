import React, { Component } from 'react';
import { Container, Row, Col, Jumbotron } from 'reactstrap';

export default class Header extends Component {

  render() {
    return (
      <>
      <Jumbotron fluid>
        <Container>
          <Row>
            <Col>

              <h1 style={{fontSize:'50px'}} className="text-center">COVID-19 DASHBOARD</h1>
              
          </Col>
          </Row>
          <Row className="justify-content-center">
            <Col>
              <blockquote style={quoteStyles}>
                " To ALL of the wonderful, much-needed, most-appreciated <span style={{color:'red'}}><b>medical community </b> </span>
                from the front desk administrators taking all the calls from people in a panic to the 
                ground-zero doctors, nurses, cleaning crew, to the medical industrial makers/suppliers/deliverers... 
                <br></br>
                <p className="text-right"><b><span style={{fontSize : '30px', color:'red'}}>THANK YOU</span> ... from all my <span role='img' aria-label='Heart'>❤️</span> </b></p>
                </blockquote>

            </Col>
          </Row>
        </Container>
      </Jumbotron>
      </>
    )
  }
}

const quoteStyles = { 
  margin:'10px',
  padding:'20px',
  fontSize:'24px',
  fontStyle: 'oblique',
  color:'#D9D9D9',
  backgroundColor: '#212529',
  borderRadius: '20px/50px',
  boxShadow: '0 19px 38px rgba(0,0,0,0.30), 0 15px 12px rgba(0,0,0,0.22)'

}
