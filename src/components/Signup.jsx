import React, { useState } from "react";
import { useNavigate } from "react-router-dom"; // Import useNavigate
import "bootstrap/dist/css/bootstrap.min.css";
import "./Signup.css"
function Signup() {
  const [profilePic, setProfilePic] = useState(null);
  const navigate = useNavigate(); // Initialize navigation

  // Handle file upload
  const handleFileChange = (e) => {
    setProfilePic(URL.createObjectURL(e.target.files[0]));
  };

  // Handle Signup and Navigate to Dashboard
  const handleSignup = (event) => {
    event.preventDefault();
    // Perform signup logic (store user data, validate, etc.)
    
    // Redirect to Dashboard after successful signup
    navigate("/dashboard");
  };

  return (
    <div
      className="vh-100 d-flex align-items-center"
      style={{ background: "black", color: "white" }}
    >
      <div className="container">
        <div className="row align-items-center">
          {/* Left Side - Welcome Message */}
          <div className="col-md-6 text-center">
            <h1 className="display-3 fw-bold">Create Your Account</h1>
          </div>

          {/* Right Side - Signup Form */}
          <div className="col-md-6 d-flex justify-content-center">
            <div
              className="card p-4"
              style={{
                width: "80%",
                background: "rgba(255, 255, 255, 0.1)",
                color: "white",
                border: "1px solid rgba(255, 255, 255, 0.3)",
                backdropFilter: "blur(10px)",
              }}
            >
              <h3 className="mb-3 text-center">Sign Up</h3>

              <form onSubmit={handleSignup}>
                {/* Full Name */}
                <div className="mb-3">
                  <label className="form-label">Full Name</label>
                  <input type="text" className="form-control" placeholder="Enter Full Name" required />
                </div>

                {/* Email Address */}
                <div className="mb-3">
                  <label className="form-label">Email Address</label>
                  <input type="email" className="form-control" placeholder="Enter your email" required />
                </div>

                {/* Password */}
                <div className="mb-3">
                  <label className="form-label">Password</label>
                  <input type="password" className="form-control" placeholder="Enter Password" required />
                </div>

                {/* Phone Number */}
                <div className="mb-3">
                  <label className="form-label">Phone Number</label>
                  <input type="tel" className="form-control" placeholder="Enter Phone Number" />
                </div>

                {/* Profile Picture Upload */}
                <div className="mb-3">
                  <label className="form-label">Upload Profile Picture</label>
                  <input type="file" className="form-control" onChange={handleFileChange} />
                  {profilePic && (
                    <img
                      src={profilePic}
                      alt="Preview"
                      className="mt-2 rounded-circle"
                      width="80"
                    />
                  )}
                </div>

                {/* Terms & Conditions */}
                <div className="mb-3 form-check">
                  <input type="checkbox" className="form-check-input" id="termsCheck" required />
                  <label className="form-check-label" htmlFor="termsCheck">
                    I agree to the <a href="#">Terms & Conditions</a>
                  </label>
                </div>

                {/* Signup Button */}
                <button type="submit" className="btn btn-danger w-100">Sign Up</button>
              </form>

              {/* Already have an account? */}
              <p className="mt-3 text-center">
                Already have an account? <a href="/login" className="text-light">Log in</a>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Signup;
