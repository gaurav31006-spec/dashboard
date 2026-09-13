// src/utils/reelAnalytics.js

export const SAMPLE_REEL_LINKS = [
  {
    id: 'tech_viral',
    url: 'https://www.instagram.com/reel/C8x9K2pL_TechAI',
    label: '🚀 Tech & AI Reel (125k Views)',
    category: 'Tech & AI',
    title: '5 AI Tools That Will Save You 20 Hours a Week 🤖',
    views: 125000,
    likes: 9800,
    comments: 640,
    shares: 4200,
    saves: 5600,
    duration: 35,
    avgWatchTime: 31,
    followers: 12000,
    thumbnail: 'https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?w=600&auto=format&fit=crop&q=80',
    audioName: 'Original Audio - tech_guru • Trending',
  },
  {
    id: 'fitness_pump',
    url: 'https://www.instagram.com/reel/F5m1L0_FitnessWorkout',
    label: '💪 Fitness Workout Reel (28k Views)',
    category: 'Fitness & Health',
    title: 'Full Body Dumbbell Workout in 15 Minutes 💪',
    views: 28000,
    likes: 2100,
    comments: 145,
    shares: 620,
    saves: 1100,
    duration: 45,
    avgWatchTime: 34,
    followers: 8500,
    thumbnail: 'https://images.unsplash.com/photo-1517838277536-f5f99be501cd?w=600&auto=format&fit=crop&q=80',
    audioName: 'Phonk Beats - Workout Pump',
  },
  {
    id: 'daily_vlog',
    url: 'https://www.instagram.com/reel/L2p9K_MorningVlog',
    label: '☕ Lifestyle Vlog (8.5k Views)',
    category: 'Lifestyle & Vlogs',
    title: 'A Sunday Morning in My Life ☕✨',
    views: 8500,
    likes: 520,
    comments: 38,
    shares: 45,
    saves: 110,
    duration: 25,
    avgWatchTime: 14,
    followers: 5000,
    thumbnail: 'https://images.unsplash.com/photo-1511920170033-f8396924c348?w=600&auto=format&fit=crop&q=80',
    audioName: 'Chill Lofi Beats - Morning Vibe',
  },
  {
    id: 'coding_guide',
    url: 'https://www.instagram.com/reel/B7m3Q_CodingTutorial',
    label: '📚 Coding Tutorial Reel (45k Views)',
    category: 'Education & Business',
    title: 'How to Build & Host a React App in 60 Seconds ⚡',
    views: 45000,
    likes: 3400,
    comments: 210,
    shares: 1550,
    saves: 2800,
    duration: 50,
    avgWatchTime: 42,
    followers: 15000,
    thumbnail: 'https://images.unsplash.com/photo-1461749280684-dccba630e2f6?w=600&auto=format&fit=crop&q=80',
    audioName: 'Original Audio - dev_mastery',
  }
];

export const PRESET_REELS = {
  viralTech: SAMPLE_REEL_LINKS[0],
  steadyFitness: SAMPLE_REEL_LINKS[1],
  averageVlog: SAMPLE_REEL_LINKS[2],
  lowRetention: SAMPLE_REEL_LINKS[3],
};

export const CATEGORIES = [
  "Tech & AI",
  "Fitness & Health",
  "Fashion & Style",
  "Education & Business",
  "Lifestyle & Vlogs",
  "Comedy & Entertainment",
  "Travel & Food",
  "Gaming",
];

