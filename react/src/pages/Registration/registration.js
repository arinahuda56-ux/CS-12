// import React, { useEffect, useRef, useState } from 'react'
// import { Link } from 'react-router-dom'
// import './registration.css'

// export const Registration = () => {
//   const passRef = useRef(null)
//   const lineRef = useRef(null)
//   const [visible, setVisible] = useState(false)

//   useEffect(() => {
//     // на початку перекреслення видно, бо пароль прихований
//     if (lineRef.current) lineRef.current.style.display = 'block'
//   }, [])

//   const togglePassword = () => {
//     if (!passRef.current || !lineRef.current) return
//     const isHidden = passRef.current.type === 'password'
//     passRef.current.type = isHidden ? 'text' : 'password'
//     // якщо пароль видно — ховаємо лінію
//     lineRef.current.style.display = isHidden ? 'none' : 'block'
//     setVisible(isHidden)
//   }

//   return (
//     <div className="weird-root">
//       <div className="weird-leftside">
//         <div className="weird-header">
//           <h1>Sign up</h1>
//           <p className="weird-subtitle">Create a free account with your email.</p>
//         </div>

//         <div className="weird-form">
//           <input type="text" className="weird-input" placeholder="Full Name" />
//           <input type="email" className="weird-input" placeholder="Email" />

//           <div className="weird-pass-wrapper">
//             <input
//               ref={passRef}
//               type="password"
//               id="weird-pass"
//               className="weird-input weird-input--with-toggle"
//               placeholder="Password"
//             />
//             <button
//               type="button"
//               className="weird-toggle"
//               id="weird-toggle"
//               onClick={togglePassword}
//               aria-label="toggle password visibility"
//             >
//               <span className="weird-eye" aria-hidden="true">
//                 <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" focusable="false" aria-hidden="true">
//                   <path
//                     id="weird-eye-path"
//                     fill="none"
//                     stroke="#111"
//                     strokeWidth="1.6"
//                     d="M1 12s4-7 11-7 11 7 11 7-4 7-11 7-11-7-11-7z"
//                   />
//                   <circle
//                     id="weird-eye-circle"
//                     cx="12"
//                     cy="12"
//                     r="3"
//                     fill="none"
//                     stroke="#111"
//                     strokeWidth="1.6"
//                   />
//                   <line
//                     id="weird-eye-line"
//                     ref={lineRef}
//                     x1="4"
//                     y1="4"
//                     x2="20"
//                     y2="20"
//                     stroke="#111"
//                     strokeWidth="1.6"
//                     style={{ display: 'block' }}
//                   />
//                 </svg>
//               </span>
//             </button>
//           </div>
//          <Link to="/login"> <button className="weird-button">Create your free account</button></Link>
          

//           <p className="weird-signin">
//             Already have an account?{' '}
//             Sign in
//           </p>
//         </div>

//         <p className="weird-terms">
//           By continuing, you agree to our <a href="#">Terms of Service</a>. Read our <a href="#">Privacy Policy</a>.
//         </p>
//       </div>

//       <div className="weird-rightside" />
//     </div>
//   )
// }

// export default Registration


import React, { useEffect, useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import './registration.css';

export const Registration = () => {
  const passRef = useRef(null);
  const lineRef = useRef(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    // на початку перекреслення видно, бо пароль прихований
    if (lineRef.current) lineRef.current.style.display = 'block';
  }, []);

  const togglePassword = () => {
    if (!passRef.current || !lineRef.current) return;
    const isHidden = passRef.current.type === 'password';
    passRef.current.type = isHidden ? 'text' : 'password';
    // якщо пароль видно — ховаємо лінію
    lineRef.current.style.display = isHidden ? 'none' : 'block';
    setVisible(isHidden);
  };

  return (
    <div className="weird-root">
      <div className="weird-leftside">
        <div className="weird-header">
          <h1>Sign up</h1>
          <p className="weird-subtitle">Create a free account with your email.</p>
        </div>

        <div className="weird-form">
          <input type="text" className="weird-input" placeholder="Full Name" />
          <input type="email" className="weird-input" placeholder="Email" />

          <div className="weird-pass-wrapper">
            <input
              ref={passRef}
              type="password"
              id="weird-pass"
              className="weird-input weird-input--with-toggle"
              placeholder="Password"
            />
            <button
              type="button"
              className="weird-toggle"
              id="weird-toggle"
              onClick={togglePassword}
              aria-label="toggle password visibility"
            >
              <span className="weird-eye" aria-hidden="true">
                <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" focusable="false" aria-hidden="true">
                  <path
                    id="weird-eye-path"
                    fill="none"
                    stroke="#111"
                    strokeWidth="1.6"
                    d="M1 12s4-7 11-7 11 7 11 7-4 7-11 7-11-7-11-7z"
                  />
                  <circle
                    id="weird-eye-circle"
                    cx="12"
                    cy="12"
                    r="3"
                    fill="none"
                    stroke="#111"
                    strokeWidth="1.6"
                  />
                  <line
                    id="weird-eye-line"
                    ref={lineRef}
                    x1="4"
                    y1="4"
                    x2="20"
                    y2="20"
                    stroke="#111"
                    strokeWidth="1.6"
                    style={{ display: 'block' }}
                  />
                </svg>
              </span>
            </button>
          </div>

          <Link to="/login">
            <button className="weird-button">Create your free account</button>
          </Link>

          <p className="weird-signin">
            Already have an account?{' '}
            <Link to="/login">Sign in</Link>
          </p>
        </div>

        <p className="weird-terms">
          By continuing, you agree to our <a href="#">Terms of Service</a>. Read our <a href="#">Privacy Policy</a>.
        </p>
      </div>

      <div className="weird-rightside" />
    </div>
  );
};

export default Registration;