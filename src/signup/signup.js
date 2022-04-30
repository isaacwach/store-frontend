import React from 'react'
import {Button, Col, Container, Row } from "react-bootstrap"
import './signup.css'
import uiImage from '../../public/images/login.svg'

const SignUp = () => {
  return(
    <>
      <Container>
        <Row>
          <Col lg={4} md={6} sm={12}>

            <Form>
              <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>First Name</Form.Label>
                <Form.Control type="text" placeholder="Enter First Name" />
              </Form.Group>
              <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>Last Name</Form.Label>
                <Form.Control type="text" placeholder="Enter Last Name" />
              </Form.Group>
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
              <Button variant="primary btn-primary" type="submit">
                Login
              </Button>
              <div>
                <p className="forgot-password text-right">
                Already have an account <a href="/login">login?</a>
                </p>
              </div>
            </Form>
          </Col>
          <Col lg={8} md={6} sm={12}>
            <img className='w-100' src='uiImage'/>
          </Col>
        </Row>

      </Container>
    </>
  )
}