export const INSTAGRAM_ACCOUNTS = [
  {
    id: 'alex_designstudio',
    username: 'alex_designstudio',
    name: 'Alex Rivera | UI/UX & AI',
    category: 'Digital Creator',
    verified: true,
    avatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=150&auto=format&fit=crop&q=80',
    followersCount: 284512,
    followingCount: 421,
    postsCount: 384,
    bio: '✨ Designing the Future of AI & Spatial Interfaces\n🚀 Founder @StudioPixel | 💻 100k+ Designers taught\n👇 Free Design Systems & Prompt Kits',
    website: 'linktr.ee/alex_rivera',
  },
  {
    id: 'luxe_aesthetic',
    username: 'luxe_aesthetic',
    name: 'Elena Vance | Visuals',
    category: 'Photographer & Art Director',
    verified: true,
    avatar: 'https://images.unsplash.com/photo-1517841905240-472988babdf9?w=150&auto=format&fit=crop&q=80',
    followersCount: 512840,
    followingCount: 310,
    postsCount: 612,
    bio: '🌿 Minimal Architecture & Editorial Fashion\n📍 Paris / NYC\n📩 Booking Q4 2026: elena@luxevance.com',
    website: 'elena-vance.com/portfolio',
  },
  {
    id: 'fit_pulse_daily',
    username: 'fit_pulse_daily',
    name: 'Marcus Vance | Movement',
    category: 'Fitness Model & Coach',
    verified: true,
    avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&auto=format&fit=crop&q=80',
    followersCount: 142100,
    followingCount: 185,
    postsCount: 240,
    bio: '💪 Daily Mobility & Biohacking Protocols\n⚡️ Hydration & Longevity Enthusiast\n👇 30-Day Shred Challenge Below',
    website: 'fitpulse.co/join',
  }
];

