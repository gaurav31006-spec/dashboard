import React from 'react';
import { 
  X, 
  Play, 
  Clock, 
  Users, 
  Heart, 
  MessageCircle, 
  Send, 
  Bookmark, 
  UserPlus, 
  Eye, 
  MousePointer,
  Sparkles,
  CheckCircle2,
  TrendingUp,
  Share2
} from 'lucide-react';
import { ResponsiveContainer, LineChart, Line, XAxis, YAxis, Tooltip } from 'recharts';

export default function PostDetailModal({ post, onClose, accountName }) {
  if (!post) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-black/80 backdrop-blur-md overflow-y-auto animate-in fade-in duration-200">
      
      {/* Modal Drawer Card */}
      <div className="relative w-full max-w-4xl bg-instagram-dark border border-instagram-border rounded-3xl shadow-2xl overflow-hidden my-auto max-h-[90vh] flex flex-col">
        
        {/* Top Header Bar */}
        <div className="flex items-center justify-between px-6 py-4 border-b border-instagram-border bg-black/50 sticky top-0 z-10">
          <div className="flex items-center space-x-2">
            <span className="px-3 py-1 rounded-full text-xs font-extrabold bg-ig-gradient text-white">
              {post.type} INSIGHTS
            </span>
            <span className="text-xs text-neutral-400 font-semibold">{post.dateTimestamp}</span>
          </div>

          <button
            onClick={onClose}
            className="p-2 rounded-full bg-instagram-card hover:bg-neutral-800 text-neutral-400 hover:text-white transition-all"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Modal Scrollable Body */}
        <div className="p-6 overflow-y-auto space-y-6">
          
          {/* Main Grid: Left Post Preview, Right Overview Stats */}
          <div className="grid grid-cols-1 md:grid-cols-12 gap-6">
            
            {/* Left: Thumbnail & Caption */}
            <div className="md:col-span-5 space-y-4">
              <div className="relative aspect-square w-full rounded-2xl overflow-hidden border border-instagram-border bg-black">
                <img src={post.thumbnail} alt={post.caption} className="w-full h-full object-cover" />
                
                {post.type === 'REEL' && (
                  <div className="absolute inset-0 bg-black/30 flex items-center justify-center">
                    <div className="w-14 h-14 rounded-full bg-black/60 backdrop-blur-md border border-white/20 flex items-center justify-center text-white">
                      <Play className="w-6 h-6 fill-white ml-0.5" />
                    </div>
                  </div>
                )}
              </div>

              <div className="p-4 rounded-2xl bg-instagram-card border border-instagram-border space-y-2">
                <div className="flex items-center space-x-2">
                  <span className="text-xs font-bold text-white">@{accountName}</span>
                  <CheckCircle2 className="w-3.5 h-3.5 text-instagram-blue" />
                </div>
                <p className="text-xs text-neutral-300 line-clamp-4 leading-relaxed font-sans">
                  {post.caption}
                </p>
                {post.aiRating && (
                  <div className="pt-2 border-t border-instagram-border">
                    <span className="text-[11px] font-bold text-instagram-pink flex items-center space-x-1">
                      <Sparkles className="w-3.5 h-3.5" />
                      <span>{post.aiRating}</span>
                    </span>
                  </div>
                )}
              </div>
            </div>

            {/* Right: Key Stats Summary */}
            <div className="md:col-span-7 space-y-4">
              
              {/* Accounts Reached Box */}
              <div className="p-5 rounded-2xl bg-instagram-card border border-instagram-border">
                <div className="flex items-center justify-between mb-3">
                  <div className="flex items-center space-x-2">
                    <Users className="w-4 h-4 text-instagram-pink" />
                    <span className="text-sm font-bold text-white">Accounts Reached</span>
                  </div>
                  <span className="text-2xl font-extrabold text-white">{(post.reach).toLocaleString()}</span>
                </div>

                <div className="space-y-2">
                  <div className="flex items-center justify-between text-xs text-neutral-400">
                    <span>Non-followers reached</span>
                    <span className="font-bold text-instagram-pink">{post.nonFollowerReachPct}%</span>
                  </div>
                  <div className="w-full bg-black h-2 rounded-full overflow-hidden border border-instagram-border">
                    <div className="bg-instagram-pink h-full rounded-full" style={{ width: `${post.nonFollowerReachPct}%` }}></div>
                  </div>
                </div>
              </div>

              {/* Plays & Watch Time (For Reels & Stories) */}
              {post.plays > 0 && (
                <div className="grid grid-cols-2 gap-3">
                  <div className="p-4 rounded-2xl bg-instagram-card border border-instagram-border">
                    <div className="flex items-center space-x-2 text-instagram-yellow mb-1">
                      <Play className="w-4 h-4 fill-instagram-yellow" />
                      <span className="text-xs font-bold uppercase tracking-wider">Total Plays</span>
                    </div>
                    <p className="text-xl font-extrabold text-white">{(post.plays).toLocaleString()}</p>
                    <p className="text-[10px] text-neutral-400 mt-1">
                      {(post.initialPlays || 0).toLocaleString()} initial / {(post.replays || 0).toLocaleString()} replays
                    </p>
                  </div>

                  <div className="p-4 rounded-2xl bg-instagram-card border border-instagram-border">
                    <div className="flex items-center space-x-2 text-indigo-400 mb-1">
                      <Clock className="w-4 h-4" />
                      <span className="text-xs font-bold uppercase tracking-wider">Watch Time</span>
                    </div>
                    <p className="text-xl font-extrabold text-white">{post.avgWatchTimeSec || '14.2s'}</p>
                    <p className="text-[10px] text-neutral-400 mt-1">
                      {post.watchTimeHours || 120} total hours watched
                    </p>
                  </div>
                </div>
              )}

              {/* Content Interactions Card */}
              <div className="p-5 rounded-2xl bg-instagram-card border border-instagram-border space-y-4">
                <h4 className="text-xs font-bold uppercase tracking-wider text-neutral-400 border-b border-instagram-border pb-2">
                  Content Interactions
                </h4>

                <div className="grid grid-cols-4 gap-2 text-center">
                  <div className="p-2.5 rounded-xl bg-black/40 border border-instagram-border">
                    <Heart className="w-4 h-4 mx-auto text-rose-500 fill-rose-500 mb-1" />
                    <span className="block text-sm font-bold text-white">{(post.likes).toLocaleString()}</span>
                    <span className="text-[10px] text-neutral-400">Likes</span>
                  </div>

                  <div className="p-2.5 rounded-xl bg-black/40 border border-instagram-border">
                    <MessageCircle className="w-4 h-4 mx-auto text-blue-400 mb-1" />
                    <span className="block text-sm font-bold text-white">{(post.comments).toLocaleString()}</span>
                    <span className="text-[10px] text-neutral-400">Comments</span>
                  </div>

                  <div className="p-2.5 rounded-xl bg-black/40 border border-instagram-border">
                    <Send className="w-4 h-4 mx-auto text-emerald-400 mb-1" />
                    <span className="block text-sm font-bold text-white">{(post.shares).toLocaleString()}</span>
                    <span className="text-[10px] text-neutral-400">Shares</span>
                  </div>

                  <div className="p-2.5 rounded-xl bg-black/40 border border-instagram-border">
                    <Bookmark className="w-4 h-4 mx-auto text-amber-400 fill-amber-400 mb-1" />
                    <span className="block text-sm font-bold text-white">{(post.saves).toLocaleString()}</span>
                    <span className="text-[10px] text-neutral-400">Saves</span>
                  </div>
                </div>
              </div>

            </div>

          </div>

          {/* Retention Curve Chart (If available for Reels) */}
          {post.retention && (
            <div className="p-5 rounded-2xl bg-instagram-card border border-instagram-border">
              <div className="flex items-center justify-between mb-4">
                <div>
                  <h4 className="text-sm font-bold text-white">Audience Retention Curve</h4>
                  <p className="text-xs text-neutral-400">% of viewers watching throughout video duration</p>
                </div>
                <span className="text-xs font-bold text-emerald-400 bg-emerald-500/10 px-2.5 py-1 rounded-full border border-emerald-500/20">
                  52% Completed Video
                </span>
              </div>

              <div className="h-44 w-full">
                <ResponsiveContainer width="100%" height="100%">
                  <LineChart data={post.retention}>
                    <XAxis dataKey="time" stroke="#65676B" fontSize={10} tickLine={false} />
                    <YAxis stroke="#65676B" fontSize={10} tickLine={false} domain={[0, 100]} tickFormatter={(v) => `${v}%`} />
                    <Tooltip contentStyle={{ backgroundColor: '#1C1C1E', borderColor: '#262626', borderRadius: '12px' }} />
                    <Line type="monotone" dataKey="percentage" stroke="#E1306C" strokeWidth={3} dot={{ r: 4 }} name="Audience %" />
                  </LineChart>
                </ResponsiveContainer>
              </div>
            </div>
          )}

          {/* Profile Activity Driven by Post */}
          <div className="p-5 rounded-2xl bg-instagram-card border border-instagram-border">
            <h4 className="text-xs font-bold uppercase tracking-wider text-neutral-400 mb-3">
              Profile Activity Generated by This Post
            </h4>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
              <div className="flex items-center justify-between p-3 rounded-xl bg-black/40 border border-instagram-border">
                <div className="flex items-center space-x-2">
                  <UserPlus className="w-4 h-4 text-emerald-400" />
                  <span className="text-xs font-semibold text-white">New Follows</span>
                </div>
                <span className="text-sm font-bold text-emerald-400">+{post.followsFromPost}</span>
              </div>

              <div className="flex items-center justify-between p-3 rounded-xl bg-black/40 border border-instagram-border">
                <div className="flex items-center space-x-2">
                  <Eye className="w-4 h-4 text-blue-400" />
                  <span className="text-xs font-semibold text-white">Profile Visits</span>
                </div>
                <span className="text-sm font-bold text-white">{(post.profileVisits).toLocaleString()}</span>
              </div>

              <div className="flex items-center justify-between p-3 rounded-xl bg-black/40 border border-instagram-border">
                <div className="flex items-center space-x-2">
                  <MousePointer className="w-4 h-4 text-amber-400" />
                  <span className="text-xs font-semibold text-white">External Link Taps</span>
                </div>
                <span className="text-sm font-bold text-amber-400">{(post.linkClicks).toLocaleString()}</span>
              </div>
            </div>
          </div>

        </div>

      </div>
    </div>
  );
}
