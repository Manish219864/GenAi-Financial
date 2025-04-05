import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route, useLocation } from "react-router-dom";
import Navbar from "./components/Navbar";
import FinanDashboard from "./components/finan-dash"; 
import Dashboard from "./components/Dashboard";
import InvestmentPlanner from "./components/Invest-Plan";
import Login from "./components/Login";
import Signup from "./components/Signup";
import Chatbot from "./components/chatbot";
import Footer from "./components/Footer";

function App() {
  const [isAuthenticated, setIsAuthenticated] = useState(false); // Track login state

  return (
    <Router>
      <AppContent isAuthenticated={isAuthenticated} setIsAuthenticated={setIsAuthenticated} />
    </Router>
  );
}

function AppContent({ isAuthenticated, setIsAuthenticated }) {
  const location = useLocation();

  // Hide Navbar on Login and Signup pages
  const showNavbar = !["/login", "/signup"].includes(location.pathname);

  return (
    <>
      {showNavbar && <Navbar />}
      <Routes>
        <Route path="/" element={<FinanDashboard />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/investment-plans" element={<InvestmentPlanner />} />
        <Route path="/login" element={<LoginPage setIsAuthenticated={setIsAuthenticated} />} />
        <Route path="/signup" element={<SignupPage setIsAuthenticated={setIsAuthenticated} />} />
        <Route path="/chatbot" element={<Chatbot />} />
      </Routes>
      <Footer />
    </>
  );
}

// Update Login and Signup to Set Authentication
function LoginPage({ setIsAuthenticated }) {
  return <Login onLogin={() => setIsAuthenticated(true)} />;
}

function SignupPage({ setIsAuthenticated }) {
  return <Signup onSignup={() => setIsAuthenticated(true)} />;
}

export default App;