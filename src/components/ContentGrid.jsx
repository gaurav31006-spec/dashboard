import React, { useState } from 'react';
import { 
  Film, 
  Layers, 
  Image as ImageIcon, 
  Play, 
  Heart, 
  MessageCircle, 
  Send, 
  Bookmark, 
  Eye, 
  Sparkles,
  Filter,
  ArrowUpDown,
  Tv
} from 'lucide-react';

export default function ContentGrid({ posts, onPostClick }) {
  const [filterType, setFilterType] = useState('ALL');
  const [sortBy, setSortBy] = useState('reach');

  const filteredPosts = posts.filter(post => {
    if (filterType === 'ALL') return true;
    return post.type === filterType;
  }).sort((a, b) => {
    if (sortBy === 'reach') return b.reach - a.reach;
    if (sortBy === 'plays') return (b.plays || 0) - (a.plays || 0);
    if (sortBy === 'likes') return b.likes - a.likes;
    if (sortBy === 'comments') return b.comments - a.comments;
    if (sortBy === 'shares') return b.shares - a.shares;
    if (sortBy === 'saves') return b.saves - a.saves;
    return 0;
  });

  return (
    <div className="space-y-6">
      
      {/* Content Shared Controls Header */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 p-5 rounded-2xl bg-instagram-dark border border-instagram-border">
        <div>
          <h2 className="text-xl font-bold text-white tracking-tight">Content You Shared</h2>
          <p className="text-xs text-neutral-400 mt-0.5">
            Click on any post to inspect detailed Instagram video plays, watch time retention, and profile actions.
          </p>
        </div>

        <div className="flex items-center space-x-3 flex-wrap">
          {/* Format Filter Pills */}
          <div className="flex items-center space-x-1 bg-black p-1 rounded-xl border border-instagram-border">
            {['ALL', 'REEL', 'CAROUSEL', 'POST', 'STORY'].map((type) => (
              <button
                key={type}
                onClick={() => setFilterType(type)}
                className={`px-3 py-1 text-xs font-semibold rounded-lg transition-all ${
                  filterType === type
                    ? 'bg-gradient-to-r from-instagram-pink to-instagram-purple text-white shadow'
                    : 'text-neutral-400 hover:text-white'
                }`}
              >
                {type === 'ALL' ? 'All Formats' : type}
              </button>
            ))}
          </div>

          {/* Sort Dropdown */}
          <div className="flex items-center space-x-2 bg-black px-3 py-1.5 rounded-xl border border-instagram-border text-xs">
            <ArrowUpDown className="w-3.5 h-3.5 text-neutral-400" />
            <select
              value={sortBy}
              onChange={(e) => setSortBy(e.target.value)}
              className="bg-transparent text-white font-medium focus:outline-none cursor-pointer"
            >
              <option value="reach" className="bg-instagram-card">Sort by Reach</option>
              <option value="plays" className="bg-instagram-card">Sort by Plays</option>
              <option value="likes" className="bg-instagram-card">Sort by Likes</option>
              <option value="comments" className="bg-instagram-card">Sort by Comments</option>
              <option value="shares" className="bg-instagram-card">Sort by Shares</option>
              <option value="saves" className="bg-instagram-card">Sort by Saves</option>
            </select>
          </div>
        </div>
      </div>

      {/* Media Feed Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-5">
        {filteredPosts.map((post) => {
          let TypeIcon = Film;
          if (post.type === 'CAROUSEL') TypeIcon = Layers;
          if (post.type === 'POST') TypeIcon = ImageIcon;
          if (post.type === 'STORY') TypeIcon = Tv;

          return (
            <div
              key={post.id}
              onClick={() => onPostClick(post)}
              className="group relative rounded-2xl bg-instagram-card border border-instagram-border overflow-hidden cursor-pointer transition-all duration-300 hover:scale-[1.02] hover:shadow-2xl hover:border-instagram-pink/50"
            >
              {/* Media Thumbnail Container */}
              <div className="relative aspect-square w-full overflow-hidden bg-black">
                <img
                  src={post.thumbnail}
                  alt={post.caption}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />

                {/* Top Badge Overlay */}
                <div className="absolute top-3 left-3 flex items-center space-x-1.5 px-2.5 py-1 rounded-full bg-black/70 backdrop-blur-md border border-white/10 text-[11px] font-bold text-white">
                  <TypeIcon className="w-3.5 h-3.5 text-instagram-pink" />
                  <span>{post.type}</span>
                </div>

                {/* Posted Date Badge */}
                <div className="absolute top-3 right-3 px-2.5 py-1 rounded-full bg-black/70 backdrop-blur-md text-[10px] font-semibold text-neutral-300">
                  {post.postedDate}
                </div>

                {/* Hover Quick Overlay */}
                <div className="absolute inset-0 bg-black/75 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-between p-5 text-white">
                  <p className="text-xs font-medium line-clamp-3 text-neutral-200">
                    "{post.caption}"
                  </p>

                  <div className="grid grid-cols-2 gap-2 text-xs font-bold pt-2 border-t border-white/20">
                    <div className="flex items-center space-x-1 text-emerald-400">
                      <Eye className="w-3.5 h-3.5" />
                      <span>{(post.reach).toLocaleString()} reach</span>
                    </div>
                    {post.plays > 0 && (
                      <div className="flex items-center space-x-1 text-instagram-yellow">
                        <Play className="w-3.5 h-3.5 fill-instagram-yellow" />
                        <span>{(post.plays).toLocaleString()} plays</span>
                      </div>
                    )}
                    <div className="flex items-center space-x-1 text-rose-400">
                      <Heart className="w-3.5 h-3.5 fill-rose-400" />
                      <span>{(post.likes).toLocaleString()}</span>
                    </div>
                    <div className="flex items-center space-x-1 text-amber-400">
                      <Bookmark className="w-3.5 h-3.5 fill-amber-400" />
                      <span>{(post.saves).toLocaleString()}</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Card Footer Info */}
              <div className="p-4 bg-instagram-dark">
                <div className="flex items-center justify-between text-xs text-neutral-400 mb-2">
                  <div className="flex items-center space-x-3">
                    <span className="flex items-center space-x-1 font-semibold text-white">
                      <Heart className="w-3.5 h-3.5 text-rose-500 fill-rose-500" />
                      <span>{(post.likes).toLocaleString()}</span>
                    </span>
                    <span className="flex items-center space-x-1 font-semibold text-white">
                      <MessageCircle className="w-3.5 h-3.5 text-blue-400" />
                      <span>{(post.comments).toLocaleString()}</span>
                    </span>
                    <span className="flex items-center space-x-1 font-semibold text-white">
                      <Send className="w-3.5 h-3.5 text-emerald-400" />
                      <span>{(post.shares).toLocaleString()}</span>
                    </span>
                  </div>

                  <span className="font-bold text-amber-400">{(post.saves).toLocaleString()} saves</span>
                </div>

                {post.aiRating && (
                  <div className="mt-2 text-[10px] font-semibold text-instagram-pink truncate bg-instagram-pink/10 px-2 py-0.5 rounded border border-instagram-pink/20">
                    {post.aiRating}
                  </div>
                )}
              </div>
            </div>
          );
        })}
      </div>

    </div>
  );
}
