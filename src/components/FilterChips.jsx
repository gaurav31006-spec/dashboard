// src/components/FilterChips.jsx
import React from 'react';

const FilterChips = ({ options = [], activeFilter, onFilterChange }) => {
  return (
    <div className="filter-chips-scroll">
      {options.map((opt) => {
        const isActive = activeFilter === opt;
        return (
          <button
            key={opt}
            onClick={() => onFilterChange && onFilterChange(opt)}
            className={`filter-chip ${isActive ? 'active' : ''}`}
          >
            {opt}
          </button>
        );
      })}
    </div>
  );
};

export default FilterChips;