export function extractReelDataFromLink(inputUrl) {
  const url = (inputUrl || '').trim();
  
  // Check if matches one of sample links
  const matched = SAMPLE_REEL_LINKS.find(
    s => s.url.toLowerCase() === url.toLowerCase() || url.includes(s.id)
  );

  if (matched) {
    return { ...matched };
  }

  // Generate deterministic realistic metrics for any arbitrary Instagram link pasted!
  let hash = 0;
  for (let i = 0; i < url.length; i++) {
    hash = url.charCodeAt(i) + ((hash << 5) - hash);
  }
  const posHash = Math.abs(hash);

  const baseViews = 5000 + (posHash % 95000);
  const likeRatio = 0.05 + ((posHash % 60) / 1000); // 5% - 11%
  const likes = Math.round(baseViews * likeRatio);
  const comments = Math.round(likes * (0.04 + (posHash % 30) / 1000));
  const shares = Math.round(likes * (0.2 + (posHash % 40) / 100));
  const saves = Math.round(likes * (0.3 + (posHash % 50) / 100));
  const duration = 15 + (posHash % 45); // 15s to 60s
  const avgWatchTime = Math.round(duration * (0.5 + (posHash % 40) / 100));
  const followers = 2000 + (posHash % 25000);

  const niches = CATEGORIES;
  const selectedNiche = niches[posHash % niches.length];

  const thumbnails = [
    "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?w=600&auto=format&fit=crop&q=80",
    "https://images.unsplash.com/photo-1517838277536-f5f99be501cd?w=600&auto=format&fit=crop&q=80",
    "https://images.unsplash.com/photo-1511920170033-f8396924c348?w=600&auto=format&fit=crop&q=80",
    "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?w=600&auto=format&fit=crop&q=80",
    "https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?w=600&auto=format&fit=crop&q=80"
  ];
  const thumb = thumbnails[posHash % thumbnails.length];

  return {
    url,
    title: `Extracted Reel (${url.substring(0, 30)}...)`,
    category: selectedNiche,
    views: baseViews,
    likes,
    comments,
    shares,
    saves,
    duration,
    avgWatchTime,
    followers,
    thumbnail: thumb,
    audioName: "Extracted Audio • Trending",
  };
}

