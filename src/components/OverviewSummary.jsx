import React from 'react';
import { 
  Users, 
  TrendingUp, 
  HeartHandshake, 
  Grid, 
  ChevronRight, 
  ArrowUpRight, 
  ArrowDownRight,
  Eye,
  MousePointer,
  Sparkles,
  Info
} from 'lucide-react';

export default function OverviewSummary({ insights, activeTab, setActiveTab }) {
  const { overview } = insights;

  const cards = [
    {
      id: 'reached',
      title: 'Accounts reached',
      value: overview.accountsReached.value.toLocaleString(),
      change: overview.accountsReached.change,
      isPositive: overview.accountsReached.isPositive,
      icon: Users,
      color: 'from-instagram-pink to-instagram-purple',
      iconBg: 'bg-instagram-pink/15 text-instagram-pink',
      description: 'Total unique accounts that saw your content at least once'
    },
    {
      id: 'engaged',
      title: 'Accounts engaged',
      value: overview.accountsEngaged.value.toLocaleString(),
      change: overview.accountsEngaged.change,
      isPositive: overview.accountsEngaged.isPositive,
      icon: HeartHandshake,
      color: 'from-instagram-orange to-instagram-yellow',
      iconBg: 'bg-instagram-orange/15 text-instagram-orange',
      description: 'Accounts that liked, commented, saved, shared or replied'
    },
    {
      id: 'followers',
      title: 'Total followers',
      value: overview.totalFollowers.value.toLocaleString(),
      change: overview.totalFollowers.change,
      netGainText: `+${overview.totalFollowers.netGain.toLocaleString()} net followers`,
      isPositive: overview.totalFollowers.isPositive,
      icon: TrendingUp,
      color: 'from-instagram-blue to-indigo-500',
      iconBg: 'bg-instagram-blue/15 text-instagram-blue',
      description: 'Total number of accounts following your profile'
    },
    {
      id: 'shared',
      title: 'Content you shared',
      value: overview.contentShared.value,
      change: overview.contentShared.change,
      isPositive: overview.contentShared.isPositive,
      icon: Grid,
      color: 'from-emerald-500 to-teal-400',
      iconBg: 'bg-emerald-500/15 text-emerald-400',
      description: 'Reels, posts, stories & lives created in this timeframe'
    }
  ];

  return (
    <div className="space-y-6">
      
      {/* Top Banner Notice - Official Meta Style */}
      <div className="p-4 rounded-2xl bg-gradient-to-r from-instagram-dark via-instagram-card to-instagram-dark border border-instagram-border flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 shadow-xl">
        <div className="flex items-center space-x-3">
          <div className="p-2.5 rounded-xl bg-ig-gradient text-white shadow-md">
            <Sparkles className="w-5 h-5" />
          </div>
          <div>
            <div className="flex items-center space-x-2">
              <h2 className="text-base font-bold text-white tracking-tight">Professional Insights Overview</h2>
              <span className="px-2 py-0.5 rounded-full text-[10px] font-bold bg-instagram-pink/20 text-instagram-pink border border-instagram-pink/30">
                Official API Sync
              </span>
            </div>
            <p className="text-xs text-neutral-400 mt-0.5">
              Overview of performance metrics for <span className="text-white font-medium">{insights.dateRangeText}</span>
            </p>
          </div>
        </div>

        <div className="flex items-center space-x-2 w-full sm:w-auto">
          <button 
            onClick={() => setActiveTab('copilot')}
            className="w-full sm:w-auto px-4 py-2 rounded-xl bg-instagram-dark hover:bg-neutral-800 border border-instagram-border text-xs font-semibold text-white transition-all flex items-center justify-center space-x-1.5"
          >
            <Sparkles className="w-3.5 h-3.5 text-instagram-yellow" />
            <span>AI Account Copilot</span>
          </button>
        </div>
      </div>

      {/* 4 Core Instagram Dashboard Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        {cards.map((card) => {
          const Icon = card.icon;
          const isActive = activeTab === card.id;

          return (
            <div
              key={card.id}
              onClick={() => setActiveTab(card.id)}
              className={`group relative p-5 rounded-2xl cursor-pointer transition-all duration-300 border ${
                isActive
                  ? 'bg-instagram-card border-instagram-pink shadow-xl shadow-instagram-pink/10 ring-1 ring-instagram-pink'
                  : 'bg-instagram-dark border-instagram-border hover:border-neutral-700 hover:bg-instagram-card/80'
              }`}
            >
              <div className="flex items-center justify-between mb-3">
                <span className="text-xs font-semibold text-neutral-400 group-hover:text-neutral-200 transition-colors">
                  {card.title}
                </span>
                <div className={`p-2 rounded-xl ${card.iconBg}`}>
                  <Icon className="w-4 h-4" />
                </div>
              </div>

              <div className="flex items-baseline justify-between">
                <span className="text-2xl lg:text-3xl font-extrabold text-white tracking-tight">
                  {card.value}
                </span>
                
                <div className={`flex items-center space-x-0.5 text-xs font-bold ${
                  card.isPositive ? 'text-emerald-400' : 'text-rose-400'
                }`}>
                  {card.isPositive ? <ArrowUpRight className="w-3.5 h-3.5" /> : <ArrowDownRight className="w-3.5 h-3.5" />}
                  <span>{card.change > 0 ? `+${card.change}%` : `${card.change}%`}</span>
                </div>
              </div>

              {card.netGainText ? (
                <p className="text-[11px] font-medium text-emerald-400/90 mt-2">
                  {card.netGainText}
                </p>
              ) : (
                <p className="text-[11px] text-neutral-500 mt-2 truncate">
                  vs. previous 30 days
                </p>
              )}

              <div className="mt-4 pt-3 border-t border-neutral-800/80 flex items-center justify-between text-[11px] font-semibold text-instagram-blue group-hover:translate-x-1 transition-transform">
                <span>View Details</span>
                <ChevronRight className="w-3.5 h-3.5" />
              </div>
            </div>
          );
        })}
      </div>

      {/* Secondary Metrics: Profile Activity & Conversions */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        
        {/* Profile Visits Card */}
        <div className="p-5 rounded-2xl bg-instagram-dark border border-instagram-border hover:border-neutral-700 transition-all">
          <div className="flex items-center justify-between mb-3">
            <div className="flex items-center space-x-2">
              <div className="p-2 rounded-xl bg-blue-500/10 text-blue-400">
                <Eye className="w-4 h-4" />
              </div>
              <div>
                <h3 className="text-sm font-bold text-white">Profile Visits</h3>
                <p className="text-[11px] text-neutral-400">Total visits to your profile page</p>
              </div>
            </div>
            <div className="flex items-center space-x-0.5 text-xs font-bold text-emerald-400">
              <ArrowUpRight className="w-3.5 h-3.5" />
              <span>+{overview.profileVisits.change}%</span>
            </div>
          </div>
          <div className="flex items-baseline justify-between mt-2">
            <span className="text-2xl font-bold text-white">{overview.profileVisits.value.toLocaleString()}</span>
            <span className="text-xs text-neutral-400">94.2% organic visits</span>
          </div>
          <div className="w-full bg-neutral-800 h-1.5 rounded-full mt-3 overflow-hidden">
            <div className="bg-gradient-to-r from-blue-500 to-indigo-500 h-full rounded-full w-[94%]"></div>
          </div>
        </div>

        {/* External Website Clicks Card */}
        <div className="p-5 rounded-2xl bg-instagram-dark border border-instagram-border hover:border-neutral-700 transition-all">
          <div className="flex items-center justify-between mb-3">
            <div className="flex items-center space-x-2">
              <div className="p-2 rounded-xl bg-amber-500/10 text-amber-400">
                <MousePointer className="w-4 h-4" />
              </div>
              <div>
                <h3 className="text-sm font-bold text-white">External Link Taps</h3>
                <p className="text-[11px] text-neutral-400">Bio link & story link clicks</p>
              </div>
            </div>
            <div className="flex items-center space-x-0.5 text-xs font-bold text-emerald-400">
              <ArrowUpRight className="w-3.5 h-3.5" />
              <span>+{overview.websiteClicks.change}%</span>
            </div>
          </div>
          <div className="flex items-baseline justify-between mt-2">
            <span className="text-2xl font-bold text-white">{overview.websiteClicks.value.toLocaleString()}</span>
            <span className="text-xs font-semibold text-amber-400">19.5% conversion rate</span>
          </div>
          <div className="w-full bg-neutral-800 h-1.5 rounded-full mt-3 overflow-hidden">
            <div className="bg-gradient-to-r from-amber-500 to-instagram-orange h-full rounded-full w-[78%]"></div>
          </div>
        </div>

      </div>

    </div>
  );
}
