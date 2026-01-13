import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import './login.css'

export const Login = () => {
  const [showEmailForm, setShowEmailForm] = useState(false)

  // Додаємо FontAwesome CDN якщо ще немає (щоб іконки працювали)
  useEffect(() => {
    const href = 'https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.1/css/all.min.css'
    if (!document.querySelector(`link[href="${href}"]`)) {
      const link = document.createElement('link')
      link.rel = 'stylesheet'
      link.href = href
      document.head.appendChild(link)
      return () => {
        // не обов'язково видаляти, але можна
        // document.head.removeChild(link)
      }
    }
  }, [])

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

              <button
                className="login-button"
                onClick={() => {
                  /* Тут можна додати логіку OAuth, зараз — просто візуальна кнопка */
                }}
              >
                <i className="fa-brands fa-google" />
                Continue with Google
              </button>

              <button
                className="login-button"
                onClick={() => {
                  /* Apple OAuth placeholder */
                }}
              >
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
            /* Тут показуємо колишню реєстраційну/логін форму */
            <>
              <div className="header">
                <h1>Sign up</h1>
                <p className="subtitle"> Create a free account with your email. </p>
              </div>

              <div className="form">
                <input type="text" placeholder="Full Name" />
                <input type="email" placeholder="Email" />
                <div className="passwordWrapper">
                  <input type="password" placeholder="Password" />
                </div>
               <Link to="/"> <button className="createAccountBtn">Create your free account</button></Link>

                <p className="signin">
                  Already have an account?{' '}
                  {/* <Link to="/" style={{ cursor: 'pointer', color: '#2563eb', textDecoration: 'underline' }}> */}
                    Sign in
                  {/* </Link> */}
                </p>
              </div>

              <p className="terms">
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