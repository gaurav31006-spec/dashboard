// src/components/TopNavigation.jsx
import React, { useState } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { LayoutDashboard, BarChart2, PlusSquare, Menu, X } from 'lucide-react';

const TopNavigation = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const isDashboard = location.pathname === '/' || location.pathname === '/dashboard';
  const isInsights = location.pathname.startsWith('/insights');
  const isEntry = location.pathname === '/data-entry';

  const navItems = [
    { label: 'Dashboard', path: '/', active: isDashboard, icon: LayoutDashboard },
    { label: 'Insights', path: '/insights', active: isInsights, icon: BarChart2, accentColor: '#d919a7' },
    { label: 'Data Entry', path: '/data-entry', active: isEntry, icon: PlusSquare },
  ];

  return (
    <nav style={{
      width: '100%',
      backgroundColor: '#000',
      borderBottom: '1px solid #262626',
      position: 'sticky',
      top: 0,
      zIndex: 100,
    }}>
      <div style={{
        maxWidth: '600px',
        margin: '0 auto',
        padding: '0 16px',
        height: '52px',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
      }}>
        {/* Logo */}
        <div
          onClick={() => navigate('/')}
          style={{ display: 'flex', alignItems: 'center', gap: '8px', cursor: 'pointer' }}
        >
          <span style={{ color: '#fff', fontSize: '16px', fontWeight: '700' }}>Insights</span>
        </div>

        {/* Desktop nav links */}
        <div style={{ display: 'flex', gap: '4px' }} className="desktop-nav">
          {navItems.map(({ label, path, active, icon: Icon, accentColor }) => (
            <button
              key={path}
              onClick={() => navigate(path)}
              style={{
                display: 'flex', alignItems: 'center', gap: '6px',
                padding: '6px 12px', borderRadius: '8px',
                backgroundColor: active ? '#1a1a1a' : 'transparent',
                color: active ? (accentColor || '#fff') : '#737373',
                fontSize: '13px', fontWeight: '500',
                border: 'none', cursor: 'pointer',
                transition: 'all 0.2s',
              }}
            >
              <Icon size={16} />
              <span>{label}</span>
            </button>
          ))}
        </div>

        {/* Mobile hamburger */}
        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          style={{ background: 'none', border: 'none', color: '#fff', cursor: 'pointer', display: 'none' }}
          className="mobile-menu-btn"
        >
          {mobileMenuOpen ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>

      {/* Mobile dropdown */}
      {mobileMenuOpen && (
        <div style={{
          backgroundColor: '#0a0a0a',
          borderTop: '1px solid #1a1a1a',
          padding: '8px 0',
        }}>
          {navItems.map(({ label, path, active, icon: Icon, accentColor }) => (
            <button
              key={path}
              onClick={() => { navigate(path); setMobileMenuOpen(false); }}
              style={{
                width: '100%', display: 'flex', alignItems: 'center', gap: '12px',
                padding: '12px 16px',
                backgroundColor: 'transparent',
                color: active ? (accentColor || '#fff') : '#a3a3a3',
                fontSize: '14px', fontWeight: active ? '600' : '400',
                border: 'none', cursor: 'pointer', textAlign: 'left',
              }}
            >
              <Icon size={18} />
              {label}
            </button>
          ))}
        </div>
      )}

      <style>{`
        @media (max-width: 500px) {
          .desktop-nav { display: none !important; }
          .mobile-menu-btn { display: flex !important; }
        }
      `}</style>
    </nav>
  );
};

export default TopNavigation;
