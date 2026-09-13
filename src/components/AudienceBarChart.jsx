// src/components/AudienceBarChart.jsx
import React, { useState } from 'react';
import {
  ResponsiveContainer,
  BarChart,
  Bar,
  XAxis,
  Tooltip,
} from 'recharts';

const daysOfWeek = ['Su', 'M', 'Tu', 'W', 'Th', 'F', 'Sa'];

// Mock data representing hours
const createTimeData = () => {
  return [
    { time: '12a', value: 30 },
    { time: '3a', value: 20 },
    { time: '6a', value: 45 },
    { time: '9a', value: 50 },
    { time: '12p', value: 65 },
    { time: '3p', value: 80 },
    { time: '6p', value: 60 },
    { time: '9p', value: 65 },
  ];
};

const AudienceBarChart = () => {
  const [activeDay, setActiveDay] = useState('Su');
  const [data] = useState(createTimeData()); // Reusing same generic mock data for demonstration

  return (
    <div style={{ marginBottom: '24px' }}>
      <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '4px' }}>
        <h3 style={{ fontSize: '15px', fontWeight: '600' }}>Follower active times</h3>
        <div style={{ width: 14, height: 14, borderRadius: '50%', border: '1px solid #737373', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#737373', fontSize: 10, cursor: 'pointer' }}>i</div>
      </div>
      <p style={{ fontSize: '12px', color: '#737373', marginBottom: '16px' }}>Based on your current time zone (GMT+5:30)</p>

      {/* Day Selector Bubbles */}
      <div style={{ display: 'flex', gap: '8px', marginBottom: '24px' }}>
        {daysOfWeek.map(day => (
          <button
            key={day}
            onClick={() => setActiveDay(day)}
            style={{
              width: '36px', height: '36px',
              borderRadius: '50%',
              backgroundColor: activeDay === day ? '#262626' : 'transparent',
              border: activeDay === day ? 'none' : '1px solid #262626',
              color: activeDay === day ? '#fff' : '#a3a3a3',
              fontSize: '13px',
              fontWeight: '500',
              display: 'flex', alignItems: 'center', justifyContent: 'center'
            }}
          >
            {day}
          </button>
        ))}
      </div>

      <div style={{ width: '100%', height: 140 }}>
        <ResponsiveContainer width="100%" height="100%">
          <BarChart
            data={data}
            margin={{ top: 0, right: 0, left: 0, bottom: 0 }}
            barSize={32}
            barGap={4}
          >
            <XAxis
              dataKey="time"
              axisLine={false}
              tickLine={false}
              tick={{ fill: '#737373', fontSize: 11 }}
              dy={10}
            />
            <Tooltip
              cursor={{ fill: 'rgba(255, 255, 255, 0.05)' }}
              contentStyle={{ backgroundColor: '#121212', border: '1px solid #333', borderRadius: '8px' }}
              itemStyle={{ color: '#fff' }}
            />
            <Bar
              dataKey="value"
              fill="#d919a7"
              radius={[6, 6, 6, 6]}
            />
          </BarChart>
        </ResponsiveContainer>
      </div>

      {/* Best active times text */}
      <div style={{ display: 'flex', flexDirection: 'column', gap: '16px', marginTop: '24px' }}>
        <h4 style={{ fontSize: '13px', fontWeight: '600' }}>When followers are most active</h4>
        <div>
          <div style={{ fontSize: '13px', fontWeight: '600' }}>Wednesdays</div>
          <div style={{ fontSize: '13px', color: '#a3a3a3' }}>9 PM - 11 PM</div>
        </div>
        <div>
          <div style={{ fontSize: '13px', fontWeight: '600' }}>Fridays</div>
          <div style={{ fontSize: '13px', color: '#a3a3a3' }}>12 PM - 3 PM</div>
        </div>
        <div>
          <div style={{ fontSize: '13px', fontWeight: '600' }}>Fridays</div>
          <div style={{ fontSize: '13px', color: '#a3a3a3' }}>9 PM - 11 PM</div>
        </div>
      </div>
    </div>
  );
};

export default AudienceBarChart;
