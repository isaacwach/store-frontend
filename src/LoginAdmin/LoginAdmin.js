import React, { useState } from "react";
import { Col, Container, Row, Form } from "react-bootstrap";
import {connect} from "react-redux"
import {login} from "../actions/auth"
import { Redirect } from "react-router-dom";
import PropTypes from "prop-types"
const Login = ({ login, isAuthenticated, isAdmin }) => {
  const [user, setUser] = useState({
    username: "",
    password: "",
  });

  const { username, password } = user;

  const loginChange = (e) =>
    setUser({ ...user, [e.target.name]: e.target.value });
  const handleLoginSubmit = (e) => {
    e.preventDefault();
    login({ username, password });
  };

  if (isAuthenticated && isAdmin) {
    return <Redirect to="/" />;
  } else if (isAuthenticated && !isAdmin) {
    return <Redirect to="/" />;
  } else {
    return (
      <>
        <div className="body">
          <Container>
            <br></br>
            <Row>
              <Col lg={4} md={6} sm={12}>
                <img src="/images/profile.png" alt="profileicon" />
                <Form onSubmit={(e) => handleLoginSubmit(e)}>
                  <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Username</Form.Label>
                    <Form.Control
                      type="email"
                      placeholder="username"
                      onChange={(e) => loginChange(e)}
                      name="username"
                      value={username}
                    />
          
                  </Form.Group>

                  <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>Password</Form.Label>
                    <Form.Control
                      type="password"
                      onChange={(e) => loginChange(e)}
                      placeholder="password..."
                      name="password"
                      value={password}
                    />
                  </Form.Group>
                  <Form.Group className="mb-3" controlId="formBasicCheckbox">
                    <Form.Check type="checkbox" label="Remember Me" />
                  </Form.Group>
                  <p className="forgot-password text-right">
                    Forgot <a href="/signup">password?</a>
                  </p>
                  <button className="myGrey" type="submit">
                    Login
                  </button>
                  <div>
                    <p className="forgot-password text-right">
                      Dont have an account? <a href="/signup">Sign Up</a>
                    </p>
                  </div>
                </Form>
              </Col>
              <Col lg={8} md={6} sm={12}>
                <img
                  className="w-100"
                  height="700px"
                  alt="loginimage"
                  src="images/signup.svg"
                />
              </Col>
            </Row>
          </Container>
        </div>
      </>
    );
  }
};
Login.propTypes={
  login:PropTypes.func.isRequired,
  isAuthenticated:PropTypes.bool,
  isAdmin:PropTypes.bool
}

const mapStateToProps =state =>({
  isAuthenticated:state.auth.isAuthenticated,
  isAdmin:state.auth.isAdmin
})

export default connect(mapStateToProps, { login })(Login);
