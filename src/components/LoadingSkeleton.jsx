// src/components/LoadingSkeleton.jsx
import React from 'react';

const LoadingSkeleton = ({ count = 3 }) => {
  return (
    <div style={{ padding: '0 16px', display: 'flex', flexDirection: 'column', gap: 12 }}>
      {Array.from({ length: count }).map((_, idx) => (
        <div
          key={idx}
          style={{
            height: 64,
            backgroundColor: 'var(--bg-card)',
            borderRadius: 10,
            animation: 'pulse 1.5s infinite ease-in-out',
            border: '1px solid var(--border-subtle)',
          }}
        />
      ))}
      <style>{`
        @keyframes pulse {
          0% { opacity: 0.5; }
          50% { opacity: 1; }
          100% { opacity: 0.5; }
        }
      `}</style>
    </div>
  );
};

export default LoadingSkeleton;
