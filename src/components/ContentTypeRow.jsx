// src/components/ContentTypeRow.jsx
import React from 'react';
import ProgressBar from './ProgressBar';

const ContentTypeRow = ({ name, value, percentage, color }) => {
  return (
    <div className="content-type-row">
      <div className="content-type-header">
        <span>{name}</span>
        <span className="content-type-value">{value}</span>
      </div>
      <ProgressBar percentage={percentage} color={color} height={8} />
    </div>
  );
};

export default ContentTypeRow;
