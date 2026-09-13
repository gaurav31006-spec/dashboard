// src/components/BottomNavigation.jsx
import React from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { Home, Search, PlusSquare, PlaySquare, User } from 'lucide-react';

const BottomNavigation = () => {
  const navigate = useNavigate();
  const location = useLocation();

  const isInsightsActive = location.pathname.startsWith('/insights');
  const isDashboardActive = location.pathname === '/' || location.pathname === '/dashboard';
  const isReelsActive = location.pathname === '/data-entry';

  return (
    <div style={{
      position: 'absolute',
      bottom: 0,
      left: 0,
      right: 0,
      height: 54,
      backgroundColor: 'var(--bg-main)',
      borderTop: '1px solid var(--border-subtle)',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-around',
      zIndex: 90,
      paddingBottom: 4,
    }}>
      <button 
        onClick={() => navigate('/')} 
        style={{ color: isDashboardActive ? '#FFF' : 'var(--text-muted)' }}
        aria-label="Home Dashboard"
      >
        <Home size={22} />
      </button>

      <button 
        onClick={() => navigate('/insights')} 
        style={{ color: isInsightsActive ? 'var(--accent-pink)' : 'var(--text-muted)' }}
        aria-label="Insights"
      >
        <Search size={22} />
      </button>

      <button 
        onClick={() => navigate('/data-entry')}
        style={{ color: isReelsActive ? 'var(--accent-pink)' : 'var(--text-muted)' }} 
        aria-label="Create Post"
      >
        <PlusSquare size={22} />
      </button>

      <button 
        onClick={() => navigate('/data-entry')}
        style={{ color: isReelsActive ? 'var(--accent-pink)' : 'var(--text-muted)' }} 
        aria-label="Reels Analytics"
      >
        <PlaySquare size={22} />
      </button>

      <button 
        onClick={() => navigate('/dashboard')} 
        style={{ color: isDashboardActive ? '#FFF' : 'var(--text-muted)' }}
        aria-label="Profile Dashboard"
      >
        <User size={22} />
      </button>
    </div>
  );
};

export default BottomNavigation;
