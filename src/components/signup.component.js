import React, { Component } from 'react'
export default class SignUp extends Component {
  render() {
    return (
      <div className="auth-wrapper">
       <div className="auth-inner">
      <form>
        <h3>Sign Up</h3>
        <div className="mb-3">
          <label>First name</label>
          <input
            type="text"
            className="form-control"
            placeholder="First name"
          />
        </div>
        <div className="mb-3">
          <label>Last name</label>
          <input type="text" className="form-control" placeholder="Last name" />
        </div>
        <div className="mb-3">
          <label>Email address</label>
          <input
            type="email"
            className="form-control"
            placeholder="Enter email"
          />
        </div>
        <div className="mb-3">
          <label>Password</label>
          <input
            type="password"
            className="form-control"
            placeholder="Enter password"
          />
        </div>
        <div className="d-grid">
          <button type="submit" className="button">
            Sign Up
          </button>
        </div>
        <br></br>
        <div>
          <p className="forgot-password text-right">
            Already have an account <a href="/login">sign in?</a>
          </p>
        </div>
      </form>
      </div>
      </div>
    )
  }
}