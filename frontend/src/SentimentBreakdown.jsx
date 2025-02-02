import React from 'react';
import { Card, CardContent } from '@mui/material';
import './sentimentbreakdown.css'; // Import SentimentBreakdown CSS

const sentiments = [
  { label: "Very Positive", percentage: 35, color: "green-bg" },
  { label: "Positive", percentage: 33, color: "light-green-bg" },
  { label: "Neutral", percentage: 24, color: "blue-bg" },
  { label: "Negative", percentage: 5, color: "light-red-bg" },
  { label: "Very Negative", percentage: 3, color: "red-bg" },
];

export default function SentimentBreakdown() {
  return (
    <Card className="sentiment-card">
      <CardContent>
        <h2 className="sentiment-title">Sentiment Breakdown</h2>
        <div className="sentiment-list">
          {sentiments.map((sentiment, index) => (
            <div key={index} className="sentiment-item">
              <span className="sentiment-label">{sentiment.label}</span>
              <div className="sentiment-bar-bg">
                <div
                  className={`sentiment-bar ${sentiment.color}`}
                  style={{ width: `${sentiment.percentage}%` }}
                ></div>
              </div>
              <span className="sentiment-percentage">{sentiment.percentage}%</span>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  );
}