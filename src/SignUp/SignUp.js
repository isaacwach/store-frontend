import React from 'react';
import {Col, Container, Row, Form } from "react-bootstrap";

const SignUp = () => {
  return(
    <>
    <div classname="body">
      <Container className='container'>
        <Row>
          <Col lg={4} md={6} sm={12}>
            <img src='/images/profile.png' alt='profileicon'/>
            <Form>
              <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>Username</Form.Label>
                <Form.Control type="text" placeholder="Enter Username" />
              </Form.Group>
                
              <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>Email address</Form.Label>
                <Form.Control type="email" placeholder="Enter email" />
              </Form.Group>

              <Form.Group className="mb-3" controlId="formBasicPassword">
                <Form.Label>Password</Form.Label>
                <Form.Control type="password" placeholder="Password" />
              </Form.Group>
              <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>Confirm Password </Form.Label>
                <Form.Control type="password" placeholder="Confirm Password" />
              </Form.Group>
              <p className="forgot-password text-right">
                Forgot <a href="/signup">password?</a>
              </p>
              <button className='myGrey' type="submit">
              Sign Up
              </button>
              <div>
                <p className="forgot-password text-right">
                Already have an account <a href="/login">login?</a>
                </p>
              </div>
            </Form>
          </Col>
          <Col lg={8} md={6} sm={12}>
            <img className='w-100' height="700px" alt='signuplogo' src='/images/signup.svg'/>
          </Col>
        </Row>

      </Container>

      </div>
    </>
  )
}


export default SignUp ;