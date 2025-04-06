import React, { useEffect, useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./Mark-in.css";

const dummyData = [
    {
      company: "Asian Paints Ltd",
      ltp: "2356.05",
      marketCap: "225895.88",
      peRatio: "53.11",
      eps: "44.34",
      change: "+1.24%",
      high52: "3567.00",
      low52: "2180.10",
      volume: "12.5M",
      sector: "Paints & Coatings",
      pbRatio: "14.20",
      dividendYield: "0.90%",
    },
    {
      company: "Cipla Ltd",
      ltp: "1415.25",
      marketCap: "114322.24",
      peRatio: "24.56",
      eps: "57.63",
      change: "-0.35%",
      high52: "1525.50",
      low52: "1035.80",
      volume: "8.9M",
      sector: "Pharmaceuticals",
      pbRatio: "4.10",
      dividendYield: "1.20%",
    },
    {
      company: "Eicher Motors Ltd",
      ltp: "5247.9",
      marketCap: "143733.26",
      peRatio: "34.74",
      eps: "150.91",
      change: "+0.78%",
      high52: "5742.00",
      low52: "3125.60",
      volume: "3.2M",
      sector: "Automobile",
      pbRatio: "6.15",
      dividendYield: "1.05%",
    },
    {
      company: "Infosys Ltd",
      ltp: "1456.70",
      marketCap: "612345.67",
      peRatio: "29.45",
      eps: "49.45",
      change: "+0.59%",
      high52: "1680.00",
      low52: "1230.25",
      volume: "15.3M",
      sector: "IT Services",
      pbRatio: "8.45",
      dividendYield: "2.00%",
    },
    {
      company: "HDFC Bank Ltd",
      ltp: "1625.10",
      marketCap: "895432.10",
      peRatio: "21.70",
      eps: "75.32",
      change: "-0.12%",
      high52: "1720.00",
      low52: "1410.80",
      volume: "10.2M",
      sector: "Banking",
      pbRatio: "3.20",
      dividendYield: "1.60%",
    },
    {
      company: "Reliance Industries",
      ltp: "2580.15",
      marketCap: "1750000.00",
      peRatio: "29.10",
      eps: "88.60",
      change: "+1.02%",
      high52: "2800.00",
      low52: "2100.00",
      volume: "18.7M",
      sector: "Oil & Gas",
      pbRatio: "2.90",
      dividendYield: "0.80%",
    },
    {
      company: "Tata Consultancy Services",
      ltp: "3689.10",
      marketCap: "1350000.00",
      peRatio: "31.20",
      eps: "118.20",
      change: "+0.91%",
      high52: "3920.00",
      low52: "3100.10",
      volume: "9.4M",
      sector: "IT Services",
      pbRatio: "10.25",
      dividendYield: "1.90%",
    },
    {
      company: "Hindustan Unilever Ltd",
      ltp: "2456.75",
      marketCap: "580000.00",
      peRatio: "60.10",
      eps: "40.90",
      change: "-0.44%",
      high52: "2700.00",
      low52: "2200.00",
      volume: "7.1M",
      sector: "FMCG",
      pbRatio: "12.40",
      dividendYield: "1.70%",
    },
    {
      company: "Larsen & Toubro Ltd",
      ltp: "3456.50",
      marketCap: "488000.00",
      peRatio: "25.80",
      eps: "134.00",
      change: "+0.66%",
      high52: "3600.00",
      low52: "2900.00",
      volume: "6.9M",
      sector: "Infrastructure",
      pbRatio: "4.50",
      dividendYield: "1.30%",
    },
    {
      company: "ICICI Bank Ltd",
      ltp: "972.85",
      marketCap: "690000.00",
      peRatio: "20.45",
      eps: "47.55",
      change: "-0.10%",
      high52: "1050.00",
      low52: "820.00",
      volume: "13.6M",
      sector: "Banking",
      pbRatio: "2.85",
      dividendYield: "1.50%",
    },
  ];
  
const MarketInsights = () => {
  const [stocks, setStocks] = useState([]);

  useEffect(() => {
    setTimeout(() => {
      setStocks(dummyData);
    }, 1000);
  }, []);

  return (
    <div className="container mt-5">
      <h2 className="mb-4 fw-bold text-white">Nifty 50 Market Insights</h2>
      <div className="table-responsive">
        <table className="table table-dark table-hover align-middle text-center shadow rounded">
          <thead className="bg-danger text-white">
            <tr>
              <th>Company</th>
              <th>LTP</th>
              <th>Market Cap (Cr.)</th>
              <th>PE Ratio</th>
              <th>EPS</th>
              <th>Change (%)</th>
              <th>52W High</th>
              <th>52W Low</th>
              <th>Volume</th>
              <th>Sector</th>
              <th>P/B Ratio</th>
              <th>Dividend Yield</th>
            </tr>
          </thead>
          <tbody>
            {stocks.map((stock, index) => (
              <tr key={index}>
                <td className="text-start">{stock.company}</td>
                <td>₹{stock.ltp}</td>
                <td>{stock.marketCap}</td>
                <td>{stock.peRatio}</td>
                <td>{stock.eps}</td>
                <td>{stock.change}</td>
                <td>{stock.high52}</td>
                <td>{stock.low52}</td>
                <td>{stock.volume}</td>
                <td>{stock.sector}</td>
                <td>{stock.pbRatio}</td>
                <td>{stock.dividendYield}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default MarketInsights;
