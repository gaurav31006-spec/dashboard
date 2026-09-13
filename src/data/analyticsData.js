// src/data/analyticsData.js

export const dashboardOverview = {
  views: "8.4K",
  newFollowers: "332",
  contentShared: "3",
};

export const nextStepsData = {
  title: "Get Meta Verified",
  subtitle: "Sign up for a verified badge, account protection and more",
  badge: "Meta Verified",
  icon: "CheckCircle2",
};

export const yourToolsList = [
  {
    id: "monthly-recap",
    title: "Monthly recap",
    subtitle: "See your top performing content this month",
    icon: "Calendar",
    badge: null,
  },
  {
    id: "best-practices",
    title: "Best practices",
    subtitle: "Learn tips to grow your audience and engagement",
    icon: "Lightbulb",
    badge: null,
  },
  {
    id: "inspiration",
    title: "Inspiration",
    subtitle: "Discover trending audio and content ideas",
    icon: "Sparkles",
    badge: null,
  },
  {
    id: "partnership-ads",
    title: "Partnership ads",
    subtitle: "Run ads with brand partners to expand reach",
    icon: "Handshake",
    badge: "New",
  },
  {
    id: "ad-tools",
    title: "Ad tools",
    subtitle: "Create ads and track promotional budget",
    icon: "Megaphone",
    badge: null,
  },
  {
    id: "branded-content",
    title: "Branded content",
    subtitle: "Manage brand deals and paid partnership tags",
    icon: "Tag",
    badge: null,
  },
];

export const tipsAndResources = [
  { id: "tip-1", title: "How to use Reels to get new followers", category: "Growth" },
  { id: "tip-2", title: "Understanding your audience insights", category: "Analytics" },
  { id: "tip-3", title: "Best times to post for higher reach", category: "Optimization" },
];

export const overviewMetrics = [
  {
    id: "views",
    label: "Views",
    value: "8,368",
    change: "+14.2%",
    isPositive: true,
    breakdown: [
      { label: "Followers", percentage: 2.6, color: "#E1306C" },
      { label: "Non-followers", percentage: 97.4, color: "#3B82F6" },
    ],
  },
  {
    id: "net-followers",
    label: "Net followers",
    value: "+129",
    change: "+2.5%",
    isPositive: true,
    supportingText: "Aug 12 - Sep 11",
  },
  {
    id: "interactions",
    label: "Interactions",
    value: "1,200",
    change: "+8.7%",
    isPositive: true,
    supportingText: "Likes, comments & shares",
  },
];

export const viewsOverTimeData = [
  { date: "Aug 13", views: 420, followers: 12, nonFollowers: 408 },
  { date: "Aug 18", views: 680, followers: 20, nonFollowers: 660 },
  { date: "Aug 23", views: 1100, followers: 35, nonFollowers: 1065 },
  { date: "Aug 27", views: 890, followers: 28, nonFollowers: 862 },
  { date: "Sep 01", views: 2400, followers: 65, nonFollowers: 2335 },
  { date: "Sep 04", views: 4210, followers: 110, nonFollowers: 4100, isSpike: true }, // Peak Spike
  { date: "Sep 08", views: 2850, followers: 75, nonFollowers: 2775 },
  { date: "Sep 11", views: 2100, followers: 54, nonFollowers: 2046 },
];

export const viewsByContentType = {
  total: "3,393",
  items: [
    {
      id: "reels",
      name: "Reels",
      value: "8.2K",
      numericValue: 8200,
      percentage: 85,
      color: "#E1306C",
    },
    {
      id: "stories",
      name: "Stories",
      value: "213",
      numericValue: 213,
      percentage: 12,
      color: "#962FBF",
    },
    {
      id: "posts",
      name: "Posts",
      value: "0",
      numericValue: 0,
      percentage: 0,
      color: "#4A5568",
    },
  ],
};

