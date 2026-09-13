import React, { useState, useMemo } from 'react';
import AnalyticsLineChart from '../components/AnalyticsLineChart';
import AudienceBarChart from '../components/AudienceBarChart';
import { useData } from '../context/DataContext';
import {
  genderDemographics,
  ageDemographics,
  topLocations,
} from '../data/analyticsData';

const audienceChips = ["Overall", "Followers", "Unfollowers"];

const StatRow = ({ label, percentage, formattedValue }) => (
  <div style={{ marginBottom: '18px' }}>
    <div style={{ fontSize: '14px', color: '#e5e5e5', marginBottom: '8px', fontWeight: '400' }}>
      {label}
    </div>
    <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
      <div style={{ flex: 1, height: '4px', backgroundColor: '#262626', borderRadius: '4px', overflow: 'hidden' }}>
        <div style={{
          width: `${Math.min(100, percentage)}%`,
          height: '100%',
          backgroundColor: '#d919a7',
          borderRadius: '4px',
          transition: 'width 0.8s ease',
        }} />
      </div>
      <div style={{ fontSize: '13px', color: '#e5e5e5', minWidth: '42px', textAlign: 'right', fontWeight: '400' }}>
        {formattedValue}
      </div>
    </div>
  </div>
);

const AudienceInsights = () => {
  const [activeChip, setActiveChip] = useState("Overall");
  const { dashboardData } = useData();
  const [locTab, setLocTab] = useState("Countries");

  const dynamicFollowerGrowthData = useMemo(() => {
    const series = { overall: [], followers: [], unfollowers: [] };
    const labels = ['Aug 26', 'Aug 30', 'Sep 2', 'Sep 5', 'Sep 9'];
    let base = (dashboardData.totalFollowers || 0) - (dashboardData.newFollowers || 0);
    labels.forEach((date) => {
      const change = Math.floor(Math.random() * (dashboardData.newFollowers || 10));
      base += change;
      series.overall.push({ date, count: base, net: change });
      series.followers.push({ date, count: change + 2, net: change });
      series.unfollowers.push({ date, count: Math.floor(change * 0.1), net: -1 });
    });
    return series;
  }, [dashboardData.totalFollowers, dashboardData.newFollowers]);

  const chartData = activeChip === "Followers"
    ? dynamicFollowerGrowthData.followers
    : activeChip === "Unfollowers"
      ? dynamicFollowerGrowthData.unfollowers
      : dynamicFollowerGrowthData.overall;

  return (
    <div style={{ backgroundColor: '#000', minHeight: '100%' }}>

      {/* Followers header */}
      <div style={{ padding: '20px 16px 8px' }}>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '12px' }}>
          <span style={{ fontSize: '15px', fontWeight: '600', color: '#e5e5e5' }}>Followers</span>
          <button style={{ background: 'none', border: 'none', color: '#a3a3a3', fontSize: '13px', cursor: 'pointer', display: 'flex', alignItems: 'center', gap: '4px' }}>
            30 days <span style={{ fontSize: '10px' }}>▼</span>
          </button>
        </div>
        <div style={{ fontSize: '36px', fontWeight: '700', color: '#fff', lineHeight: 1.1, marginBottom: '6px' }}>
          {(dashboardData.totalFollowers || 0).toLocaleString()}
        </div>
        <div style={{ fontSize: '13px', color: '#737373' }}>
          {dashboardData.newFollowers >= 0 ? '+' : ''}{(dashboardData.newFollowers || 0).toLocaleString()} since Aug 12
        </div>
      </div>

      {/* Follower growth section */}
      <div style={{ padding: '16px 16px 4px' }}>
        <div style={{ fontSize: '15px', fontWeight: '600', color: '#e5e5e5', marginBottom: '14px' }}>
          Follower growth over time
        </div>
        {/* Pill chips */}
        <div style={{ display: 'flex', gap: '8px', marginBottom: '16px' }}>
          {audienceChips.map(chip => (
            <button
              key={chip}
              onClick={() => setActiveChip(chip)}
              style={{
                padding: '7px 16px',
                borderRadius: '24px',
                fontSize: '13px',
                fontWeight: '500',
                backgroundColor: activeChip === chip ? '#262626' : 'transparent',
                color: activeChip === chip ? '#fff' : '#a3a3a3',
                border: activeChip === chip ? '1px solid #404040' : '1px solid #262626',
                cursor: 'pointer',
              }}
            >
              {chip}
            </button>
          ))}
        </div>
        <AnalyticsLineChart data={chartData} dataKey="count" height={160} />
      </div>

      <div style={{ height: '1px', backgroundColor: '#1a1a1a', margin: '8px 0' }} />

      {/* Gender section */}
      <div style={{ padding: '20px 16px' }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '18px' }}>
          <span style={{ fontSize: '15px', fontWeight: '600', color: '#e5e5e5' }}>Gender</span>
          <span style={{
            width: '16px', height: '16px', borderRadius: '50%',
            border: '1px solid #737373', display: 'inline-flex',
            alignItems: 'center', justifyContent: 'center',
            color: '#737373', fontSize: '10px', lineHeight: 1
          }}>i</span>
        </div>
        <StatRow label="Women" percentage={genderDemographics.women.percentage} formattedValue={genderDemographics.women.formatted} />
        <StatRow label="Men" percentage={genderDemographics.men.percentage} formattedValue={genderDemographics.men.formatted} />
      </div>

      <div style={{ height: '1px', backgroundColor: '#1a1a1a' }} />

      {/* Age range section */}
      <div style={{ padding: '20px 16px' }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '12px' }}>
          <span style={{ fontSize: '15px', fontWeight: '600', color: '#e5e5e5' }}>Age range</span>
          <span style={{
            width: '16px', height: '16px', borderRadius: '50%',
            border: '1px solid #737373', display: 'inline-flex',
            alignItems: 'center', justifyContent: 'center',
            color: '#737373', fontSize: '10px',
          }}>i</span>
        </div>
        {/* Legend */}
        <div style={{ display: 'flex', gap: '16px', marginBottom: '16px', fontSize: '12px', color: '#a3a3a3' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '5px' }}>
            <span style={{ display: 'inline-block', width: '8px', height: '8px', borderRadius: '50%', backgroundColor: '#d919a7' }} /> Women
          </div>
          <div style={{ display: 'flex', alignItems: 'center', gap: '5px' }}>
            <span style={{ display: 'inline-block', width: '8px', height: '8px', borderRadius: '50%', backgroundColor: '#833AB4' }} /> Men
          </div>
        </div>
        {ageDemographics.map(item => (
          <StatRow key={item.range} label={item.range} percentage={item.percentage} formattedValue={item.formatted} />
        ))}
        {/* Static 0% rows */}
        <StatRow label="55-64" percentage={0} formattedValue="0%" />
        <StatRow label="65+" percentage={0} formattedValue="0%" />
      </div>

      <div style={{ height: '1px', backgroundColor: '#1a1a1a' }} />

      {/* Top Locations */}
      <div style={{ padding: '20px 16px' }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '16px' }}>
          <span style={{ fontSize: '15px', fontWeight: '600', color: '#e5e5e5' }}>Top locations</span>
          <span style={{
            width: '16px', height: '16px', borderRadius: '50%',
            border: '1px solid #737373', display: 'inline-flex',
            alignItems: 'center', justifyContent: 'center',
            color: '#737373', fontSize: '10px',
          }}>i</span>
        </div>
        {/* Countries / Cities toggle */}
        <div style={{ display: 'flex', gap: '8px', marginBottom: '20px' }}>
          {['Countries', 'Cities'].map(tab => (
            <button
              key={tab}
              onClick={() => setLocTab(tab)}
              style={{
                padding: '8px 20px',
                borderRadius: '24px',
                fontSize: '13px',
                fontWeight: '500',
                backgroundColor: locTab === tab ? '#262626' : 'transparent',
                color: locTab === tab ? '#fff' : '#a3a3a3',
                border: '1px solid #404040',
                cursor: 'pointer',
              }}
            >
              {tab}
            </button>
          ))}
        </div>
        {topLocations.map(loc => (
          <StatRow
            key={loc.city}
            label={loc.city}
            percentage={parseFloat(loc.percentage)}
            formattedValue={loc.percentage}
          />
        ))}
      </div>

      <div style={{ height: '1px', backgroundColor: '#1a1a1a' }} />

      {/* Follower Active Times */}
      <div style={{ padding: '20px 16px 40px' }}>
        <AudienceBarChart />
      </div>
    </div>
  );
};

export default AudienceInsights;
