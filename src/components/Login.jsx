import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";

function Login() {
  return (
    <div
      className="vh-100 d-flex align-items-center"
      style={{
        background: "black", // Using your provided background
        color: "white",
      }}
    >
      <div className="container">
        <div className="row align-items-center">
          {/* Left Section - Welcome Text */}
          <div className="col-md-6 text-center">
            <h1 className="display-3 fw-bold">Welcome to GenAi-Finance</h1>
          </div>

          {/* Right Section - Signup Box */}
          <div className="col-md-6 d-flex justify-content-center">
            <div
              className="card p-4"
              style={{
                width: "80%",
                background: "rgba(255, 255, 255, 0.1)", // Slight transparency
                color: "white",
                border: "1px solid rgba(255, 255, 255, 0.3)",
                backdropFilter: "blur(10px)", // Glassmorphism effect
              }}
            >
              <h3 className="mb-3 text-center">Sign Up</h3>
              <button className="btn btn-danger w-100 mb-2">📩 Continue with Email</button>
              <button className="btn btn-danger w-100 mb-2">📞 Continue with Phone</button>
              <button className="btn btn-danger w-100">🔵 Sign Up with Google</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Login;
