// src/components/ReelDataForm.jsx
import React from 'react';
import { 
  Play, 
  Heart, 
  MessageCircle, 
  Share2, 
  Bookmark, 
  Clock, 
  Eye, 
  Users, 
  Sparkles,
  Type
} from 'lucide-react';

const ReelDataForm = ({ formData, onChange, onSubmit }) => {

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    onChange({
      ...formData,
      [name]: value,
    });
  };

  return (
    <div className="bg-[#121212] border border-[#262626] rounded-2xl p-5 shadow-xl text-white">
      {/* Header */}
      <div className="flex items-center gap-3 mb-5 border-b border-[#262626] pb-4">
        <div className="w-10 h-10 rounded-full bg-gradient-to-tr from-yellow-500 via-red-500 to-purple-600 flex items-center justify-center p-[2px]">
          <div className="w-full h-full bg-[#121212] rounded-full flex items-center justify-center">
            <Sparkles size={18} className="text-pink-500" />
          </div>
        </div>
        <div>
          <h2 className="text-lg font-bold tracking-wide text-white">Enter Your Reel Insights</h2>
          <p className="text-xs text-gray-400">Fill in the data from your Instagram Reel insights to see your performance analysis</p>
        </div>
      </div>

      <form onSubmit={onSubmit} className="space-y-4">
        {/* Reel Title */}
        <div>
          <label className="text-xs text-gray-300 font-medium mb-1.5 flex items-center gap-1.5">
            <Type size={14} className="text-pink-400" /> Reel Title / Caption
          </label>
          <input
            type="text"
            name="title"
            value={formData.title}
            onChange={handleInputChange}
            placeholder="e.g. 5 Coding Tricks You Didn't Know 💻"
            className="w-full bg-[#181818] border border-[#333] focus:border-pink-500 text-white rounded-xl px-3.5 py-2.5 text-sm outline-none transition"
            required
          />
        </div>

        <div className="h-[1px] bg-[#262626] my-1" />

        {/* Core Metrics */}
        <label className="text-xs font-semibold text-gray-400 uppercase tracking-wider block mb-1">
          📊 Your Reel Insights Data
        </label>

        <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
          {/* Views */}
          <div className="bg-[#181818] p-3 rounded-xl border border-[#2a2a2a]">
            <label className="text-xs text-gray-400 font-medium flex items-center gap-1 mb-1">
              <Eye size={13} className="text-blue-400" /> Views / Plays
            </label>
            <input
              type="number"
              name="views"
              value={formData.views}
              onChange={handleInputChange}
              min="0"
              placeholder="0"
              className="w-full bg-[#222] border border-[#3A3A3A] focus:border-pink-500 text-white font-bold rounded-lg px-2.5 py-1.5 text-sm outline-none"
              required
            />
          </div>

          {/* Likes */}
          <div className="bg-[#181818] p-3 rounded-xl border border-[#2a2a2a]">
            <label className="text-xs text-gray-400 font-medium flex items-center gap-1 mb-1">
              <Heart size={13} className="text-red-400" /> Likes
            </label>
            <input
              type="number"
              name="likes"
              value={formData.likes}
              onChange={handleInputChange}
              min="0"
              placeholder="0"
              className="w-full bg-[#222] border border-[#3A3A3A] focus:border-pink-500 text-white font-bold rounded-lg px-2.5 py-1.5 text-sm outline-none"
              required
            />
          </div>

          {/* Comments */}
          <div className="bg-[#181818] p-3 rounded-xl border border-[#2a2a2a]">
            <label className="text-xs text-gray-400 font-medium flex items-center gap-1 mb-1">
              <MessageCircle size={13} className="text-sky-400" /> Comments
            </label>
            <input
              type="number"
              name="comments"
              value={formData.comments}
              onChange={handleInputChange}
              min="0"
              placeholder="0"
              className="w-full bg-[#222] border border-[#3A3A3A] focus:border-pink-500 text-white font-bold rounded-lg px-2.5 py-1.5 text-sm outline-none"
              required
            />
          </div>

          {/* Shares */}
          <div className="bg-[#181818] p-3 rounded-xl border border-[#2a2a2a]">
            <label className="text-xs text-gray-400 font-medium flex items-center gap-1 mb-1">
              <Share2 size={13} className="text-green-400" /> Shares
            </label>
            <input
              type="number"
              name="shares"
              value={formData.shares}
              onChange={handleInputChange}
              min="0"
              placeholder="0"
              className="w-full bg-[#222] border border-[#3A3A3A] focus:border-pink-500 text-white font-bold rounded-lg px-2.5 py-1.5 text-sm outline-none"
              required
            />
          </div>

          {/* Saves */}
          <div className="bg-[#181818] p-3 rounded-xl border border-[#2a2a2a]">
            <label className="text-xs text-gray-400 font-medium flex items-center gap-1 mb-1">
              <Bookmark size={13} className="text-amber-400" /> Saves
            </label>
            <input
              type="number"
              name="saves"
              value={formData.saves}
              onChange={handleInputChange}
              min="0"
              placeholder="0"
              className="w-full bg-[#222] border border-[#3A3A3A] focus:border-pink-500 text-white font-bold rounded-lg px-2.5 py-1.5 text-sm outline-none"
              required
            />
          </div>

          {/* Followers */}
          <div className="bg-[#181818] p-3 rounded-xl border border-[#2a2a2a]">
            <label className="text-xs text-gray-400 font-medium flex items-center gap-1 mb-1">
              <Users size={13} className="text-purple-400" /> Total Followers
            </label>
            <input
              type="number"
              name="followers"
              value={formData.followers}
              onChange={handleInputChange}
              min="1"
              placeholder="0"
              className="w-full bg-[#222] border border-[#3A3A3A] focus:border-pink-500 text-white font-bold rounded-lg px-2.5 py-1.5 text-sm outline-none"
              required
            />
          </div>
        </div>

        {/* Duration & Watch Time */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-1">
          <div className="bg-[#181818] p-3 rounded-xl border border-[#2a2a2a]">
            <label className="text-xs text-gray-300 font-medium flex items-center justify-between mb-1">
              <span className="flex items-center gap-1">
                <Clock size={13} className="text-pink-400" /> Reel Duration (Seconds)
              </span>
            </label>
            <input
              type="number"
              name="duration"
              value={formData.duration}
              onChange={handleInputChange}
              min="1"
              max="90"
              placeholder="0"
              className="w-full bg-[#222] border border-[#3A3A3A] focus:border-pink-500 text-white font-bold rounded-lg px-2.5 py-1.5 text-sm outline-none"
              required
            />
          </div>

          <div className="bg-[#181818] p-3 rounded-xl border border-[#2a2a2a]">
            <label className="text-xs text-gray-300 font-medium flex items-center justify-between mb-1">
              <span className="flex items-center gap-1">
                <Play size={13} className="text-emerald-400" /> Avg Watch Time (Seconds)
              </span>
            </label>
            <input
              type="number"
              name="avgWatchTime"
              value={formData.avgWatchTime}
              onChange={handleInputChange}
              min="0"
              placeholder="0"
              className="w-full bg-[#222] border border-[#3A3A3A] focus:border-pink-500 text-white font-bold rounded-lg px-2.5 py-1.5 text-sm outline-none"
              required
            />
          </div>
        </div>

        {/* Submit */}
        <button
          type="submit"
          className="w-full mt-2 bg-gradient-to-r from-pink-600 via-rose-500 to-purple-600 hover:from-pink-500 hover:to-purple-500 text-white font-bold py-3.5 rounded-xl shadow-lg shadow-pink-600/20 flex items-center justify-center gap-2 transition transform active:scale-[0.99]"
        >
          <Sparkles size={18} />
          Analyze My Reel
        </button>
      </form>
    </div>
  );
};

export default ReelDataForm;
