import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { jwtDecode } from "jwt-decode";
import "bootstrap/dist/css/bootstrap.min.css";
import "./Signup.css";
import axios from "../axios";

const Signup = () => {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    password: "",
    phone: "",
    profilePic: null,
    agree: false,
  });

  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value, type, checked, files } = e.target;
    setFormData({
      ...formData,
      [name]: type === "checkbox" ? checked : type === "file" ? files[0] : value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!formData.agree) {
      alert("You must agree to the terms & conditions.");
      return;
    }

    const data = new FormData();
    Object.keys(formData).forEach((key) => {
      if (key !== "agree") {
        data.append(key, formData[key]);
      }
    });

    try {
      await axios.post("/api/signup", data);
      alert("Signup successful!");
      navigate("/login");
    } catch (error) {
      console.error(error);
      alert("Signup failed!");
    }
  };

  return (
    <div className="signup-container d-flex justify-content-center align-items-center">
      <div className="signup-box shadow-lg rounded-4 overflow-hidden d-flex flex-md-row flex-column">
        
        {/* Left Panel */}
        <div className="signup-left d-flex flex-column justify-content-center text-white p-4">
          <h1 className="display-5 fw-bold text-center">Create Your Account</h1>
        </div>

        {/* Right Panel */}
        <div className="signup-right bg-dark text-white p-4">
          <h3 className="text-center mb-3">Sign Up</h3>

          <button className="btn btn-light w-100 mb-3">
            <img src="https://img.icons8.com/color/16/google-logo.png" alt="Google" className="me-2" />
            Sign up with Google
          </button>

          <hr className="text-secondary" />

          <form onSubmit={handleSubmit}>
            <div className="mb-2">
              <label className="form-label">Full Name</label>
              <input type="text" className="form-control" name="fullName" onChange={handleChange} required />
            </div>

            <div className="mb-2">
              <label className="form-label">Email Address</label>
              <input type="email" className="form-control" name="email" onChange={handleChange} required />
            </div>

            <div className="mb-2">
              <label className="form-label">Password</label>
              <input type="password" className="form-control" name="password" onChange={handleChange} required />
            </div>

            <div className="mb-2">
              <label className="form-label">Phone Number</label>
              <input type="tel" className="form-control" name="phone" onChange={handleChange} required />
            </div>

            <div className="mb-2">
              <label className="form-label">Upload Profile Picture</label>
              <input type="file" className="form-control" name="profilePic" accept="image/*" onChange={handleChange} />
            </div>

            <div className="form-check mb-3">
              <input className="form-check-input" type="checkbox" name="agree" onChange={handleChange} />
              <label className="form-check-label">
                I agree to the <a href="#" className="text-info">Terms & Conditions</a>
              </label>
            </div>

            <button type="submit" className="btn btn-danger w-100">Sign Up</button>
          </form>

          <p className="text-center mt-3">
            Already have an account? <a href="/login" className="text-info">Log in</a>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Signup;
