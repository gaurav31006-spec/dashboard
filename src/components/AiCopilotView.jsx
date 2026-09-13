import React from 'react';
import { 
  Sparkles, 
  Flame, 
  Clock, 
  TrendingUp, 
  CheckCircle2, 
  AlertCircle, 
  Zap, 
  Award,
  ChevronRight,
  Hash
} from 'lucide-react';

export default function AiCopilotView({ insights }) {
  const { aiDiagnostics } = insights;

  return (
    <div className="space-y-6">
      
      {/* AI Copilot Header Banner */}
      <div className="p-6 rounded-2xl bg-gradient-to-r from-instagram-purple/30 via-instagram-dark to-instagram-pink/20 border border-instagram-pink/30 flex flex-col md:flex-row md:items-center justify-between gap-6 shadow-2xl">
        <div className="flex items-center space-x-4">
          <div className="w-12 h-12 rounded-2xl bg-ig-gradient flex items-center justify-center text-white shadow-lg shadow-instagram-pink/30">
            <Sparkles className="w-6 h-6 animate-pulse" />
          </div>
          <div>
            <div className="flex items-center space-x-2">
              <h2 className="text-xl font-bold text-white tracking-tight">AI Account Health & Content Copilot</h2>
              <span className="px-2.5 py-0.5 rounded-full text-[10px] font-extrabold bg-instagram-yellow text-black">
                META AI v4.2
              </span>
            </div>
            <p className="text-xs text-neutral-400 mt-1">
              Automated diagnostics trained on over 50M+ creator posts to optimize engagement and follower growth.
            </p>
          </div>
        </div>

        {/* Health Score Circular Meter Box */}
        <div className="flex items-center space-x-4 bg-black/60 p-4 rounded-2xl border border-instagram-border min-w-[220px]">
          <div className="relative w-14 h-14 flex items-center justify-center">
            <svg className="w-full h-full transform -rotate-90">
              <circle cx="28" cy="28" r="24" stroke="#262626" strokeWidth="4" fill="transparent" />
              <circle 
                cx="28" 
                cy="28" 
                r="24" 
                stroke="url(#aiGrad)" 
                strokeWidth="4" 
                strokeDasharray="150" 
                strokeDashoffset={150 - (150 * aiDiagnostics.overallHealthScore) / 100} 
                strokeLinecap="round" 
                fill="transparent" 
              />
              <defs>
                <linearGradient id="aiGrad" x1="0" y1="0" x2="1" y2="0">
                  <stop offset="0%" stopColor="#E1306C" />
                  <stop offset="100%" stopColor="#F77737" />
                </linearGradient>
              </defs>
            </svg>
            <span className="absolute text-base font-extrabold text-white">{aiDiagnostics.overallHealthScore}</span>
          </div>
          <div>
            <p className="text-[10px] uppercase font-bold text-neutral-400">Account Health Grade</p>
            <p className="text-xl font-extrabold text-emerald-400">{aiDiagnostics.grade} Superb</p>
          </div>
        </div>
      </div>

      {/* Health Score Diagnostic Ratings Matrix */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-5 gap-4">
        {[
          { label: 'Content Quality', score: aiDiagnostics.ratings.contentQuality, color: 'text-instagram-pink', bg: 'bg-instagram-pink' },
          { label: 'Posting Consistency', score: aiDiagnostics.ratings.postingConsistency, color: 'text-instagram-purple', bg: 'bg-instagram-purple' },
          { label: 'Hashtag Strategy', score: aiDiagnostics.ratings.hashtagStrategy, color: 'text-instagram-blue', bg: 'bg-instagram-blue' },
          { label: 'Interactivity', score: aiDiagnostics.ratings.audienceInteractivity, color: 'text-emerald-400', bg: 'bg-emerald-400' },
          { label: 'Reels Retention', score: aiDiagnostics.ratings.reelsRetention, color: 'text-instagram-yellow', bg: 'bg-instagram-yellow' }
        ].map((item) => (
          <div key={item.label} className="p-4 rounded-2xl bg-instagram-dark border border-instagram-border space-y-2">
            <div className="flex items-center justify-between text-xs font-semibold">
              <span className="text-neutral-400">{item.label}</span>
              <span className={`font-bold ${item.color}`}>{item.score}/100</span>
            </div>
            <div className="w-full bg-black h-2 rounded-full overflow-hidden border border-instagram-border">
              <div className={`h-full rounded-full ${item.bg}`} style={{ width: `${item.score}%` }}></div>
            </div>
          </div>
        ))}
      </div>

      {/* AI Smart Actionable Recommendations */}
      <div className="p-6 rounded-2xl bg-instagram-dark border border-instagram-border space-y-4">
        <div className="flex items-center justify-between border-b border-instagram-border pb-3">
          <div className="flex items-center space-x-2">
            <Zap className="w-5 h-5 text-instagram-yellow" />
            <h3 className="text-base font-bold text-white">Recommended Actions to Boost Reach</h3>
          </div>
          <span className="text-xs font-bold text-emerald-400 bg-emerald-500/10 px-3 py-1 rounded-full border border-emerald-500/20">
            3 High Impact Opportunities
          </span>
        </div>

        <div className="space-y-4">
          {aiDiagnostics.recommendations.map((rec, index) => (
            <div 
              key={index}
              className="p-4 rounded-xl bg-black/40 border border-instagram-border hover:border-neutral-700 transition-all flex flex-col sm:flex-row sm:items-center justify-between gap-4"
            >
              <div className="flex items-start space-x-3">
                <div className="p-2 rounded-xl bg-instagram-purple/15 text-instagram-purple mt-0.5">
                  {rec.type === 'TIMING' ? <Clock className="w-5 h-5" /> : rec.type === 'TREND' ? <Flame className="w-5 h-5" /> : <TrendingUp className="w-5 h-5" />}
                </div>
                <div>
                  <div className="flex items-center space-x-2">
                    <h4 className="text-sm font-bold text-white">{rec.title}</h4>
                    <span className="px-2 py-0.5 rounded text-[10px] font-bold bg-instagram-pink/20 text-instagram-pink">
                      {rec.impact}
                    </span>
                  </div>
                  <p className="text-xs text-neutral-400 mt-1 leading-relaxed">
                    {rec.description}
                  </p>
                </div>
              </div>

              <button className="px-3.5 py-2 rounded-xl bg-instagram-dark hover:bg-instagram-card border border-instagram-border text-xs font-semibold text-instagram-blue transition-all flex items-center justify-center space-x-1 whitespace-nowrap">
                <span>Apply Suggestion</span>
                <ChevronRight className="w-3.5 h-3.5" />
              </button>
            </div>
          ))}
        </div>
      </div>

    </div>
  );
}
