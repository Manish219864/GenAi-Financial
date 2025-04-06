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
import MarketInsights from "./components/Market-Ins";

function App() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  return (
    <Router>
      <Content isAuthenticated={isAuthenticated} setIsAuthenticated={setIsAuthenticated} />
    </Router>
  );
}

function Content({ isAuthenticated, setIsAuthenticated }) {
  const location = useLocation();

  // ✅ Fix: Only hide navbar for login/signup pages
  const hideNavbar = ["/login", "/signup"].includes(location.pathname);

  return (
    <>
      {!hideNavbar && <Navbar />} {/* ✅ Fix applied here */}
      <Routes>
        <Route path="/" element={<FinanDashboard />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/investment-plans" element={<InvestmentPlanner />} />
        <Route path="/market-insights" element={<MarketInsights />} />
        <Route path="/login" element={<LoginPage setIsAuthenticated={setIsAuthenticated} />} />
        <Route path="/signup" element={<SignupPage setIsAuthenticated={setIsAuthenticated} />} />
        <Route path="/chatbot" element={<Chatbot />} />
      </Routes>
      {!hideNavbar && <Footer />}
    </>
  );
}

function LoginPage({ setIsAuthenticated }) {
  return <Login onLogin={() => setIsAuthenticated(true)} />;
}

function SignupPage({ setIsAuthenticated }) {
  return <Signup onSignup={() => setIsAuthenticated(true)} />;
}

export default App;
