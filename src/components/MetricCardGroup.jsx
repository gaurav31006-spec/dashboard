// src/components/MetricCardGroup.jsx
import React from 'react';
import MetricCard from './MetricCard';

const MetricCardGroup = ({ metrics = [], onCardClick }) => {
  return (
    <div className="overview-cards-container">
      {metrics.map((metric) => (
        <MetricCard
          key={metric.id}
          label={metric.label}
          value={metric.value}
          change={metric.change}
          breakdown={metric.breakdown}
          supportingText={metric.supportingText}
          onClick={() => onCardClick && onCardClick(metric)}
        />
      ))}
    </div>
  );
};

export default MetricCardGroup;
