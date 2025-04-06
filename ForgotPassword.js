import React, { useState } from 'react';
import './ForgotPassword.css';
import logo from '../../assets/images/logo.png'

const ForgotPassword = () => {
  const [email, setEmail] = useState('');

  const handleChange = (e) => {
    setEmail(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle password reset logic
  };

  return (
    <div className="password-reset-container">
      <div className="password-reset-form-container">
        <div className="logo-container mb-4">
          <img src={logo} alt="Company Logo" className="logo-image" />
        </div>

        <h2 className="password-reset-title mb-4">Forgot Password?</h2>
        <p className="mb-4">Enter your email address to get the password reset link.</p>

        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label htmlFor="email" className="form-label">Email Address</label>
            <input
              type="email"
              className="form-control"
              id="email"
              name="email"
              value={email}
              onChange={handleChange}
              placeholder="hello@bluestock.in"
            />
          </div>

          <button type="submit" className="password-reset-button">
            Password Reset
          </button>

          <div className="mt-4">
            <a href="/SignIn" className="login-link">Back to login</a>
          </div>
        </form>
      </div>
    </div>
  );
};

export default ForgotPassword;