import React, {useState} from 'react'
import { connect } from 'react-redux'
import  PropTypes from "prop-types"
import { create_clientuser } from '../actions/auth'
import { Redirect } from 'react-router-dom'
import {Col, Container, Row, Form } from "react-bootstrap";

const ClientSignup = ({create_clientuser, isAuthenticated,isClient}) => {
    const [client, setClient]=useState({
        username:'',
        email:'',
        password:'',
        password2:''
    })

    const handleChange=(e)=>setClient({
        ...client,
        [e.target.name]:e.target.value })
        
    const {username, email, password, password2}=client
     
   const handleSubmit=(e)=>{
       e.preventDefault();
       const newClient={
           username,
           email,
           password,
           password2
       }
       console.log(newClient)
    create_clientuser(newClient)
   }
    if(isAuthenticated && isClient){
        return <Redirect to="/" />
    }
    return (
        <div className="body">
      <Container className='container'>
        <Row>
          <Col lg={4} md={6} sm={12}>
            <img src='/images/profile.png' alt='profileicon'/>
            <Form onSubmit={ e =>handleSubmit(e)}>
              <Form.Group className="mb-3" controlId="username">
                <Form.Label>Username</Form.Label>
                <Form.Control type="text" placeholder="Enter Username" name='username' value={username}
                                 onChange={(e)=>handleChange(e)} />
              </Form.Group>
                
              <Form.Group className="mb-3" controlId="email">
                <Form.Label>Email address</Form.Label>
                <Form.Control type="email" placeholder="Enter email" name='email'  value={email}
                                 onChange={(e)=>handleChange(e)} />
              </Form.Group>

              <Form.Group className="mb-3" controlId="formBasicPassword">
                <Form.Label>Password</Form.Label>
                <Form.Control type="password" placeholder="Password" name='password' value={password}
                                 onChange={(e)=>handleChange(e)}/>
              </Form.Group>
              <Form.Group className="mb-3" controlId="confirmpassword">
                <Form.Label>Confirm Password </Form.Label>
                <Form.Control type="password" placeholder="Confirm Password" name='password2' value={password2}
                                 onChange={(e)=>handleChange(e)}/>
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
    )
}

ClientSignup.propTypes={
    create_clientuser:PropTypes.func.isRequired,
    isAuthenticated:PropTypes.bool,
    isClient:PropTypes.bool
}


const mapStateToProps= state =>({
    isAuthenticated:state.auth.isAuthenticated,
    isClient:state.auth.isClient
})

export default  connect(mapStateToProps, {create_clientuser})(ClientSignup)