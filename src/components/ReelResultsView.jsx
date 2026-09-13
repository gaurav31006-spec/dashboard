// src/components/ReelResultsView.jsx
import React, { useState } from 'react';
import { 
  Sparkles, 
  TrendingUp, 
  Share2, 
  Bookmark, 
  Heart, 
  MessageCircle, 
  Eye, 
  Award, 
  AlertTriangle, 
  CheckCircle2, 
  Zap, 
  DollarSign, 
  Edit3, 
  Download, 
  Music,
  User,
  ArrowUpRight,
  Info,
  BarChart2,
  Play
} from 'lucide-react';
import { 
  ResponsiveContainer, 
  AreaChart, 
  Area, 
  BarChart as RechartsBarChart, 
  Bar, 
  XAxis, 
  YAxis, 
  Tooltip, 
  CartesianGrid 
} from 'recharts';
import { calculateReelMetrics } from '../utils/reelAnalytics';

const ReelResultsView = ({ formData, onEditForm }) => {
  const safeData = formData || {};
  const metrics = calculateReelMetrics(safeData);
  const [activeTab, setActiveTab] = useState('overview'); // 'overview' | 'charts' | 'diagnostics'

  const defaultThumbnail = safeData.thumbnail || "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?w=600&auto=format&fit=crop&q=80";

  return (
    <div className="space-y-5 text-white">
      {/* Top Banner Card with Score */}
      <div className="relative overflow-hidden bg-gradient-to-br from-[#1c1326] via-[#161622] to-[#0f1117] border border-pink-500/30 rounded-2xl p-5 shadow-2xl">
        <div className="absolute top-0 right-0 w-64 h-64 bg-pink-500/10 blur-3xl pointer-events-none rounded-full" />
        
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 border-b border-[#2d2838] pb-4">
          <div className="flex items-center gap-3">
            <div className="w-14 h-14 rounded-2xl bg-gradient-to-tr from-pink-500 via-rose-500 to-purple-600 flex items-center justify-center text-white shadow-lg shadow-pink-500/30 text-2xl font-black">
              {metrics.badgeIcon}
            </div>
            <div>
              <div className="flex items-center gap-2">
                <span className="text-xs px-2.5 py-0.5 rounded-full bg-pink-500/20 text-pink-300 font-semibold border border-pink-500/30">
                  {safeData.category || 'Reel Analytics'}
                </span>
                <span className="text-xs text-gray-400">Duration: {safeData.duration || 0}s</span>
              </div>
              <h1 className="text-lg font-bold text-white mt-1 max-w-md truncate">
                {safeData.title || 'Untitled Reel'}
              </h1>
            </div>
          </div>

          <div className="flex items-center gap-2 w-full sm:w-auto justify-end">
            <button
              onClick={onEditForm}
              className="flex items-center gap-1.5 text-xs bg-[#252535] hover:bg-[#323246] text-white px-3.5 py-2 rounded-xl border border-[#3b3b52] font-semibold transition"
            >
              <Edit3 size={14} />
              Edit Data
            </button>
          </div>
        </div>

        {/* Score & Main Metric Highlights */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mt-4">
          {/* Performance Index Score */}
          <div className="md:col-span-1 bg-[#151520]/80 p-4 rounded-xl border border-pink-500/20 flex flex-col items-center justify-center text-center">
            <span className="text-xs text-gray-400 font-medium uppercase tracking-wider">Algorithm Score</span>
            <div className="text-4xl font-black tracking-tight my-1 bg-gradient-to-r from-pink-400 to-purple-400 bg-clip-text text-transparent">
              {metrics.totalScore}<span className="text-lg text-gray-400">/100</span>
            </div>
            <div 
              className="text-xs font-bold px-2.5 py-1 rounded-md"
              style={{ backgroundColor: `${metrics.gradeColor}20`, color: metrics.gradeColor }}
            >
              {metrics.gradeTitle}
            </div>
          </div>

          {/* Core 3 Virality Pillars */}
          <div className="md:col-span-3 grid grid-cols-3 gap-2.5">
            {/* Engagement Rate */}
            <div className="bg-[#151520]/70 p-3 rounded-xl border border-[#2a2a3a]">
              <span className="text-[11px] text-gray-400 font-medium flex items-center gap-1">
                <TrendingUp size={12} className="text-pink-400" /> Engagement Rate
              </span>
              <div className="text-xl font-extrabold text-white mt-1">{metrics.engagementRate}%</div>
              <span className="text-[10px] text-emerald-400 font-semibold">vs 4.2% avg</span>
            </div>

            {/* Virality Share Rate */}
            <div className="bg-[#151520]/70 p-3 rounded-xl border border-[#2a2a3a]">
              <span className="text-[11px] text-gray-400 font-medium flex items-center gap-1">
                <Share2 size={12} className="text-green-400" /> Share Velocity
              </span>
              <div className="text-xl font-extrabold text-white mt-1">{metrics.shareRate}%</div>
              <span className="text-[10px] text-gray-400">DM Distribution</span>
            </div>

            {/* Retention Rate */}
            <div className="bg-[#151520]/70 p-3 rounded-xl border border-[#2a2a3a]">
              <span className="text-[11px] text-gray-400 font-medium flex items-center gap-1">
                <Zap size={12} className="text-amber-400" /> Watch Retention
              </span>
              <div className="text-xl font-extrabold text-white mt-1">{metrics.retentionPct}%</div>
              <span className="text-[10px] text-gray-400">Avg {metrics.avgWatchTime}s</span>
            </div>
          </div>
        </div>
      </div>

      {/* Sub Tabs */}
      <div className="flex items-center gap-2 border-b border-[#262626] pb-2">
        <button
          onClick={() => setActiveTab('overview')}
          className={`px-4 py-2 rounded-xl text-xs font-semibold transition ${
            activeTab === 'overview'
              ? 'bg-pink-600 text-white'
              : 'bg-[#181818] text-gray-400 hover:text-white'
          }`}
        >
          Overview & Metrics
        </button>
        <button
          onClick={() => setActiveTab('charts')}
          className={`px-4 py-2 rounded-xl text-xs font-semibold transition ${
            activeTab === 'charts'
              ? 'bg-pink-600 text-white'
              : 'bg-[#181818] text-gray-400 hover:text-white'
          }`}
        >
          Retention & Benchmarks
        </button>
        <button
          onClick={() => setActiveTab('diagnostics')}
          className={`px-4 py-2 rounded-xl text-xs font-semibold transition ${
            activeTab === 'diagnostics'
              ? 'bg-pink-600 text-white'
              : 'bg-[#181818] text-gray-400 hover:text-white'
          }`}
        >
          AI Diagnostics & Growth Tips
        </button>
      </div>

      {/* TAB 1: OVERVIEW */}
      {activeTab === 'overview' && (
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {/* Left 2 columns: Breakdown stats */}
          <div className="md:col-span-2 space-y-4">
            {/* Non-Follower vs Follower Reach Bar */}
            <div className="bg-[#141414] p-4 rounded-xl border border-[#262626]">
              <div className="flex items-center justify-between mb-2">
                <span className="text-xs text-gray-300 font-semibold flex items-center gap-1.5">
                  <Eye size={14} className="text-purple-400" /> Non-Follower Organic Reach
                </span>
                <span className="text-xs font-bold text-pink-400">
                  {metrics.estimatedNonFollowerPct}% ({metrics.estimatedNonFollowerReach.toLocaleString()} Non-followers)
                </span>
              </div>
              {/* Progress bar */}
              <div className="w-full h-3 bg-[#222] rounded-full overflow-hidden flex">
                <div 
                  className="h-full bg-gradient-to-r from-pink-500 to-purple-600 transition-all duration-700" 
                  style={{ width: `${metrics.estimatedNonFollowerPct}%` }}
                />
                <div 
                  className="h-full bg-gray-700" 
                  style={{ width: `${100 - metrics.estimatedNonFollowerPct}%` }}
                />
              </div>
              <div className="flex justify-between text-[10px] text-gray-400 mt-1.5">
                <span>Explore & Reels Feed: {metrics.estimatedNonFollowerPct}%</span>
                <span>Existing Followers: {100 - metrics.estimatedNonFollowerPct}%</span>
              </div>
            </div>

            {/* Detailed Metric Cards Grid */}
            <div className="grid grid-cols-2 gap-3">
              <div className="bg-[#141414] p-3.5 rounded-xl border border-[#262626]">
                <div className="text-xs text-gray-400 flex items-center justify-between">
                  <span>Save-to-Like Ratio</span>
                  <Bookmark size={14} className="text-amber-400" />
                </div>
                <div className="text-lg font-bold text-white mt-1">{metrics.saveToLikeRatio}%</div>
                <div className="text-[10px] text-gray-400 mt-0.5">High re-watch & reference value</div>
              </div>

              <div className="bg-[#141414] p-3.5 rounded-xl border border-[#262626]">
                <div className="text-xs text-gray-400 flex items-center justify-between">
                  <span>Est. Creator Earnings</span>
                  <DollarSign size={14} className="text-emerald-400" />
                </div>
                <div className="text-lg font-bold text-emerald-400 mt-1">
                  ${metrics.estimatedMinEarnings} - ${metrics.estimatedMaxEarnings}
                </div>
                <div className="text-[10px] text-gray-400 mt-0.5">Bonus & Brand sponsorship range</div>
              </div>

              <div className="bg-[#141414] p-3.5 rounded-xl border border-[#262626]">
                <div className="text-xs text-gray-400 flex items-center justify-between">
                  <span>Comment Engagement</span>
                  <MessageCircle size={14} className="text-sky-400" />
                </div>
                <div className="text-lg font-bold text-white mt-1">{metrics.commentRate}%</div>
                <div className="text-[10px] text-gray-400 mt-0.5">{metrics.comments.toLocaleString()} total comments</div>
              </div>

              <div className="bg-[#141414] p-3.5 rounded-xl border border-[#262626]">
                <div className="text-xs text-gray-400 flex items-center justify-between">
                  <span>Like Ratio</span>
                  <Heart size={14} className="text-red-400" />
                </div>
                <div className="text-lg font-bold text-white mt-1">{metrics.likeRate}%</div>
                <div className="text-[10px] text-gray-400 mt-0.5">{metrics.likes.toLocaleString()} total likes</div>
              </div>
            </div>
          </div>

          {/* Right column: Instagram Live Mock Preview Card */}
          <div className="md:col-span-1">
            <div className="bg-[#000] border border-[#333] rounded-2xl overflow-hidden shadow-2xl relative max-w-[280px] mx-auto">
              <div className="relative aspect-[9/16] bg-gray-900 overflow-hidden">
                <img 
                  src={defaultThumbnail} 
                  alt="Reel Cover" 
                  className="w-full h-full object-cover opacity-85"
                />

                {/* Dark overlay gradients */}
                <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-transparent to-black/90" />

                {/* Top Bar inside reel */}
                <div className="absolute top-3 left-3 right-3 flex items-center justify-between text-white text-xs font-semibold">
                  <span className="bg-black/50 backdrop-blur-md px-2 py-0.5 rounded-md flex items-center gap-1">
                    <Play size={11} fill="white" /> Reels
                  </span>
                  <span className="text-[10px] bg-pink-600/80 px-2 py-0.5 rounded-md">
                    {metrics.views.toLocaleString()} views
                  </span>
                </div>

                {/* Right Reel Action Overlay Icons */}
                <div className="absolute right-3 bottom-14 flex flex-col items-center gap-4 text-white text-xs">
                  <div className="flex flex-col items-center">
                    <Heart size={22} className="text-red-500 fill-red-500 drop-shadow" />
                    <span className="text-[10px] font-medium mt-0.5">{metrics.likes.toLocaleString()}</span>
                  </div>
                  <div className="flex flex-col items-center">
                    <MessageCircle size={22} className="drop-shadow" />
                    <span className="text-[10px] font-medium mt-0.5">{metrics.comments.toLocaleString()}</span>
                  </div>
                  <div className="flex flex-col items-center">
                    <Share2 size={22} className="drop-shadow" />
                    <span className="text-[10px] font-medium mt-0.5">{metrics.shares.toLocaleString()}</span>
                  </div>
                  <div className="flex flex-col items-center">
                    <Bookmark size={22} className="drop-shadow" />
                    <span className="text-[10px] font-medium mt-0.5">{metrics.saves.toLocaleString()}</span>
                  </div>
                </div>

                {/* Bottom Profile & Title Info */}
                <div className="absolute left-3 right-12 bottom-3 text-white">
                  <div className="flex items-center gap-2 mb-1.5">
                    <div className="w-6 h-6 rounded-full bg-gradient-to-tr from-yellow-400 to-pink-500 p-[1px]">
                      <div className="w-full h-full bg-black rounded-full flex items-center justify-center text-[10px]">
                        <User size={12} />
                      </div>
                    </div>
                    <span className="text-xs font-bold tracking-tight">your_username</span>
                    <span className="text-[10px] border border-white/40 px-1.5 py-0.2 rounded text-white/90">Follow</span>
                  </div>
                  <p className="text-[11px] text-gray-200 line-clamp-2 leading-tight">
                    {safeData.title || 'Untitled Reel'}
                  </p>
                  <div className="flex items-center gap-1 text-[10px] text-gray-300 mt-1">
                    <Music size={10} className="animate-spin" />
                    <span className="truncate">Original Audio • Trending</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* TAB 2: CHARTS */}
      {activeTab === 'charts' && (
        <div className="space-y-5">
          {/* Retention Curve Chart */}
          <div className="bg-[#141414] p-5 rounded-xl border border-[#262626]">
            <div className="flex items-center justify-between mb-4">
              <div>
                <h3 className="text-sm font-bold text-white flex items-center gap-1.5">
                  <Zap size={16} className="text-amber-400" /> Retention & Audience Drop-off Curve
                </h3>
                <p className="text-xs text-gray-400">Estimated viewer percentage remaining from 0s to video end</p>
              </div>
              <div className="text-right">
                <span className="text-xs text-gray-400">Avg Watch Time: </span>
                <span className="text-xs font-bold text-pink-400">{metrics.avgWatchTime}s / {metrics.duration}s</span>
              </div>
            </div>

            <div className="h-56 w-full">
              <ResponsiveContainer width="100%" height="100%">
                <AreaChart data={metrics.retentionCurve} margin={{ top: 10, right: 10, left: -20, bottom: 0 }}>
                  <defs>
                    <linearGradient id="retentionGrad" x1="0" y1="0" x2="0" y2="1">
                      <stop offset="5%" stopColor="#EC4899" stopOpacity={0.8}/>
                      <stop offset="95%" stopColor="#EC4899" stopOpacity={0.0}/>
                    </linearGradient>
                  </defs>
                  <CartesianGrid strokeDasharray="3 3" stroke="#262626" />
                  <XAxis dataKey="time" stroke="#666" fontSize={11} />
                  <YAxis stroke="#666" fontSize={11} domain={[0, 100]} unit="%" />
                  <Tooltip 
                    contentStyle={{ backgroundColor: '#1f1f2e', borderColor: '#333', borderRadius: '8px', color: '#fff' }}
                    formatter={(val) => [`${val}% Retention`, 'Viewers']}
                  />
                  <Area 
                    type="monotone" 
                    dataKey="retention" 
                    stroke="#EC4899" 
                    strokeWidth={3} 
                    fillOpacity={1} 
                    fill="url(#retentionGrad)" 
                  />
                </AreaChart>
              </ResponsiveContainer>
            </div>
          </div>

          {/* Benchmark Comparison Chart */}
          <div className="bg-[#141414] p-5 rounded-xl border border-[#262626]">
            <h3 className="text-sm font-bold text-white mb-1 flex items-center gap-1.5">
              <BarChart2 size={16} className="text-blue-400" /> Your Reel vs Category Benchmark Average
            </h3>
            <p className="text-xs text-gray-400 mb-4">Comparison of key rates against top 10% performers in {safeData.category || 'your niche'}</p>

            <div className="h-52 w-full">
              <ResponsiveContainer width="100%" height="100%">
                <RechartsBarChart data={metrics.benchmarkData} margin={{ top: 10, right: 10, left: -20, bottom: 0 }}>
                  <CartesianGrid strokeDasharray="3 3" stroke="#262626" />
                  <XAxis dataKey="metric" stroke="#888" fontSize={11} />
                  <YAxis stroke="#888" fontSize={11} unit="%" />
                  <Tooltip 
                    contentStyle={{ backgroundColor: '#1f1f2e', borderColor: '#333', borderRadius: '8px', color: '#fff' }}
                  />
                  <Bar dataKey="yourReel" name="Your Reel" fill="#EC4899" radius={[4, 4, 0, 0]} />
                  <Bar dataKey="benchmark" name="Category Avg" fill="#4B5563" radius={[4, 4, 0, 0]} />
                </RechartsBarChart>
              </ResponsiveContainer>
            </div>
          </div>
        </div>
      )}

      {/* TAB 3: DIAGNOSTICS */}
      {activeTab === 'diagnostics' && (
        <div className="space-y-4">
          <div className="bg-[#141414] p-4 rounded-xl border border-[#262626]">
            <h3 className="text-sm font-bold text-white mb-3 flex items-center gap-2">
              <Sparkles size={16} className="text-pink-400" /> AI Diagnostic Observations
            </h3>

            <div className="space-y-3">
              {metrics.insights.map((item, idx) => (
                <div 
                  key={idx}
                  className={`p-3.5 rounded-xl border flex items-start gap-3 ${
                    item.type === 'success'
                      ? 'bg-emerald-950/30 border-emerald-500/30 text-emerald-200'
                      : item.type === 'warning'
                      ? 'bg-amber-950/30 border-amber-500/30 text-amber-200'
                      : 'bg-rose-950/30 border-rose-500/30 text-rose-200'
                  }`}
                >
                  <div className="mt-0.5">
                    {item.type === 'success' && <CheckCircle2 size={18} className="text-emerald-400" />}
                    {item.type === 'warning' && <Info size={18} className="text-amber-400" />}
                    {item.type === 'alert' && <AlertTriangle size={18} className="text-rose-400" />}
                  </div>
                  <div>
                    <div className="text-xs font-bold text-white mb-0.5">{item.title}</div>
                    <div className="text-xs opacity-90">{item.description}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Actionable Next Steps */}
          <div className="bg-[#141414] p-4 rounded-xl border border-[#262626]">
            <h3 className="text-sm font-bold text-white mb-3 flex items-center gap-2">
              <Zap size={16} className="text-yellow-400" /> Recommendations to Double Your Next Reel's Reach
            </h3>
            <ul className="space-y-2 text-xs text-gray-300">
              <li className="flex items-center gap-2 bg-[#1c1c1c] p-2.5 rounded-lg border border-[#2c2c2c]">
                <span className="w-5 h-5 rounded-full bg-pink-500/20 text-pink-400 font-bold flex items-center justify-center text-[10px]">1</span>
                <span><strong>Post Part 2 within 24h:</strong> Capitalize on high share signals by creating a follow-up series.</span>
              </li>
              <li className="flex items-center gap-2 bg-[#1c1c1c] p-2.5 rounded-lg border border-[#2c2c2c]">
                <span className="w-5 h-5 rounded-full bg-pink-500/20 text-pink-400 font-bold flex items-center justify-center text-[10px]">2</span>
                <span><strong>Pin Top Comment:</strong> Ask a question in your pinned comment to incentivize quick replies.</span>
              </li>
              <li className="flex items-center gap-2 bg-[#1c1c1c] p-2.5 rounded-lg border border-[#2c2c2c]">
                <span className="w-5 h-5 rounded-full bg-pink-500/20 text-pink-400 font-bold flex items-center justify-center text-[10px]">3</span>
                <span><strong>Optimize Audio:</strong> Pair with trending tracks under 10k uses for algorithm boosts.</span>
              </li>
            </ul>
          </div>
        </div>
      )}
    </div>
  );
};

export default ReelResultsView;
