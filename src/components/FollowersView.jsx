import React, { useState } from 'react';
import { 
  ResponsiveContainer, 
  LineChart, 
  Line, 
  XAxis, 
  YAxis, 
  Tooltip, 
  BarChart, 
  Bar 
} from 'recharts';
import { 
  TrendingUp, 
  UserPlus, 
  UserMinus, 
  Clock, 
  Calendar as CalendarIcon, 
  Sparkles,
  Flame
} from 'lucide-react';

export default function FollowersView({ insights }) {
  const { followerDetails } = insights;
  const [activeSubTab, setActiveSubTab] = useState('growth');

  return (
    <div className="space-y-6">
      
      {/* Top Followers Banner */}
      <div className="p-6 rounded-2xl bg-instagram-dark border border-instagram-border flex flex-col md:flex-row md:items-center justify-between gap-6">
        <div>
          <div className="flex items-center space-x-2">
            <span className="p-2 rounded-xl bg-instagram-blue/10 text-instagram-blue">
              <TrendingUp className="w-5 h-5" />
            </span>
            <h2 className="text-xl font-bold text-white tracking-tight">Total Followers & Activity Insights</h2>
          </div>
          <p className="text-xs text-neutral-400 mt-1">
            Track follower growth trajectory and discover the exact hours your audience is online.
          </p>
        </div>

        <div className="grid grid-cols-3 gap-3 bg-black/50 p-3 rounded-2xl border border-instagram-border">
          <div className="text-center px-2">
            <p className="text-[10px] uppercase font-bold text-neutral-400">Total</p>
            <p className="text-lg font-extrabold text-white">{(insights.overview.totalFollowers.value).toLocaleString()}</p>
          </div>
          <div className="text-center px-2 border-x border-instagram-border">
            <p className="text-[10px] uppercase font-bold text-emerald-400">Follows</p>
            <p className="text-lg font-extrabold text-emerald-400">+{followerDetails.follows.toLocaleString()}</p>
          </div>
          <div className="text-center px-2">
            <p className="text-[10px] uppercase font-bold text-rose-400">Unfollows</p>
            <p className="text-lg font-extrabold text-rose-400">-{followerDetails.unfollows.toLocaleString()}</p>
          </div>
        </div>
      </div>

      {/* Followers Growth Chart */}
      <div className="p-6 rounded-2xl bg-instagram-dark border border-instagram-border">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-6">
          <div>
            <h3 className="text-base font-bold text-white">Net Follower Growth</h3>
            <p className="text-xs text-neutral-400">Daily breakdown of new follows vs unfollows</p>
          </div>

          <div className="flex items-center space-x-2 text-xs font-semibold text-emerald-400 bg-emerald-500/10 px-3 py-1.5 rounded-full border border-emerald-500/20">
            <TrendingUp className="w-4 h-4" />
            <span>+{followerDetails.netGrowth.toLocaleString()} Net Gain in 30 Days</span>
          </div>
        </div>

        <div className="h-72 w-full">
          <ResponsiveContainer width="100%" height="100%">
            <LineChart data={followerDetails.growthHistory}>
              <XAxis dataKey="date" stroke="#65676B" fontSize={11} tickLine={false} />
              <YAxis stroke="#65676B" fontSize={11} tickLine={false} />
              <Tooltip 
                contentStyle={{ backgroundColor: '#1C1C1E', borderColor: '#262626', borderRadius: '12px', color: '#fff' }}
              />
              <Line type="monotone" dataKey="follows" stroke="#10B981" strokeWidth={2.5} dot={{ r: 4 }} name="Follows (+)" />
              <Line type="monotone" dataKey="unfollows" stroke="#F43F5E" strokeWidth={2} strokeDasharray="4 4" dot={false} name="Unfollows (-)" />
              <Line type="monotone" dataKey="net" stroke="#0095F6" strokeWidth={3} dot={{ r: 5 }} name="Net Growth" />
            </LineChart>
          </ResponsiveContainer>
        </div>
      </div>

      {/* Most Active Times Section (Hours & Days Heatmap) */}
      <div className="p-6 rounded-2xl bg-instagram-dark border border-instagram-border">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-6">
          <div>
            <div className="flex items-center space-x-2">
              <Clock className="w-5 h-5 text-instagram-yellow" />
              <h3 className="text-base font-bold text-white">Most Active Times (Optimal Posting)</h3>
            </div>
            <p className="text-xs text-neutral-400">Hours of the day when your followers are most active on Instagram</p>
          </div>

          <div className="flex items-center space-x-1 bg-black p-1 rounded-xl border border-instagram-border">
            <button
              onClick={() => setActiveSubTab('growth')}
              className={`px-3 py-1 text-xs font-semibold rounded-lg transition-all ${
                activeSubTab === 'growth' ? 'bg-instagram-yellow text-black font-bold' : 'text-neutral-400 hover:text-white'
              }`}
            >
              Hours
            </button>
            <button
              onClick={() => setActiveSubTab('days')}
              className={`px-3 py-1 text-xs font-semibold rounded-lg transition-all ${
                activeSubTab === 'days' ? 'bg-instagram-yellow text-black font-bold' : 'text-neutral-400 hover:text-white'
              }`}
            >
              Days
            </button>
          </div>
        </div>

        {activeSubTab === 'growth' ? (
          <div>
            <div className="h-60 w-full mb-4">
              <ResponsiveContainer width="100%" height="100%">
                <BarChart data={followerDetails.hourlyActiveFollowers}>
                  <XAxis dataKey="hour" stroke="#65676B" fontSize={11} tickLine={false} />
                  <YAxis stroke="#65676B" fontSize={11} tickLine={false} tickFormatter={(v) => `${(v/1000).toFixed(0)}k`} />
                  <Tooltip contentStyle={{ backgroundColor: '#1C1C1E', borderColor: '#262626', borderRadius: '12px' }} />
                  <Bar dataKey="count" fill="#FCAF45" radius={[6, 6, 0, 0]} name="Active Followers" />
                </BarChart>
              </ResponsiveContainer>
            </div>
            <div className="p-4 rounded-xl bg-instagram-yellow/10 border border-instagram-yellow/20 flex items-center justify-between">
              <div className="flex items-center space-x-2">
                <Flame className="w-5 h-5 text-instagram-yellow" />
                <span className="text-xs font-bold text-white">Peak Activity Hour: <span className="text-instagram-yellow">6:00 PM - 9:00 PM EST</span> (215,000 active followers)</span>
              </div>
              <span className="text-xs text-neutral-400 font-semibold hidden sm:inline">Best time to post next Reel</span>
            </div>
          </div>
        ) : (
          <div>
            <div className="h-60 w-full mb-4">
              <ResponsiveContainer width="100%" height="100%">
                <BarChart data={followerDetails.mostActiveDays}>
                  <XAxis dataKey="day" stroke="#65676B" fontSize={11} tickLine={false} />
                  <YAxis stroke="#65676B" fontSize={11} tickLine={false} tickFormatter={(v) => `${(v/1000).toFixed(0)}k`} />
                  <Tooltip contentStyle={{ backgroundColor: '#1C1C1E', borderColor: '#262626', borderRadius: '12px' }} />
                  <Bar dataKey="activeCount" fill="#E1306C" radius={[6, 6, 0, 0]} name="Active Followers" />
                </BarChart>
              </ResponsiveContainer>
            </div>
            <div className="p-4 rounded-xl bg-instagram-pink/10 border border-instagram-pink/20 flex items-center space-x-2">
              <CalendarIcon className="w-5 h-5 text-instagram-pink" />
              <span className="text-xs font-bold text-white">Peak Activity Day: <span className="text-instagram-pink">Saturday & Friday</span> (268,000 active followers)</span>
            </div>
          </div>
        )}

      </div>

    </div>
  );
}
