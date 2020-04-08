import React, { useState, Component } from 'react';
import { Container, Row, Col } from 'reactstrap';

import Jumbotron from 'react-bootstrap/Jumbotron';

export default class Header extends Component {

  render() {
    return (
      <>
      <Jumbotron fluid>
        <Container>
          <Row>
            <Col>

              <h1 className="text-center">COVID - 19 DASHBOARD</h1>
              {/* <p className="text-center">
              </p>
              <p>
              Coronavirus has proved that everything around us is so temporary ...
<br></br>
                Things our lives revolved around - work, gym, mall, movies, society
                have all gone for a toss as we are learning to live without them.
                It has taught us that in the end, it's your home and family that keeps you safe.
              </p> */}
              
          
          </Col>
          </Row>
          <Row className="justify-content-center">
            <Col>
              <blockquote style={quoteStyles}>
                " To ALL of the wonderful, much-needed, most-appreciated <span style={{color:'red'}}><b>medical community </b> </span>
                from the front desk administrators taking all the calls from people in a panic to the 
                ground-zero doctors, nurses, cleaning crew, to the medical industrial makers/suppliers/deliverers... 
                <br></br>
                <p className="text-right"><b>THANK YOU ... from all my ❤️ </b></p>
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
  color:'white',
  backgroundColor: '#212529',
  borderRadius: '20px/50px',
  boxShadow: '0 19px 38px rgba(0,0,0,0.30), 0 15px 12px rgba(0,0,0,0.22)'

}
