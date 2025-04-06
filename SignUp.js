import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEye, faEyeSlash } from '@fortawesome/free-solid-svg-icons';
import './SignUp.css';
import logo from '../../assets/images/logo.png'

const SignUp = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: ''
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData)
    // Handle form submission
  };

  return (
    <div className="signup-container">
      <div className="signup-form-container">
        <div className="logo-container mb-4">
          <img src={logo} alt="Company Logo" className="logo-image" />
        </div>

        <h2 className="signup-title">Create an account</h2>

        <form onSubmit={handleSubmit}>
          <div className="mb-3">
            <label htmlFor="name" className="form-label">Name</label>
            <input
              type="text"
              className="form-control"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              placeholder="Enter your name"
            />
          </div>

          <div className="mb-3">
            <label htmlFor="email" className="form-label">Email Address</label>
            <input
              type="email"
              className="form-control"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="hello@bluestock.in"
            />
          </div>

          <div className="mb-3">
            <label htmlFor="password" className="form-label">Password</label>
            <div className="password-input-container">
              <input
                type={showPassword ? "text" : "password"}
                className="form-control"
                id="password"
                name="password"
                value={formData.password}
                onChange={handleChange}
              />
              <button
                type="button"
                className="password-toggle"
                onClick={() => setShowPassword(!showPassword)}
              >
                <FontAwesomeIcon icon={showPassword ? faEyeSlash : faEye} />
              </button>
            </div>
          </div>

          <div className="mb-3">
            <small className="text-muted">
              By continuing, you agree to our <a href="#" className="terms-link">terms of service</a>.
            </small>
          </div>

          <div className="mb-3">
            <div className="g-recaptcha" data-sitekey="your_site_key"></div>
          </div>

          <button type="submit" className="signup-button">
            Sign up
          </button>

          <div className="divider">
            <span>or sign up with</span>
          </div>

          <button type="button" className="google-button">
            <img src="https://www.google.com/favicon.ico" alt="Google" className="google-icon" />
            Continue with Google
          </button>

          <div className="login-link">
            Already have an account? <a href="/SignIn">Sign in here</a>
          </div>
        </form>
      </div>
    </div>
  );
};

export default SignUp;