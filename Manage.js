import React from 'react';
import { Link } from 'react-router-dom';
import data from '../../data.json';
import './Manage.css';
import Sidebar from '../../components/layout/Sidebar';
import Header from '../../components/layout/Header';

const Manage = () => {
  return (
    <div className="manage-layout">
      <Sidebar />
      <div className="manage-content">
        <Header />
        <div className="manage-container">
          {/* Title */}
          <h2 className="page-title">Upcoming IPO | Dashboard</h2>

          {/* Register IPO Button */}
          <Link to="/register">
            <button className="register-ipo-button">Register IPO</button>
          </Link>

          {/* IPO Table */}
          <table className="ipo-table">
            <thead>
              <tr>
                <th>Company</th>
                <th>Price Band</th>
                <th>Open</th>
                <th>Close</th>
                <th>Issue Size</th>
                <th>Issue Type</th>
                <th>Listing Date</th>
                <th>Status</th>
                <th>Action</th>
                <th>Delete/View</th>
              </tr>
            </thead>
            <tbody>
              {data.map((item, index) => (
                <tr key={index}>
                  <td>{item.company}</td>
                  <td>{item.price}</td>
                  <td>{item.open}</td>
                  <td>{item.close}</td>
                  <td>{item.size}</td>
                  <td>{item.type}</td>
                  <td>{item.listing}</td>
                  <td className={`status ${item.status.toLowerCase().replace(" ", "-")}`}>
                    {item.status}
                  </td>
                  <td>
                    <button className="update-button">Update</button>
                  </td>
                  <td>
                    <span className="icon delete-icon">🗑️</span>
                    <span className="icon view-icon">👁️</span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>

          {/* Pagination */}
          <div className="pagination">
            <button className="page-button">{"<"}</button>
            {[...Array(10)].map((_, i) => (
              <button key={i} className={`page-button ${i === 0 ? "active" : ""}`}>
                {i + 1}
              </button>
            ))}
            <button className="page-button">{">"}</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Manage;
