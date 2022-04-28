import React from "react";
import { Col, Row, Container} from "react-bootstrap";
import profile from "../images/profile.png"
import email from "../images/message.jpg"
import pass from "../images/pass.jpg"

const Login = () => {
    return (
        <>
            <Container>
                <Row>
                    <Col lg={4} md={6} sm={12}>
                        <Form>
                            <Form.Group className="mb-3" controlId="formBasicEmail">
                                <Form.Label>Email address</Form.Label>
                                <Form.Control type="email" placeholder="Enter email" />
                            </Form.Group>

                            <Form.Group className="mb-3" controlId="formBasicPassword">
                                <Form.Control type="password" placeholder="Password" />
                            </Form.Group>
                            <Button variant="primary" type="submit">
                            Login
                            </Button>
                        </Form>
                    </Col>
                    <Col lg={8} md={6} sm={12}>

                    </Col>
                </Row>
            </Container>
            <div className="main">
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
                            <div>
                                <img src={pass} alt="pass" className="pass"/>
                                 <input type="text" placeholder="password" className="pass"/> 
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    
    );
};


export default Login ;