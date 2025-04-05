import React from "react";
import { useNavigate } from "react-router-dom";
import "./chatbot.css";

const FinanDash = () => {
  const navigate = useNavigate();

  return (
    <div className="finan-dash">
      <div className="content">
        <h1>Welcome to Your Financial Assistant</h1>
        <p>
          Empower your financial journey with AI-driven insights. Make smart 
          investment decisions, track your portfolio, and stay ahead with 
          real-time analytics. Get started now!
        </p>
        <div className="button-group">
          <button onClick={() => navigate("/login")}>Continue with WhatsApp</button>
          <button onClick={() => navigate("/dashboard")}>Continue with Website</button>
          <button onClick={() => navigate("/signup")}>Continue with Email</button>
        </div>
      </div>
    </div>
  );
};

export default FinanDash;
