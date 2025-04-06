import React from "react";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
import { Doughnut } from "react-chartjs-2";
import "./AdminDashboard.css";
import Header from "../../components/layout/Header";
import Sidebar from "../../components/layout/Sidebar";

ChartJS.register(ArcElement, Tooltip, Legend);

const AdminDashboard = () => {
  const donutData = {
    labels: ["Upcomming", "New Listed", "Ongoing"],
    datasets: [
      {
        data: [15, 25, 2],
        backgroundColor: ["#7986CB", "#94a0e0", "#bac3f5"],
        borderWidth: 0,
      },
    ],
  };

  const options = {
    plugins: {
      legend: { display: false },
      tooltip: {
        enabled: true,
        backgroundColor: '#353A61',
        titleFont: { family: 'Poppins' },
        bodyFont: { family: 'Poppins' },
        callbacks: {
          title: () => 'Afternoon',
          label: () => 'IPO NSE & BSE',
        },
        padding: 12,
        cornerRadius: 8
      }
    },
    cutout: "75%",
    responsive: true,
    maintainAspectRatio: false,
  };

  const quickLinks = [
    { name: "NSE India", image: require("../../assets/images/NSE.jpg") },
    { name: "BSE India", image: require("../../assets/images/BSE.png") },
    { name: "SEBI", image: require("../../assets/images/SEBI.png") },
    { name: "Money Control", image: require("../../assets/images/MoneyControl.png") },
  ];

  return (
    <div className="admin-layout">
      <Sidebar />
      <div className="admin-content">
        <Header />
        <div className="container-fluid px-4">
          <h4 className="admin-dashboard-title">Dashboard</h4>
          <div className="row g-4">

            {/* IPO Dashboard Section */}
            <div className="col-12 col-md-6 col-lg-4 px-0">
              <div className="admin-dashboard-card">
                <div className="admin-card-body">
                  <div className="admin-card-title">IPO Dashboard India</div>
                  <p className="admin-card-text text-muted">
                    <span className="text-success">
                      <i className="bi bi-arrow-up"></i> 20
                    </span>
                    {" "}IPO in Gain
                  </p>
                  <div className="ipo-circles-container">
                    <div className="ipo-circle total">
                      <h1>30</h1>
                      <p>Total IPO</p>
                    </div>
                    <div className="ipo-circle gain">
                      <h1>20</h1>
                      <p>IPO in Gain</p>
                    </div>
                    <div className="ipo-circle loss">
                      <h1>9</h1>
                      <p>IPO in Loss</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Quick Links Section */}
            <div className="col-12 col-md-6 col-lg-4 px-0">
              <div className="admin-dashboard-card">
                <div className="admin-card-body">
                  <div className="admin-card-title">Quick Links</div>
                  <p className="admin-card-text text-muted">
                    Adipiscing elit, sed do eiusmod tempor
                  </p>
                  <div className="quick-links">
                    {quickLinks.map((link, index) => (
                      <div key={index} className="quick-links-item">
                        <div className="quick-links-left">
                          <img src={link.image} alt={link.name} className="icon-circle" />
                          <span>{link.name}</span>
                        </div>
                        <a href="#" className="visit-link">Visit Now</a>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            {/* Main Board IPO Section */}
            <div className="col-12 col-md-6 col-lg-4 px-0">
              <div className="admin-dashboard-card">
                <div className="admin-card-body">
                  <div className="card-header-flex">
                    <div className="admin-card-title">Main Board IPO</div>
                    <a href="#" className="btn repobtn">View Report</a>
                  </div>
                  <p className="admin-card-text text-muted">From 01 Jan 2024</p>
                  <div className="donut-container">
                    <Doughnut data={donutData} options={options} />
                  </div>
                  <div className="stats-footer">
                    {donutData.labels.map((label, index) => (
                      <div key={index} className="stat-item">
                        <div className="stat-item-row">
                          <i
                            className="fa-solid fa-circle"
                            style={{ color: donutData.datasets[0].backgroundColor[index] }}
                          ></i>
                          <p className="text-muted">{label}</p>
                        </div>
                        <h6>{donutData.datasets[0].data[index]}</h6>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div> {/* End of admin-content */}
    </div>
  );
};

export default AdminDashboard;
