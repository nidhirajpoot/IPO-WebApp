import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEye, faEyeSlash } from '@fortawesome/free-solid-svg-icons';
import './SignIn.css';
import logo from '../../assets/images/logo.png'
const SignIn = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [formData, setFormData] = useState({
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
    // Handle form submission
  };

  return (
    <div className="signin-container">
      <div className="signin-form-container">
        <div className="logo-container mb-4">
          <img src={logo} alt="Company Logo" className="logo-image" />
        </div>

        <h2 className="signin-title mb-4">Sign in</h2>

        <form onSubmit={handleSubmit}>
          <div className="mb-3">
            <label htmlFor="email" className="form-label">Email Address</label>
            <input
              type="email"
              className="form-control"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="Enter your email"
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

          <div className="mb-4 form-check">
            <input
              className="form-check-input"
              type="checkbox"
              id="keepSignedIn"
            />
            <label className="form-check-label" htmlFor="keepSignedIn">
              Keep me signed in
            </label>
          </div>

          <button type="submit" className="signin-button">
            Sign in
          </button>

          <div className="divider">
            <span>or sign in with</span>
          </div>

          <button type="button" className="google-button">
            <img src="https://www.google.com/favicon.ico" alt="Google" className="google-icon" />
            Continue with Google
          </button>

          <div className="signup-link">
            Don't have an account? <a href="/SignUp">Create an account</a>
          </div>
        </form>
      </div>
    </div>
  );
};

export default SignIn;