export const contentItemsData = [
  {
    id: "c1",
    type: "Reel",
    title: "Minimalist Mobile Interface Workflow 🚀",
    date: "Sep 10",
    views: "4.2K",
    likes: "892",
    comments: "43",
    shares: "128",
    reach: "4.1K",
    filterType: "Views",
    thumbnailGradient: "linear-gradient(135deg, #FF0844 0%, #FFB199 100%)",
  },
  {
    id: "c2",
    type: "Reel",
    title: "Dark Mode UX Design System Tips ✨",
    date: "Sep 06",
    views: "2.8K",
    likes: "614",
    comments: "29",
    shares: "84",
    reach: "2.7K",
    filterType: "Likes",
    thumbnailGradient: "linear-gradient(135deg, #FAD961 0%, #F76B1C 100%)",
  },
  {
    id: "c3",
    type: "Story",
    title: "Q&A Session: Analytics Demystified",
    date: "Sep 04",
    views: "1.5K",
    likes: "340",
    comments: "18",
    shares: "12",
    reach: "1.5K",
    filterType: "Viewers",
    thumbnailGradient: "linear-gradient(135deg, #B721FF 0%, #21D4FD 100%)",
  },
  {
    id: "c4",
    type: "Reel",
    title: "React + Recharts Dashboard Tutorial 🔥",
    date: "Aug 29",
    views: "3.9K",
    likes: "745",
    comments: "52",
    shares: "96",
    reach: "3.8K",
    filterType: "Followers",
    thumbnailGradient: "linear-gradient(135deg, #08E8DE 0%, #0066FF 100%)",
  },
  {
    id: "c5",
    type: "Post",
    title: "Top 5 Mobile Analytics Design Systems",
    date: "Aug 24",
    views: "980",
    likes: "210",
    comments: "14",
    shares: "25",
    reach: "950",
    filterType: "Latest",
    thumbnailGradient: "linear-gradient(135deg, #F355DA 0%, #6E0DD0 100%)",
  },
];

export const audienceOverview = {
  totalFollowers: "135",
  growthRate: "+2.5%",
  growthPeriod: "since Aug 12",
};

export const followerGrowthData = {
  overall: [
    { date: "Aug 12", count: 126, net: 0 },
    { date: "Aug 18", count: 128, net: 2 },
    { date: "Aug 24", count: 130, net: 2 },
    { date: "Aug 30", count: 131, net: 1 },
    { date: "Sep 05", count: 134, net: 3 },
    { date: "Sep 11", count: 135, net: 1 },
  ],
  followers: [
    { date: "Aug 12", count: 2, net: 2 },
    { date: "Aug 18", count: 4, net: 4 },
    { date: "Aug 24", count: 3, net: 3 },
    { date: "Aug 30", count: 2, net: 2 },
    { date: "Sep 05", count: 5, net: 5 },
    { date: "Sep 11", count: 3, net: 3 },
  ],
  unfollowers: [
    { date: "Aug 12", count: 0, net: 0 },
    { date: "Aug 18", count: 1, net: -1 },
    { date: "Aug 24", count: 1, net: -1 },
    { date: "Aug 30", count: 1, net: -1 },
    { date: "Sep 05", count: 1, net: -1 },
    { date: "Sep 11", count: 1, net: -1 },
  ],
};

export const genderDemographics = {
  women: { percentage: 21.4, formatted: "21.4%" },
  men: { percentage: 78.6, formatted: "78.6%" },
};

export const ageDemographics = [
  { range: "13–17", percentage: 3.6, formatted: "3.6%" },
  { range: "18–24", percentage: 26.8, formatted: "26.8%" },
  { range: "25–34", percentage: 53.6, formatted: "53.6%" },
  { range: "35–44", percentage: 14.3, formatted: "14.3%" },
  { range: "45–54", percentage: 1.8, formatted: "1.8%" },
];

export const topLocations = [
  { city: "San Francisco, CA", percentage: "18.2%" },
  { city: "New York, NY", percentage: "14.5%" },
  { city: "London, UK", percentage: "11.0%" },
  { city: "Toronto, Canada", percentage: "8.4%" },
  { city: "Berlin, Germany", percentage: "6.1%" },
];

export const dateRangeOptions = [
  { label: "Last 7 days", value: "7" },
  { label: "Last 30 days", value: "30" },
  { label: "Last 90 days", value: "90" },
];
