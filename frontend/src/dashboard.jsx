import React, { useState, useEffect } from "react";
import {
  Typography,
  Card,
  CardHeader,
  CardBody,
  Navbar,
  Button,
  Progress,
} from "@material-tailwind/react";
import { ChartBarIcon, CurrencyDollarIcon, DocumentTextIcon } from "@heroicons/react/24/solid";
import axios from "axios";

export function Home() {
  const [sentiment, setSentiment] = useState("Neutral");

  // Fetch Sentiment Data (Simulated API Call)
  useEffect(() => {
    const fetchSentiment = async () => {
      try {
        const response = await axios.get("http://localhost:5000/api/sentiment"); // Replace with actual API
        setSentiment(response.data.sentiment);
      } catch (error) {
        console.error("Error fetching sentiment data", error);
      }
    };

    fetchSentiment();
    const interval = setInterval(fetchSentiment, 5000); // Refresh every 5s
    return () => clearInterval(interval);
  }, []);

  // Sentiment Indicator Colors
  const sentimentColors = {
    Positive: "text-green-500",
    Neutral: "text-yellow-500",
    Negative: "text-red-500",
  };

  return (
    <div className="min-h-screen bg-gray-100">
      {/* Navigation Bar */}
      <Navbar className="p-4 bg-blue-gray-900 text-white">
        <Typography variant="h5" color="white">
         Market-Minds
        </Typography>
      </Navbar>

      {/* Main Dashboard Section */}
      <div className="container mx-auto mt-8 p-6">
        {/* Introduction */}
        <Card className="mb-6 p-6 shadow-md">
          <Typography variant="h6" color="blue-gray">
            Welcome to Market-Minds Dashboard
          </Typography>
          <Typography variant="small" className="text-gray-600 mt-2">
            This system continuously analyzes market sentiment and dynamically adjusts pricing strategies based on real-time data.
          </Typography>
        </Card>

        {/* Real-time Sentiment Meter */}
        <Card className="mb-6 p-6 shadow-md">
          <CardHeader floated={false} shadow={false} className="mb-4">
            <Typography variant="h6" color="blue-gray">
              Market Sentiment Meter
            </Typography>
          </CardHeader>
          <CardBody>
            <Typography variant="h4" className={`font-bold ${sentimentColors[sentiment]}`}>
              {sentiment} {sentiment === "Positive" ? "🟢" : sentiment === "Neutral" ? "🟡" : "🔴"}
            </Typography>
          </CardBody>
        </Card>

        {/* Key Insights Summary */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* Sentiment Analysis */}
          <Card className="p-6 shadow-md">
            <Typography variant="h6" color="blue-gray">
              Sentiment Analysis
            </Typography>
            <Typography variant="small" className="text-gray-600">
              View detailed market sentiment trends over time.
            </Typography>
            <Button size="sm" className="mt-4 bg-blue-gray-900">
              Explore
            </Button>
          </Card>

          {/* Predictions */}
          <Card className="p-6 shadow-md">
            <Typography variant="h6" color="blue-gray">
              Predictions
            </Typography>
            <Typography variant="small" className="text-gray-600">
              AI-powered forecasts for future market movements.
            </Typography>
            <Button size="sm" className="mt-4 bg-green-500">
              View Predictions
            </Button>
          </Card>

          {/* Pricing Adjustments */}
          <Card className="p-6 shadow-md">
            <Typography variant="h6" color="blue-gray">
              Pricing Adjustments
            </Typography>
            <Typography variant="small" className="text-gray-600">
              AI-driven dynamic pricing updates based on sentiment.
            </Typography>
            <Button size="sm" className="mt-4 bg-yellow-500">
              Adjust Pricing
            </Button>
          </Card>
        </div>

        {/* Reports Section */}
        <div className="mt-8">
          <Card className="p-6 shadow-md">
            <Typography variant="h6" color="blue-gray">
              Reports & Insights
            </Typography>
            <Typography variant="small" className="text-gray-600">
              Download and analyze market sentiment reports.
            </Typography>
            <Button size="sm" className="mt-4 bg-blue-500">
              View Reports
            </Button>
          </Card>
        </div>
      </div>
    </div>
  );
}

export default Home;