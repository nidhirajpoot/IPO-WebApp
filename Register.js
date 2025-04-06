import React, { useState, useRef } from "react";
import { useNavigate } from "react-router-dom";
import "./Register.css";

function Register() {
  const navigate = useNavigate();
  const [companyName, setCompanyName] = useState("");
  const [priceBand, setPriceBand] = useState("");
  const [open, setOpen] = useState("");
  const [close, setClose] = useState("");
  const [issueSize, setIssueSize] = useState("");
  const [issueType, setIssueType] = useState("");
  const [listingDate, setListingDate] = useState("");
  const [status, setStatus] = useState("");
  const [ipoPrice, setIpoPrice] = useState("");
  const [listingPrice, setListingPrice] = useState("");
  const [listingGain, setListingGain] = useState("");
  const [finalListingDate, setFinalListingDate] = useState("");
  const [cmp, setCmp] = useState("");
  const [currentReturn, setCurrentReturn] = useState("");
  const [rhp, setRhp] = useState("");
  const [drhp, setDrhp] = useState("");
  const [logo, setLogo] = useState(null);
  const headerRef = useRef(null);
  const [activeItem, setActiveItem] = useState("ipoInformation");

  const handleLogoUpload = (event) => {
    setLogo(event.target.files[0]);
  };

  const handleDeleteLogo = () => {
    setLogo(null);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log("Form submitted");
  };

  const handleCancel = () => {
    navigate("/ManageIPO");
  };

  const handleItemClick = (item) => {
    setActiveItem(item);
    if (item === "ipoInfo") {
      scrollToBottom();
    }
  };

  const scrollToBottom = () => {
    window.scrollTo({
      top: document.body.scrollHeight,
      behavior: "smooth",
    });
  };

  return (
    <div className="container1 container">
      <div className="header-box" ref={headerRef}>
        <div>
          <h3>Upcoming IPO Information</h3>
          <h8>Manage your IPO Details</h8>
        </div>
        <div className="header">
          <button className="cancel-btn" onClick={handleCancel}>Cancel</button>
          <button className="register-btn" onClick={handleSubmit}>
            Register
          </button>
        </div>
      </div>
      <div className="form-container">
        <aside className="sidebar">
          <ul>
          <li
              className={activeItem === "ipoInformation" ? "active" : ""}
              onClick={() => handleItemClick("ipoInformation")}
            >
            <svg width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg" style={{ marginRight: '8px' }}>
            <path d="M6.3 4.9H7.7V3.5H6.3M7 12.6C3.913 12.6 1.4 10.087 1.4 7C1.4 3.913 3.913 1.4 7 1.4C10.087 1.4 12.6 3.913 12.6 7C12.6 10.087 10.087 12.6 7 12.6ZM7 0C6.08075 0 5.17049 0.18106 4.32122 0.532843C3.47194 0.884626 2.70026 1.40024 2.05025 2.05025C0.737498 3.36301 0 5.14348 0 7C0 8.85651 0.737498 10.637 2.05025 11.9497C2.70026 12.5998 3.47194 13.1154 4.32122 13.4672C5.17049 13.8189 6.08075 14 7 14C8.85651 14 10.637 13.2625 11.9497 11.9497C13.2625 10.637 14 8.85651 14 7C14 6.08075 13.8189 5.17049 13.4672 4.32122C13.1154 3.47194 12.5998 2.70026 11.9497 2.05025C11.2997 1.40024 10.5281 0.884626 9.67878 0.532843C8.8295 0.18106 7.91925 0 7 0ZM6.3 10.5H7.7V6.3H6.3V10.5Z" fill="#0240BC"/>
            </svg>
              IPO Information
            </li>
            <li
              className={activeItem === "ipoInfo" ? "active" : ""}
              onClick={() => handleItemClick("ipoInfo")}
            >
            <svg width="11" height="14" viewBox="0 0 11 14" fill="none" xmlns="http://www.w3.org/2000/svg" style={{ marginRight: '8px' }} >
<path d="M9.65234 0.881836H10.5V14H0V0.881836H0.861328V0H1.73633V0.881836H3.5V0H4.375V0.881836H6.13867V0H7.01367V0.881836H8.77734V0H9.65234V0.881836ZM9.625 13.125V1.75684H0.875V13.125H9.625ZM7.875 3.50684V4.38184H2.625V3.50684H7.875ZM2.625 11.3887V10.5137H7.875V11.3887H2.625ZM2.625 7.88184V7.00684H7.875V7.88184H2.625Z" fill="black"/>
</svg>
              IPO Info
            </li>
            
          </ul>
        </aside>
        <div className="content">
          <form onSubmit={handleSubmit}>
            <h2>IPO Information</h2>
            <h9>Enter IPO details</h9>
            <div className="form-group logo-container">
              <label>Company Logo</label>
              <div className="logo-upload">
                {logo ? (
                  <img src={URL.createObjectURL(logo)} alt="Company Logo" className="logo-image" />
                ) : (
                  <div className="placeholder-logo">No Logo Uploaded</div>
                )}
                {/* <div className="logo-details">
                  <p>NSE India</p>
                  <p>Tech Lead</p>
                  <p>Pune</p>
                </div> */}
                <div className="logo-buttons">
                  <input type="file" onChange={handleLogoUpload} style={{ display: 'none' }} id="logo-upload" />
                  <label htmlFor="logo-upload" className="upload-btn">Upload Logo</label>
                  <button type="button" className="delete-btn" onClick={handleDeleteLogo}>Delete</button>
                </div>
              </div>
            </div>

            <div className="form-row">
              <div className="form-group">
                <label>Company Name</label>
                <input
                  type="text"
                  value={companyName}
                  placeholder="Vodafone Idea"
                  onChange={(e) => setCompanyName(e.target.value)}
                />
              </div>
              <div className="form-group">
                <label>Price Band</label>
                <input
                  type="text"
                  value={priceBand}
                  placeholder="Not Issued"
                  onChange={(e) => setPriceBand(e.target.value)}
                />
              </div>
            </div>

            <div className="form-row">
              <div className="form-group">
                <label>Open</label>
                <input
                  type="text"
                  value={open}
                   placeholder="Not Issued"
                  onChange={(e) => setOpen(e.target.value)}
                />
              </div>
              <div className="form-group">
                <label>Close</label>
                <input
                  type="text"
                  value={close}
                  placeholder="Not Issued"
                  onChange={(e) => setClose(e.target.value)}
                />
              </div>
            </div>

            <div className="form-row">
              <div className="form-group">
                <label>Issue Size</label>
                <input
                  type="text"
                  value={issueSize}
                  placeholder="2300 Cr."
                  onChange={(e) => setIssueSize(e.target.value)}
                />
              </div>
              <div className="form-group">
                <label>Issue Type</label>
                <select
                  value={issueType}
                  onChange={(e) => setIssueType(e.target.value)}
                >
                  <option value="">Select</option>
                  <option value="public">Public</option>
                  <option value="private">Private</option>
                </select>
              </div>
            </div>

            <div className="form-row">
              <div className="form-group">
                <label>Listing Date</label>
                <input
                  type="text"
                  value={listingDate}
                  placeholder="Not Issued"
                  onChange={(e) => setListingDate(e.target.value)}
                />
              </div>
              <div className="form-group">
                <label>Status</label>
                <select
                  value={status}
                  onChange={(e) => setStatus(e.target.value)}
                >
                  <option value="">Select</option>
                  <option value="active">Active</option>
                  <option value="closed">Closed</option>
                </select>
              </div>
            </div>

            <h4 style={{ fontWeight: 'bold', fontSize: '16px' }}>New Listed IPO Details (When IPO Gets Listed)</h4>

            <div className="form-row">
              <div className="form-group">
                <label>IPO Price</label>
                <input
                  type="text"
                  value={ipoPrice}
                  placeholder="₹383"
                  onChange={(e) => setIpoPrice(e.target.value)}
                />
              </div>
              <div className="form-group">
                <label>Listing Price</label>
                <input
                  type="text"
                  value={listingPrice}
                  placeholder="₹435"
                  onChange={(e) => setListingPrice(e.target.value)}
                />
              </div>
            </div>

            <div className="form-row">
              <div className="form-group">
                <label>Listing Gain</label>
                <input
                  type="text"
                  value={listingGain}
                  placeholder="13.58%"
                  onChange={(e) => setListingGain(e.target.value)}
                />
              </div>
              <div className="form-group">
                <label>Listing Date</label>
                <input
                  type="date"
                  value={finalListingDate}
                  placeholder="01-01-2025"
                  onChange={(e) => setFinalListingDate(e.target.value)}
                />
              </div>
            </div>

            <div className="form-row">
              <div className="form-group">
                <label>CMP</label>
                <input
                  type="text"
                  value={cmp}
                  placeholder="₹410"
                  onChange={(e) => setCmp(e.target.value)}
                />
              </div>
              <div className="form-group">
                <label>Current Return</label>
                <input
                  type="text"
                  value={currentReturn}
                  placeholder="7.05%"
                  onChange={(e) => setCurrentReturn(e.target.value)}
                />
              </div>
            </div>

            <div className="form-row">
              <div className="form-group">
                <label>RHP</label>
                <input
                  type="text"
                  value={rhp}
                  onChange={(e) => setRhp(e.target.value)}
                  placeholder="Enter RHP PDF Link"
                />
              </div>
              <div className="form-group">
                <label>DRHP</label>
                <input
                  type="text"
                  value={drhp}
                  onChange={(e) => setDrhp(e.target.value)}
                  placeholder="Enter DRHP PDF Link"
                />
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Register;
