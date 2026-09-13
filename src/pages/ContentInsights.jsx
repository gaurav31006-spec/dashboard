import React, { useState } from 'react';
import { Heart, MessageCircle, Repeat2, Share2, Bookmark } from 'lucide-react';
import { useData } from '../context/DataContext';

const filterChips = ["Latest", "Views", "Viewers", "Follows", "Likes", "Comments", "Reposts", "Shares", "Saves"];

const ContentInsights = () => {
  const [activeFilter, setActiveFilter] = useState("Latest");
  const { dashboardData } = useData();

  const rawItems = dashboardData.customContent && dashboardData.customContent.length > 0
    ? dashboardData.customContent
    : [];

  const filteredItems = [...rawItems].sort((a, b) => {
    if (activeFilter === "Views") return (b.views || 0) - (a.views || 0);
    if (activeFilter === "Likes") return (b.likes || 0) - (a.likes || 0);
    return 0;
  });

  const formatNum = (n) => {
    if (!n && n !== 0) return '0';
    if (n >= 1000) return (n / 1000).toFixed(1).replace(/\.0$/, '') + 'K';
    return String(n);
  };

  return (
    <div style={{ backgroundColor: '#000', minHeight: '100%' }}>
      {/* Toolbar row */}
      <div style={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        padding: '12px 16px 8px',
      }}>
        <button style={{
          display: 'flex', alignItems: 'center', gap: '4px',
          color: '#fff', fontWeight: '600', fontSize: '15px',
          background: 'none', border: 'none', cursor: 'pointer'
        }}>
          All content <span style={{ fontSize: '11px' }}>▼</span>
        </button>
        <button style={{
          display: 'flex', alignItems: 'center', gap: '4px',
          color: '#a3a3a3', fontWeight: '500', fontSize: '13px',
          background: 'none', border: 'none', cursor: 'pointer'
        }}>
          30 days <span style={{ fontSize: '11px' }}>▼</span>
        </button>
      </div>

      {/* Horizontally scrollable filter chips */}
      <div style={{
        display: 'flex', gap: '8px',
        padding: '4px 16px 12px',
        overflowX: 'auto',
      }} className="hide-scrollbar">
        {filterChips.map(chip => (
          <button
            key={chip}
            onClick={() => setActiveFilter(chip)}
            style={{
              padding: '7px 16px',
              borderRadius: '24px',
              fontSize: '13px',
              fontWeight: '500',
              whiteSpace: 'nowrap',
              flexShrink: 0,
              backgroundColor: activeFilter === chip ? '#e5e5e5' : 'transparent',
              color: activeFilter === chip ? '#000' : '#e5e5e5',
              border: activeFilter === chip ? 'none' : '1px solid #404040',
              cursor: 'pointer',
              transition: 'all 0.15s ease',
            }}
          >
            {chip}
          </button>
        ))}
      </div>

      {/* Content list */}
      {filteredItems.length === 0 ? (
        <div style={{ padding: '40px 16px', textAlign: 'center', color: '#737373' }}>
          <div style={{ fontSize: '15px', marginBottom: '8px' }}>No content yet</div>
          <div style={{ fontSize: '13px' }}>Add your reel data from the Data Entry form</div>
        </div>
      ) : (
        <div style={{ display: 'flex', flexDirection: 'column' }}>
          {filteredItems.map((item) => (
            <div
              key={item.id}
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: '12px',
                padding: '12px 16px',
                borderBottom: '1px solid #1a1a1a',
              }}
            >
              {/* Thumbnail */}
              <div style={{
                width: '56px',
                height: '56px',
                borderRadius: '4px',
                flexShrink: 0,
                overflow: 'hidden',
                background: item.thumbnailGradient || '#262626',
                backgroundSize: 'cover',
                backgroundPosition: 'center',
              }} />

              {/* Info */}
              <div style={{ flex: 1, minWidth: 0 }}>
                <div style={{
                  fontSize: '14px',
                  color: '#e5e5e5',
                  fontWeight: '400',
                  overflow: 'hidden',
                  textOverflow: 'ellipsis',
                  whiteSpace: 'nowrap',
                  marginBottom: '6px',
                }}>
                  {item.title} <span style={{ color: '#737373', fontSize: '12px' }}>{item.date}</span>
                </div>

                <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '4px', color: '#a3a3a3', fontSize: '12px' }}>
                    <Heart size={12} /> <span>{formatNum(item.likes)}</span>
                  </div>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '4px', color: '#a3a3a3', fontSize: '12px' }}>
                    <MessageCircle size={12} /> <span>{formatNum(item.comments)}</span>
                  </div>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '4px', color: '#a3a3a3', fontSize: '12px' }}>
                    <Repeat2 size={12} /> <span>0</span>
                  </div>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '4px', color: '#a3a3a3', fontSize: '12px' }}>
                    <Bookmark size={12} /> <span>{formatNum(item.shares)}</span>
                  </div>
                </div>
              </div>

              {/* Views */}
              <div style={{ textAlign: 'right', flexShrink: 0 }}>
                <div style={{ fontSize: '16px', fontWeight: '600', color: '#fff' }}>{formatNum(item.views)}</div>
                <div style={{ fontSize: '12px', color: '#737373' }}>Views</div>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default ContentInsights;
