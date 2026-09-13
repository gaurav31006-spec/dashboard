// src/components/SectionHeader.jsx
import React from 'react';

const SectionHeader = ({ title, rightValue, actionText, onAction }) => {
  return (
    <div style={{
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
      padding: '16px 16px 10px 16px',
    }}>
      <h3 style={{ fontSize: '14px', fontWeight: 600, color: 'var(--text-primary)' }}>
        {title}
      </h3>
      {rightValue && (
        <span style={{ fontSize: '14px', fontWeight: 600, color: 'var(--text-primary)' }}>
          {rightValue}
        </span>
      )}
      {actionText && (
        <button
          onClick={onAction}
          style={{ fontSize: '12px', fontWeight: 500, color: 'var(--accent-pink)' }}
        >
          {actionText}
        </button>
      )}
    </div>
  );
};

export default SectionHeader;
