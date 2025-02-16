// src/components/SalesChart.tsx

import React from 'react';
import { SaleData } from '../data';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';
import '../App.css'

interface SalesChartProps {
    salesData: SaleData[];
}

// Custom date formatting for the x-axis
const formatDate = (dateStr: string) => {
  const date = new Date(dateStr);
  return date.toLocaleDateString('en-US', { month: 'short', day: 'numeric' }); // e.g., "Jan 1"
};


const SalesChart: React.FC<SalesChartProps> = ({ salesData }) => {
    // Prepare data for the chart - format weekEnding for better display
    const chartData = salesData.map(item => ({
      ...item,
      weekEnding: formatDate(item.weekEnding), // Use the new function here
    }));

    return (
        <ResponsiveContainer width="100%" height={400}>
            <LineChart
                data={chartData}
                margin={{
                    top: 20, right: 30, left: 20, bottom: 5,
                }}
            >
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="weekEnding"  />
                <YAxis />
                <Tooltip />
                <Legend />
                <Line type="monotone" dataKey="retailSales" stroke="#8884d8" activeDot={{ r: 8 }} name="Retail Sales" />
                <Line type="monotone" dataKey="wholesaleSales" stroke="#82ca9d" name="Wholesale Sales"/>
            </LineChart>
        </ResponsiveContainer>
    );
};

export default SalesChart;