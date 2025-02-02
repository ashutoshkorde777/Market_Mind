import * as React from 'react';
import './report.css'; // Import Report CSS
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import MenuItem from '@mui/material/MenuItem';
import { ResponsiveChartContainer } from '@mui/x-charts/ResponsiveChartContainer';
import { BarPlot } from '@mui/x-charts/BarChart';
import { LinePlot } from '@mui/x-charts/LineChart';
import { ChartsXAxis } from '@mui/x-charts/ChartsXAxis';
import KeyInsights from './KeyInsights'; // Import KeyInsights component
import SentimentBreakdown from './SentimentBreakdown'; // Import SentimentBreakdown component

export default function Report() {
  const [type, setType] = React.useState('line');

  return (
    <div className="report-container">
      <h1 className="report-title">Reports & Insights Section</h1>
      <p className="report-description">
        Here you can download and analyze market sentiment reports.
      </p>
      <div className="chart-section">
        <h2 className="chart-title">Sentiment Trend Over the Past 7 Days</h2>
        <Box sx={{ width: '100%' }}>
          <TextField
            select
            value={type}
            onChange={(event) => setType(event.target.value)}
            label="Series Type"
            sx={{ minWidth: 150 }}
          >
            <MenuItem value="line">Line</MenuItem>
            <MenuItem value="bar">Bar</MenuItem>
          </TextField>
          <div>
            <ResponsiveChartContainer
              series={[
                {
                  type,
                  data: [1, 2, 3, 2, 1],
                },
                {
                  type,
                  data: [4, 3, 1, 3, 4],
                },
              ]}
              xAxis={[
                {
                  data: ['A', 'B', 'C', 'D', 'E'],
                  scaleType: 'band',
                  id: 'x-axis-id',
                },
              ]}
              height={200}
            >
              <BarPlot />
              <LinePlot />
              <ChartsXAxis label="X axis" position="bottom" axisId="x-axis-id" />
            </ResponsiveChartContainer>
          </div>
        </Box>
      </div>
      <div className="insights-section">
        <h2 className="insights-title">Key Insights</h2>
        <KeyInsights />
      </div>
      <div className="sentiment-section">
        <h2 className="sentiment-title">Sentiment Breakdown</h2>
        <SentimentBreakdown />
      </div>
    </div>
  );
}