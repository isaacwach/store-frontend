import React from 'react';
import {Button, Col, Container, Row,  Form} from "react-bootstrap";

const Login = () => {
  return(
    <>
      <Container>
        <br></br>
        <Row>
          <Col lg={4} md={6} sm={12}>
            <img src='/images/profile.png' alt='profileicon'/>
            <Form>
              <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>Email address</Form.Label>
                <Form.Control type="email" placeholder="Enter email" />
              </Form.Group>

              <Form.Group className="mb-3" controlId="formBasicPassword">
                <Form.Label>Password</Form.Label>
                <Form.Control type="password" placeholder="Password" />
              </Form.Group>
              <Form.Group className="mb-3" controlId="formBasicCheckbox">
                <Form.Check type="checkbox" label="Remember Me" />
              </Form.Group>
              <p className="forgot-password text-right">
                Forgot <a href="#">password?</a>
              </p>
              <button className="myGrey" type="submit">
                Login
              </button>
              <div>
                <p className="forgot-password text-right">
                Dont have an account? <a href="/SignUp">Sign Up</a>
                </p>
              </div>
            </Form>
          </Col>
          <Col lg={8} md={6} sm={12}>
            <img className='w-100' height="700px" src='images/signup.svg'/>
          </Col>
        </Row>

      </Container>
    </>
  )
}

export default Login;