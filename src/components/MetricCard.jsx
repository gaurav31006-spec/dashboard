// src/components/MetricCard.jsx
import React from 'react';

const MetricCard = ({ label, value, change, breakdown, supportingText, onClick }) => {
  return (
    <div className="overview-metric-card" onClick={onClick} style={{ cursor: onClick ? 'pointer' : 'default' }}>
      <div>
        <div className="metric-card-label">{label}</div>
        <div className="metric-card-value">{value}</div>
      </div>
      
      <div className="metric-card-supporting">
        {breakdown && breakdown.length > 0 ? (
          breakdown.map((item, idx) => (
            <div key={idx} className="metric-breakdown-row">
              <span>
                <span className="metric-breakdown-dot" style={{ backgroundColor: item.color }} />
                {item.percentage}% {item.label.toLowerCase()}
              </span>
            </div>
          ))
        ) : supportingText ? (
          <span>{supportingText}</span>
        ) : change ? (
          <span style={{ color: change.startsWith('+') ? 'var(--green-positive)' : 'var(--red-negative)', fontWeight: 600 }}>
            {change}
          </span>
        ) : null}
      </div>
    </div>
  );
};

export default MetricCard;
