// Header.js
import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faSearch,
  faBell,
  faChevronDown
} from '@fortawesome/free-solid-svg-icons';
import './Header.css';

const Header = () => {
  return (
    <div className="header-container">
      {/* Search Section */}
      <div className="search-container">
        <input
          type="text"
          placeholder="Search"
          className="search-input"
        />
        <FontAwesomeIcon icon={faSearch} className="search-icon" />
      </div>

      {/* User Profile Section */}
      <div className="profile-container">
        {/* Notification Icon */}
        <div className="notification-container">
          <FontAwesomeIcon icon={faBell} className="notification-icon" />
          <span className="notification-dot"></span>
        </div>

        {/* User Profile */}
        <div className="user-profile">
          <div className="avatar">
            <span>V</span>
          </div>
          <div className="user-info">
            <span>Hi, Vishal</span>
            <FontAwesomeIcon icon={faChevronDown} className="dropdown-icon" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;