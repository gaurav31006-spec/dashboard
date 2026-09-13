// src/pages/Insights.jsx
import React, { useState, useEffect } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import Overview from './Overview';
import ContentInsights from './ContentInsights';
import AudienceInsights from './AudienceInsights';

const tabs = [
  { id: 'overview', label: 'Overview' },
  { id: 'content', label: 'Content' },
  { id: 'audience', label: 'Audience' },
];

const Insights = () => {
  const navigate = useNavigate();
  const location = useLocation();

  const getTabFromPath = () => {
    if (location.pathname.includes('/content')) return 'content';
    if (location.pathname.includes('/audience')) return 'audience';
    return 'overview';
  };

  const [activeTab, setActiveTab] = useState(getTabFromPath());

  useEffect(() => {
    setActiveTab(getTabFromPath());
  }, [location.pathname]);

  const handleTabChange = (tabId) => {
    setActiveTab(tabId);
    navigate(`/insights/${tabId}`);
  };

  return (
    <div style={{ backgroundColor: '#000', minHeight: '100vh', display: 'flex', flexDirection: 'column' }}>
      {/* Tab Navigation — matches Instagram exactly */}
      <div style={{
        display: 'flex',
        borderBottom: '1px solid #262626',
        position: 'sticky',
        top: '60px', // below TopNavigation
        backgroundColor: '#000',
        zIndex: 40,
      }}>
        {tabs.map(tab => (
          <button
            key={tab.id}
            onClick={() => handleTabChange(tab.id)}
            style={{
              flex: 1,
              padding: '14px 0',
              fontSize: '14px',
              fontWeight: activeTab === tab.id ? '600' : '400',
              color: activeTab === tab.id ? '#fff' : '#737373',
              background: 'none',
              border: 'none',
              cursor: 'pointer',
              position: 'relative',
              transition: 'color 0.2s',
            }}
          >
            {tab.label}
            {activeTab === tab.id && (
              <motion.div
                layoutId="tab-indicator"
                style={{
                  position: 'absolute',
                  bottom: 0,
                  left: 0,
                  right: 0,
                  height: '2px',
                  backgroundColor: '#fff',
                  borderRadius: '2px 2px 0 0',
                }}
                transition={{ type: 'spring', stiffness: 400, damping: 30 }}
              />
            )}
          </button>
        ))}
      </div>

      {/* Tab Content */}
      <div style={{ flex: 1, overflowY: 'auto' }}>
        <AnimatePresence mode="wait">
          <motion.div
            key={activeTab}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.15 }}
          >
            {activeTab === 'overview' && <Overview />}
            {activeTab === 'content' && <ContentInsights />}
            {activeTab === 'audience' && <AudienceInsights />}
          </motion.div>
        </AnimatePresence>
      </div>
    </div>
  );
};

export default Insights;
