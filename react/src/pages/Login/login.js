import React, { useEffect, useRef, useState } from 'react'
import { Link } from 'react-router-dom'
import './login.css'

const Login = () => {
  return (
    <div className="login">
      <div className="login-left-panel">
        <div className="login-box">
          <h1 className="login-title">Hello</h1>

          <div className="login-subtitle">
            Use your email or another service to continue with Coolors.
          </div>

          <button className="login-button">
            <i className="fa-brands fa-google"></i>
            Continue with Google
          </button>

          <button className="login-button">
            <i className="fa-brands fa-apple"></i>
            Continue with Apple
          </button>

          <div className="login-divider">OR</div>
         <Link to="/registration">
          <button className="login-button login-button-email">
            <i className="fa-solid fa-envelope"></i>
            Continue with email
          </button></Link>

          <div className="login-footer-text">
            By continuing, you agree to our{' '}
            <a href="#">Terms of Service</a>. Read our{' '}
            <a href="#">Privacy Policy</a>.
          </div>
        </div>
      </div>

      <div className="login-right-panel"></div>
    </div>
  )
}

export default Login