import React, { useState } from 'react';
import { 
  ResponsiveContainer, 
  AreaChart, 
  Area, 
  XAxis, 
  YAxis, 
  Tooltip, 
  PieChart, 
  Pie, 
  Cell, 
  BarChart, 
  Bar 
} from 'recharts';
import { 
  Users, 
  PieChart as PieIcon, 
  BarChart3, 
  Globe, 
  Radio, 
  Film, 
  Image as ImageIcon, 
  Tv, 
  Calendar,
  Layers
} from 'lucide-react';

export default function AccountsReachedView({ insights }) {
  const { accountsReachedDetails } = insights;
  const [activeMetric, setActiveMetric] = useState('total');

  const RADIAN = Math.PI / 180;
  const renderCustomizedLabel = ({ cx, cy, midAngle, innerRadius, outerRadius, percent }) => {
    const radius = innerRadius + (outerRadius - innerRadius) * 0.5;
    const x = cx + radius * Math.cos(-midAngle * RADIAN);
    const y = cy + radius * Math.sin(-midAngle * RADIAN);

    return (
      <text x={x} y={y} fill="white" textAnchor={x > cx ? 'start' : 'end'} dominantBaseline="central" className="text-[11px] font-bold">
        {`${(percent * 100).toFixed(1)}%`}
      </text>
    );
  };

  return (
    <div className="space-y-6">
      
      {/* Header Banner */}
      <div className="flex flex-col md:flex-row md:items-center justify-between p-5 rounded-2xl bg-instagram-dark border border-instagram-border gap-4">
        <div>
          <div className="flex items-center space-x-2">
            <span className="p-2 rounded-xl bg-instagram-pink/10 text-instagram-pink">
              <Users className="w-5 h-5" />
            </span>
            <h2 className="text-xl font-bold text-white tracking-tight">Accounts Reached Breakdown</h2>
          </div>
          <p className="text-xs text-neutral-400 mt-1">
            Analyze organic vs paid reach, content performance splits, and audience demographic geographic hubs.
          </p>
        </div>

        <div className="flex items-center space-x-4 bg-black/40 p-3 rounded-xl border border-instagram-border">
          <div>
            <p className="text-[10px] uppercase tracking-wider font-semibold text-neutral-400">Total Reached</p>
            <p className="text-xl font-extrabold text-white">{(insights.overview.accountsReached.value).toLocaleString()}</p>
          </div>
          <div className="h-8 w-[1px] bg-instagram-border"></div>
          <div>
            <p className="text-[10px] uppercase tracking-wider font-semibold text-neutral-400">Organic Reach</p>
            <p className="text-xl font-extrabold text-emerald-400">84.2%</p>
          </div>
        </div>
      </div>

      {/* Main Area Chart: Reached Accounts Over Time */}
      <div className="p-6 rounded-2xl bg-instagram-dark border border-instagram-border">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-6">
          <div>
            <h3 className="text-base font-bold text-white">Reach Performance Over Time</h3>
            <p className="text-xs text-neutral-400">Daily breakdown of organic vs paid audience reach</p>
          </div>

          {/* Filter Toggles */}
          <div className="flex items-center space-x-1 bg-black p-1 rounded-xl border border-instagram-border">
            <button
              onClick={() => setActiveMetric('total')}
              className={`px-3 py-1 text-xs font-semibold rounded-lg transition-all ${
                activeMetric === 'total' ? 'bg-instagram-pink text-white shadow' : 'text-neutral-400 hover:text-white'
              }`}
            >
              Total Reach
            </button>
            <button
              onClick={() => setActiveMetric('organic')}
              className={`px-3 py-1 text-xs font-semibold rounded-lg transition-all ${
                activeMetric === 'organic' ? 'bg-instagram-purple text-white shadow' : 'text-neutral-400 hover:text-white'
              }`}
            >
              Organic
            </button>
            <button
              onClick={() => setActiveMetric('paid')}
              className={`px-3 py-1 text-xs font-semibold rounded-lg transition-all ${
                activeMetric === 'paid' ? 'bg-instagram-blue text-white shadow' : 'text-neutral-400 hover:text-white'
              }`}
            >
              Paid Ads
            </button>
          </div>
        </div>

        <div className="h-72 w-full">
          <ResponsiveContainer width="100%" height="100%">
            <AreaChart data={accountsReachedDetails.timeSeries}>
              <defs>
                <linearGradient id="totalGrad" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="5%" stopColor="#E1306C" stopOpacity={0.5}/>
                  <stop offset="95%" stopColor="#E1306C" stopOpacity={0.0}/>
                </linearGradient>
                <linearGradient id="organicGrad" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="5%" stopColor="#833AB4" stopOpacity={0.5}/>
                  <stop offset="95%" stopColor="#833AB4" stopOpacity={0.0}/>
                </linearGradient>
                <linearGradient id="paidGrad" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="5%" stopColor="#0095F6" stopOpacity={0.5}/>
                  <stop offset="95%" stopColor="#0095F6" stopOpacity={0.0}/>
                </linearGradient>
              </defs>
              <XAxis dataKey="date" stroke="#65676B" fontSize={11} tickLine={false} />
              <YAxis stroke="#65676B" fontSize={11} tickLine={false} tickFormatter={(v) => `${(v/1000).toFixed(0)}k`} />
              <Tooltip 
                contentStyle={{ backgroundColor: '#1C1C1E', borderColor: '#262626', borderRadius: '12px', color: '#fff' }}
                formatter={(val) => [val.toLocaleString(), 'Accounts']}
              />
              {(activeMetric === 'total' || activeMetric === 'organic') && (
                <Area type="monotone" dataKey="organic" stroke="#833AB4" strokeWidth={2} fillOpacity={1} fill="url(#organicGrad)" name="Organic Reach" />
              )}
              {(activeMetric === 'total' || activeMetric === 'paid') && (
                <Area type="monotone" dataKey="paid" stroke="#0095F6" strokeWidth={2} fillOpacity={1} fill="url(#paidGrad)" name="Paid Ads Reach" />
              )}
            </AreaChart>
          </ResponsiveContainer>
        </div>
      </div>

      {/* Grid Row: Followers vs Non-Followers + Reach by Content Type */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        
        {/* Followers vs Non-Followers Pie Chart */}
        <div className="p-6 rounded-2xl bg-instagram-dark border border-instagram-border flex flex-col justify-between">
          <div>
            <div className="flex items-center justify-between mb-2">
              <h3 className="text-base font-bold text-white">Followers vs. Non-followers</h3>
              <PieIcon className="w-4 h-4 text-neutral-400" />
            </div>
            <p className="text-xs text-neutral-400">Audience composition of reached accounts</p>
          </div>

          <div className="h-64 my-4 flex items-center justify-center">
            <ResponsiveContainer width="100%" height="100%">
              <PieChart>
                <Pie
                  data={accountsReachedDetails.followersVsNonFollowers}
                  cx="50%"
                  cy="50%"
                  innerRadius={60}
                  outerRadius={95}
                  paddingAngle={5}
                  dataKey="value"
                  label={renderCustomizedLabel}
                  labelLine={false}
                >
                  {accountsReachedDetails.followersVsNonFollowers.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={entry.color} />
                  ))}
                </Pie>
                <Tooltip contentStyle={{ backgroundColor: '#1C1C1E', borderColor: '#262626', borderRadius: '12px' }} />
              </PieChart>
            </ResponsiveContainer>
          </div>

          <div className="grid grid-cols-2 gap-3 pt-3 border-t border-instagram-border">
            {accountsReachedDetails.followersVsNonFollowers.map((item) => (
              <div key={item.name} className="flex items-center space-x-3 p-2.5 rounded-xl bg-black/40 border border-instagram-border">
                <div className="w-3 h-3 rounded-full" style={{ backgroundColor: item.color }}></div>
                <div>
                  <p className="text-xs font-semibold text-white">{item.name}</p>
                  <p className="text-xs text-neutral-400 font-medium">{item.count.toLocaleString()} accounts ({item.value}%)</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Reach by Content Type Progress Bars */}
        <div className="p-6 rounded-2xl bg-instagram-dark border border-instagram-border flex flex-col justify-between">
          <div>
            <div className="flex items-center justify-between mb-2">
              <h3 className="text-base font-bold text-white">Reach by Content Type</h3>
              <Layers className="w-4 h-4 text-neutral-400" />
            </div>
            <p className="text-xs text-neutral-400">Formats delivering the highest audience discovery</p>
          </div>

          <div className="space-y-4 my-4">
            {accountsReachedDetails.reachByContentType.map((item) => {
              let FormatIcon = Film;
              if (item.type.includes('Posts')) FormatIcon = ImageIcon;
              if (item.type.includes('Stories')) FormatIcon = Layers;
              if (item.type.includes('Live')) FormatIcon = Tv;

              return (
                <div key={item.type} className="space-y-1.5">
                  <div className="flex items-center justify-between text-xs font-semibold">
                    <div className="flex items-center space-x-2">
                      <FormatIcon className="w-4 h-4" style={{ color: item.color }} />
                      <span className="text-white">{item.type}</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <span className="text-neutral-400">{item.reach.toLocaleString()}</span>
                      <span className="font-bold text-white" style={{ color: item.color }}>{item.percentage}%</span>
                    </div>
                  </div>
                  <div className="w-full bg-black h-2.5 rounded-full overflow-hidden border border-instagram-border">
                    <div 
                      className="h-full rounded-full transition-all duration-500" 
                      style={{ width: `${item.percentage}%`, backgroundColor: item.color }}
                    ></div>
                  </div>
                </div>
              );
            })}
          </div>

          <div className="p-3 rounded-xl bg-instagram-pink/10 border border-instagram-pink/20 flex items-center space-x-2 text-xs text-instagram-pink font-semibold">
            <span>💡 Reels generated 66.2% of all non-follower discovery this month.</span>
          </div>
        </div>

      </div>

      {/* Demographics: Top Cities & Countries & Age Distribution */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        
        {/* Top Countries */}
        <div className="p-6 rounded-2xl bg-instagram-dark border border-instagram-border">
          <div className="flex items-center justify-between mb-4">
            <h3 className="text-base font-bold text-white">Top Countries</h3>
            <Globe className="w-4 h-4 text-neutral-400" />
          </div>
          <div className="space-y-3">
            {accountsReachedDetails.topCountries.map((c) => (
              <div key={c.country} className="flex items-center justify-between text-xs">
                <div className="flex items-center space-x-2">
                  <span className="text-base">{c.flag}</span>
                  <span className="font-semibold text-neutral-200">{c.country}</span>
                </div>
                <div className="flex items-center space-x-2">
                  <div className="w-20 bg-black h-2 rounded-full overflow-hidden border border-instagram-border">
                    <div className="bg-instagram-blue h-full rounded-full" style={{ width: `${c.percentage * 2}%` }}></div>
                  </div>
                  <span className="font-bold text-white w-8 text-right">{c.percentage}%</span>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Top Cities */}
        <div className="p-6 rounded-2xl bg-instagram-dark border border-instagram-border">
          <div className="flex items-center justify-between mb-4">
            <h3 className="text-base font-bold text-white">Top Cities</h3>
            <Globe className="w-4 h-4 text-neutral-400" />
          </div>
          <div className="space-y-3">
            {accountsReachedDetails.topCities.map((city) => (
              <div key={city.city} className="flex items-center justify-between text-xs">
                <div>
                  <p className="font-semibold text-white">{city.city}</p>
                  <p className="text-[10px] text-neutral-400">{city.country}</p>
                </div>
                <div className="flex items-center space-x-2">
                  <div className="w-20 bg-black h-2 rounded-full overflow-hidden border border-instagram-border">
                    <div className="bg-instagram-purple h-full rounded-full" style={{ width: `${city.percentage * 5}%` }}></div>
                  </div>
                  <span className="font-bold text-white w-8 text-right">{city.percentage}%</span>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Age Distribution Bar Chart */}
        <div className="p-6 rounded-2xl bg-instagram-dark border border-instagram-border">
          <div className="flex items-center justify-between mb-4">
            <h3 className="text-base font-bold text-white">Age Ranges</h3>
            <BarChart3 className="w-4 h-4 text-neutral-400" />
          </div>
          <div className="h-56">
            <ResponsiveContainer width="100%" height="100%">
              <BarChart data={accountsReachedDetails.ageDistribution}>
                <XAxis dataKey="age" stroke="#65676B" fontSize={10} tickLine={false} />
                <Tooltip contentStyle={{ backgroundColor: '#1C1C1E', borderColor: '#262626', borderRadius: '12px' }} />
                <Bar dataKey="percentage" fill="#E1306C" radius={[6, 6, 0, 0]} />
              </BarChart>
            </ResponsiveContainer>
          </div>
          <p className="text-[11px] text-center text-neutral-400 mt-2 font-medium">
            Core audience: <span className="text-white font-bold">25-34 years old (46.5%)</span>
          </p>
        </div>

      </div>

    </div>
  );
}
