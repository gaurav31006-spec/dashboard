// src/components/DateRangeSelector.jsx
import React, { useState } from 'react';
import { ChevronDown } from 'lucide-react';
import { dateRangeOptions } from '../data/analyticsData';

const DateRangeSelector = ({ selectedValue = "30", onChange }) => {
  const [isOpen, setIsOpen] = useState(false);

  const selectedOption = dateRangeOptions.find(opt => opt.value === selectedValue) || dateRangeOptions[1];

  const handleSelect = (val) => {
    if (onChange) onChange(val);
    setIsOpen(false);
  };

  return (
    <div style={{ position: 'relative' }}>
      <button 
        className="dropdown-pill-btn" 
        onClick={() => setIsOpen(!isOpen)}
      >
        <span>{selectedOption.label}</span>
        <ChevronDown size={14} style={{ transition: 'transform 0.2s', transform: isOpen ? 'rotate(180deg)' : 'none' }} />
      </button>

      {isOpen && (
        <div style={{
          position: 'absolute',
          top: '110%',
          left: 0,
          backgroundColor: 'var(--bg-card)',
          border: '1px solid var(--border-active)',
          borderRadius: 10,
          padding: '4px 0',
          minWidth: 140,
          zIndex: 100,
          boxShadow: '0 10px 25px rgba(0,0,0,0.5)',
        }}>
          {dateRangeOptions.map((opt) => (
            <div
              key={opt.value}
              onClick={() => handleSelect(opt.value)}
              style={{
                padding: '8px 14px',
                fontSize: 12,
                color: opt.value === selectedValue ? 'var(--accent-pink)' : 'var(--text-primary)',
                fontWeight: opt.value === selectedValue ? 600 : 400,
                cursor: 'pointer',
                backgroundColor: opt.value === selectedValue ? 'rgba(225,48,108,0.1)' : 'transparent',
              }}
            >
              {opt.label}
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default DateRangeSelector;
