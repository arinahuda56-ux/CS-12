import React, { useEffect, useRef, useState } from 'react'
import { Link } from 'react-router-dom'
import './login.css'
import '../Registration/registration.css'

const Login = () => {
  const [showEmailForm, setShowEmailForm] = useState(false)

  // refs для password toggle
  const passRef = useRef(null)
  const lineRef = useRef(null)

  useEffect(() => {
    // FontAwesome
    const href =
      'https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.1/css/all.min.css'
    if (!document.querySelector(`link[href="${href}"]`)) {
      const link = document.createElement('link')
      link.rel = 'stylesheet'
      link.href = href
      document.head.appendChild(link)
    }

    if (lineRef.current) lineRef.current.style.display = 'block'
  }, [])

  const togglePassword = () => {
    if (!passRef.current || !lineRef.current) return
    const hidden = passRef.current.type === 'password'
    passRef.current.type = hidden ? 'text' : 'password'
    lineRef.current.style.display = hidden ? 'none' : 'block'
  }

  return (
    <div className="login-root">
      <div className="login-left-panel">
        <div className="login-box">
          {!showEmailForm ? (
            <>
              <h1 className="login-title">Hello</h1>

              <div className="login-subtitle">
                Use your email or another service to continue with Coolors.
              </div>

              <button className="login-button">
                <i className="fa-brands fa-google" />
                Continue with Google
              </button>

              <button className="login-button">
                <i className="fa-brands fa-apple" />
                Continue with Apple
              </button>

              <div className="login-divider">OR</div>

              <button
                className="login-button login-button-email"
                onClick={() => setShowEmailForm(true)}
              >
                <i className="fa-solid fa-envelope" />
                Continue with email
              </button>

              <div className="login-footer-text">
                By continuing, you agree to our
                <a href="#"> Terms of Service</a>. Read our
                <a href="#"> Privacy Policy</a>.
              </div>
            </>
          ) : (
            /* 👇 ЗАМІНЕНО стару форму на твою Registration */
            <>
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
                    ref={passRef}
                    type="password"
                    className="weird-input weird-input--with-toggle"
                    placeholder="Password"
                  />
                  <button
                    type="button"
                    className="weird-toggle"
                    onClick={togglePassword}
                  >
                    <svg viewBox="0 0 24 24">
                      <path
                        fill="none"
                        stroke="#111"
                        strokeWidth="1.6"
                        d="M1 12s4-7 11-7 11 7 11 7-4 7-11 7-11-7-11-7z"
                      />
                      <circle
                        cx="12"
                        cy="12"
                        r="3"
                        fill="none"
                        stroke="#111"
                        strokeWidth="1.6"
                      />
                      <line
                        ref={lineRef}
                        x1="4"
                        y1="4"
                        x2="20"
                        y2="20"
                        stroke="#111"
                        strokeWidth="1.6"
                      />
                    </svg>
                  </button>
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
            </>
          )}
        </div>
      </div>

      <div className="login-right-panel" />
    </div>
  )
}

export default Login