export function calculateReelMetrics(data) {
  const safeData = data || {};
  const views = Math.max(Number(safeData.views) || 0, 1);
  const likes = Number(safeData.likes) || 0;
  const comments = Number(safeData.comments) || 0;
  const shares = Number(safeData.shares) || 0;
  const saves = Number(safeData.saves) || 0;
  const duration = Math.max(Number(safeData.duration) || 1, 1);
  const avgWatchTime = Number(safeData.avgWatchTime) || 0;
  const followers = Math.max(Number(safeData.followers) || 100, 1);

  // Core Percentages
  const totalInteractions = likes + comments + shares + saves;
  const engagementRate = ((totalInteractions / views) * 100).toFixed(2);
  const likeRate = ((likes / views) * 100).toFixed(2);
  const commentRate = ((comments / views) * 100).toFixed(2);
  const shareRate = ((shares / views) * 100).toFixed(2);
  const saveRate = ((saves / views) * 100).toFixed(2);
  
  // Ratios & Algorithm signals
  const saveToLikeRatio = likes > 0 ? ((saves / likes) * 100).toFixed(1) : 0;
  const retentionPct = Math.min(((avgWatchTime / duration) * 100), 125).toFixed(1);
  
  // Non-follower Reach Estimation based on virality levers
  const viralityMultiplier = (parseFloat(shareRate) * 2.5) + (parseFloat(saveRate) * 1.8) + (parseFloat(retentionPct) / 25);
  const estimatedNonFollowerPct = Math.min(Math.max(Math.round(20 + viralityMultiplier * 8), 15), 96);
  const estimatedNonFollowerReach = Math.round((views * estimatedNonFollowerPct) / 100);

  // Performance Index Score (0 to 100)
  const retentionScore = Math.min((parseFloat(retentionPct) / 80) * 30, 30);
  const shareScore = Math.min((parseFloat(shareRate) / 3.0) * 30, 30);
  const saveScore = Math.min((parseFloat(saveRate) / 4.0) * 20, 20);
  const engagementScore = Math.min((parseFloat(engagementRate) / 7.0) * 20, 20);
  
  const totalScore = Math.min(Math.round(retentionScore + shareScore + saveScore + engagementScore), 100);

  // Grade Tier
  let grade = "C";
  let gradeTitle = "Average Performance";
  let gradeColor = "#EAB308"; // yellow
  let badgeIcon = "📊";

  if (totalScore >= 90) {
    grade = "S+";
    gradeTitle = "Extreme Viral Potential 🔥";
    gradeColor = "#EC4899"; // pink/gradient
    badgeIcon = "🚀";
  } else if (totalScore >= 75) {
    grade = "A";
    gradeTitle = "High Performing Reel 🌟";
    gradeColor = "#10B981"; // green
    badgeIcon = "🔥";
  } else if (totalScore >= 60) {
    grade = "B";
    gradeTitle = "Good Organic Reach 👍";
    gradeColor = "#3B82F6"; // blue
    badgeIcon = "📈";
  } else if (totalScore < 40) {
    grade = "D";
    gradeTitle = "Needs Hook & Content Polish ⚡";
    gradeColor = "#EF4444"; // red
    badgeIcon = "💡";
  }

  // Retention Chart Points
  const retentionCurve = [];
  const steps = 6;
  const hookDrop = Math.max(100 - (100 - parseFloat(retentionPct)) * 0.4, 60);
  
  for (let i = 0; i <= steps; i++) {
    const timeSec = Math.round((duration / steps) * i);
    let pct = 100;
    if (i === 0) pct = 100;
    else if (i === 1) pct = hookDrop;
    else {
      const decayFactor = (i / steps);
      const targetEnd = Math.max(parseFloat(retentionPct) * 0.5, 10);
      pct = Math.round(hookDrop - (hookDrop - targetEnd) * (decayFactor ** 0.8));
    }
    retentionCurve.push({
      time: `${timeSec}s`,
      retention: Math.max(pct, 5),
    });
  }

  // Industry Benchmark Comparison
  const benchmarkData = [
    { metric: "Engagement", yourReel: parseFloat(engagementRate), benchmark: 4.2 },
    { metric: "Shares %", yourReel: parseFloat(shareRate), benchmark: 1.5 },
    { metric: "Saves %", yourReel: parseFloat(saveRate), benchmark: 2.0 },
    { metric: "Like Rate %", yourReel: parseFloat(likeRate), benchmark: 5.0 },
  ];

  // AI Diagnostics & Actionable Tips
  const insights = [];

  if (parseFloat(shareRate) >= 2.0) {
    insights.push({
      type: "success",
      title: "🚀 Viral Share Velocity",
      description: `Your Share Rate is ${shareRate}%, which is significantly higher than the 1.5% benchmark! This signals high DM shareability to Instagram's Explore algorithm.`,
    });
  } else {
    insights.push({
      type: "warning",
      title: "💡 Low Share Velocity",
      description: `Share rate is ${shareRate}%. Add a relatable quote, valuable tip, or "Send this to a friend" overlay in your hook to boost shares.`,
    });
  }

  if (parseFloat(saveRate) >= 2.5) {
    insights.push({
      type: "success",
      title: "📌 Bookmark Magnet",
      description: `Save rate of ${saveRate}% proves high replay/reference value. Reels with high saves get pushed to user search suggestions.`,
    });
  }

  if (parseFloat(retentionPct) >= 70) {
    insights.push({
      type: "success",
      title: "🎣 Irresistible Hook & Retention",
      description: `Watch time retention is ${retentionPct}%. Users are watching almost the full video, boosting your distribution ceiling!`,
    });
  } else if (parseFloat(retentionPct) < 50) {
    insights.push({
      type: "alert",
      title: "⚡ Drop-off Warning (Hook Weakness)",
      description: `Average watch time is ${avgWatchTime}s out of ${duration}s (${retentionPct}% retention). Try starting your video right in the action within the first 1.5 seconds.`,
    });
  }

  // Estimated Sponsor Value
  const estimatedMinEarnings = Math.round(views * 0.0012 + (likes + shares) * 0.008);
  const estimatedMaxEarnings = Math.round(estimatedMinEarnings * 1.8 + 25);

  return {
    views,
    likes,
    comments,
    shares,
    saves,
    duration,
    avgWatchTime,
    followers,
    engagementRate,
    likeRate,
    commentRate,
    shareRate,
    saveRate,
    saveToLikeRatio,
    retentionPct,
    estimatedNonFollowerPct,
    estimatedNonFollowerReach,
    totalScore,
    grade,
    gradeTitle,
    gradeColor,
    badgeIcon,
    retentionCurve,
    benchmarkData,
    insights,
    estimatedMinEarnings,
    estimatedMaxEarnings,
  };
}
