// src/components/AudienceStatRow.jsx
import React from 'react';
import ProgressBar from './ProgressBar';

const AudienceStatRow = ({ label, percentage, formattedValue, color = '#d919a7' }) => {
  return (
    <div style={{ marginBottom: '14px' }}>
      <div style={{ fontSize: '13px', color: '#fff', marginBottom: '6px', fontWeight: '500' }}>
        {label}
      </div>
      <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
        <div style={{ flex: 1 }}>
          <ProgressBar percentage={percentage} color={color} height={6} />
        </div>
        <div style={{ fontSize: '13px', color: '#e5e5e5', minWidth: '40px', textAlign: 'right', fontWeight: '500' }}>
          {formattedValue || `${percentage}%`}
        </div>
      </div>
    </div>
  );
};

export default AudienceStatRow;
