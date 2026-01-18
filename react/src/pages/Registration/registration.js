import React, { useEffect, useRef, useState } from 'react'
import { Link } from 'react-router-dom'
import './registration.css'

const Registration = () => {
  const [showPassword, setShowPassword] = useState(false)

  return (
    <div className="weird">
      <div className="weird-leftside">

        <div className="weird-header">
          <h1>Sign up</h1>
          <p className="weird-subtitle">
            Create a free account with your email.
          </p>
        </div>

        <div className="weird-form">
          <input
            type="text"
            className="weird-input"
            placeholder="Full Name"
          />

          <input
            type="email"
            className="weird-input"
            placeholder="Email"
          />

          <div className="weird-pass-wrapper">
            <input
              type={showPassword ? 'text' : 'password'}
              className="weird-input"
              placeholder="Password"
            />

            <span
              className="weird-toggle"
              onClick={() => setShowPassword(prev => !prev)}
            >
              <span className="weird-eye">
                <svg viewBox="0 0 24 24">
                  <path
                    fill="none"
                    stroke="#000"
                    strokeWidth="2"
                    d="M1 12s4-7 11-7 11 7 11 7-4 7-11 7-11-7-11-7z"
                  />
                  <circle
                    cx="12"
                    cy="12"
                    r="3"
                    fill="none"
                    stroke="#000"
                    strokeWidth="2"
                  />
                  {!showPassword && (
                    <line
                      x1="4"
                      y1="4"
                      x2="20"
                      y2="20"
                      stroke="#000"
                      strokeWidth="2"
                    />
                  )}
                </svg>
              </span>
            </span>
          </div>
           <Link to="/">
          <button className="weird-button">
            Create your free account
          </button></Link>

          <p className="weird-signin">
            Already have an account?{' '}
            Sign in
          </p>
        </div>

        <p className="weird-terms">
          By continuing, you agree to our{' '}
          <a href="#">Terms of Service</a>. Read our{' '}
          <a href="#">Privacy Policy</a>.
        </p>

      </div>

      <div className="weird-rightside"></div>
    </div>
  )
}

export default Registration