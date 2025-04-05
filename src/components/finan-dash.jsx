import React from "react";
import { LineChart, Line, XAxis, YAxis, Tooltip, ResponsiveContainer } from "recharts";
import { useNavigate } from "react-router-dom"; // Import useNavigate for navigation
import "bootstrap/dist/css/bootstrap.min.css";
import "./dashboard.css";

const data = [
  { month: "Jan", value: 10 },
  { month: "Feb", value: 15 },
  { month: "Mar", value: 20 },
  { month: "Apr", value: 25 },
  { month: "May", value: 30 },
  { month: "Jun", value: 40 },
];

const FinanDashboard = () => {
  const navigate = useNavigate(); // Initialize navigation

  return (
    <div className="dashboard-container">
      <div className="content">
        <h1 className="text-white">Financial Assistant</h1>
        <p className="text-white">Manage your finances with AI-driven insights.</p>
        
        {/* Buttons for navigation */}
        <button className="btn btn-light me-2" onClick={() => navigate("/login")}>
          Get Started
        </button>
        <button className="btn btn-outline-light" onClick={() => navigate("/signup")}>
          Sign Up
        </button>
      </div>

      <div className="chart-container">
        <h5>Financial Insights</h5>
        <ResponsiveContainer width={500} height={380}>
          <LineChart data={data}>
            <XAxis dataKey="month" />
            <YAxis />
            <Tooltip />
            <Line type="monotone" dataKey="value" stroke="#8884d8" />
          </LineChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
};

export default FinanDashboard;
