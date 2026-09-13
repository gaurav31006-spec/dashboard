// src/components/AnalyticsBarChart.jsx
import React from 'react';
import {
  ResponsiveContainer,
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  Cell,
} from 'recharts';

const AnalyticsBarChart = ({ data = [], dataKey = "count", height = 160 }) => {
  return (
    <div style={{ width: '100%', height }}>
      <ResponsiveContainer width="100%" height="100%">
        <BarChart data={data} margin={{ top: 10, right: 10, left: -20, bottom: 0 }}>
          <XAxis
            dataKey="date"
            axisLine={false}
            tickLine={false}
            tick={{ fill: '#8E95A5', fontSize: 10 }}
          />
          <YAxis
            axisLine={false}
            tickLine={false}
            tick={{ fill: '#8E95A5', fontSize: 10 }}
          />
          <Tooltip
            contentStyle={{
              backgroundColor: '#17191E',
              borderColor: '#383E4B',
              borderRadius: '8px',
              fontSize: '12px',
              color: '#FFF',
            }}
          />
          <Bar dataKey={dataKey} radius={[4, 4, 0, 0]}>
            {data.map((entry, index) => (
              <Cell key={`cell-${index}`} fill={index % 2 === 0 ? '#E1306C' : '#C13584'} />
            ))}
          </Bar>
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
};

export default AnalyticsBarChart;
