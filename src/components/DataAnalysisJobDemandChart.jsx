
// Importing React and other dependencies
import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { LineChart, Line, XAxis, YAxis, Tooltip, Legend } from "recharts";

// Creating a styled component for the chart container
const ChartContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 1rem;
`;

// Creating a React component for the line chart
const DataAnalysisJobDemandChart = () => {
  // Using useState hook to store the data
  const [data, setData] = useState([]);

  // Using useEffect hook to fetch the data from the web
  // Creating a constant for the data
const DATA = [
  {
    month: "Jan",
    "Data Engineer": 10,
    "Data Scientist": 12,
    "Data Consultant": 8,
    "Data Analyst": 15,
    "Data Quality Analyst": 5,
  },
  {
    month: "Feb",
    "Data Engineer": 12,
    "Data Scientist": 14,
    "Data Consultant": 9,
    "Data Analyst": 16,
    "Data Quality Analyst": 6,
  },
  {
    month: "Mar",
    "Data Engineer": 14,
    "Data Scientist": 16,
    "Data Consultant": 10,
    "Data Analyst": 18,
    "Data Quality Analyst": 7,
  },
];

  return (
    <ChartContainer>
      {/* Using recharts components to render the line chart */}
      <LineChart width={800} height={500} data={DATA}>
        <XAxis dataKey="month" />
        <YAxis />
        <Tooltip />
        <Legend />
        <Line type="monotone" dataKey="Data Analyst" stroke="#8884d8" />
        <Line type="monotone" dataKey="Data Scientist" stroke="#82ca9d" />
        <Line type="monotone" dataKey="Data Consultant" stroke="#ffc658" />
        <Line type="monotone" dataKey="Data Engineer" stroke="#ff7300" />
        <Line type="monotone" dataKey="Data Quality Analyst" stroke="#83a6ed" />
      </LineChart>
    </ChartContainer>
  );
};

export default DataAnalysisJobDemandChart;

