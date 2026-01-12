import React, { useState } from "react";
import "./registration.css";

export default function Registration() {
  const [visible, setVisible] = useState(false);

  return (
    <div className="page auth-page">
      <h2>Sign up</h2>
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
          <button className="btn-primary">Create account</button>
        </div>
      </div>
    </div>
  );
}