export const MOCK_INSIGHTS_DATA = {
  alex_designstudio: {
    timeRange: 'Last 30 Days',
    dateRangeText: 'Aug 14 - Sep 12',
    
    // Overview Top Metrics
    overview: {
      accountsReached: {
        value: 1420890,
        change: +18.4,
        isPositive: true,
        previousValue: 1200000,
      },
      accountsEngaged: {
        value: 184320,
        change: +24.1,
        isPositive: true,
        previousValue: 148500,
      },
      totalFollowers: {
        value: 284512,
        change: +3.2,
        netGain: 4120,
        isPositive: true,
      },
      contentShared: {
        value: 24,
        change: +8.0,
        isPositive: true,
        breakdown: { reels: 14, posts: 6, stories: 38, live: 1 }
      },
      profileVisits: {
        value: 94200,
        change: +14.8,
        isPositive: true
      },
      websiteClicks: {
        value: 18450,
        change: +31.2,
        isPositive: true
      }
    },

    // Accounts Reached Detailed Breakdown
    accountsReachedDetails: {
      followersVsNonFollowers: [
        { name: 'Non-followers', value: 67.5, count: 959100, color: '#0095F6' },
        { name: 'Followers', value: 32.5, count: 461790, color: '#E1306C' }
      ],
      reachByContentType: [
        { type: 'Reels', reach: 940200, percentage: 66.2, color: '#E1306C' },
        { type: 'Posts & Carousels', reach: 310500, percentage: 21.8, color: '#833AB4' },
        { type: 'Stories', reach: 120190, percentage: 8.5, color: '#F77737' },
        { type: 'Live Videos', reach: 50000, percentage: 3.5, color: '#FCAF45' }
      ],
      organicVsPaid: [
        { name: 'Organic Reach', percentage: 84.2, value: 1196380 },
        { name: 'Paid Ads', percentage: 15.8, value: 224510 }
      ],
      timeSeries: [
        { date: 'Aug 14', organic: 32000, paid: 5000, total: 37000 },
        { date: 'Aug 17', organic: 45000, paid: 7000, total: 52000 },
        { date: 'Aug 20', organic: 38000, paid: 6000, total: 44000 },
        { date: 'Aug 23', organic: 89000, paid: 12000, total: 101000 }, // Viral spike
        { date: 'Aug 26', organic: 64000, paid: 9000, total: 73000 },
        { date: 'Aug 29', organic: 42000, paid: 7000, total: 49000 },
        { date: 'Sep 01', organic: 55000, paid: 8000, total: 63000 },
        { date: 'Sep 04', organic: 72000, paid: 11000, total: 83000 },
        { date: 'Sep 07', organic: 98000, paid: 14000, total: 112000 },
        { date: 'Sep 10', organic: 115000, paid: 16000, total: 131000 },
        { date: 'Sep 12', organic: 84000, paid: 12000, total: 96000 }
      ],
      topCities: [
        { city: 'New York', country: 'United States', percentage: 14.2 },
        { city: 'London', country: 'United Kingdom', percentage: 11.5 },
        { city: 'Los Angeles', country: 'United States', percentage: 9.1 },
        { city: 'Tokyo', country: 'Japan', percentage: 7.4 },
        { city: 'Berlin', country: 'Germany', percentage: 6.2 },
        { city: 'Toronto', country: 'Canada', percentage: 5.8 }
      ],
      topCountries: [
        { country: 'United States', percentage: 38.5, flag: '🇺🇸' },
        { country: 'United Kingdom', percentage: 14.2, flag: '🇬🇧' },
        { country: 'Germany', percentage: 9.4, flag: '🇩🇪' },
        { country: 'Japan', percentage: 8.1, flag: '🇯🇵' },
        { country: 'India', percentage: 7.2, flag: '🇮🇳' },
        { country: 'Canada', percentage: 6.0, flag: '🇨🇦' }
      ],
      ageDistribution: [
        { age: '13-17', percentage: 2.1 },
        { age: '18-24', percentage: 28.4 },
        { age: '25-34', percentage: 46.5 },
        { age: '35-44', percentage: 17.2 },
        { age: '45-54', percentage: 4.3 },
        { age: '55-64', percentage: 1.1 },
        { age: '65+', percentage: 0.4 }
      ],
      genderDistribution: [
        { name: 'Women', percentage: 54.2, color: '#E1306C' },
        { name: 'Men', percentage: 42.8, color: '#0095F6' },
        { name: 'Custom / Other', percentage: 3.0, color: '#833AB4' }
      ]
    },

    // Accounts Engaged Breakdown
    accountsEngagedDetails: {
      totalInteractions: 428900,
      breakdown: [
        { type: 'Likes', count: 298400, icon: 'Heart', color: '#ED4956' },
        { type: 'Comments', count: 34120, icon: 'MessageCircle', color: '#0095F6' },
        { type: 'Shares', count: 58900, icon: 'Send', color: '#F77737' },
        { type: 'Saves', count: 37480, icon: 'Bookmark', color: '#FCAF45' },
        { type: 'Story Replies', count: 4890, icon: 'CornerUpRight', color: '#833AB4' }
      ],
      topInteractingDemographics: {
        topCity: 'New York (16.4%)',
        topAgeGroup: '25-34 (48.1%)',
        genderSplit: '56% Women / 44% Men'
      }
    },

    // Total Followers Details & Activity Heatmap
    followerDetails: {
      netGrowth: 4120,
      follows: 6890,
      unfollows: 2770,
      growthHistory: [
        { date: 'Aug 14', follows: 180, unfollows: 80, net: 100 },
        { date: 'Aug 18', follows: 220, unfollows: 90, net: 130 },
        { date: 'Aug 22', follows: 580, unfollows: 110, net: 470 }, // Viral spike
        { date: 'Aug 26', follows: 310, unfollows: 95, net: 215 },
        { date: 'Aug 30', follows: 240, unfollows: 85, net: 155 },
        { date: 'Sep 03', follows: 290, unfollows: 90, net: 200 },
        { date: 'Sep 07', follows: 420, unfollows: 105, net: 315 },
        { date: 'Sep 12', follows: 380, unfollows: 100, net: 280 }
      ],
      // Hourly activity (0-23 hours) for best posting time
      hourlyActiveFollowers: [
        { hour: '12 AM', count: 24000 },
        { hour: '3 AM', count: 12000 },
        { hour: '6 AM', count: 35000 },
        { hour: '9 AM', count: 89000 },
        { hour: '12 PM', count: 142000 },
        { hour: '3 PM', count: 168000 },
        { hour: '6 PM', count: 215000 }, // Peak
        { hour: '9 PM', count: 184000 }
      ],
      mostActiveDays: [
        { day: 'Sun', activeCount: 204000 },
        { day: 'Mon', activeCount: 189000 },
        { day: 'Tue', activeCount: 212000 },
        { day: 'Wed', activeCount: 228000 },
        { day: 'Thu', activeCount: 235000 },
        { day: 'Fri', activeCount: 254000 },
        { day: 'Sat', activeCount: 268000 } // Highest
      ]
    },

    // Content Shared & Post Performance Items
    posts: [
      {
        id: 'post_1',
        type: 'REEL',
        caption: 'The Future of AI UI Design: 5 Rules You Cannot Ignore 🔮✨ #uidesign #ai #figma #uxdesign',
        thumbnail: 'https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?w=600&auto=format&fit=crop&q=80',
        postedDate: '3 days ago',
        dateTimestamp: 'Sep 09, 2026',
        plays: 482900,
        initialPlays: 390200,
        replays: 92700,
        reach: 412000,
        nonFollowerReachPct: 78.4,
        watchTimeHours: 1840,
        avgWatchTimeSec: '18.4s',
        videoDurationSec: 24,
        likes: 38400,
        comments: 2140,
        shares: 14200,
        saves: 18900,
        followsFromPost: 840,
        profileVisits: 3200,
        linkClicks: 890,
        retention: [
          { time: '0s', percentage: 100 },
          { time: '5s', percentage: 88 },
          { time: '10s', percentage: 74 },
          { time: '15s', percentage: 65 },
          { time: '20s', percentage: 58 },
          { time: '24s', percentage: 52 }
        ],
        aiRating: 'Viral Superstar 🔥 (Top 1% Performance)'
      },
      {
        id: 'post_2',
        type: 'CAROUSEL',
        caption: 'Apple Vision Pro UI Kit breakdown: Glassmorphic shaders in React 🕶️📱 Swipe for code snippets!',
        thumbnail: 'https://images.unsplash.com/photo-1550745165-9bc0b252726f?w=600&auto=format&fit=crop&q=80',
        postedDate: '5 days ago',
        dateTimestamp: 'Sep 07, 2026',
        plays: 0,
        reach: 189400,
        nonFollowerReachPct: 45.2,
        likes: 18200,
        comments: 980,
        shares: 6400,
        saves: 14800,
        followsFromPost: 420,
        profileVisits: 1840,
        linkClicks: 620,
        aiRating: 'High Save Rate 💾 (Top 5% Evergreen)'
      },
      {
        id: 'post_3',
        type: 'REEL',
        caption: 'Building a 3D Glass Shader in 60 Seconds with Three.js & WebGL 🎨 #webgl #threejs #frontend',
        thumbnail: 'https://images.unsplash.com/photo-1634017839464-5c339ebe3cb4?w=600&auto=format&fit=crop&q=80',
        postedDate: '1 week ago',
        dateTimestamp: 'Sep 05, 2026',
        plays: 312000,
        initialPlays: 260000,
        replays: 52000,
        reach: 284000,
        nonFollowerReachPct: 71.0,
        watchTimeHours: 1210,
        avgWatchTimeSec: '14.2s',
        videoDurationSec: 19,
        likes: 24500,
        comments: 1120,
        shares: 9800,
        saves: 11400,
        followsFromPost: 560,
        profileVisits: 2400,
        linkClicks: 510,
        retention: [
          { time: '0s', percentage: 100 },
          { time: '4s', percentage: 82 },
          { time: '8s', percentage: 69 },
          { time: '12s', percentage: 59 },
          { time: '16s', percentage: 48 },
          { time: '19s', percentage: 41 }
        ],
        aiRating: 'High Engagement ⚡️'
      },
      {
        id: 'post_4',
        type: 'STORY',
        caption: 'Behind the scenes at Meta Connect 2026! What feature are you most hyped for? 🤖',
        thumbnail: 'https://images.unsplash.com/photo-1519389950473-47ba0277781c?w=600&auto=format&fit=crop&q=80',
        postedDate: '12 hours ago',
        dateTimestamp: 'Sep 12, 2026',
        plays: 42100,
        reach: 38900,
        nonFollowerReachPct: 12.4,
        likes: 3100,
        comments: 420,
        shares: 890,
        saves: 140,
        followsFromPost: 35,
        profileVisits: 980,
        linkClicks: 1420,
        aiRating: 'High Click-Through Rate 🔗'
      },
      {
        id: 'post_5',
        type: 'POST',
        caption: 'Minimalist Workspace Setup for 2026: Clean lines, Studio Display & Spatial Audio 🎧⚡️',
        thumbnail: 'https://images.unsplash.com/photo-1593642632823-8f785ba67e45?w=600&auto=format&fit=crop&q=80',
        postedDate: '2 weeks ago',
        dateTimestamp: 'Aug 29, 2026',
        plays: 0,
        reach: 142000,
        nonFollowerReachPct: 38.0,
        likes: 12400,
        comments: 540,
        shares: 2100,
        saves: 6800,
        followsFromPost: 190,
        profileVisits: 1100,
        linkClicks: 290,
        aiRating: 'Aesthetic Perfection ✨'
      },
      {
        id: 'post_6',
        type: 'REEL',
        caption: 'How to monetize your Figma plugin portfolio in 2026 💰 Step by Step Guide',
        thumbnail: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=600&auto=format&fit=crop&q=80',
        postedDate: '3 weeks ago',
        dateTimestamp: 'Aug 22, 2026',
        plays: 520400,
        initialPlays: 410000,
        replays: 110400,
        reach: 468000,
        nonFollowerReachPct: 82.5,
        watchTimeHours: 2140,
        avgWatchTimeSec: '22.1s',
        videoDurationSec: 30,
        likes: 42100,
        comments: 3100,
        shares: 19800,
        saves: 24500,
        followsFromPost: 1120,
        profileVisits: 4500,
        linkClicks: 2100,
        retention: [
          { time: '0s', percentage: 100 },
          { time: '6s', percentage: 91 },
          { time: '12s', percentage: 80 },
          { time: '18s', percentage: 71 },
          { time: '24s', percentage: 64 },
          { time: '30s', percentage: 59 }
        ],
        aiRating: 'All-Time Top Performer 🏆'
      }
    ],

    // Professional Tools & Monetization Insights
    monetization: {
      reelsPlayBonus: {
        status: 'Eligible',
        earningsThisMonth: 3420.50,
        maxCap: 5000.00,
        progressPct: 68.4,
        nextPayoutDate: 'Oct 01, 2026'
      },
      subscriptions: {
        activeSubscribers: 482,
        monthlyRevenue: 2405.18,
        tierPrice: '$4.99/mo',
        subscriberGrowth: +14.2
      },
      brandedContent: {
        approvalStatus: 'Approved & Compliant',
        activeCampaigns: 2,
        brandPartners: ['Figma', 'Linear App', 'Frame.io']
      },
      metaVerified: {
        status: 'Active',
        badge: 'Verified Creator',
        supportTicketStatus: 'Priority 24/7 Enabled'
      }
    },

    // AI Account Health Score & Diagnostics
    aiDiagnostics: {
      overallHealthScore: 94,
      grade: 'A+',
      ratings: {
        contentQuality: 98,
        postingConsistency: 92,
        hashtagStrategy: 89,
        audienceInteractivity: 96,
        reelsRetention: 95
      },
      recommendations: [
        {
          title: 'Optimal Next Posting Time',
          description: 'Your followers are most active today at 6:00 PM EST (in 3 hours). Post your next Reel then for +35% higher initial boost.',
          type: 'TIMING',
          impact: 'High Impact'
        },
        {
          title: 'Reel Sound Trend Opportunity',
          description: 'Audio track "Futuristic Synth Wave v4" is trending in Tech/Design (+420% usage). Pair it with your next Spatial UI teaser.',
          type: 'TREND',
          impact: 'High Impact'
        },
        {
          title: 'Double Down on Code Snippet Carousels',
          description: 'Your Carousel post #post_2 achieved 2x higher Save Rate than industry average. Convert your top 3 Reels into summary slide carousels.',
          type: 'CONTENT',
          impact: 'Medium Impact'
        }
      ]
    }
  }
};
