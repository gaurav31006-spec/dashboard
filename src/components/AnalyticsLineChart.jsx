import React from 'react';
import {
  ResponsiveContainer,
  LineChart,
  Line,
  XAxis,
  YAxis,
  Tooltip,
  CartesianGrid,
} from 'recharts';

const CustomTooltip = ({ active, payload, label }) => {
  if (active && payload && payload.length) {
    return (
      <div style={{ background: '#121212', border: '1px solid #333', padding: '8px 12px', borderRadius: '8px' }}>
        <div style={{ color: '#a3a3a3', fontSize: '11px', marginBottom: '4px' }}>{label}</div>
        <div style={{ color: '#fff', fontSize: '13px', fontWeight: 'bold' }}>
          {payload[0].value.toLocaleString()}
        </div>
      </div>
    );
  }
  return null;
};

const AnalyticsLineChart = ({
  data = [],
  title,
  dataKey = "count",
  height = 180,
}) => {
  return (
    <div style={{ marginBottom: '24px' }}>
      {title && <div style={{ fontSize: '15px', fontWeight: '600', marginBottom: '16px' }}>{title}</div>}

      <div style={{ width: '100%', height }}>
        <ResponsiveContainer width="100%" height="100%">
          <LineChart
            data={data}
            margin={{ top: 10, right: 10, left: -20, bottom: 0 }}
          >
            <CartesianGrid vertical={false} stroke="#262626" />

            <XAxis
              dataKey="date"
              axisLine={false}
              tickLine={false}
              tick={{ fill: '#737373', fontSize: 11 }}
              dy={10}
            />

            <YAxis
              axisLine={false}
              tickLine={false}
              tick={{ fill: '#737373', fontSize: 11 }}
            />

            <Tooltip content={<CustomTooltip />} cursor={{ stroke: '#333', strokeWidth: 1 }} />

            <Line
              type="linear"
              dataKey={dataKey}
              stroke="#d919a7"
              strokeWidth={3}
              dot={false}
              activeDot={{ r: 4, fill: '#d919a7', stroke: '#fff', strokeWidth: 2 }}
            />
          </LineChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
};

export default AnalyticsLineChart;
