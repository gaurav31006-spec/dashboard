// src/components/TabNavigation.jsx
import React from 'react';
import { motion } from 'framer-motion';

const tabs = [
  { id: 'overview', label: 'Overview' },
  { id: 'content', label: 'Content' },
  { id: 'audience', label: 'Audience' },
];

const TabNavigation = ({ activeTab, onTabChange }) => {
  return (
    <nav className="tab-nav-container">
      {tabs.map((tab) => {
        const isActive = activeTab === tab.id;
        return (
          <button
            key={tab.id}
            onClick={() => onTabChange(tab.id)}
            className={`tab-nav-btn ${isActive ? 'active' : ''}`}
          >
            {tab.label}
            {isActive && (
              <motion.div
                layoutId="activeTabIndicator"
                className="tab-active-indicator"
                transition={{ type: 'spring', stiffness: 500, damping: 35 }}
              />
            )}
          </button>
        );
      })}
    </nav>
  );
};

export default TabNavigation;
