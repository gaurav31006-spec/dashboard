import React, { useState, useMemo } from 'react';
import AnalyticsLineChart from '../components/AnalyticsLineChart';
import { useData } from '../context/DataContext';
import { User, ExternalLink, Store } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const interactionChips = ["All", "Likes", "Comments", "Reposts", "Shares", "Saves"];

const StatRow = ({ label, value, percentage }) => (
  <div style={{ marginBottom: '20px' }}>
    <div style={{ fontSize: '14px', color: '#e5e5e5', marginBottom: '8px', fontWeight: '400' }}>
      {label}
    </div>
    <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
      <div style={{ flex: 1, height: '4px', backgroundColor: '#262626', borderRadius: '4px', overflow: 'hidden' }}>
        <div style={{
          width: `${Math.min(100, percentage || 0)}%`,
          height: '100%',
          backgroundColor: '#d919a7',
          borderRadius: '4px',
          transition: 'width 0.8s ease',
        }} />
      </div>
      <div style={{ fontSize: '13px', color: '#e5e5e5', minWidth: '38px', textAlign: 'right', fontWeight: '400' }}>
        {value}
      </div>
    </div>
  </div>
);

const Overview = () => {
  const { dashboardData } = useData();
  const navigate = useNavigate();
  const [interactionFilter, setInteractionFilter] = useState("All");

  const totalViews = dashboardData.views || 0;
  const reelsViews = Math.floor(totalViews * 0.98);
  const storiesViews = Math.floor(totalViews * 0.025);
  const maxView = Math.max(reelsViews, 1);

  const dynamicViewsOverTime = useMemo(() => {
    const total = dashboardData.views || 0;
    const labels = ['Aug 13', 'Aug 18', 'Aug 26', 'Sep 2', 'Sep 9'];
    return labels.map((date) => {
      const factor = 0.7 + Math.random() * 0.6;
      return { date, count: Math.floor((total / labels.length) * factor) };
    });
  }, [dashboardData.views]);

  const interactions = dashboardData.interactions || 0;
  const reelInteractions = Math.floor(interactions * 0.95);
  const storyInteractions = Math.floor(interactions * 0.015);
  const maxInt = Math.max(reelInteractions, 1);

  const formatNum = (n) => {
    if (!n) return '0';
    if (n >= 1000) return (n / 1000).toFixed(1).replace(/\.0$/, '') + 'K';
    return String(n);
  };

  return (
    <div style={{ backgroundColor: '#000', minHeight: '100%' }}>

      {/* Views over time */}
      <div style={{ padding: '20px 16px 4px' }}>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '4px' }}>
          <span style={{ fontSize: '15px', fontWeight: '600', color: '#e5e5e5' }}>Views over time</span>
          <span style={{ fontSize: '12px', color: '#737373' }}>Aug 13 - Sep 11</span>
        </div>
        <div style={{ fontSize: '34px', fontWeight: '700', color: '#fff', lineHeight: 1.1, marginBottom: '4px' }}>
          {formatNum(totalViews)}
        </div>
        <div style={{ fontSize: '13px', color: '#737373', marginBottom: '16px' }}>+14.2%</div>
        <AnalyticsLineChart data={dynamicViewsOverTime} dataKey="count" height={140} />
      </div>

      {/* Views by content type */}
      <div style={{ padding: '4px 16px 20px' }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '20px' }}>
          <span style={{ fontSize: '15px', fontWeight: '600', color: '#e5e5e5' }}>Views by content type</span>
          <span style={{
            width: '16px', height: '16px', borderRadius: '50%',
            border: '1px solid #737373', display: 'inline-flex',
            alignItems: 'center', justifyContent: 'center',
            color: '#737373', fontSize: '10px',
          }}>i</span>
        </div>

        {/* Followers / Non-followers legend */}
        <div style={{ display: 'flex', gap: '16px', marginBottom: '16px', fontSize: '12px', color: '#a3a3a3' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '5px' }}>
            <span style={{ width: '8px', height: '8px', borderRadius: '50%', backgroundColor: '#d919a7', display: 'inline-block' }} /> Followers
          </div>
          <div style={{ display: 'flex', alignItems: 'center', gap: '5px' }}>
            <span style={{ width: '8px', height: '8px', borderRadius: '50%', backgroundColor: '#833AB4', display: 'inline-block' }} /> Non-followers
          </div>
        </div>

        <StatRow label="Reels" value={formatNum(reelsViews)} percentage={(reelsViews / maxView) * 100} />
        <StatRow label="Stories" value={formatNum(storiesViews)} percentage={(storiesViews / maxView) * 100} />
        <StatRow label="Posts" value="0" percentage={0} />
        <StatRow label="Live videos" value="0" percentage={0} />
      </div>

      <div style={{ height: '8px', backgroundColor: '#111' }} />

      {/* Top content by views */}
      {dashboardData.customContent && dashboardData.customContent.length > 0 && (
        <div style={{ padding: '20px 16px' }}>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '14px' }}>
            <span style={{ fontSize: '15px', fontWeight: '600', color: '#e5e5e5' }}>Top content by views</span>
            <button
              onClick={() => navigate('/insights/content')}
              style={{ background: 'none', border: 'none', color: '#3897F0', fontSize: '14px', fontWeight: '500', cursor: 'pointer' }}
            >
              See all
            </button>
          </div>
          <div style={{ display: 'flex', gap: '8px', overflowX: 'auto' }} className="hide-scrollbar">
            {dashboardData.customContent.map(item => (
              <div
                key={item.id}
                style={{
                  width: '130px', height: '100px',
                  borderRadius: '6px', flexShrink: 0,
                  background: item.thumbnailGradient || '#262626',
                  backgroundSize: 'cover', backgroundPosition: 'center',
                  position: 'relative', overflow: 'hidden',
                }}
              >
                <div style={{
                  position: 'absolute', bottom: 4, left: 6,
                  fontSize: '12px', color: '#fff', fontWeight: '600',
                  textShadow: '0 1px 4px rgba(0,0,0,0.8)',
                }}>
                  {item.views ? formatNum(item.views) : ''}
                </div>
              </div>
            ))}
          </div>
        </div>
      )}

      {dashboardData.customContent && dashboardData.customContent.length > 0 && (
        <div style={{ height: '8px', backgroundColor: '#111' }} />
      )}

      {/* Interactions by content type */}
      <div style={{ padding: '20px 16px' }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '16px' }}>
          <span style={{ fontSize: '15px', fontWeight: '600', color: '#e5e5e5' }}>Interactions by content type</span>
          <span style={{
            width: '16px', height: '16px', borderRadius: '50%',
            border: '1px solid #737373', display: 'inline-flex',
            alignItems: 'center', justifyContent: 'center',
            color: '#737373', fontSize: '10px',
          }}>i</span>
        </div>

        <div style={{ display: 'flex', gap: '8px', overflowX: 'auto', marginBottom: '16px' }} className="hide-scrollbar">
          {interactionChips.map(chip => (
            <button
              key={chip}
              onClick={() => setInteractionFilter(chip)}
              style={{
                padding: '7px 14px', borderRadius: '24px',
                fontSize: '13px', fontWeight: '500', flexShrink: 0,
                backgroundColor: interactionFilter === chip ? '#e5e5e5' : 'transparent',
                color: interactionFilter === chip ? '#000' : '#e5e5e5',
                border: interactionFilter === chip ? 'none' : '1px solid #404040',
                cursor: 'pointer',
              }}
            >
              {chip}
            </button>
          ))}
        </div>

        <div style={{ display: 'flex', gap: '16px', marginBottom: '16px', fontSize: '12px', color: '#a3a3a3' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '5px' }}>
            <span style={{ width: '8px', height: '8px', borderRadius: '50%', backgroundColor: '#d919a7', display: 'inline-block' }} /> Followers
          </div>
          <div style={{ display: 'flex', alignItems: 'center', gap: '5px' }}>
            <span style={{ width: '8px', height: '8px', borderRadius: '50%', backgroundColor: '#833AB4', display: 'inline-block' }} /> Non-followers
          </div>
        </div>

        <StatRow label="Reels" value={formatNum(reelInteractions)} percentage={(reelInteractions / maxInt) * 100} />
        <StatRow label="Stories" value={formatNum(storyInteractions)} percentage={(storyInteractions / maxInt) * 100} />
        <StatRow label="Posts" value="0" percentage={0} />
        <StatRow label="Live videos" value="0" percentage={0} />
      </div>

      <div style={{ height: '8px', backgroundColor: '#111' }} />

      {/* Profile activity */}
      <div style={{ padding: '20px 16px 40px' }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '20px' }}>
          <span style={{ fontSize: '15px', fontWeight: '600', color: '#e5e5e5' }}>Profile activity</span>
          <span style={{
            width: '16px', height: '16px', borderRadius: '50%',
            border: '1px solid #737373', display: 'inline-flex',
            alignItems: 'center', justifyContent: 'center',
            color: '#737373', fontSize: '10px',
          }}>i</span>
        </div>
        {[
          { icon: User, label: 'Profile visits', value: Math.round((dashboardData.reach || 0) * 0.59) || 838 },
          { icon: ExternalLink, label: 'Bio link taps', value: 2 },
          { icon: Store, label: 'Business address taps', value: 0 },
        ].map(({ icon: Icon, label, value }) => (
          <div key={label} style={{
            display: 'flex', alignItems: 'center', gap: '16px',
            padding: '16px 0', borderBottom: '1px solid #1a1a1a',
          }}>
            <div style={{
              width: '44px', height: '44px', borderRadius: '50%',
              border: '1px solid #404040',
              display: 'flex', alignItems: 'center', justifyContent: 'center',
              color: '#e5e5e5', flexShrink: 0,
            }}>
              <Icon size={18} />
            </div>
            <div style={{ flex: 1, fontSize: '15px', color: '#e5e5e5' }}>{label}</div>
            <div style={{ fontSize: '15px', fontWeight: '600', color: '#fff' }}>{value}</div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Overview;
