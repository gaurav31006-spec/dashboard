import React, { useState } from 'react';
import { 
  Instagram, 
  ChevronDown, 
  Calendar, 
  Download, 
  RefreshCw, 
  CheckCircle2, 
  Sparkles, 
  Moon, 
  Sun,
  ShieldCheck,
  Search
} from 'lucide-react';
import { INSTAGRAM_ACCOUNTS } from '../mockData/instagramData';

export default function Header({ 
  selectedAccount, 
  setSelectedAccount, 
  timeRange, 
  setTimeRange,
  onExportClick,
  onRefresh,
  isRefreshing,
  darkMode,
  setDarkMode
}) {
  const [accountDropdownOpen, setAccountDropdownOpen] = useState(false);

  const activeAccount = INSTAGRAM_ACCOUNTS.find(acc => acc.id === selectedAccount) || INSTAGRAM_ACCOUNTS[0];

  const timeRanges = ['Last 7 Days', 'Last 14 Days', 'Last 30 Days', 'Last 90 Days'];

  return (
    <header className="sticky top-0 z-40 bg-black/90 backdrop-blur-md border-b border-instagram-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          
          {/* Left: Instagram Logo & Account Selector */}
          <div className="flex items-center space-x-4">
            <div className="flex items-center space-x-2">
              <div className="w-9 h-9 rounded-xl bg-ig-gradient flex items-center justify-center shadow-lg shadow-instagram-pink/20">
                <Instagram className="w-5 h-5 text-white" />
              </div>
              <div className="hidden md:block">
                <span className="font-bold text-lg tracking-tight bg-gradient-to-r from-white via-neutral-200 to-neutral-400 bg-clip-text text-transparent">
                  Meta Professional Insights
                </span>
              </div>
            </div>

            <div className="h-5 w-[1px] bg-instagram-border hidden sm:block"></div>

            {/* Account Selector Pill */}
            <div className="relative">
              <button
                onClick={() => setAccountDropdownOpen(!accountDropdownOpen)}
                className="flex items-center space-x-2 px-3 py-1.5 rounded-full bg-instagram-dark hover:bg-instagram-card border border-instagram-border transition-all duration-200 text-sm font-medium"
              >
                <div className="relative w-6 h-6 rounded-full overflow-hidden border border-instagram-pink/50">
                  <img src={activeAccount.avatar} alt={activeAccount.username} className="w-full h-full object-cover" />
                </div>
                <span className="text-white font-semibold">{activeAccount.username}</span>
                {activeAccount.verified && (
                  <CheckCircle2 className="w-4 h-4 text-instagram-blue fill-instagram-blue/20" />
                )}
                <ChevronDown className={`w-4 h-4 text-neutral-400 transition-transform ${accountDropdownOpen ? 'rotate-180' : ''}`} />
              </button>

              {/* Account Dropdown Menu */}
              {accountDropdownOpen && (
                <div className="absolute left-0 mt-2 w-72 bg-instagram-card border border-instagram-border rounded-2xl shadow-2xl z-50 overflow-hidden py-2 animate-in fade-in slide-in-from-top-2">
                  <div className="px-4 py-2 border-b border-instagram-border">
                    <p className="text-xs font-semibold text-neutral-400 uppercase tracking-wider">Switch Accounts</p>
                  </div>
                  {INSTAGRAM_ACCOUNTS.map((account) => (
                    <button
                      key={account.id}
                      onClick={() => {
                        setSelectedAccount(account.id);
                        setAccountDropdownOpen(false);
                      }}
                      className={`w-full flex items-center justify-between px-4 py-3 text-left hover:bg-neutral-800/60 transition-colors ${
                        selectedAccount === account.id ? 'bg-instagram-blue/10 border-l-4 border-instagram-blue' : ''
                      }`}
                    >
                      <div className="flex items-center space-x-3">
                        <div className="w-9 h-9 rounded-full overflow-hidden border border-instagram-border">
                          <img src={account.avatar} alt={account.username} className="w-full h-full object-cover" />
                        </div>
                        <div>
                          <div className="flex items-center space-x-1">
                            <span className="text-sm font-semibold text-white">{account.username}</span>
                            {account.verified && <CheckCircle2 className="w-3.5 h-3.5 text-instagram-blue" />}
                          </div>
                          <span className="text-xs text-neutral-400">{(account.followersCount / 1000).toFixed(1)}k followers</span>
                        </div>
                      </div>
                      {selectedAccount === account.id && (
                        <div className="w-2 h-2 rounded-full bg-instagram-blue"></div>
                      )}
                    </button>
                  ))}
                  <div className="p-2 border-t border-instagram-border">
                    <button 
                      onClick={() => setAccountDropdownOpen(false)} 
                      className="w-full text-center text-xs font-medium text-instagram-blue hover:underline py-1"
                    >
                      + Connect Creator Account
                    </button>
                  </div>
                </div>
              )}
            </div>
          </div>

          {/* Right: Actions, Date Picker & Export */}
          <div className="flex items-center space-x-2 sm:space-x-3">
            {/* Time Range Selector */}
            <div className="hidden lg:flex items-center bg-instagram-dark p-1 rounded-full border border-instagram-border">
              {timeRanges.map((range) => (
                <button
                  key={range}
                  onClick={() => setTimeRange(range)}
                  className={`px-3 py-1 text-xs font-semibold rounded-full transition-all ${
                    timeRange === range
                      ? 'bg-gradient-to-r from-instagram-pink to-instagram-purple text-white shadow-md'
                      : 'text-neutral-400 hover:text-white'
                  }`}
                >
                  {range}
                </button>
              ))}
            </div>

            {/* Refresh Button */}
            <button
              onClick={onRefresh}
              disabled={isRefreshing}
              className="p-2 rounded-full bg-instagram-dark hover:bg-instagram-card border border-instagram-border text-neutral-300 hover:text-white transition-all disabled:opacity-50"
              title="Refresh Insights"
            >
              <RefreshCw className={`w-4 h-4 ${isRefreshing ? 'animate-spin text-instagram-pink' : ''}`} />
            </button>

            {/* Dark/Light Mode Toggle */}
            <button
              onClick={() => setDarkMode(!darkMode)}
              className="p-2 rounded-full bg-instagram-dark hover:bg-instagram-card border border-instagram-border text-neutral-300 hover:text-white transition-all"
              title="Toggle Theme"
            >
              {darkMode ? <Sun className="w-4 h-4 text-amber-400" /> : <Moon className="w-4 h-4 text-indigo-400" />}
            </button>

            {/* Export Insights Button */}
            <button
              onClick={onExportClick}
              className="flex items-center space-x-2 px-3.5 py-1.5 rounded-full bg-instagram-blue hover:bg-instagram-blue-hover text-white text-xs font-semibold shadow-lg shadow-instagram-blue/20 transition-all hover:scale-105 active:scale-95"
            >
              <Download className="w-3.5 h-3.5" />
              <span className="hidden sm:inline">Export Insights</span>
            </button>
          </div>

        </div>
      </div>
    </header>
  );
}
