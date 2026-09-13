import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { ChevronLeft, Info, CheckCircle2 } from 'lucide-react';
import { useData } from '../context/DataContext';
import { motion } from 'framer-motion';

const DataEntryFormPage = () => {
  const navigate = useNavigate();
  const { dashboardData, updateData } = useData();
  const [formData, setFormData] = useState({
    views: dashboardData.views || '',
    newFollowers: dashboardData.newFollowers || '',
    totalFollowers: dashboardData.totalFollowers || '',
    interactions: dashboardData.interactions || '',
    contentShared: dashboardData.contentShared || '',
    reach: dashboardData.reach || '',
    reelTitle: '',
    reelThumbnailUrl: '',
    reelViews: '',
    reelLikes: '',
  });

  const [showToast, setShowToast] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    const isTextField = name === 'reelTitle' || name === 'reelThumbnailUrl';
    setFormData((prev) => ({
      ...prev,
      [name]: value === '' ? '' : (isTextField ? value : Number(value))
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    updateData({
      views: Number(formData.views) || 0,
      newFollowers: Number(formData.newFollowers) || 0,
      totalFollowers: Number(formData.totalFollowers) || 0,
      interactions: Number(formData.interactions) || 0,
      contentShared: Number(formData.contentShared) || 0,
      reach: Number(formData.reach) || 0,
      customContent: formData.reelTitle || formData.reelThumbnailUrl ? [{
        id: 'user_reel_1',
        type: 'Reel',
        title: formData.reelTitle || 'Aesthetic Reel',
        date: 'Just now',
        views: Number(formData.reelViews) || 0,
        likes: Number(formData.reelLikes) || 0,
        comments: 0,
        shares: 0,
        reach: Number(formData.reelViews) || 0,
        thumbnailGradient: formData.reelThumbnailUrl ? `url(${formData.reelThumbnailUrl}) center/cover no-repeat` : 'linear-gradient(135deg, #FF0844 0%, #FFB199 100%)',
      }] : [],
    });
    
    setShowToast(true);
    setTimeout(() => {
      setShowToast(false);
      navigate('/');
    }, 1500);
  };

  const inputStyle = {
    width: '100%',
    backgroundColor: 'var(--bg-elevated)',
    border: '1px solid var(--border-subtle)',
    color: '#FFF',
    padding: '12px 16px',
    borderRadius: '12px',
    fontSize: '15px',
    outline: 'none',
    boxSizing: 'border-box'
  };

  const labelStyle = {
    display: 'block',
    color: 'var(--text-muted)',
    fontSize: '13px',
    marginBottom: '6px',
    fontWeight: '500'
  };

  const groupStyle = {
    marginBottom: '20px'
  };

  return (
    <div style={{ height: '100%', overflowY: 'auto', backgroundColor: 'var(--bg-main)', color: '#FFF' }} className="hide-scrollbar">
      
      {/* Header */}
      <div style={{
        position: 'sticky',
        top: 0,
        zIndex: 50,
        backgroundColor: 'rgba(0,0,0,0.85)',
        backdropFilter: 'blur(10px)',
        borderBottom: '1px solid var(--border-subtle)',
        padding: '16px',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between'
      }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '16px' }}>
          <button onClick={() => navigate(-1)} style={{ color: '#FFF', background: 'none', border: 'none', padding: 0 }}>
            <ChevronLeft size={28} />
          </button>
          <h1 style={{ margin: 0, fontSize: '18px', fontWeight: '700' }}>Dashboard Data Entry</h1>
        </div>
      </div>

      <div style={{ padding: '24px 16px', paddingBottom: '90px' }}>
        
        <div style={{
          backgroundColor: 'rgba(59, 130, 246, 0.1)',
          border: '1px solid rgba(59, 130, 246, 0.2)',
          borderRadius: '12px',
          padding: '16px',
          marginBottom: '24px',
          display: 'flex',
          gap: '12px',
          alignItems: 'flex-start'
        }}>
          <Info size={20} color="#3B82F6" style={{ flexShrink: 0 }} />
          <p style={{ margin: 0, fontSize: '13px', color: '#A0AEC0', lineHeight: 1.5 }}>
            Values entered here will instantly update the Professional Dashboard and Insights screens. Leave empty to default to 0.
          </p>
        </div>

        <form onSubmit={handleSubmit}>
          
          <div style={groupStyle}>
            <label style={labelStyle}>Total Views (Last 30 Days)</label>
            <input 
              type="number" 
              name="views"
              value={formData.views}
              onChange={handleChange}
              style={inputStyle} 
              placeholder="e.g. 50000"
            />
          </div>

          <div style={groupStyle}>
            <label style={labelStyle}>Accounts Reached</label>
            <input 
              type="number" 
              name="reach"
              value={formData.reach}
              onChange={handleChange}
              style={inputStyle} 
              placeholder="e.g. 1420890"
            />
          </div>

          <div style={groupStyle}>
            <label style={labelStyle}>Total Interactions (Likes, Comments, Shares)</label>
            <input 
              type="number" 
              name="interactions"
              value={formData.interactions}
              onChange={handleChange}
              style={inputStyle} 
              placeholder="e.g. 1500"
            />
          </div>

          <div style={groupStyle}>
            <label style={labelStyle}>New Followers (Net Change)</label>
            <input 
              type="number" 
              name="newFollowers"
              value={formData.newFollowers}
              onChange={handleChange}
              style={inputStyle} 
              placeholder="e.g. 332"
            />
          </div>

          <div style={groupStyle}>
            <label style={labelStyle}>Total Followers Current Count</label>
            <input 
              type="number" 
              name="totalFollowers"
              value={formData.totalFollowers}
              onChange={handleChange}
              style={inputStyle} 
              placeholder="e.g. 10400"
            />
          </div>

          <div style={groupStyle}>
            <label style={labelStyle}>Content Shared (Total Posts/Reels)</label>
            <input 
              type="number" 
              name="contentShared"
              value={formData.contentShared}
              onChange={handleChange}
              style={inputStyle} 
              placeholder="e.g. 15"
            />
          </div>

          <div style={{ marginTop: '32px', marginBottom: '16px', borderTop: '1px solid var(--border-subtle)', paddingTop: '16px' }}>
            <h2 style={{ fontSize: '15px', fontWeight: '600', color: 'var(--accent-pink)', marginBottom: '16px' }}>Custom Reel Data (For Insights Tab)</h2>
            
            <div style={groupStyle}>
              <label style={labelStyle}>Reel Title</label>
              <input 
                type="text" 
                name="reelTitle"
                value={formData.reelTitle}
                onChange={handleChange}
                style={inputStyle} 
                placeholder="e.g. Setup Tour 2026 🚀"
              />
            </div>
            
            <div style={groupStyle}>
              <label style={labelStyle}>Reel Thumbnail Image URL</label>
              <input 
                type="text" 
                name="reelThumbnailUrl"
                value={formData.reelThumbnailUrl}
                onChange={handleChange}
                style={inputStyle} 
                placeholder="e.g. https://images.unsplash.com/..."
              />
            </div>

            <div style={{ display: 'flex', gap: '12px' }}>
              <div style={{ ...groupStyle, flex: 1 }}>
                <label style={labelStyle}>Reel Views</label>
                <input 
                  type="number" 
                  name="reelViews"
                  value={formData.reelViews}
                  onChange={handleChange}
                  style={inputStyle} 
                  placeholder="e.g. 5000"
                />
              </div>
              <div style={{ ...groupStyle, flex: 1 }}>
                <label style={labelStyle}>Reel Likes</label>
                <input 
                  type="number" 
                  name="reelLikes"
                  value={formData.reelLikes}
                  onChange={handleChange}
                  style={inputStyle} 
                  placeholder="e.g. 800"
                />
              </div>
            </div>
          </div>

          <button 
            type="submit" 
            style={{
              width: '100%',
              backgroundColor: 'var(--accent-blue)',
              color: '#FFF',
              border: 'none',
              padding: '16px',
              borderRadius: '12px',
              fontSize: '16px',
              fontWeight: '600',
              marginTop: '12px',
              cursor: 'pointer'
            }}
          >
            Update Dashboard Data
          </button>
        </form>

      </div>

      {showToast && (
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 50 }}
          style={{
            position: 'fixed',
            bottom: '80px',
            left: '50%',
            transform: 'translateX(-50%)',
            backgroundColor: '#4CAF50',
            color: '#FFF',
            padding: '12px 24px',
            borderRadius: '24px',
            display: 'flex',
            alignItems: 'center',
            gap: '8px',
            fontWeight: '600',
            fontSize: '14px',
            zIndex: 100,
            whiteSpace: 'nowrap'
          }}
        >
          <CheckCircle2 size={18} />
          Data Updated Successfully!
        </motion.div>
      )}

    </div>
  );
};

export default DataEntryFormPage;
