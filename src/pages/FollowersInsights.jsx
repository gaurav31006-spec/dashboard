// src/pages/FollowersInsights.jsx
import React from 'react';
import MobileHeader from '../components/MobileHeader';
import AudienceInsights from './AudienceInsights';

const FollowersInsights = () => {
  return (
    <div className="insights-page">
      <MobileHeader title="Followers Analytics" />
      <AudienceInsights />
    </div>
  );
};

export default FollowersInsights;
