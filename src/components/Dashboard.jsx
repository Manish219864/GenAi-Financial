import React from "react";
import { Link } from "react-router-dom"; // ✅ Import Link

const Dashboard  = ({ title, subtitle, onNext }) => {
  return (
    <div className="container-fluid bg-dark text-white min-vh-100 d-flex flex-column align-items-center justify-content-center">
      {/* Blurred Circle Background Effect */}
      <div
        className="position-absolute w-50 h-50 bg-danger rounded-circle opacity-50"
        style={{ top: "30%", left: "25%", filter: "blur(80px)" }}
      ></div>

      {/* Dashboard Header */}
      <div className="text-center position-relative">
        <h1 className="fw-bold">{title || "Welcome to Your Dashboard"}</h1>
        <p className="text-light">{subtitle || "Manage your investments, insights & AI chatbot"}</p>
      </div>

      {/* Dashboard Content */}
      <div className="container mt-4">
        <div className="row">
          {/* Investment Plans */}
          <div className="col-md-4">
            <div className="card bg-dark text-white shadow-lg">
              <div className="card-body text-center">
                <h5 className="card-title">Investment Plan</h5>
                <p className="card-text">Explore personalized investment plans.</p>
                <Link to="/investment-plans" className="btn btn-success">View Plans</Link>
              </div>
            </div>
          </div>

          {/* Market Insights */}
          <div className="col-md-4">
            <div className="card bg-dark text-white shadow-lg">
              <div className="card-body text-center">
                <h5 className="card-title">Stock Market Insights</h5>
                <p className="card-text">Get the latest stock market trends.</p>
                <Link to="/market-insights" className="btn btn-info">Learn More</Link>
              </div>
            </div>
          </div>

          {/* AI Chatbot */}
          <div className="col-md-4">
            <div className="card bg-dark text-white shadow-lg">
              <div className="card-body text-center">
                <h5 className="card-title">Financial Assistant</h5>
                <p className="card-text">Ask AI about financial decisions.</p>
                <Link to="/chatbot" className="btn btn-warning">Chat Now</Link>
              </div>
            </div>
          </div>
        </div>
      </div>

     
    </div>
  );
};

export default Dashboard;