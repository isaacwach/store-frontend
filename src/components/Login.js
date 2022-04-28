import React from "react";
import { Col, Row, Container} from "react-bootstrap";
import './Login.css';
import profile from "../images/profile.png"
import uiImg from "../images/login.svg"



const LoginPage = () => {
    return (
        <>
            <Container className="mt-5">
        
                <Row className="mt-5">
                    <Col lg={4} md={6} sm={12} className="text-center p-4">
                        <img src={profile} alt="profile" className="profile"/>
                        <Form>
                            <Form.Group className="mb-3" controlId="formBasicEmail">
                                <Form.Label>Email address</Form.Label>
                                <Form.Control type="email" placeholder="Enter email" />
                            </Form.Group>

                            <Form.Group className="mb-3" controlId="formBasicPassword">
                                <Form.Control type="password" placeholder="Password" />
                            </Form.Group>
                            <div className="text-righ mt-3">
                                <a href=""><small className="reset">Forgot Password</small></a>
                            </div>
                            <Button className="button-login" type="submit">
                            Login
                            </Button>
                            <div>
                                <p className=";link">
                                    <p>Dont have account</p><a href="#">Sign Up</a>
                                </p>
                            </div>
                        </Form>
                    </Col>
                    <Col lg={8} md={6} sm={12}>
                        <img className="w-100" src={uiImg} alt=""/>
                    </Col>
                </Row>
            </Container>
            {/* <div className="main">
                <div className="sub-main">
                    <div>
                        <div className="imgs">
                            <div className="container-image">
                                <img src={profile} alt="profile" className="profile"/>
                            </div>
                        </div>
                        <div>
                            <h1>Login Page</h1>
                            <div>
                                <img src={email} alt="email" className="email"/>
                                 <input type="text" placeholder="username" className="name"/> 
                            </div>
                            <div className="second-input">
                                <img src={pass} alt="pass" className="email"/>
                                 <input type="text" placeholder="password" className="name"/> 
                            </div>
                            <div className="login-button">
                                <button>Login</button>
                            </div>
                            <div>
                                <p className=";link">
                                    <p>Dont have account</p><a href="#">Sign Up</a>
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div> */}
        </>
    
    );
};


export default Login ;