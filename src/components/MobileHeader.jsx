// src/components/MobileHeader.jsx
import React from 'react';
import BackButton from './BackButton';
import PageTitle from './PageTitle';
import { Wifi, Battery, Signal } from 'lucide-react';

const MobileHeader = ({ title, onBack, rightAction }) => {
  return (
    <>
      {/* Top Simulated Mobile Status Bar */}
      <div className="status-bar-sim">
        <span>9:41</span>
        <div className="icons">
          <Signal size={12} />
          <Wifi size={12} />
          <Battery size={13} />
        </div>
      </div>

      {/* Main Header Row */}
      <header className="dashboard-header">
        <BackButton onClick={onBack} />
        <PageTitle title={title} />
        <div className="header-right">
          {rightAction || <div style={{ width: 32 }} />}
        </div>
      </header>
    </>
  );
};

export default MobileHeader;
