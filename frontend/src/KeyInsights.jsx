import React from 'react';
import { Card, CardContent } from '@mui/material';
import { Dot } from 'lucide-react';
import './keyinsights.css'; // Import KeyInsights CSS

const insights = [
  {
    title: "Peak Sentiment",
    description: "Highest sentiment recorded on Wednesday with 8.9/10 score",
    color: "green-dot",
  },
  {
    title: "Sentiment Drop",
    description: "Lowest point reached on Friday with 6.2/10 score",
    color: "red-dot",
  },
  {
    title: "Average Sentiment",
    description: "Weekly average maintained at 7.8/10",
    color: "blue-dot",
  },
  {
    title: "Trend Direction",
    description: "Overall upward trend with 2.4% improvement",
    color: "yellow-dot",
  },
];

export default function KeyInsights() {
  return (
    <div className="insights-flex">
      {insights.map((insight, index) => (
        <Card key={index} className="insight-card">
          <CardContent>
            <div className="insight-header">
              <Dot className={`dot ${insight.color}`} />
              <h3 className="insight-title">{insight.title}</h3>
            </div>
            <p className="insight-description">{insight.description}</p>
          </CardContent>
        </Card>
      ))}
    </div>
  );
}