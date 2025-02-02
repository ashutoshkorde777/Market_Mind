import { useState, useEffect } from "react";
import "./dashboard.css";

const Dashboard = () => {
  const [sentiment, setSentiment] = useState("Neutral");

  useEffect(() => {
    const sentiments = ["Positive", "Neutral", "Negative"];
    const interval = setInterval(() => {
      setSentiment(sentiments[Math.floor(Math.random() * sentiments.length)]);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="dashboard-container">
      <div className="header">
        <h1>Market-Minds</h1>
      </div>

      <div className="card-grid">
        <div className="card">
          <h2>Sentiment Analysis</h2>
          <p>View detailed market sentiment trends over time.</p>
          <button className="btn explore">EXPLORE</button>
        </div>

        <div className="card">
          <h2>Predictions</h2>
          <p>AI-powered forecasts for future market movements.</p>
          <button className="btn predictions">VIEW PREDICTIONS</button>
        </div>

        <div className="card">
          <h2>Pricing Adjustments</h2>
          <p>AI-driven dynamic pricing updates based on sentiment.</p>
          <button className="btn pricing">ADJUST PRICING</button>
        </div>
      </div>

      <div className="reports-section">
        <h2>Reports & Insights</h2>
        <p>Download and analyze market sentiment reports.</p>
        <button className="btn reports">VIEW REPORTS</button>
      </div>
    </div>
  );
};

export default Dashboard;
