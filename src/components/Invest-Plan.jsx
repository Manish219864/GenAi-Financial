import React from "react";

const InvestmentPlanner = () => {
  return (
    <div className="container mt-5">
      <h2 className="text-center">Customizable Investment Plan</h2>
      <form className="mt-4">
        <div className="mb-3">
          <label className="form-label">Investment Amount</label>
          <input type="number" className="form-control" placeholder="Enter amount in INR" />
        </div>
        <div className="mb-3">
          <label className="form-label">Investment Duration</label>
          <select className="form-select">
            <option>1 Year</option>
            <option>3 Years</option>
            <option>5 Years</option>
          </select>
        </div>
        <button className="btn btn-primary w-100">Generate Plan</button>
      </form>
    </div>
  );
};

export default InvestmentPlanner;
