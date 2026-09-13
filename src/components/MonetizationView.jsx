import React from 'react';
import { 
  DollarSign, 
  Sparkles, 
  CheckCircle2, 
  Award, 
  TrendingUp, 
  Users, 
  CreditCard, 
  ShieldCheck,
  ChevronRight
} from 'lucide-react';

export default function MonetizationView({ insights }) {
  const { monetization } = insights;

  return (
    <div className="space-y-6">
      
      {/* Monetization Header Banner */}
      <div className="p-6 rounded-2xl bg-gradient-to-r from-emerald-950/40 via-instagram-dark to-instagram-dark border border-emerald-500/20 flex flex-col md:flex-row md:items-center justify-between gap-6 shadow-xl">
        <div>
          <div className="flex items-center space-x-2">
            <span className="p-2 rounded-xl bg-emerald-500/10 text-emerald-400">
              <DollarSign className="w-5 h-5" />
            </span>
            <h2 className="text-xl font-bold text-white tracking-tight">Professional Tools & Monetization</h2>
          </div>
          <p className="text-xs text-neutral-400 mt-1">
            Track Creator Play Bonuses, Subscriptions, Branded Content Compliance, and Meta Verified perks.
          </p>
        </div>

        <div className="flex items-center space-x-2 bg-emerald-500/10 px-4 py-2.5 rounded-2xl border border-emerald-500/30">
          <CheckCircle2 className="w-5 h-5 text-emerald-400" />
          <div>
            <p className="text-[10px] uppercase font-bold text-neutral-400">Payout Status</p>
            <p className="text-sm font-extrabold text-emerald-400">All Monetization Tools Active</p>
          </div>
        </div>
      </div>

      {/* Grid: Reels Play Bonus & Subscriptions */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        
        {/* Reels Play Bonus Card */}
        <div className="p-6 rounded-2xl bg-instagram-dark border border-instagram-border hover:border-emerald-500/40 transition-all space-y-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-2">
              <div className="p-2 rounded-xl bg-instagram-pink/10 text-instagram-pink">
                <Sparkles className="w-4 h-4" />
              </div>
              <div>
                <h3 className="text-base font-bold text-white">Reels Play Bonus Program</h3>
                <span className="text-[10px] font-bold text-emerald-400 uppercase tracking-wider">Eligible Creator</span>
              </div>
            </div>
            <span className="text-xs font-semibold text-neutral-400">Next Payout: Oct 01</span>
          </div>

          <div className="p-4 rounded-xl bg-black/50 border border-instagram-border">
            <div className="flex items-baseline justify-between">
              <span className="text-xs text-neutral-400 font-semibold">Earned This Cycle</span>
              <span className="text-2xl font-extrabold text-emerald-400">${monetization.reelsPlayBonus.earningsThisMonth.toFixed(2)}</span>
            </div>
            <div className="mt-3 space-y-1.5">
              <div className="flex items-center justify-between text-[11px] font-semibold text-neutral-400">
                <span>Progress to Cap (${monetization.reelsPlayBonus.maxCap.toLocaleString()})</span>
                <span className="text-white font-bold">{monetization.reelsPlayBonus.progressPct}%</span>
              </div>
              <div className="w-full bg-black h-2 rounded-full overflow-hidden border border-instagram-border">
                <div className="bg-gradient-to-r from-emerald-500 to-teal-400 h-full rounded-full" style={{ width: `${monetization.reelsPlayBonus.progressPct}%` }}></div>
              </div>
            </div>
          </div>
        </div>

        {/* Subscriptions Revenue Card */}
        <div className="p-6 rounded-2xl bg-instagram-dark border border-instagram-border hover:border-instagram-purple/40 transition-all space-y-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-2">
              <div className="p-2 rounded-xl bg-instagram-purple/10 text-instagram-purple">
                <Users className="w-4 h-4" />
              </div>
              <div>
                <h3 className="text-base font-bold text-white">Instagram Subscriptions</h3>
                <span className="text-[10px] font-bold text-instagram-purple uppercase tracking-wider">{monetization.subscriptions.tierPrice} Tier</span>
              </div>
            </div>
            <span className="text-xs font-semibold text-emerald-400">+{monetization.subscriptions.subscriberGrowth}% growth</span>
          </div>

          <div className="p-4 rounded-xl bg-black/50 border border-instagram-border flex items-center justify-between">
            <div>
              <p className="text-xs text-neutral-400 font-semibold">Active Subscribers</p>
              <p className="text-2xl font-extrabold text-white">{monetization.subscriptions.activeSubscribers}</p>
            </div>
            <div className="text-right">
              <p className="text-xs text-neutral-400 font-semibold">Est. Monthly MRR</p>
              <p className="text-2xl font-extrabold text-instagram-purple">${monetization.subscriptions.monthlyRevenue.toFixed(2)}</p>
            </div>
          </div>
        </div>

      </div>

      {/* Meta Verified & Branded Content Status */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        
        {/* Branded Content Compliance */}
        <div className="p-6 rounded-2xl bg-instagram-dark border border-instagram-border space-y-3">
          <div className="flex items-center space-x-2">
            <Award className="w-5 h-5 text-instagram-blue" />
            <h3 className="text-base font-bold text-white">Branded Content Tools</h3>
          </div>
          <p className="text-xs text-neutral-400">Official Meta Sponsorship tags and paid partnership tools</p>

          <div className="pt-2 border-t border-instagram-border space-y-2">
            <div className="flex items-center justify-between text-xs py-1.5 border-b border-instagram-border/50">
              <span className="text-neutral-300">Approval Status</span>
              <span className="font-bold text-emerald-400">{monetization.brandedContent.approvalStatus}</span>
            </div>
            <div className="flex items-center justify-between text-xs py-1.5">
              <span className="text-neutral-300">Active Brand Partners</span>
              <span className="font-bold text-white">{monetization.brandedContent.brandPartners.join(', ')}</span>
            </div>
          </div>
        </div>

        {/* Meta Verified Perks */}
        <div className="p-6 rounded-2xl bg-instagram-dark border border-instagram-border space-y-3">
          <div className="flex items-center space-x-2">
            <ShieldCheck className="w-5 h-5 text-instagram-blue" />
            <h3 className="text-base font-bold text-white">Meta Verified Business Subscription</h3>
          </div>
          <p className="text-xs text-neutral-400">Verified creator badge, active impersonation protection & 24/7 human support</p>

          <div className="pt-2 border-t border-instagram-border space-y-2">
            <div className="flex items-center justify-between text-xs py-1.5 border-b border-instagram-border/50">
              <span className="text-neutral-300">Badge Status</span>
              <span className="font-bold text-instagram-blue flex items-center space-x-1">
                <CheckCircle2 className="w-3.5 h-3.5" />
                <span>{monetization.metaVerified.badge}</span>
              </span>
            </div>
            <div className="flex items-center justify-between text-xs py-1.5">
              <span className="text-neutral-300">Live Support Channel</span>
              <span className="font-bold text-emerald-400">{monetization.metaVerified.supportTicketStatus}</span>
            </div>
          </div>
        </div>

      </div>

    </div>
  );
}
