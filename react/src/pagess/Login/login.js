import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./login.css";

export default function Login() {
  const [visible, setVisible] = useState(false);
  const nav = useNavigate();

  return (
    <div className="page auth-page">
      <h2>Sign in</h2>
      <div className="form">
        <label>Email</label>
        <input type="email" />

        <label>Password</label>
        <div className="pw-row">
          <input type={visible ? "text" : "password"} />
          <button className="pw-toggle" onClick={() => setVisible((s) => !s)}>
            {visible ? "Hide" : "Show"}
          </button>
        </div>

        <div className="auth-actions">
          <button className="btn-primary">Sign in</button>
          <button className="btn-ghost" onClick={() => nav("/registration")}>
            Continue with email
          </button>
        </div>
      </div>
    </div>
  );
}