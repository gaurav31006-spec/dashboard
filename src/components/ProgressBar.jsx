// src/components/ProgressBar.jsx
import React from 'react';
import { motion } from 'framer-motion';

const ProgressBar = ({ percentage = 0, color, height = 6 }) => {
  // Use exact matching magenta from screenshots by default
  const fillStyle = color ? { background: color, boxShadow: `0 0 8px ${color}40` } : { background: '#d919a7' };

  return (
    <div style={{ 
      width: '100%', 
      height, 
      backgroundColor: '#262626', 
      borderRadius: '4px',
      overflow: 'hidden'
    }}>
      <motion.div
        initial={{ width: 0 }}
        animate={{ width: `${Math.min(100, Math.max(0, percentage))}%` }}
        transition={{ duration: 0.8, ease: 'easeOut' }}
        style={{ ...fillStyle, height: '100%', borderRadius: '4px' }}
      />
    </div>
  );
};

export default ProgressBar;
