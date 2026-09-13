import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useData } from '../context/DataContext';
import { ChevronRight, TrendingUp } from 'lucide-react';

const tools = [
  { id: 'monthly-recap', title: 'Monthly recap', subtitle: 'See what you made happen last month.', badge: 'New' },
  { id: 'best-practices', title: 'Best practices', subtitle: '', badge: 'New' },
  { id: 'inspiration', title: 'Inspiration', subtitle: '', badge: null },
  { id: 'partnership-ads', title: 'Partnership ads', subtitle: '', badge: null },
  { id: 'ad-tools', title: 'Ad tools', subtitle: '', badge: null },
  { id: 'branded-content', title: 'Branded content', subtitle: 'Partner with a brand or creator for your next post', badge: null },
];

const tipsData = [
  { id: 'trending-audio', title: 'Trending audio', badge: 'New' },
  { id: 'other-resources', title: 'Other helpful resources', badge: null },
];

const formatNum = (n) => {
  if (!n) return '0';
  if (n >= 1000) return (n / 1000).toFixed(1).replace(/\.0$/, '') + 'K';
  return String(n);
};

const ProfessionalDashboard = () => {
  const navigate = useNavigate();
  const { dashboardData } = useData();

  return (
    <div style={{ backgroundColor: '#000', minHeight: '100vh', fontFamily: 'var(--font-family)' }}>

      {/* Page title */}
      <div style={{
        padding: '16px 16px 12px',
        borderBottom: '1px solid #1a1a1a',
      }}>
        <h1 style={{ fontSize: '20px', fontWeight: '700', color: '#fff', margin: 0 }}>
          Professional dashboard
        </h1>
      </div>

      {/* Insights section */}
      <div style={{ padding: '20px 16px 0' }}>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '16px' }}>
          <span style={{ fontSize: '16px', fontWeight: '600', color: '#fff' }}>Insights</span>
          <span style={{ fontSize: '12px', color: '#737373' }}>Aug 13 - Sep 11</span>
        </div>

        {/* Views row */}
        <div
          onClick={() => navigate('/insights/overview')}
          style={{
            display: 'flex', alignItems: 'center', justifyContent: 'space-between',
            padding: '14px 0',
            borderBottom: '1px solid #1a1a1a',
            cursor: 'pointer',
          }}
        >
          <span style={{ fontSize: '15px', color: '#e5e5e5' }}>Views</span>
          <div style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
            <TrendingUp size={16} color="#00c853" />
            <span style={{ fontSize: '15px', fontWeight: '600', color: '#fff' }}>
              {formatNum(dashboardData.views)}
            </span>
            <ChevronRight size={16} color="#737373" />
          </div>
        </div>

        {/* New followers row */}
        <div
          onClick={() => navigate('/insights/audience')}
          style={{
            display: 'flex', alignItems: 'center', justifyContent: 'space-between',
            padding: '14px 0',
            borderBottom: '1px solid #1a1a1a',
            cursor: 'pointer',
          }}
        >
          <span style={{ fontSize: '15px', color: '#e5e5e5' }}>New followers</span>
          <div style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
            <TrendingUp size={16} color="#00c853" />
            <span style={{ fontSize: '15px', fontWeight: '600', color: '#fff' }}>
              {formatNum(dashboardData.newFollowers)}
            </span>
            <ChevronRight size={16} color="#737373" />
          </div>
        </div>

        {/* Content shared row */}
        <div
          onClick={() => navigate('/insights/content')}
          style={{
            display: 'flex', alignItems: 'center', justifyContent: 'space-between',
            padding: '14px 0',
            cursor: 'pointer',
          }}
        >
          <span style={{ fontSize: '15px', color: '#e5e5e5' }}>Content you shared</span>
          <div style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
            <span style={{ fontSize: '15px', fontWeight: '600', color: '#fff' }}>
              {dashboardData.contentShared || 0}
            </span>
            <ChevronRight size={16} color="#737373" />
          </div>
        </div>
      </div>

      <div style={{ height: '8px', backgroundColor: '#111', margin: '8px 0' }} />

      {/* Your tools section */}
      <div style={{ padding: '4px 16px 0' }}>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '14px 0' }}>
          <span style={{ fontSize: '16px', fontWeight: '600', color: '#fff' }}>Your tools</span>
          <button style={{ background: 'none', border: 'none', color: '#3897F0', fontSize: '14px', fontWeight: '500', cursor: 'pointer' }}>
            See all
          </button>
        </div>

        {tools.map((tool, i) => (
          <div
            key={tool.id}
            onClick={() => navigate('/insights')}
            style={{
              display: 'flex', alignItems: 'center', justifyContent: 'space-between',
              padding: '14px 0',
              borderTop: i === 0 ? '1px solid #1a1a1a' : 'none',
              borderBottom: '1px solid #1a1a1a',
              cursor: 'pointer',
            }}
          >
            <div style={{ flex: 1 }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: tool.subtitle ? '3px' : '0' }}>
                <span style={{ fontSize: '15px', color: '#e5e5e5', fontWeight: '400' }}>{tool.title}</span>
                {tool.badge && (
                  <span style={{
                    backgroundColor: '#385185',
                    color: '#fff',
                    fontSize: '11px',
                    fontWeight: '600',
                    padding: '2px 8px',
                    borderRadius: '12px',
                  }}>
                    {tool.badge}
                  </span>
                )}
              </div>
              {tool.subtitle && (
                <div style={{ fontSize: '12px', color: '#737373' }}>{tool.subtitle}</div>
              )}
            </div>
            <ChevronRight size={16} color="#737373" style={{ flexShrink: 0, marginLeft: '8px' }} />
          </div>
        ))}
      </div>

      <div style={{ height: '8px', backgroundColor: '#111', margin: '8px 0' }} />

      {/* Tips and resources */}
      <div style={{ padding: '4px 16px 40px' }}>
        <div style={{ padding: '14px 0', borderBottom: '1px solid #1a1a1a' }}>
          <span style={{ fontSize: '16px', fontWeight: '600', color: '#fff' }}>Tips and resources</span>
        </div>

        {tipsData.map((tip) => (
          <div
            key={tip.id}
            onClick={() => navigate('/insights')}
            style={{
              display: 'flex', alignItems: 'center', justifyContent: 'space-between',
              padding: '14px 0',
              borderBottom: '1px solid #1a1a1a',
              cursor: 'pointer',
            }}
          >
            <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
              <span style={{ fontSize: '15px', color: '#e5e5e5' }}>{tip.title}</span>
              {tip.badge && (
                <span style={{
                  backgroundColor: '#385185',
                  color: '#fff',
                  fontSize: '11px',
                  fontWeight: '600',
                  padding: '2px 8px',
                  borderRadius: '12px',
                }}>
                  {tip.badge}
                </span>
              )}
            </div>
            <ChevronRight size={16} color="#737373" />
          </div>
        ))}
      </div>

    </div>
  );
};

export default ProfessionalDashboard;
